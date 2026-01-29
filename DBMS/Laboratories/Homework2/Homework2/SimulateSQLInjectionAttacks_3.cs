using System;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Windows.Forms;

namespace Homework2
{
    public partial class SimulateSQLInjectionAttacks_3 : Form
    {
        public SimulateSQLInjectionAttacks_3()
        {
            InitializeComponent();
        }

        public string SanitizeInput(string input)
        {
            if (input.Contains("'"))
                // remove everything after the first ;
                input = input.Substring(0, input.IndexOf("'"));

            if (input.Contains(";"))
                // remove everything after the first ;
                input = input.Substring(0, input.IndexOf(";"));

            if (input.Contains("\""))
                // remove everything after the first ;
                input = input.Substring(0, input.IndexOf("\""));


            // the input cannot contain any SQL keywords
            string[] sqlKeywords =
            {
                "SELECT", "INSERT", "UPDATE", "DELETE", "DROP", "CREATE", "ALTER", "TRUNCATE", "UNION", "JOIN", "FROM",
                "WHERE", "AND", "OR", "NOT", "IN", "LIKE", "BETWEEN", "IS", "NULL", "ORDER", "BY", "GROUP", "HAVING",
                "COUNT", "SUM", "AVG", "MIN", "MAX", "AS", "ON", "ASC", "DESC", "INNER", "OUTER", "LEFT", "RIGHT",
                "FULL", "CROSS", "NATURAL", "JOIN", "USING", "SET", "VALUES", "INTO", "AS", "DISTINCT", "ALL", "ANY",
                "SOME", "EXISTS", "CASE", "WHEN", "THEN", "ELSE", "END", "WHILE", "FOR", "FOREACH", "CURSOR", "OPEN",
                "CLOSE", "FETCH", "NEXT", "PRIOR", "FIRST", "LAST", "LIMIT", "OFFSET"
            };
            input = input.ToUpper();
            if (sqlKeywords.Any(keyword => input.Contains(keyword)))
            {
                // remove everything after the first keyword
                input = input.Substring(0, input.IndexOf(sqlKeywords.First(keyword => input.Contains(keyword))));
                return input;
            }

            return input;
        }

        private void btnLogin_Click(object sender, EventArgs e)
        {
            var connectionString = ConfigurationManager.ConnectionStrings["connectionString"].ConnectionString;
            using (var connection = new SqlConnection(connectionString))
            {
                var query =
                    $"SELECT * FROM Partners_Companies WHERE Company_Name = '{SanitizeInput(txtCompanyName.Text)}' AND Partners_CompaniesID = {SanitizeInput(txtPartners_CompaniesID.Text)}";
                using (var command = new SqlCommand(query, connection))
                {
                    // var query =
                    //     $"SELECT * FROM Partners_Companies WHERE Partners_CompaniesID = @Partners_CompaniesID AND Company_Name = @Company_Name";
                    // using (var command = new SqlCommand(query, connection))
                    // {
                    //     command.Parameters.AddWithValue("@Company_Name", txtCompanyName.Text);
                    //     command.Parameters.AddWithValue("@Partners_CompaniesID", txtPartners_CompaniesID.Text);

                    connection.Open();
                    var reader = command.ExecuteReader();
                    if (reader.HasRows)
                        MessageBox.Show("Login successful!");
                    else
                        MessageBox.Show("Login failed!");
                }
            }
        }
    }
}