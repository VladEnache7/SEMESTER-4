namespace Homework2
{
    partial class SimulateSQLInjectionAttacks_3
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
            this.label1 = new System.Windows.Forms.Label();
            this.label2 = new System.Windows.Forms.Label();
            this.txtCompanyName = new System.Windows.Forms.TextBox();
            this.txtPartners_CompaniesID = new System.Windows.Forms.TextBox();
            this.lbSuccesful = new System.Windows.Forms.Label();
            this.btnLogin = new System.Windows.Forms.Button();
            this.lbError = new System.Windows.Forms.Label();
            this.SuspendLayout();
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Font = new System.Drawing.Font("Microsoft Sans Serif", 10F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label1.Location = new System.Drawing.Point(39, 171);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(235, 25);
            this.label1.TabIndex = 0;
            this.label1.Text = "Partners_CompaniesID";
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Font = new System.Drawing.Font("Microsoft Sans Serif", 10F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label2.Location = new System.Drawing.Point(77, 47);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(173, 25);
            this.label2.TabIndex = 1;
            this.label2.Text = "Company Name:";
            // 
            // txtCompanyName
            // 
            this.txtCompanyName.Location = new System.Drawing.Point(56, 111);
            this.txtCompanyName.Name = "txtCompanyName";
            this.txtCompanyName.Size = new System.Drawing.Size(194, 26);
            this.txtCompanyName.TabIndex = 2;
            // 
            // txtPartners_CompaniesID
            // 
            this.txtPartners_CompaniesID.Location = new System.Drawing.Point(56, 248);
            this.txtPartners_CompaniesID.Name = "txtPartners_CompaniesID";
            this.txtPartners_CompaniesID.Size = new System.Drawing.Size(194, 26);
            this.txtPartners_CompaniesID.TabIndex = 3;
            // 
            // lbSuccesful
            // 
            this.lbSuccesful.AutoSize = true;
            this.lbSuccesful.BackColor = System.Drawing.Color.Chartreuse;
            this.lbSuccesful.Font = new System.Drawing.Font("Microsoft Sans Serif", 10F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lbSuccesful.Location = new System.Drawing.Point(433, 98);
            this.lbSuccesful.Name = "lbSuccesful";
            this.lbSuccesful.Size = new System.Drawing.Size(173, 25);
            this.lbSuccesful.TabIndex = 4;
            this.lbSuccesful.Text = "Succesful Login!";
            // 
            // btnLogin
            // 
            this.btnLogin.Location = new System.Drawing.Point(56, 305);
            this.btnLogin.Name = "btnLogin";
            this.btnLogin.Size = new System.Drawing.Size(194, 40);
            this.btnLogin.TabIndex = 5;
            this.btnLogin.Text = "Login";
            this.btnLogin.UseVisualStyleBackColor = true;
            this.btnLogin.Click += new System.EventHandler(this.btnLogin_Click);
            // 
            // lbError
            // 
            this.lbError.AutoSize = true;
            this.lbError.BackColor = System.Drawing.Color.Red;
            this.lbError.Font = new System.Drawing.Font("Microsoft Sans Serif", 10F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lbError.Location = new System.Drawing.Point(398, 187);
            this.lbError.MaximumSize = new System.Drawing.Size(200, 30);
            this.lbError.Name = "lbError";
            this.lbError.Size = new System.Drawing.Size(284, 38);
            this.lbError.TabIndex = 6;
            this.lbError.Text = "Invalid Name or ID";
            // 
            // SimulateSQLInjectionAttacks_3
            // 
            this.AllowDrop = true;
            this.AutoScaleDimensions = new System.Drawing.SizeF(9F, 20F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(763, 436);
            this.Controls.Add(this.lbError);
            this.Controls.Add(this.btnLogin);
            this.Controls.Add(this.lbSuccesful);
            this.Controls.Add(this.txtPartners_CompaniesID);
            this.Controls.Add(this.txtCompanyName);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.label1);
            this.Name = "SimulateSQLInjectionAttacks_3";
            this.Text = "SimulateSQLInjectionAttacks_3";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.TextBox txtCompanyName;
        private System.Windows.Forms.TextBox txtPartners_CompaniesID;
        private System.Windows.Forms.Label lbSuccesful;
        private System.Windows.Forms.Button btnLogin;
        private System.Windows.Forms.Label lbError;
    }
}