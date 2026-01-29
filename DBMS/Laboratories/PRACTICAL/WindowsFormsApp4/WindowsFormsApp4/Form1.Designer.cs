namespace WindowsFormsApp4
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
            this.dataGridView2 = new System.Windows.Forms.DataGridView();
            this.button1 = new System.Windows.Forms.Button();
            this.button2 = new System.Windows.Forms.Button();
            this.publicationsDataSet = new WindowsFormsApp4.PublicationsDataSet();
            this.categoriesBindingSource = new System.Windows.Forms.BindingSource(this.components);
            this.categoriesTableAdapter = new WindowsFormsApp4.PublicationsDataSetTableAdapters.CategoriesTableAdapter();
            this.cIDDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.cNameDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.cDescrDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.publicationsDataSet1 = new WindowsFormsApp4.PublicationsDataSet1();
            this.sPublicationsBindingSource = new System.Windows.Forms.BindingSource(this.components);
            this.sPublicationsTableAdapter = new WindowsFormsApp4.PublicationsDataSet1TableAdapters.SPublicationsTableAdapter();
            this.pIDDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.pTitleDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.pAbsDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.pAuthDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.cIDDataGridViewTextBoxColumn1 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            ((System.ComponentModel.ISupportInitialize)(this.dataGridView1)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.dataGridView2)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.publicationsDataSet)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.categoriesBindingSource)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.publicationsDataSet1)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.sPublicationsBindingSource)).BeginInit();
            this.SuspendLayout();
            // 
            // dataGridView1
            // 
            this.dataGridView1.AutoGenerateColumns = false;
            this.dataGridView1.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.dataGridView1.Columns.AddRange(new System.Windows.Forms.DataGridViewColumn[] {
            this.cIDDataGridViewTextBoxColumn,
            this.cNameDataGridViewTextBoxColumn,
            this.cDescrDataGridViewTextBoxColumn});
            this.dataGridView1.DataSource = this.categoriesBindingSource;
            this.dataGridView1.Location = new System.Drawing.Point(12, 12);
            this.dataGridView1.Name = "dataGridView1";
            this.dataGridView1.RowHeadersWidth = 62;
            this.dataGridView1.RowTemplate.Height = 28;
            this.dataGridView1.Size = new System.Drawing.Size(1202, 382);
            this.dataGridView1.TabIndex = 0;
            // 
            // dataGridView2
            // 
            this.dataGridView2.AutoGenerateColumns = false;
            this.dataGridView2.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.dataGridView2.Columns.AddRange(new System.Windows.Forms.DataGridViewColumn[] {
            this.pIDDataGridViewTextBoxColumn,
            this.pTitleDataGridViewTextBoxColumn,
            this.pAbsDataGridViewTextBoxColumn,
            this.pAuthDataGridViewTextBoxColumn,
            this.cIDDataGridViewTextBoxColumn1});
            this.dataGridView2.DataSource = this.sPublicationsBindingSource;
            this.dataGridView2.Location = new System.Drawing.Point(12, 400);
            this.dataGridView2.Name = "dataGridView2";
            this.dataGridView2.RowHeadersWidth = 62;
            this.dataGridView2.RowTemplate.Height = 28;
            this.dataGridView2.Size = new System.Drawing.Size(1202, 394);
            this.dataGridView2.TabIndex = 1;
            // 
            // button1
            // 
            this.button1.Location = new System.Drawing.Point(1350, 146);
            this.button1.Name = "button1";
            this.button1.Size = new System.Drawing.Size(273, 114);
            this.button1.TabIndex = 2;
            this.button1.Text = "Connect";
            this.button1.UseVisualStyleBackColor = true;
            this.button1.Click += new System.EventHandler(this.button1_Click);
            // 
            // button2
            // 
            this.button2.Location = new System.Drawing.Point(1350, 483);
            this.button2.Name = "button2";
            this.button2.Size = new System.Drawing.Size(273, 114);
            this.button2.TabIndex = 3;
            this.button2.Text = "Update";
            this.button2.UseVisualStyleBackColor = true;
            this.button2.Click += new System.EventHandler(this.button2_Click);
            // 
            // publicationsDataSet
            // 
            this.publicationsDataSet.DataSetName = "PublicationsDataSet";
            this.publicationsDataSet.SchemaSerializationMode = System.Data.SchemaSerializationMode.IncludeSchema;
            // 
            // categoriesBindingSource
            // 
            this.categoriesBindingSource.DataMember = "Categories";
            this.categoriesBindingSource.DataSource = this.publicationsDataSet;
            // 
            // categoriesTableAdapter
            // 
            this.categoriesTableAdapter.ClearBeforeFill = true;
            // 
            // cIDDataGridViewTextBoxColumn
            // 
            this.cIDDataGridViewTextBoxColumn.DataPropertyName = "CID";
            this.cIDDataGridViewTextBoxColumn.HeaderText = "CID";
            this.cIDDataGridViewTextBoxColumn.MinimumWidth = 8;
            this.cIDDataGridViewTextBoxColumn.Name = "cIDDataGridViewTextBoxColumn";
            this.cIDDataGridViewTextBoxColumn.ReadOnly = true;
            this.cIDDataGridViewTextBoxColumn.Width = 150;
            // 
            // cNameDataGridViewTextBoxColumn
            // 
            this.cNameDataGridViewTextBoxColumn.DataPropertyName = "CName";
            this.cNameDataGridViewTextBoxColumn.HeaderText = "CName";
            this.cNameDataGridViewTextBoxColumn.MinimumWidth = 8;
            this.cNameDataGridViewTextBoxColumn.Name = "cNameDataGridViewTextBoxColumn";
            this.cNameDataGridViewTextBoxColumn.Width = 150;
            // 
            // cDescrDataGridViewTextBoxColumn
            // 
            this.cDescrDataGridViewTextBoxColumn.DataPropertyName = "CDescr";
            this.cDescrDataGridViewTextBoxColumn.HeaderText = "CDescr";
            this.cDescrDataGridViewTextBoxColumn.MinimumWidth = 8;
            this.cDescrDataGridViewTextBoxColumn.Name = "cDescrDataGridViewTextBoxColumn";
            this.cDescrDataGridViewTextBoxColumn.Width = 150;
            // 
            // publicationsDataSet1
            // 
            this.publicationsDataSet1.DataSetName = "PublicationsDataSet1";
            this.publicationsDataSet1.SchemaSerializationMode = System.Data.SchemaSerializationMode.IncludeSchema;
            // 
            // sPublicationsBindingSource
            // 
            this.sPublicationsBindingSource.DataMember = "SPublications";
            this.sPublicationsBindingSource.DataSource = this.publicationsDataSet1;
            // 
            // sPublicationsTableAdapter
            // 
            this.sPublicationsTableAdapter.ClearBeforeFill = true;
            // 
            // pIDDataGridViewTextBoxColumn
            // 
            this.pIDDataGridViewTextBoxColumn.DataPropertyName = "PID";
            this.pIDDataGridViewTextBoxColumn.HeaderText = "PID";
            this.pIDDataGridViewTextBoxColumn.MinimumWidth = 8;
            this.pIDDataGridViewTextBoxColumn.Name = "pIDDataGridViewTextBoxColumn";
            this.pIDDataGridViewTextBoxColumn.ReadOnly = true;
            this.pIDDataGridViewTextBoxColumn.Width = 150;
            // 
            // pTitleDataGridViewTextBoxColumn
            // 
            this.pTitleDataGridViewTextBoxColumn.DataPropertyName = "PTitle";
            this.pTitleDataGridViewTextBoxColumn.HeaderText = "PTitle";
            this.pTitleDataGridViewTextBoxColumn.MinimumWidth = 8;
            this.pTitleDataGridViewTextBoxColumn.Name = "pTitleDataGridViewTextBoxColumn";
            this.pTitleDataGridViewTextBoxColumn.Width = 150;
            // 
            // pAbsDataGridViewTextBoxColumn
            // 
            this.pAbsDataGridViewTextBoxColumn.DataPropertyName = "PAbs";
            this.pAbsDataGridViewTextBoxColumn.HeaderText = "PAbs";
            this.pAbsDataGridViewTextBoxColumn.MinimumWidth = 8;
            this.pAbsDataGridViewTextBoxColumn.Name = "pAbsDataGridViewTextBoxColumn";
            this.pAbsDataGridViewTextBoxColumn.Width = 150;
            // 
            // pAuthDataGridViewTextBoxColumn
            // 
            this.pAuthDataGridViewTextBoxColumn.DataPropertyName = "PAuth";
            this.pAuthDataGridViewTextBoxColumn.HeaderText = "PAuth";
            this.pAuthDataGridViewTextBoxColumn.MinimumWidth = 8;
            this.pAuthDataGridViewTextBoxColumn.Name = "pAuthDataGridViewTextBoxColumn";
            this.pAuthDataGridViewTextBoxColumn.Width = 150;
            // 
            // cIDDataGridViewTextBoxColumn1
            // 
            this.cIDDataGridViewTextBoxColumn1.DataPropertyName = "CID";
            this.cIDDataGridViewTextBoxColumn1.HeaderText = "CID";
            this.cIDDataGridViewTextBoxColumn1.MinimumWidth = 8;
            this.cIDDataGridViewTextBoxColumn1.Name = "cIDDataGridViewTextBoxColumn1";
            this.cIDDataGridViewTextBoxColumn1.Width = 150;
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(9F, 20F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(1710, 840);
            this.Controls.Add(this.button2);
            this.Controls.Add(this.button1);
            this.Controls.Add(this.dataGridView2);
            this.Controls.Add(this.dataGridView1);
            this.Name = "Form1";
            this.Text = "Form1";
            this.Load += new System.EventHandler(this.Form1_Load);
            ((System.ComponentModel.ISupportInitialize)(this.dataGridView1)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.dataGridView2)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.publicationsDataSet)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.categoriesBindingSource)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.publicationsDataSet1)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.sPublicationsBindingSource)).EndInit();
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.DataGridView dataGridView1;
        private System.Windows.Forms.DataGridView dataGridView2;
        private System.Windows.Forms.Button button1;
        private System.Windows.Forms.Button button2;
        private PublicationsDataSet publicationsDataSet;
        private System.Windows.Forms.BindingSource categoriesBindingSource;
        private PublicationsDataSetTableAdapters.CategoriesTableAdapter categoriesTableAdapter;
        private System.Windows.Forms.DataGridViewTextBoxColumn cIDDataGridViewTextBoxColumn;
        private System.Windows.Forms.DataGridViewTextBoxColumn cNameDataGridViewTextBoxColumn;
        private System.Windows.Forms.DataGridViewTextBoxColumn cDescrDataGridViewTextBoxColumn;
        private PublicationsDataSet1 publicationsDataSet1;
        private System.Windows.Forms.BindingSource sPublicationsBindingSource;
        private PublicationsDataSet1TableAdapters.SPublicationsTableAdapter sPublicationsTableAdapter;
        private System.Windows.Forms.DataGridViewTextBoxColumn pIDDataGridViewTextBoxColumn;
        private System.Windows.Forms.DataGridViewTextBoxColumn pTitleDataGridViewTextBoxColumn;
        private System.Windows.Forms.DataGridViewTextBoxColumn pAbsDataGridViewTextBoxColumn;
        private System.Windows.Forms.DataGridViewTextBoxColumn pAuthDataGridViewTextBoxColumn;
        private System.Windows.Forms.DataGridViewTextBoxColumn cIDDataGridViewTextBoxColumn1;
    }
}

