using System;
using System.Data;
using System.Windows.Forms;
using System.Data.SqlClient;
using System.Configuration;

namespace Homework2
{
    public partial class Form1 : Form
    {
        SqlConnection dbConn;
        SqlDataAdapter daParent, daChild;
        DataSet ds;
        SqlCommandBuilder cbParent, cbChild;
        BindingSource bsParent, bsChild;
        string parentName = ConfigurationManager.AppSettings["parentTableName"];
        string childName = ConfigurationManager.AppSettings["childTableName"];

        private void btnUpdateDB_Click(object sender, EventArgs e)
        {
            
            daChild.Update(ds, $"{childName}");
        }

        string connectionString = ConfigurationManager.ConnectionStrings["connectionString"].ConnectionString;

        private void Form1_Load(object sender, EventArgs e)
        {
            label1.Text = parentName;
            label2.Text = childName;

            dbConn = new SqlConnection(connectionString);
            ds = new DataSet();
            daParent = new SqlDataAdapter($"SELECT * FROM {parentName}", dbConn);
            daChild = new SqlDataAdapter($"SELECT * FROM {childName}", dbConn);
            cbParent = new SqlCommandBuilder(daParent);
            cbChild = new SqlCommandBuilder(daChild);
            
            daParent.Fill(ds, $"{parentName}");
            daChild.Fill(ds, $"{childName}");

            DataRelation dr = new DataRelation($"FK_{childName}_{parentName}", 
                ds.Tables[$"{parentName}"].Columns[$"{parentName}ID"], 
                ds.Tables[$"{childName}"].Columns[$"{parentName}ID"]);
            
            ds.Relations.Add(dr);

            //data binding
            bsParent = new BindingSource();
            bsParent.DataSource = ds;
            bsParent.DataMember = $"{parentName}";
            bsChild = new BindingSource();
            bsChild.DataSource = bsParent;
            bsChild.DataMember = $"FK_{childName}_{parentName}";
            
            dgvParent.DataSource = bsParent;
            dgvChild.DataSource = bsChild;
        }

        public Form1()
        {
            InitializeComponent();
        }


    }
}
