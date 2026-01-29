namespace WindowsFormsApp3
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
            this.Update = new System.Windows.Forms.Button();
            this.hospitalSystemDataSet = new WindowsFormsApp3.HospitalSystemDataSet();
            this.medicationsBindingSource = new System.Windows.Forms.BindingSource(this.components);
            this.medicationsTableAdapter = new WindowsFormsApp3.HospitalSystemDataSetTableAdapters.MedicationsTableAdapter();
            this.mIDDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.mNameDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.mInstrDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.hospitalSystemDataSet1 = new WindowsFormsApp3.HospitalSystemDataSet1();
            this.treatmentsBindingSource = new System.Windows.Forms.BindingSource(this.components);
            this.treatmentsTableAdapter = new WindowsFormsApp3.HospitalSystemDataSet1TableAdapters.TreatmentsTableAdapter();
            this.tIDDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.tNameDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.mIDDataGridViewTextBoxColumn1 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.tDosageDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            ((System.ComponentModel.ISupportInitialize)(this.dataGridView1)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.dataGridView2)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.hospitalSystemDataSet)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.medicationsBindingSource)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.hospitalSystemDataSet1)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.treatmentsBindingSource)).BeginInit();
            this.SuspendLayout();
            // 
            // dataGridView1
            // 
            this.dataGridView1.AutoGenerateColumns = false;
            this.dataGridView1.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.dataGridView1.Columns.AddRange(new System.Windows.Forms.DataGridViewColumn[] {
            this.mIDDataGridViewTextBoxColumn,
            this.mNameDataGridViewTextBoxColumn,
            this.mInstrDataGridViewTextBoxColumn});
            this.dataGridView1.DataSource = this.medicationsBindingSource;
            this.dataGridView1.Location = new System.Drawing.Point(12, 12);
            this.dataGridView1.Name = "dataGridView1";
            this.dataGridView1.RowHeadersWidth = 62;
            this.dataGridView1.RowTemplate.Height = 28;
            this.dataGridView1.Size = new System.Drawing.Size(971, 359);
            this.dataGridView1.TabIndex = 0;
            // 
            // dataGridView2
            // 
            this.dataGridView2.AutoGenerateColumns = false;
            this.dataGridView2.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.dataGridView2.Columns.AddRange(new System.Windows.Forms.DataGridViewColumn[] {
            this.tIDDataGridViewTextBoxColumn,
            this.tNameDataGridViewTextBoxColumn,
            this.mIDDataGridViewTextBoxColumn1,
            this.tDosageDataGridViewTextBoxColumn});
            this.dataGridView2.DataSource = this.treatmentsBindingSource;
            this.dataGridView2.Location = new System.Drawing.Point(12, 377);
            this.dataGridView2.Name = "dataGridView2";
            this.dataGridView2.RowHeadersWidth = 62;
            this.dataGridView2.RowTemplate.Height = 28;
            this.dataGridView2.Size = new System.Drawing.Size(971, 350);
            this.dataGridView2.TabIndex = 1;
            // 
            // button1
            // 
            this.button1.Location = new System.Drawing.Point(1112, 144);
            this.button1.Name = "button1";
            this.button1.Size = new System.Drawing.Size(292, 118);
            this.button1.TabIndex = 2;
            this.button1.Text = "Connect";
            this.button1.UseVisualStyleBackColor = true;
            this.button1.Click += new System.EventHandler(this.button1_Click);
            // 
            // Update
            // 
            this.Update.Location = new System.Drawing.Point(1112, 433);
            this.Update.Name = "button2";
            this.Update.Size = new System.Drawing.Size(292, 118);
            this.Update.TabIndex = 3;
            this.Update.Text = "Update";
            this.Update.UseVisualStyleBackColor = true;
            this.Update.Click += new System.EventHandler(this.button2_Click);
            // 
            // hospitalSystemDataSet
            // 
            this.hospitalSystemDataSet.DataSetName = "HospitalSystemDataSet";
            this.hospitalSystemDataSet.SchemaSerializationMode = System.Data.SchemaSerializationMode.IncludeSchema;
            // 
            // medicationsBindingSource
            // 
            this.medicationsBindingSource.DataMember = "Medications";
            this.medicationsBindingSource.DataSource = this.hospitalSystemDataSet;
            // 
            // medicationsTableAdapter
            // 
            this.medicationsTableAdapter.ClearBeforeFill = true;
            // 
            // mIDDataGridViewTextBoxColumn
            // 
            this.mIDDataGridViewTextBoxColumn.DataPropertyName = "MID";
            this.mIDDataGridViewTextBoxColumn.HeaderText = "MID";
            this.mIDDataGridViewTextBoxColumn.MinimumWidth = 8;
            this.mIDDataGridViewTextBoxColumn.Name = "mIDDataGridViewTextBoxColumn";
            this.mIDDataGridViewTextBoxColumn.ReadOnly = true;
            this.mIDDataGridViewTextBoxColumn.Width = 150;
            // 
            // mNameDataGridViewTextBoxColumn
            // 
            this.mNameDataGridViewTextBoxColumn.DataPropertyName = "MName";
            this.mNameDataGridViewTextBoxColumn.HeaderText = "MName";
            this.mNameDataGridViewTextBoxColumn.MinimumWidth = 8;
            this.mNameDataGridViewTextBoxColumn.Name = "mNameDataGridViewTextBoxColumn";
            this.mNameDataGridViewTextBoxColumn.Width = 150;
            // 
            // mInstrDataGridViewTextBoxColumn
            // 
            this.mInstrDataGridViewTextBoxColumn.DataPropertyName = "MInstr";
            this.mInstrDataGridViewTextBoxColumn.HeaderText = "MInstr";
            this.mInstrDataGridViewTextBoxColumn.MinimumWidth = 8;
            this.mInstrDataGridViewTextBoxColumn.Name = "mInstrDataGridViewTextBoxColumn";
            this.mInstrDataGridViewTextBoxColumn.Width = 150;
            // 
            // hospitalSystemDataSet1
            // 
            this.hospitalSystemDataSet1.DataSetName = "HospitalSystemDataSet1";
            this.hospitalSystemDataSet1.SchemaSerializationMode = System.Data.SchemaSerializationMode.IncludeSchema;
            // 
            // treatmentsBindingSource
            // 
            this.treatmentsBindingSource.DataMember = "Treatments";
            this.treatmentsBindingSource.DataSource = this.hospitalSystemDataSet1;
            // 
            // treatmentsTableAdapter
            // 
            this.treatmentsTableAdapter.ClearBeforeFill = true;
            // 
            // tIDDataGridViewTextBoxColumn
            // 
            this.tIDDataGridViewTextBoxColumn.DataPropertyName = "TID";
            this.tIDDataGridViewTextBoxColumn.HeaderText = "TID";
            this.tIDDataGridViewTextBoxColumn.MinimumWidth = 8;
            this.tIDDataGridViewTextBoxColumn.Name = "tIDDataGridViewTextBoxColumn";
            this.tIDDataGridViewTextBoxColumn.ReadOnly = true;
            this.tIDDataGridViewTextBoxColumn.Width = 150;
            // 
            // tNameDataGridViewTextBoxColumn
            // 
            this.tNameDataGridViewTextBoxColumn.DataPropertyName = "TName";
            this.tNameDataGridViewTextBoxColumn.HeaderText = "TName";
            this.tNameDataGridViewTextBoxColumn.MinimumWidth = 8;
            this.tNameDataGridViewTextBoxColumn.Name = "tNameDataGridViewTextBoxColumn";
            this.tNameDataGridViewTextBoxColumn.Width = 150;
            // 
            // mIDDataGridViewTextBoxColumn1
            // 
            this.mIDDataGridViewTextBoxColumn1.DataPropertyName = "MID";
            this.mIDDataGridViewTextBoxColumn1.HeaderText = "MID";
            this.mIDDataGridViewTextBoxColumn1.MinimumWidth = 8;
            this.mIDDataGridViewTextBoxColumn1.Name = "mIDDataGridViewTextBoxColumn1";
            this.mIDDataGridViewTextBoxColumn1.Width = 150;
            // 
            // tDosageDataGridViewTextBoxColumn
            // 
            this.tDosageDataGridViewTextBoxColumn.DataPropertyName = "TDosage";
            this.tDosageDataGridViewTextBoxColumn.HeaderText = "TDosage";
            this.tDosageDataGridViewTextBoxColumn.MinimumWidth = 8;
            this.tDosageDataGridViewTextBoxColumn.Name = "tDosageDataGridViewTextBoxColumn";
            this.tDosageDataGridViewTextBoxColumn.Width = 150;
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(9F, 20F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(1571, 821);
            this.Controls.Add(this.Update);
            this.Controls.Add(this.button1);
            this.Controls.Add(this.dataGridView2);
            this.Controls.Add(this.dataGridView1);
            this.Name = "Form1";
            this.Text = "Form1";
            this.Load += new System.EventHandler(this.Form1_Load);
            ((System.ComponentModel.ISupportInitialize)(this.dataGridView1)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.dataGridView2)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.hospitalSystemDataSet)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.medicationsBindingSource)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.hospitalSystemDataSet1)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.treatmentsBindingSource)).EndInit();
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.DataGridView dataGridView1;
        private System.Windows.Forms.DataGridView dataGridView2;
        private System.Windows.Forms.Button button1;
        private System.Windows.Forms.Button Update;
        private HospitalSystemDataSet hospitalSystemDataSet;
        private System.Windows.Forms.BindingSource medicationsBindingSource;
        private HospitalSystemDataSetTableAdapters.MedicationsTableAdapter medicationsTableAdapter;
        private System.Windows.Forms.DataGridViewTextBoxColumn mIDDataGridViewTextBoxColumn;
        private System.Windows.Forms.DataGridViewTextBoxColumn mNameDataGridViewTextBoxColumn;
        private System.Windows.Forms.DataGridViewTextBoxColumn mInstrDataGridViewTextBoxColumn;
        private HospitalSystemDataSet1 hospitalSystemDataSet1;
        private System.Windows.Forms.BindingSource treatmentsBindingSource;
        private HospitalSystemDataSet1TableAdapters.TreatmentsTableAdapter treatmentsTableAdapter;
        private System.Windows.Forms.DataGridViewTextBoxColumn tIDDataGridViewTextBoxColumn;
        private System.Windows.Forms.DataGridViewTextBoxColumn tNameDataGridViewTextBoxColumn;
        private System.Windows.Forms.DataGridViewTextBoxColumn mIDDataGridViewTextBoxColumn1;
        private System.Windows.Forms.DataGridViewTextBoxColumn tDosageDataGridViewTextBoxColumn;
    }
}

