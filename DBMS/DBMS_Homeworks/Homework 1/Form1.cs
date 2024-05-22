using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
//using System.Data;
using System.Data.SqlClient;

namespace DBMS_Homeworks
{
    public partial class Form1 : Form
    {
        SqlConnection dbConnection;
        SqlDataAdapter daCompanies, daEmployees;
        DataSet ds;
        SqlCommandBuilder cmdBuilder;
        BindingSource bsCompanies, bsEmployees;

        private void button1_Click(object sender, EventArgs e)
        {
            daEmployees.Update(ds, "Employees");
        }

        // CONNECT button
        private void button2_Click(object sender, EventArgs e)
        {
            // connect to the database
            dbConnection = new SqlConnection(@"Data Source = VLAD-LEGIO-5PRO\SQLEXPRESS01; Initial Catalog = AccountingCompanyDataBaseV2; Integrated Security = true");

            // create the data set
            ds = new DataSet();

            // create the data adapters
            daCompanies = new SqlDataAdapter("SELECT * FROM Partners_Companies", dbConnection);
            daEmployees = new SqlDataAdapter("SELECT * FROM Employees", dbConnection);
            cmdBuilder = new SqlCommandBuilder(daEmployees);

            // fill the data set with the tables
            daCompanies.Fill(ds, "Partners_Companies");
            daEmployees.Fill(ds, "Employees");

            // creating the foreign key relation
            DataRelation dr = new DataRelation("FK_Company_Employees",
                ds.Tables["Partners_Companies"].Columns["CompanyCUI"],
                ds.Tables["Employees"].Columns["CompanyCUI"]);
            // adding the relation to the data set
            ds.Relations.Add(dr);


            // data binding for companies and employees
            bsCompanies = new BindingSource();
            bsCompanies.DataSource = ds;
            bsCompanies.DataMember = "Partners_Companies";

            bsEmployees = new BindingSource();
            bsEmployees.DataSource = bsCompanies;
            bsEmployees.DataMember = "FK_Company_Employees";

            // set the data source for the grid
            GridCompanies.DataSource = bsCompanies; 
            GridEmployees.DataSource = bsEmployees;
        }

        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            // TODO: This line of code loads data into the 'accountingCompanyDataBaseV2DataSet.Employees' table. You can move, or remove it, as needed.
            //this.employeesTableAdapter.Fill(this.accountingCompanyDataBaseV2DataSet.Employees);
            // TODO: This line of code loads data into the 'accountingCompanyDataBaseV2DataSet.Partners_Companies' table. You can move, or remove it, as needed.
            //this.partners_CompaniesTableAdapter.Fill(this.accountingCompanyDataBaseV2DataSet.Partners_Companies
        }
    }
}
