using System;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Windows.Forms;

namespace Homework2
{
    public partial class SimulateSQLInjectionAtacks_2 : Form
    {
        public SimulateSQLInjectionAtacks_2()
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

        private void btnGetCompanyInfo_Click(object sender, EventArgs e)
        {
            var connectionString = ConfigurationManager.ConnectionStrings["connectionString"].ConnectionString;
            using (var connection = new SqlConnection(connectionString))
            {
                var query1 =
                    $"SELECT * FROM Partners_Companies WHERE BusinessRegNumber = {SanitizeInput(txtBusinessRegNumber.Text)} AND Company_Name = '{SanitizeInput(txtCompanyName.Text)}'";
                using (var command = new SqlCommand(query1, connection))
                {
                    // var query1 =
                    //     "SELECT * FROM Partners_Companies WHERE BusinessRegNumber = @BusinessRegNumber AND Company_Name = @CompanyName";
                    // using (var command = new SqlCommand(query1, connection))
                    // {
                    //     command.Parameters.AddWithValue("@BusinessRegNumber", txtBusinessRegNumber.Text);
                    //     command.Parameters.AddWithValue("@CompanyName", txtCompanyName.Text);

                    connection.Open();
                    var adapter = new SqlDataAdapter(command);
                    var table = new DataTable();
                    adapter.Fill(table);

                    dgvCompany.DataSource = table;
                }
            }
        }

        private void label5_Click(object sender, EventArgs e)
        {
        }
    }
}