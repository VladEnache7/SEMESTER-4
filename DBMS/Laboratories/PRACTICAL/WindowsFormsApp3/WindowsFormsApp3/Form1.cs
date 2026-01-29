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

namespace WindowsFormsApp3
{
    public partial class Form1 : Form
    {
        SqlConnection dbConnection;
        SqlDataAdapter daMedications, daTreatments;
        DataSet ds;
        SqlCommandBuilder cmdBuilder;
        BindingSource bsMedications, bsTreatments;


        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            // TODO: This line of code loads data into the 'miniFacebookDataSet1.Treatments' table. You can move, or remove it, as needed.
            //this.TreatmentsTableAdapter.Fill(this.miniFacebookDataSet1.Treatments);
            // TODO: This line of code loads data into the 'miniFacebookDataSet.Medications' table. You can move, or remove it, as needed.
            //this.MedicationsTableAdapter.Fill(this.miniFacebookDataSet.Medications);

        }

        private void button1_Click(object sender, EventArgs e)
        {
            // connect to the database
            dbConnection = new SqlConnection(@"Data Source = VLAD-LEGIO-5PRO\SQLEXPRESS01; Initial Catalog = HospitalSystem; Integrated Security = true");

            // create the data set
            ds = new DataSet();

            // create the data adapters
            daMedications = new SqlDataAdapter("SELECT * FROM Medications", dbConnection);
            daTreatments = new SqlDataAdapter("SELECT * FROM Treatments", dbConnection);
            cmdBuilder = new SqlCommandBuilder(daTreatments);
                
            // fill the data set with the tables
            daMedications.Fill(ds, "Medications");
            daTreatments.Fill(ds, "Treatments");

            // creating the foreign key relation
            DataRelation dr = new DataRelation("FK_Medications_Treatments",
                ds.Tables["Medications"].Columns["MID"],
                ds.Tables["Treatments"].Columns["MID"]);
            // adding the relation to the data set
            ds.Relations.Add(dr);


            // data binding for Medications and Treatments
            bsMedications = new BindingSource();
            bsMedications.DataSource = ds;
            bsMedications.DataMember = "Medications";

            bsTreatments = new BindingSource();
            bsTreatments.DataSource = bsMedications;
            bsTreatments.DataMember = "FK_Medications_Treatments";

            // set the data source for the grid
            dataGridView1.DataSource = bsMedications;
            dataGridView2.DataSource = bsTreatments;
        }

        private void button2_Click(object sender, EventArgs e)
        {
            daTreatments.Update(ds, "Treatments");
        }
    }
}
