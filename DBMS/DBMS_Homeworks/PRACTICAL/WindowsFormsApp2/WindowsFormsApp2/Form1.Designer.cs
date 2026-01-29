namespace WindowsFormsApp2
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
            this.dataGridView3 = new System.Windows.Forms.DataGridView();
            this.dataGridView4 = new System.Windows.Forms.DataGridView();
            this.button3 = new System.Windows.Forms.Button();
            this.button4 = new System.Windows.Forms.Button();
            this.wineStoreDataSet1 = new WindowsFormsApp2.WineStoreDataSet();
            this.wineStoreDataSet1BindingSource = new System.Windows.Forms.BindingSource(this.components);
            this.bindingSource1 = new System.Windows.Forms.BindingSource(this.components);
            this.varietiesTableAdapter1 = new WindowsFormsApp2.WineStoreDataSetTableAdapters.VarietiesTableAdapter();
            this.dataGridViewTextBoxColumn1 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.dataGridViewTextBoxColumn2 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.dataGridViewTextBoxColumn3 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.wineStoreDataSet11 = new WindowsFormsApp2.WineStoreDataSet1();
            this.winesBindingSource = new System.Windows.Forms.BindingSource(this.components);
            this.winesTableAdapter = new WindowsFormsApp2.WineStoreDataSet1TableAdapters.WinesTableAdapter();
            this.wIDDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.wNameDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.wDescrDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.dataGridViewTextBoxColumn4 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.pIDDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            ((System.ComponentModel.ISupportInitialize)(this.dataGridView3)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.dataGridView4)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.wineStoreDataSet1)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.wineStoreDataSet1BindingSource)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.bindingSource1)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.wineStoreDataSet11)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.winesBindingSource)).BeginInit();
            this.SuspendLayout();
            // 
            // dataGridView3
            // 
            this.dataGridView3.AutoGenerateColumns = false;
            this.dataGridView3.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.dataGridView3.Columns.AddRange(new System.Windows.Forms.DataGridViewColumn[] {
            this.dataGridViewTextBoxColumn1,
            this.dataGridViewTextBoxColumn2,
            this.dataGridViewTextBoxColumn3});
            this.dataGridView3.DataSource = this.bindingSource1;
            this.dataGridView3.Location = new System.Drawing.Point(36, 30);
            this.dataGridView3.Name = "dataGridView3";
            this.dataGridView3.RowHeadersWidth = 62;
            this.dataGridView3.RowTemplate.Height = 28;
            this.dataGridView3.Size = new System.Drawing.Size(1111, 326);
            this.dataGridView3.TabIndex = 0;
            // 
            // dataGridView4
            // 
            this.dataGridView4.AutoGenerateColumns = false;
            this.dataGridView4.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.dataGridView4.Columns.AddRange(new System.Windows.Forms.DataGridViewColumn[] {
            this.wIDDataGridViewTextBoxColumn,
            this.wNameDataGridViewTextBoxColumn,
            this.wDescrDataGridViewTextBoxColumn,
            this.dataGridViewTextBoxColumn4,
            this.pIDDataGridViewTextBoxColumn});
            this.dataGridView4.DataSource = this.winesBindingSource;
            this.dataGridView4.Location = new System.Drawing.Point(36, 415);
            this.dataGridView4.Name = "dataGridView4";
            this.dataGridView4.RowHeadersWidth = 62;
            this.dataGridView4.RowTemplate.Height = 28;
            this.dataGridView4.Size = new System.Drawing.Size(1111, 322);
            this.dataGridView4.TabIndex = 1;
            // 
            // button3
            // 
            this.button3.Location = new System.Drawing.Point(1264, 139);
            this.button3.Name = "button3";
            this.button3.Size = new System.Drawing.Size(244, 96);
            this.button3.TabIndex = 2;
            this.button3.Text = "Connect";
            this.button3.UseVisualStyleBackColor = true;
            this.button3.Click += new System.EventHandler(this.button3_Click);
            // 
            // button4
            // 
            this.button4.Location = new System.Drawing.Point(1264, 491);
            this.button4.Name = "button4";
            this.button4.Size = new System.Drawing.Size(244, 96);
            this.button4.TabIndex = 3;
            this.button4.Text = "Update";
            this.button4.UseVisualStyleBackColor = true;
            this.button4.Click += new System.EventHandler(this.button4_Click);
            // 
            // wineStoreDataSet1
            // 
            this.wineStoreDataSet1.DataSetName = "WineStoreDataSet";
            this.wineStoreDataSet1.SchemaSerializationMode = System.Data.SchemaSerializationMode.IncludeSchema;
            // 
            // wineStoreDataSet1BindingSource
            // 
            this.wineStoreDataSet1BindingSource.DataSource = this.wineStoreDataSet1;
            this.wineStoreDataSet1BindingSource.Position = 0;
            // 
            // bindingSource1
            // 
            this.bindingSource1.DataMember = "Varieties";
            this.bindingSource1.DataSource = this.wineStoreDataSet1BindingSource;
            // 
            // varietiesTableAdapter1
            // 
            this.varietiesTableAdapter1.ClearBeforeFill = true;
            // 
            // dataGridViewTextBoxColumn1
            // 
            this.dataGridViewTextBoxColumn1.DataPropertyName = "VID";
            this.dataGridViewTextBoxColumn1.HeaderText = "VID";
            this.dataGridViewTextBoxColumn1.MinimumWidth = 8;
            this.dataGridViewTextBoxColumn1.Name = "dataGridViewTextBoxColumn1";
            this.dataGridViewTextBoxColumn1.ReadOnly = true;
            this.dataGridViewTextBoxColumn1.Width = 150;
            // 
            // dataGridViewTextBoxColumn2
            // 
            this.dataGridViewTextBoxColumn2.DataPropertyName = "VName";
            this.dataGridViewTextBoxColumn2.HeaderText = "VName";
            this.dataGridViewTextBoxColumn2.MinimumWidth = 8;
            this.dataGridViewTextBoxColumn2.Name = "dataGridViewTextBoxColumn2";
            this.dataGridViewTextBoxColumn2.Width = 150;
            // 
            // dataGridViewTextBoxColumn3
            // 
            this.dataGridViewTextBoxColumn3.DataPropertyName = "VDescr";
            this.dataGridViewTextBoxColumn3.HeaderText = "VDescr";
            this.dataGridViewTextBoxColumn3.MinimumWidth = 8;
            this.dataGridViewTextBoxColumn3.Name = "dataGridViewTextBoxColumn3";
            this.dataGridViewTextBoxColumn3.Width = 150;
            // 
            // wineStoreDataSet11
            // 
            this.wineStoreDataSet11.DataSetName = "WineStoreDataSet1";
            this.wineStoreDataSet11.SchemaSerializationMode = System.Data.SchemaSerializationMode.IncludeSchema;
            // 
            // winesBindingSource
            // 
            this.winesBindingSource.DataMember = "Wines";
            this.winesBindingSource.DataSource = this.wineStoreDataSet11;
            // 
            // winesTableAdapter
            // 
            this.winesTableAdapter.ClearBeforeFill = true;
            // 
            // wIDDataGridViewTextBoxColumn
            // 
            this.wIDDataGridViewTextBoxColumn.DataPropertyName = "WID";
            this.wIDDataGridViewTextBoxColumn.HeaderText = "WID";
            this.wIDDataGridViewTextBoxColumn.MinimumWidth = 8;
            this.wIDDataGridViewTextBoxColumn.Name = "wIDDataGridViewTextBoxColumn";
            this.wIDDataGridViewTextBoxColumn.ReadOnly = true;
            this.wIDDataGridViewTextBoxColumn.Width = 150;
            // 
            // wNameDataGridViewTextBoxColumn
            // 
            this.wNameDataGridViewTextBoxColumn.DataPropertyName = "WName";
            this.wNameDataGridViewTextBoxColumn.HeaderText = "WName";
            this.wNameDataGridViewTextBoxColumn.MinimumWidth = 8;
            this.wNameDataGridViewTextBoxColumn.Name = "wNameDataGridViewTextBoxColumn";
            this.wNameDataGridViewTextBoxColumn.Width = 150;
            // 
            // wDescrDataGridViewTextBoxColumn
            // 
            this.wDescrDataGridViewTextBoxColumn.DataPropertyName = "WDescr";
            this.wDescrDataGridViewTextBoxColumn.HeaderText = "WDescr";
            this.wDescrDataGridViewTextBoxColumn.MinimumWidth = 8;
            this.wDescrDataGridViewTextBoxColumn.Name = "wDescrDataGridViewTextBoxColumn";
            this.wDescrDataGridViewTextBoxColumn.Width = 150;
            // 
            // dataGridViewTextBoxColumn4
            // 
            this.dataGridViewTextBoxColumn4.DataPropertyName = "VID";
            this.dataGridViewTextBoxColumn4.HeaderText = "VID";
            this.dataGridViewTextBoxColumn4.MinimumWidth = 8;
            this.dataGridViewTextBoxColumn4.Name = "dataGridViewTextBoxColumn4";
            this.dataGridViewTextBoxColumn4.Width = 150;
            // 
            // pIDDataGridViewTextBoxColumn
            // 
            this.pIDDataGridViewTextBoxColumn.DataPropertyName = "PID";
            this.pIDDataGridViewTextBoxColumn.HeaderText = "PID";
            this.pIDDataGridViewTextBoxColumn.MinimumWidth = 8;
            this.pIDDataGridViewTextBoxColumn.Name = "pIDDataGridViewTextBoxColumn";
            this.pIDDataGridViewTextBoxColumn.Width = 150;
            // 
            // Form1
            // 
            this.ClientSize = new System.Drawing.Size(1553, 784);
            this.Controls.Add(this.button4);
            this.Controls.Add(this.button3);
            this.Controls.Add(this.dataGridView4);
            this.Controls.Add(this.dataGridView3);
            this.Name = "Form1";
            this.Load += new System.EventHandler(this.Form1_Load_1);
            ((System.ComponentModel.ISupportInitialize)(this.dataGridView3)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.dataGridView4)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.wineStoreDataSet1)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.wineStoreDataSet1BindingSource)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.bindingSource1)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.wineStoreDataSet11)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.winesBindingSource)).EndInit();
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.DataGridView dataGridView1;
        private System.Windows.Forms.Button button1;
        private System.Windows.Forms.DataGridView dataGridView2;
        private System.Windows.Forms.Button button2;
        private WineStoreDataSet wineStoreDataSet;
        private System.Windows.Forms.BindingSource varietiesBindingSource;
        private WineStoreDataSetTableAdapters.VarietiesTableAdapter varietiesTableAdapter;
        private System.Windows.Forms.DataGridViewTextBoxColumn vIDDataGridViewTextBoxColumn;
        private System.Windows.Forms.DataGridViewTextBoxColumn vNameDataGridViewTextBoxColumn;
        private System.Windows.Forms.DataGridViewTextBoxColumn vDescrDataGridViewTextBoxColumn;
        private System.Windows.Forms.DataGridView dataGridView3;
        private System.Windows.Forms.DataGridView dataGridView4;
        private System.Windows.Forms.Button button3;
        private System.Windows.Forms.Button button4;
        private System.Windows.Forms.BindingSource wineStoreDataSet1BindingSource;
        private WineStoreDataSet wineStoreDataSet1;
        private System.Windows.Forms.BindingSource bindingSource1;
        private WineStoreDataSetTableAdapters.VarietiesTableAdapter varietiesTableAdapter1;
        private System.Windows.Forms.DataGridViewTextBoxColumn dataGridViewTextBoxColumn1;
        private System.Windows.Forms.DataGridViewTextBoxColumn dataGridViewTextBoxColumn2;
        private System.Windows.Forms.DataGridViewTextBoxColumn dataGridViewTextBoxColumn3;
        private WineStoreDataSet1 wineStoreDataSet11;
        private System.Windows.Forms.BindingSource winesBindingSource;
        private WineStoreDataSet1TableAdapters.WinesTableAdapter winesTableAdapter;
        private System.Windows.Forms.DataGridViewTextBoxColumn wIDDataGridViewTextBoxColumn;
        private System.Windows.Forms.DataGridViewTextBoxColumn wNameDataGridViewTextBoxColumn;
        private System.Windows.Forms.DataGridViewTextBoxColumn wDescrDataGridViewTextBoxColumn;
        private System.Windows.Forms.DataGridViewTextBoxColumn dataGridViewTextBoxColumn4;
        private System.Windows.Forms.DataGridViewTextBoxColumn pIDDataGridViewTextBoxColumn;
    }
}

