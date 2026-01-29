namespace Homework2
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
            this.dgvParent = new System.Windows.Forms.DataGridView();
            this.dgvChild = new System.Windows.Forms.DataGridView();
            this.btnUpdateDB = new System.Windows.Forms.Button();
            this.label1 = new System.Windows.Forms.Label();
            this.label2 = new System.Windows.Forms.Label();
            this.button1 = new System.Windows.Forms.Button();
            ((System.ComponentModel.ISupportInitialize)(this.dgvParent)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.dgvChild)).BeginInit();
            this.SuspendLayout();
            // 
            // dgvParent
            // 
            this.dgvParent.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.dgvParent.Location = new System.Drawing.Point(26, 35);
            this.dgvParent.Margin = new System.Windows.Forms.Padding(3, 4, 3, 4);
            this.dgvParent.Name = "dgvParent";
            this.dgvParent.RowHeadersWidth = 51;
            this.dgvParent.RowTemplate.Height = 24;
            this.dgvParent.Size = new System.Drawing.Size(651, 488);
            this.dgvParent.TabIndex = 0;
            // 
            // dgvChild
            // 
            this.dgvChild.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.dgvChild.Location = new System.Drawing.Point(804, 35);
            this.dgvChild.Margin = new System.Windows.Forms.Padding(3, 4, 3, 4);
            this.dgvChild.Name = "dgvChild";
            this.dgvChild.RowHeadersWidth = 51;
            this.dgvChild.RowTemplate.Height = 24;
            this.dgvChild.Size = new System.Drawing.Size(651, 488);
            this.dgvChild.TabIndex = 1;
            // 
            // btnUpdateDB
            // 
            this.btnUpdateDB.Location = new System.Drawing.Point(664, 572);
            this.btnUpdateDB.Margin = new System.Windows.Forms.Padding(3, 4, 3, 4);
            this.btnUpdateDB.Name = "btnUpdateDB";
            this.btnUpdateDB.Size = new System.Drawing.Size(151, 40);
            this.btnUpdateDB.TabIndex = 2;
            this.btnUpdateDB.Text = "Update DB";
            this.btnUpdateDB.UseVisualStyleBackColor = true;
            this.btnUpdateDB.Click += new System.EventHandler(this.btnUpdateDB_Click);
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(330, 11);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(51, 20);
            this.label1.TabIndex = 3;
            this.label1.Text = "label1";
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Location = new System.Drawing.Point(1106, 11);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(51, 20);
            this.label2.TabIndex = 4;
            this.label2.Text = "label2";
            // 
            // button1
            // 
            this.button1.Location = new System.Drawing.Point(720, 30);
            this.button1.Name = "button1";
            this.button1.Size = new System.Drawing.Size(8, 8);
            this.button1.TabIndex = 5;
            this.button1.Text = "button1";
            this.button1.UseVisualStyleBackColor = true;
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(9F, 20F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(1506, 645);
            this.Controls.Add(this.button1);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.btnUpdateDB);
            this.Controls.Add(this.dgvChild);
            this.Controls.Add(this.dgvParent);
            this.Margin = new System.Windows.Forms.Padding(3, 4, 3, 4);
            this.Name = "Form1";
            this.Text = "Form1";
            this.Load += new System.EventHandler(this.Form1_Load);
            ((System.ComponentModel.ISupportInitialize)(this.dgvParent)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.dgvChild)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.DataGridView dgvParent;
        private System.Windows.Forms.DataGridView dgvChild;
        private System.Windows.Forms.Button btnUpdateDB;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.Button button1;
    }
}

