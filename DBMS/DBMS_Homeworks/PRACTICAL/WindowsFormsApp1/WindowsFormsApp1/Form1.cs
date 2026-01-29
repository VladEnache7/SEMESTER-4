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

namespace WindowsFormsApp1
{
    public partial class Form1 : Form
    {
        SqlConnection dbConnection;
        SqlDataAdapter daUsers, daPosts;
        DataSet ds;
        SqlCommandBuilder cmdBuilder;
        BindingSource bsUsers, bsPosts;


        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            // TODO: This line of code loads data into the 'miniFacebookDataSet1.Posts' table. You can move, or remove it, as needed.
            //this.postsTableAdapter.Fill(this.miniFacebookDataSet1.Posts);
            // TODO: This line of code loads data into the 'miniFacebookDataSet.Users' table. You can move, or remove it, as needed.
            //this.usersTableAdapter.Fill(this.miniFacebookDataSet.Users);

        }

        private void button1_Click(object sender, EventArgs e)
        {
            // connect to the database
            dbConnection = new SqlConnection(@"Data Source = VLAD-LEGIO-5PRO\SQLEXPRESS01; Initial Catalog = MiniFacebook; Integrated Security = true");

            // create the data set
            ds = new DataSet();

            // create the data adapters
            daUsers = new SqlDataAdapter("SELECT * FROM Users", dbConnection);
            daPosts = new SqlDataAdapter("SELECT * FROM Posts", dbConnection);
            cmdBuilder = new SqlCommandBuilder(daPosts);

            // fill the data set with the tables
            daUsers.Fill(ds, "Users");
            daPosts.Fill(ds, "Posts");

            // creating the foreign key relation
            DataRelation dr = new DataRelation("FK_Users_Posts",
                ds.Tables["Users"].Columns["UsersID"],
                ds.Tables["Posts"].Columns["UsersID"]);
            // adding the relation to the data set
            ds.Relations.Add(dr);


            // data binding for Users and Posts
            bsUsers = new BindingSource();
            bsUsers.DataSource = ds;
            bsUsers.DataMember = "Users";

            bsPosts = new BindingSource();
            bsPosts.DataSource = bsUsers;
            bsPosts.DataMember = "FK_Users_Posts";

            // set the data source for the grid
            dataGridView1.DataSource = bsUsers;
            dataGridView2.DataSource = bsPosts;
        }

        private void button2_Click(object sender, EventArgs e)
        {
            daPosts.Update(ds, "Posts");
        }
    }
}
