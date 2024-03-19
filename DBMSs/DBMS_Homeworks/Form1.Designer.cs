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
            this.GridCompanies = new System.Windows.Forms.DataGridView();
            this.companyCUIDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.companyNameDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.phoneDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.businessRegNumberDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.internalCodeDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.partnersCompaniesBindingSource = new System.Windows.Forms.BindingSource(this.components);
            this.accountingCompanyDataBaseV2DataSetBindingSource = new System.Windows.Forms.BindingSource(this.components);
            this.accountingCompanyDataBaseV2DataSet = new DBMS_Homeworks.AccountingCompanyDataBaseV2DataSet();
            this.banksBindingSource = new System.Windows.Forms.BindingSource(this.components);
            this.banksTableAdapter = new DBMS_Homeworks.AccountingCompanyDataBaseV2DataSetTableAdapters.BanksTableAdapter();
            this.partners_CompaniesTableAdapter = new DBMS_Homeworks.AccountingCompanyDataBaseV2DataSetTableAdapters.Partners_CompaniesTableAdapter();
            this.GridEmployees = new System.Windows.Forms.DataGridView();
            this.cNPDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.employeeNameDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.companyCUIDataGridViewTextBoxColumn1 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.salaryDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.employeeAddressDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.employmentDateDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.employeesBindingSource = new System.Windows.Forms.BindingSource(this.components);
            this.employeesTableAdapter = new DBMS_Homeworks.AccountingCompanyDataBaseV2DataSetTableAdapters.EmployeesTableAdapter();
            this.button1 = new System.Windows.Forms.Button();
            this.button2 = new System.Windows.Forms.Button();
            ((System.ComponentModel.ISupportInitialize)(this.GridCompanies)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.partnersCompaniesBindingSource)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.accountingCompanyDataBaseV2DataSetBindingSource)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.accountingCompanyDataBaseV2DataSet)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.banksBindingSource)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.GridEmployees)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.employeesBindingSource)).BeginInit();
            this.SuspendLayout();
            // 
            // GridCompanies
            // 
            this.GridCompanies.AutoGenerateColumns = false;
            this.GridCompanies.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.GridCompanies.Columns.AddRange(new System.Windows.Forms.DataGridViewColumn[] {
            this.companyCUIDataGridViewTextBoxColumn,
            this.companyNameDataGridViewTextBoxColumn,
            this.phoneDataGridViewTextBoxColumn,
            this.businessRegNumberDataGridViewTextBoxColumn,
            this.internalCodeDataGridViewTextBoxColumn});
            this.GridCompanies.DataSource = this.partnersCompaniesBindingSource;
            this.GridCompanies.Location = new System.Drawing.Point(12, 12);
            this.GridCompanies.Name = "GridCompanies";
            this.GridCompanies.RowHeadersWidth = 62;
            this.GridCompanies.RowTemplate.Height = 28;
            this.GridCompanies.Size = new System.Drawing.Size(1259, 438);
            this.GridCompanies.TabIndex = 0;
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
            // partnersCompaniesBindingSource
            // 
            this.partnersCompaniesBindingSource.DataMember = "Partners_Companies";
            this.partnersCompaniesBindingSource.DataSource = this.accountingCompanyDataBaseV2DataSetBindingSource;
            // 
            // accountingCompanyDataBaseV2DataSetBindingSource
            // 
            this.accountingCompanyDataBaseV2DataSetBindingSource.DataSource = this.accountingCompanyDataBaseV2DataSet;
            this.accountingCompanyDataBaseV2DataSetBindingSource.Position = 0;
            // 
            // accountingCompanyDataBaseV2DataSet
            // 
            this.accountingCompanyDataBaseV2DataSet.DataSetName = "AccountingCompanyDataBaseV2DataSet";
            this.accountingCompanyDataBaseV2DataSet.SchemaSerializationMode = System.Data.SchemaSerializationMode.IncludeSchema;
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
            // partners_CompaniesTableAdapter
            // 
            this.partners_CompaniesTableAdapter.ClearBeforeFill = true;
            // 
            // GridEmployees
            // 
            this.GridEmployees.AutoGenerateColumns = false;
            this.GridEmployees.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.GridEmployees.Columns.AddRange(new System.Windows.Forms.DataGridViewColumn[] {
            this.cNPDataGridViewTextBoxColumn,
            this.employeeNameDataGridViewTextBoxColumn,
            this.companyCUIDataGridViewTextBoxColumn1,
            this.salaryDataGridViewTextBoxColumn,
            this.employeeAddressDataGridViewTextBoxColumn,
            this.employmentDateDataGridViewTextBoxColumn});
            this.GridEmployees.DataSource = this.employeesBindingSource;
            this.GridEmployees.Location = new System.Drawing.Point(12, 484);
            this.GridEmployees.Name = "GridEmployees";
            this.GridEmployees.RowHeadersWidth = 62;
            this.GridEmployees.RowTemplate.Height = 28;
            this.GridEmployees.Size = new System.Drawing.Size(1575, 356);
            this.GridEmployees.TabIndex = 1;
            // 
            // cNPDataGridViewTextBoxColumn
            // 
            this.cNPDataGridViewTextBoxColumn.DataPropertyName = "CNP";
            this.cNPDataGridViewTextBoxColumn.HeaderText = "CNP";
            this.cNPDataGridViewTextBoxColumn.MinimumWidth = 8;
            this.cNPDataGridViewTextBoxColumn.Name = "cNPDataGridViewTextBoxColumn";
            this.cNPDataGridViewTextBoxColumn.Width = 150;
            // 
            // employeeNameDataGridViewTextBoxColumn
            // 
            this.employeeNameDataGridViewTextBoxColumn.DataPropertyName = "EmployeeName";
            this.employeeNameDataGridViewTextBoxColumn.HeaderText = "EmployeeName";
            this.employeeNameDataGridViewTextBoxColumn.MinimumWidth = 8;
            this.employeeNameDataGridViewTextBoxColumn.Name = "employeeNameDataGridViewTextBoxColumn";
            this.employeeNameDataGridViewTextBoxColumn.Width = 150;
            // 
            // companyCUIDataGridViewTextBoxColumn1
            // 
            this.companyCUIDataGridViewTextBoxColumn1.DataPropertyName = "CompanyCUI";
            this.companyCUIDataGridViewTextBoxColumn1.HeaderText = "CompanyCUI";
            this.companyCUIDataGridViewTextBoxColumn1.MinimumWidth = 8;
            this.companyCUIDataGridViewTextBoxColumn1.Name = "companyCUIDataGridViewTextBoxColumn1";
            this.companyCUIDataGridViewTextBoxColumn1.Width = 150;
            // 
            // salaryDataGridViewTextBoxColumn
            // 
            this.salaryDataGridViewTextBoxColumn.DataPropertyName = "Salary";
            this.salaryDataGridViewTextBoxColumn.HeaderText = "Salary";
            this.salaryDataGridViewTextBoxColumn.MinimumWidth = 8;
            this.salaryDataGridViewTextBoxColumn.Name = "salaryDataGridViewTextBoxColumn";
            this.salaryDataGridViewTextBoxColumn.Width = 150;
            // 
            // employeeAddressDataGridViewTextBoxColumn
            // 
            this.employeeAddressDataGridViewTextBoxColumn.DataPropertyName = "Employee_Address";
            this.employeeAddressDataGridViewTextBoxColumn.HeaderText = "Employee_Address";
            this.employeeAddressDataGridViewTextBoxColumn.MinimumWidth = 8;
            this.employeeAddressDataGridViewTextBoxColumn.Name = "employeeAddressDataGridViewTextBoxColumn";
            this.employeeAddressDataGridViewTextBoxColumn.Width = 150;
            // 
            // employmentDateDataGridViewTextBoxColumn
            // 
            this.employmentDateDataGridViewTextBoxColumn.DataPropertyName = "EmploymentDate";
            this.employmentDateDataGridViewTextBoxColumn.HeaderText = "EmploymentDate";
            this.employmentDateDataGridViewTextBoxColumn.MinimumWidth = 8;
            this.employmentDateDataGridViewTextBoxColumn.Name = "employmentDateDataGridViewTextBoxColumn";
            this.employmentDateDataGridViewTextBoxColumn.Width = 150;
            // 
            // employeesBindingSource
            // 
            this.employeesBindingSource.DataMember = "Employees";
            this.employeesBindingSource.DataSource = this.accountingCompanyDataBaseV2DataSetBindingSource;
            // 
            // employeesTableAdapter
            // 
            this.employeesTableAdapter.ClearBeforeFill = true;
            // 
            // button1
            // 
            this.button1.Font = new System.Drawing.Font("Microsoft Sans Serif", 8F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.button1.Location = new System.Drawing.Point(1369, 349);
            this.button1.Name = "button1";
            this.button1.Size = new System.Drawing.Size(148, 67);
            this.button1.TabIndex = 2;
            this.button1.Text = "UPDATE";
            this.button1.UseVisualStyleBackColor = true;
            this.button1.Click += new System.EventHandler(this.button1_Click);
            // 
            // button2
            // 
            this.button2.Font = new System.Drawing.Font("Microsoft Sans Serif", 8F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.button2.Location = new System.Drawing.Point(1369, 80);
            this.button2.Name = "button2";
            this.button2.Size = new System.Drawing.Size(148, 68);
            this.button2.TabIndex = 3;
            this.button2.Text = "CONNECT";
            this.button2.UseVisualStyleBackColor = true;
            this.button2.Click += new System.EventHandler(this.button2_Click);
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(9F, 20F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(1617, 834);
            this.Controls.Add(this.button2);
            this.Controls.Add(this.button1);
            this.Controls.Add(this.GridEmployees);
            this.Controls.Add(this.GridCompanies);
            this.Name = "Form1";
            this.Text = "Form1";
            this.Load += new System.EventHandler(this.Form1_Load);
            ((System.ComponentModel.ISupportInitialize)(this.GridCompanies)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.partnersCompaniesBindingSource)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.accountingCompanyDataBaseV2DataSetBindingSource)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.accountingCompanyDataBaseV2DataSet)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.banksBindingSource)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.GridEmployees)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.employeesBindingSource)).EndInit();
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.DataGridView GridCompanies;
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
        private System.Windows.Forms.DataGridView GridEmployees;
        private System.Windows.Forms.BindingSource employeesBindingSource;
        private AccountingCompanyDataBaseV2DataSetTableAdapters.EmployeesTableAdapter employeesTableAdapter;
        private System.Windows.Forms.DataGridViewTextBoxColumn cNPDataGridViewTextBoxColumn;
        private System.Windows.Forms.DataGridViewTextBoxColumn employeeNameDataGridViewTextBoxColumn;
        private System.Windows.Forms.DataGridViewTextBoxColumn companyCUIDataGridViewTextBoxColumn1;
        private System.Windows.Forms.DataGridViewTextBoxColumn salaryDataGridViewTextBoxColumn;
        private System.Windows.Forms.DataGridViewTextBoxColumn employeeAddressDataGridViewTextBoxColumn;
        private System.Windows.Forms.DataGridViewTextBoxColumn employmentDateDataGridViewTextBoxColumn;
        private System.Windows.Forms.Button button1;
        private System.Windows.Forms.Button button2;
    }
}

