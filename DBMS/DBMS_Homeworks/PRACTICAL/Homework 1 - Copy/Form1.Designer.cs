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
            this.miniFacebookDataSet = new DBMS_Homeworks.MiniFacebookDataSet();
            this.usersBindingSource = new System.Windows.Forms.BindingSource(this.components);
            this.usersTableAdapter = new DBMS_Homeworks.MiniFacebookDataSetTableAdapters.UsersTableAdapter();
            this.usersIDDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.uNameDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.uCityDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.uDobDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.dataGridView2 = new System.Windows.Forms.DataGridView();
            this.miniFacebookDataSet1 = new DBMS_Homeworks.MiniFacebookDataSet1();
            this.postsBindingSource = new System.Windows.Forms.BindingSource(this.components);
            this.postsTableAdapter = new DBMS_Homeworks.MiniFacebookDataSet1TableAdapters.PostsTableAdapter();
            this.pOIDDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.usersIDDataGridViewTextBoxColumn1 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.pDateDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.pTextDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.pSharesDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.button3 = new System.Windows.Forms.Button();
            this.button4 = new System.Windows.Forms.Button();
            ((System.ComponentModel.ISupportInitialize)(this.dataGridView1)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.miniFacebookDataSet)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.usersBindingSource)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.dataGridView2)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.miniFacebookDataSet1)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.postsBindingSource)).BeginInit();
            this.SuspendLayout();
            // 
            // dataGridView1
            // 
            this.dataGridView1.AutoGenerateColumns = false;
            this.dataGridView1.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.dataGridView1.Columns.AddRange(new System.Windows.Forms.DataGridViewColumn[] {
            this.usersIDDataGridViewTextBoxColumn,
            this.uNameDataGridViewTextBoxColumn,
            this.uCityDataGridViewTextBoxColumn,
            this.uDobDataGridViewTextBoxColumn});
            this.dataGridView1.DataSource = this.usersBindingSource;
            this.dataGridView1.Location = new System.Drawing.Point(12, 12);
            this.dataGridView1.Name = "dataGridView1";
            this.dataGridView1.RowHeadersWidth = 62;
            this.dataGridView1.RowTemplate.Height = 28;
            this.dataGridView1.Size = new System.Drawing.Size(670, 274);
            this.dataGridView1.TabIndex = 0;
            // 
            // miniFacebookDataSet
            // 
            this.miniFacebookDataSet.DataSetName = "MiniFacebookDataSet";
            this.miniFacebookDataSet.SchemaSerializationMode = System.Data.SchemaSerializationMode.IncludeSchema;
            // 
            // usersBindingSource
            // 
            this.usersBindingSource.DataMember = "Users";
            this.usersBindingSource.DataSource = this.miniFacebookDataSet;
            // 
            // usersTableAdapter
            // 
            this.usersTableAdapter.ClearBeforeFill = true;
            // 
            // usersIDDataGridViewTextBoxColumn
            // 
            this.usersIDDataGridViewTextBoxColumn.DataPropertyName = "UsersID";
            this.usersIDDataGridViewTextBoxColumn.HeaderText = "UsersID";
            this.usersIDDataGridViewTextBoxColumn.MinimumWidth = 8;
            this.usersIDDataGridViewTextBoxColumn.Name = "usersIDDataGridViewTextBoxColumn";
            this.usersIDDataGridViewTextBoxColumn.ReadOnly = true;
            this.usersIDDataGridViewTextBoxColumn.Width = 150;
            // 
            // uNameDataGridViewTextBoxColumn
            // 
            this.uNameDataGridViewTextBoxColumn.DataPropertyName = "UName";
            this.uNameDataGridViewTextBoxColumn.HeaderText = "UName";
            this.uNameDataGridViewTextBoxColumn.MinimumWidth = 8;
            this.uNameDataGridViewTextBoxColumn.Name = "uNameDataGridViewTextBoxColumn";
            this.uNameDataGridViewTextBoxColumn.Width = 150;
            // 
            // uCityDataGridViewTextBoxColumn
            // 
            this.uCityDataGridViewTextBoxColumn.DataPropertyName = "UCity";
            this.uCityDataGridViewTextBoxColumn.HeaderText = "UCity";
            this.uCityDataGridViewTextBoxColumn.MinimumWidth = 8;
            this.uCityDataGridViewTextBoxColumn.Name = "uCityDataGridViewTextBoxColumn";
            this.uCityDataGridViewTextBoxColumn.Width = 150;
            // 
            // uDobDataGridViewTextBoxColumn
            // 
            this.uDobDataGridViewTextBoxColumn.DataPropertyName = "UDob";
            this.uDobDataGridViewTextBoxColumn.HeaderText = "UDob";
            this.uDobDataGridViewTextBoxColumn.MinimumWidth = 8;
            this.uDobDataGridViewTextBoxColumn.Name = "uDobDataGridViewTextBoxColumn";
            this.uDobDataGridViewTextBoxColumn.Width = 150;
            // 
            // dataGridView2
            // 
            this.dataGridView2.AutoGenerateColumns = false;
            this.dataGridView2.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.dataGridView2.Columns.AddRange(new System.Windows.Forms.DataGridViewColumn[] {
            this.pOIDDataGridViewTextBoxColumn,
            this.usersIDDataGridViewTextBoxColumn1,
            this.pDateDataGridViewTextBoxColumn,
            this.pTextDataGridViewTextBoxColumn,
            this.pSharesDataGridViewTextBoxColumn});
            this.dataGridView2.DataSource = this.postsBindingSource;
            this.dataGridView2.Location = new System.Drawing.Point(13, 315);
            this.dataGridView2.Name = "dataGridView2";
            this.dataGridView2.RowHeadersWidth = 62;
            this.dataGridView2.RowTemplate.Height = 28;
            this.dataGridView2.Size = new System.Drawing.Size(816, 213);
            this.dataGridView2.TabIndex = 1;
            // 
            // miniFacebookDataSet1
            // 
            this.miniFacebookDataSet1.DataSetName = "MiniFacebookDataSet1";
            this.miniFacebookDataSet1.SchemaSerializationMode = System.Data.SchemaSerializationMode.IncludeSchema;
            // 
            // postsBindingSource
            // 
            this.postsBindingSource.DataMember = "Posts";
            this.postsBindingSource.DataSource = this.miniFacebookDataSet1;
            // 
            // postsTableAdapter
            // 
            this.postsTableAdapter.ClearBeforeFill = true;
            // 
            // pOIDDataGridViewTextBoxColumn
            // 
            this.pOIDDataGridViewTextBoxColumn.DataPropertyName = "POID";
            this.pOIDDataGridViewTextBoxColumn.HeaderText = "POID";
            this.pOIDDataGridViewTextBoxColumn.MinimumWidth = 8;
            this.pOIDDataGridViewTextBoxColumn.Name = "pOIDDataGridViewTextBoxColumn";
            this.pOIDDataGridViewTextBoxColumn.ReadOnly = true;
            this.pOIDDataGridViewTextBoxColumn.Width = 150;
            // 
            // usersIDDataGridViewTextBoxColumn1
            // 
            this.usersIDDataGridViewTextBoxColumn1.DataPropertyName = "UsersID";
            this.usersIDDataGridViewTextBoxColumn1.HeaderText = "UsersID";
            this.usersIDDataGridViewTextBoxColumn1.MinimumWidth = 8;
            this.usersIDDataGridViewTextBoxColumn1.Name = "usersIDDataGridViewTextBoxColumn1";
            this.usersIDDataGridViewTextBoxColumn1.Width = 150;
            // 
            // pDateDataGridViewTextBoxColumn
            // 
            this.pDateDataGridViewTextBoxColumn.DataPropertyName = "PDate";
            this.pDateDataGridViewTextBoxColumn.HeaderText = "PDate";
            this.pDateDataGridViewTextBoxColumn.MinimumWidth = 8;
            this.pDateDataGridViewTextBoxColumn.Name = "pDateDataGridViewTextBoxColumn";
            this.pDateDataGridViewTextBoxColumn.Width = 150;
            // 
            // pTextDataGridViewTextBoxColumn
            // 
            this.pTextDataGridViewTextBoxColumn.DataPropertyName = "PText";
            this.pTextDataGridViewTextBoxColumn.HeaderText = "PText";
            this.pTextDataGridViewTextBoxColumn.MinimumWidth = 8;
            this.pTextDataGridViewTextBoxColumn.Name = "pTextDataGridViewTextBoxColumn";
            this.pTextDataGridViewTextBoxColumn.Width = 150;
            // 
            // pSharesDataGridViewTextBoxColumn
            // 
            this.pSharesDataGridViewTextBoxColumn.DataPropertyName = "PShares";
            this.pSharesDataGridViewTextBoxColumn.HeaderText = "PShares";
            this.pSharesDataGridViewTextBoxColumn.MinimumWidth = 8;
            this.pSharesDataGridViewTextBoxColumn.Name = "pSharesDataGridViewTextBoxColumn";
            this.pSharesDataGridViewTextBoxColumn.Width = 150;
            // 
            // button3
            // 
            this.button3.Location = new System.Drawing.Point(782, 38);
            this.button3.Name = "button3";
            this.button3.Size = new System.Drawing.Size(195, 67);
            this.button3.TabIndex = 2;
            this.button3.Text = "CONNECT";
            this.button3.UseVisualStyleBackColor = true;
            this.button3.Click += new System.EventHandler(this.button3_Click);
            // 
            // button4
            // 
            this.button4.Location = new System.Drawing.Point(782, 160);
            this.button4.Name = "button4";
            this.button4.Size = new System.Drawing.Size(195, 96);
            this.button4.TabIndex = 3;
            this.button4.Text = "UPDATE";
            this.button4.UseVisualStyleBackColor = true;
            this.button4.Click += new System.EventHandler(this.button4_Click);
            // 
            // Form1
            // 
            this.ClientSize = new System.Drawing.Size(1089, 540);
            this.Controls.Add(this.button4);
            this.Controls.Add(this.button3);
            this.Controls.Add(this.dataGridView2);
            this.Controls.Add(this.dataGridView1);
            this.Name = "Form1";
            this.Load += new System.EventHandler(this.Form1_Load_1);
            ((System.ComponentModel.ISupportInitialize)(this.dataGridView1)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.miniFacebookDataSet)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.usersBindingSource)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.dataGridView2)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.miniFacebookDataSet1)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.postsBindingSource)).EndInit();
            this.ResumeLayout(false);

        }

        #endregion

        
        private System.Windows.Forms.DataGridView dataGridView1;
        private MiniFacebookDataSet miniFacebookDataSet;
        private System.Windows.Forms.BindingSource usersBindingSource;
        private MiniFacebookDataSetTableAdapters.UsersTableAdapter usersTableAdapter;
        private System.Windows.Forms.DataGridViewTextBoxColumn usersIDDataGridViewTextBoxColumn;
        private System.Windows.Forms.DataGridViewTextBoxColumn uNameDataGridViewTextBoxColumn;
        private System.Windows.Forms.DataGridViewTextBoxColumn uCityDataGridViewTextBoxColumn;
        private System.Windows.Forms.DataGridViewTextBoxColumn uDobDataGridViewTextBoxColumn;
        private System.Windows.Forms.DataGridView dataGridView2;
        private MiniFacebookDataSet1 miniFacebookDataSet1;
        private System.Windows.Forms.BindingSource postsBindingSource;
        private MiniFacebookDataSet1TableAdapters.PostsTableAdapter postsTableAdapter;
        private System.Windows.Forms.DataGridViewTextBoxColumn pOIDDataGridViewTextBoxColumn;
        private System.Windows.Forms.DataGridViewTextBoxColumn usersIDDataGridViewTextBoxColumn1;
        private System.Windows.Forms.DataGridViewTextBoxColumn pDateDataGridViewTextBoxColumn;
        private System.Windows.Forms.DataGridViewTextBoxColumn pTextDataGridViewTextBoxColumn;
        private System.Windows.Forms.DataGridViewTextBoxColumn pSharesDataGridViewTextBoxColumn;
        private System.Windows.Forms.Button button3;
        private System.Windows.Forms.Button button4;
    }
}

