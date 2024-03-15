using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace DBMS_Homeworks
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            // TODO: This line of code loads data into the 'accountingCompanyDataBaseV2DataSet.Partners_Companies' table. You can move, or remove it, as needed.
            this.partners_CompaniesTableAdapter.Fill(this.accountingCompanyDataBaseV2DataSet.Partners_Companies);
            // TODO: This line of code loads data into the 'accountingCompanyDataBaseV2DataSet.Banks' table. You can move, or remove it, as needed.
            this.banksTableAdapter.Fill(this.accountingCompanyDataBaseV2DataSet.Banks);

        }
    }
}
