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

namespace WindowsFormsApp2
{
    public partial class Form1 : Form
    {
        SqlConnection dbConnection;
        SqlDataAdapter daVarieties, daWines;
        DataSet ds;
        SqlCommandBuilder cmdBuilder;
        BindingSource bsVarieties, bsWines;


        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            // TODO: This line of code loads data into the 'miniFacebookDataSet1.Wines' table. You can move, or remove it, as needed.
            //this.WinesTableAdapter.Fill(this.miniFacebookDataSet1.Wines);
            // TODO: This line of code loads data into the 'miniFacebookDataSet.Varieties' table. You can move, or remove it, as needed.
            //this.VarietiesTableAdapter.Fill(this.miniFacebookDataSet.Varieties);

        }

        private void button3_Click(object sender, EventArgs e)
        {
            // connect to the database
            dbConnection = new SqlConnection(@"Data Source = VLAD-LEGIO-5PRO\SQLEXPRESS01; Initial Catalog = WineStore; Integrated Security = true");

            // create the data set
            ds = new DataSet();

            // create the data adapters
            daVarieties = new SqlDataAdapter("SELECT * FROM Varieties", dbConnection);
            daWines = new SqlDataAdapter("SELECT * FROM Wines", dbConnection);
            cmdBuilder = new SqlCommandBuilder(daWines);

            // fill the data set with the tables
            daVarieties.Fill(ds, "Varieties");
            daWines.Fill(ds, "Wines");

            // creating the foreign key relation
            DataRelation dr = new DataRelation("FK_Varieties_Wines",
                ds.Tables["Varieties"].Columns["VID"],
                ds.Tables["Wines"].Columns["VID"]);
            // adding the relation to the data set
            ds.Relations.Add(dr);


            // data binding for Varieties and Wines
            bsVarieties = new BindingSource();
            bsVarieties.DataSource = ds;
            bsVarieties.DataMember = "Varieties";

            bsWines = new BindingSource();
            bsWines.DataSource = bsVarieties;
            bsWines.DataMember = "FK_Varieties_Wines";

            // set the data source for the grid
            dataGridView3.DataSource = bsVarieties;
            dataGridView4.DataSource = bsWines;
        }

        private void button4_Click(object sender, EventArgs e)
        {
            daWines.Update(ds, "Wines");
        }

        private void Form1_Load_1(object sender, EventArgs e)
        {
            // TODO: This line of code loads data into the 'wineStoreDataSet11.Wines' table. You can move, or remove it, as needed.
            //this.winesTableAdapter.Fill(this.wineStoreDataSet11.Wines);
            // TODO: This line of code loads data into the 'wineStoreDataSet1.Varieties' table. You can move, or remove it, as needed.
            //this.varietiesTableAdapter1.Fill(this.wineStoreDataSet1.Varieties);

        }
    }
}
