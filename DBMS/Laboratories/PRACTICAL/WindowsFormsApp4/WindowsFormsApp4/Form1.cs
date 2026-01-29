using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Data.SqlClient;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace WindowsFormsApp4
{
    public partial class Form1 : Form
    {
        SqlConnection dbConnection;
        SqlDataAdapter daCategories, daSPublications;
        DataSet ds;
        SqlCommandBuilder cmdBuilder;
        BindingSource bsCategories, bsSPublications;


        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            // TODO: This line of code loads data into the 'miniFacebookDataSet1.SPublications' table. You can move, or remove it, as needed.
            //this.SPublicationsTableAdapter.Fill(this.miniFacebookDataSet1.SPublications);
            // TODO: This line of code loads data into the 'miniFacebookDataSet.Categories' table. You can move, or remove it, as needed.
            //this.CategoriesTableAdapter.Fill(this.miniFacebookDataSet.Categories);

        }

        private void button1_Click(object sender, EventArgs e)
        {
            // connect to the database
            dbConnection = new SqlConnection(@"Data Source = VLAD-LEGIO-5PRO\SQLEXPRESS01; Initial Catalog = Publications; Integrated Security = true");

            // create the data set
            ds = new DataSet();

            // create the data adapters
            daCategories = new SqlDataAdapter("SELECT * FROM Categories", dbConnection);
            daSPublications = new SqlDataAdapter("SELECT * FROM SPublications", dbConnection);
            cmdBuilder = new SqlCommandBuilder(daSPublications);

            // fill the data set with the tables
            daCategories.Fill(ds, "Categories");
            daSPublications.Fill(ds, "SPublications");

            // creating the foreign key relation
            DataRelation dr = new DataRelation("FK_Categories_SPublications",
                ds.Tables["Categories"].Columns["CID"],
                ds.Tables["SPublications"].Columns["CID"]);
            // adding the relation to the data set
            ds.Relations.Add(dr);


            // data binding for Categories and SPublications
            bsCategories = new BindingSource();
            bsCategories.DataSource = ds;
            bsCategories.DataMember = "Categories";

            bsSPublications = new BindingSource();
            bsSPublications.DataSource = bsCategories;
            bsSPublications.DataMember = "FK_Categories_SPublications";

            // set the data source for the grid
            dataGridView1.DataSource = bsCategories;
            dataGridView2.DataSource = bsSPublications;
        }

        private void button2_Click(object sender, EventArgs e)
        {
            daSPublications.Update(ds, "SPublications");
        }
    }
}
