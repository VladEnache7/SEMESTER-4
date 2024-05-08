using System;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Windows.Forms;

namespace Homework2
{
    public partial class SimulateSQLInjectionAtacks_2 : Form
    {
        public SimulateSQLInjectionAtacks_2()
        {
            InitializeComponent();
        }

        private void btnGetEmployees_Click(object sender, EventArgs e)
        {
            var connectionString = ConfigurationManager.ConnectionStrings["connectionString"].ConnectionString;
            using (var connection = new SqlConnection(connectionString))
            {
                // first check if the company with the given BusinessRegNumber and Partners_CompaniesID exists
                var query1 =
                    "SELECT Partners_CompaniesID FROM Partners_Companies WHERE BusinessRegNumber = @BusinessRegNumber AND Company_Name = '@CompanyName' ";
                using (var command = new SqlCommand(query1, connection))
                {
                    command.Parameters.Add("@BusinessRegNumber", SqlDbType.NVarChar).Value = txtBusinessRegNumber.Text;
                    command.Parameters.Add("@CompanyName", SqlDbType.NVarChar).Value = txtCompanyName.Text;

                    connection.Open();
                    // get the array of Partners_CompaniesID
                    var Partners_CompaniesIDs = command.ExecuteScalar() as Array;

                    if (Partners_CompaniesIDs != null && Partners_CompaniesIDs.Length > 0)
                        // for each company found, get the employees
                        for (var i = 0; i < Partners_CompaniesIDs.Length; i++)
                        {
                            var query2 =
                                "SELECT * FROM Employees WHERE Partners_CompaniesID = @Partners_CompaniesID";
                            using (var command2 = new SqlCommand(query2, connection))
                            {
                                command2.Parameters.Add("@Partners_CompaniesID", SqlDbType.NVarChar).Value =
                                    Partners_CompaniesIDs[i];

                                var adapter = new SqlDataAdapter(command2);
                                var table = new DataTable();
                                adapter.Fill(table);

                                dgvEmployees.DataSource = table;
                            }
                        }
                    else
                        // Company does not exist, you can stop here and inform the user
                        MessageBox.Show("No company found with the given BusinessRegNumber and Partners_CompaniesID");
                }
            }
        }
    }
}