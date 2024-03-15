namespace DBMS_Homeworks
{
    partial class Form1
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.components = new System.ComponentModel.Container();
            this.dataGridView1 = new System.Windows.Forms.DataGridView();
            this.accountingCompanyDataBaseV2DataSet = new DBMS_Homeworks.AccountingCompanyDataBaseV2DataSet();
            this.accountingCompanyDataBaseV2DataSetBindingSource = new System.Windows.Forms.BindingSource(this.components);
            this.banksBindingSource = new System.Windows.Forms.BindingSource(this.components);
            this.banksTableAdapter = new DBMS_Homeworks.AccountingCompanyDataBaseV2DataSetTableAdapters.BanksTableAdapter();
            this.partnersCompaniesBindingSource = new System.Windows.Forms.BindingSource(this.components);
            this.partners_CompaniesTableAdapter = new DBMS_Homeworks.AccountingCompanyDataBaseV2DataSetTableAdapters.Partners_CompaniesTableAdapter();
            this.companyCUIDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.companyNameDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.phoneDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.businessRegNumberDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.internalCodeDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            ((System.ComponentModel.ISupportInitialize)(this.dataGridView1)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.accountingCompanyDataBaseV2DataSet)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.accountingCompanyDataBaseV2DataSetBindingSource)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.banksBindingSource)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.partnersCompaniesBindingSource)).BeginInit();
            this.SuspendLayout();
            // 
            // dataGridView1
            // 
            this.dataGridView1.AutoGenerateColumns = false;
            this.dataGridView1.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.dataGridView1.Columns.AddRange(new System.Windows.Forms.DataGridViewColumn[] {
            this.companyCUIDataGridViewTextBoxColumn,
            this.companyNameDataGridViewTextBoxColumn,
            this.phoneDataGridViewTextBoxColumn,
            this.businessRegNumberDataGridViewTextBoxColumn,
            this.internalCodeDataGridViewTextBoxColumn});
            this.dataGridView1.DataSource = this.partnersCompaniesBindingSource;
            this.dataGridView1.Location = new System.Drawing.Point(95, 57);
            this.dataGridView1.Name = "dataGridView1";
            this.dataGridView1.RowHeadersWidth = 62;
            this.dataGridView1.RowTemplate.Height = 28;
            this.dataGridView1.Size = new System.Drawing.Size(682, 303);
            this.dataGridView1.TabIndex = 0;
            // 
            // accountingCompanyDataBaseV2DataSet
            // 
            this.accountingCompanyDataBaseV2DataSet.DataSetName = "AccountingCompanyDataBaseV2DataSet";
            this.accountingCompanyDataBaseV2DataSet.SchemaSerializationMode = System.Data.SchemaSerializationMode.IncludeSchema;
            // 
            // accountingCompanyDataBaseV2DataSetBindingSource
            // 
            this.accountingCompanyDataBaseV2DataSetBindingSource.DataSource = this.accountingCompanyDataBaseV2DataSet;
            this.accountingCompanyDataBaseV2DataSetBindingSource.Position = 0;
            // 
            // banksBindingSource
            // 
            this.banksBindingSource.DataMember = "Banks";
            this.banksBindingSource.DataSource = this.accountingCompanyDataBaseV2DataSet;
            // 
            // banksTableAdapter
            // 
            this.banksTableAdapter.ClearBeforeFill = true;
            // 
            // partnersCompaniesBindingSource
            // 
            this.partnersCompaniesBindingSource.DataMember = "Partners_Companies";
            this.partnersCompaniesBindingSource.DataSource = this.accountingCompanyDataBaseV2DataSetBindingSource;
            // 
            // partners_CompaniesTableAdapter
            // 
            this.partners_CompaniesTableAdapter.ClearBeforeFill = true;
            // 
            // companyCUIDataGridViewTextBoxColumn
            // 
            this.companyCUIDataGridViewTextBoxColumn.DataPropertyName = "CompanyCUI";
            this.companyCUIDataGridViewTextBoxColumn.HeaderText = "CompanyCUI";
            this.companyCUIDataGridViewTextBoxColumn.MinimumWidth = 8;
            this.companyCUIDataGridViewTextBoxColumn.Name = "companyCUIDataGridViewTextBoxColumn";
            this.companyCUIDataGridViewTextBoxColumn.Width = 150;
            // 
            // companyNameDataGridViewTextBoxColumn
            // 
            this.companyNameDataGridViewTextBoxColumn.DataPropertyName = "Company_Name";
            this.companyNameDataGridViewTextBoxColumn.HeaderText = "Company_Name";
            this.companyNameDataGridViewTextBoxColumn.MinimumWidth = 8;
            this.companyNameDataGridViewTextBoxColumn.Name = "companyNameDataGridViewTextBoxColumn";
            this.companyNameDataGridViewTextBoxColumn.Width = 150;
            // 
            // phoneDataGridViewTextBoxColumn
            // 
            this.phoneDataGridViewTextBoxColumn.DataPropertyName = "Phone";
            this.phoneDataGridViewTextBoxColumn.HeaderText = "Phone";
            this.phoneDataGridViewTextBoxColumn.MinimumWidth = 8;
            this.phoneDataGridViewTextBoxColumn.Name = "phoneDataGridViewTextBoxColumn";
            this.phoneDataGridViewTextBoxColumn.Width = 150;
            // 
            // businessRegNumberDataGridViewTextBoxColumn
            // 
            this.businessRegNumberDataGridViewTextBoxColumn.DataPropertyName = "BusinessRegNumber";
            this.businessRegNumberDataGridViewTextBoxColumn.HeaderText = "BusinessRegNumber";
            this.businessRegNumberDataGridViewTextBoxColumn.MinimumWidth = 8;
            this.businessRegNumberDataGridViewTextBoxColumn.Name = "businessRegNumberDataGridViewTextBoxColumn";
            this.businessRegNumberDataGridViewTextBoxColumn.Width = 150;
            // 
            // internalCodeDataGridViewTextBoxColumn
            // 
            this.internalCodeDataGridViewTextBoxColumn.DataPropertyName = "InternalCode";
            this.internalCodeDataGridViewTextBoxColumn.HeaderText = "InternalCode";
            this.internalCodeDataGridViewTextBoxColumn.MinimumWidth = 8;
            this.internalCodeDataGridViewTextBoxColumn.Name = "internalCodeDataGridViewTextBoxColumn";
            this.internalCodeDataGridViewTextBoxColumn.Width = 150;
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(9F, 20F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(800, 450);
            this.Controls.Add(this.dataGridView1);
            this.Name = "Form1";
            this.Text = "Form1";
            this.Load += new System.EventHandler(this.Form1_Load);
            ((System.ComponentModel.ISupportInitialize)(this.dataGridView1)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.accountingCompanyDataBaseV2DataSet)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.accountingCompanyDataBaseV2DataSetBindingSource)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.banksBindingSource)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.partnersCompaniesBindingSource)).EndInit();
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.DataGridView dataGridView1;
        private System.Windows.Forms.BindingSource accountingCompanyDataBaseV2DataSetBindingSource;
        private AccountingCompanyDataBaseV2DataSet accountingCompanyDataBaseV2DataSet;
        private System.Windows.Forms.BindingSource banksBindingSource;
        private AccountingCompanyDataBaseV2DataSetTableAdapters.BanksTableAdapter banksTableAdapter;
        private System.Windows.Forms.BindingSource partnersCompaniesBindingSource;
        private AccountingCompanyDataBaseV2DataSetTableAdapters.Partners_CompaniesTableAdapter partners_CompaniesTableAdapter;
        private System.Windows.Forms.DataGridViewTextBoxColumn companyCUIDataGridViewTextBoxColumn;
        private System.Windows.Forms.DataGridViewTextBoxColumn companyNameDataGridViewTextBoxColumn;
        private System.Windows.Forms.DataGridViewTextBoxColumn phoneDataGridViewTextBoxColumn;
        private System.Windows.Forms.DataGridViewTextBoxColumn businessRegNumberDataGridViewTextBoxColumn;
        private System.Windows.Forms.DataGridViewTextBoxColumn internalCodeDataGridViewTextBoxColumn;
    }
}

