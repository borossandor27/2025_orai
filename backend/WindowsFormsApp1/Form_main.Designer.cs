namespace WindowsFormsApp1
{
    partial class Form_Main
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
            this.tableLayoutPanel1 = new System.Windows.Forms.TableLayoutPanel();
            this.listBox_diakok = new System.Windows.Forms.ListBox();
            this.groupBox1 = new System.Windows.Forms.GroupBox();
            this.textBox_Email = new System.Windows.Forms.TextBox();
            this.textBox_TeljesNev = new System.Windows.Forms.TextBox();
            this.textBox_id = new System.Windows.Forms.TextBox();
            this.label3 = new System.Windows.Forms.Label();
            this.label2 = new System.Windows.Forms.Label();
            this.label1 = new System.Windows.Forms.Label();
            this.panel1 = new System.Windows.Forms.Panel();
            this.pictureBox_Diak = new System.Windows.Forms.PictureBox();
            this.button_Create = new System.Windows.Forms.Button();
            this.button_Update = new System.Windows.Forms.Button();
            this.tableLayoutPanel1.SuspendLayout();
            this.groupBox1.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox_Diak)).BeginInit();
            this.SuspendLayout();
            // 
            // tableLayoutPanel1
            // 
            this.tableLayoutPanel1.AutoSize = true;
            this.tableLayoutPanel1.ColumnCount = 3;
            this.tableLayoutPanel1.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Absolute, 200F));
            this.tableLayoutPanel1.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Absolute, 500F));
            this.tableLayoutPanel1.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 100F));
            this.tableLayoutPanel1.Controls.Add(this.pictureBox_Diak, 2, 0);
            this.tableLayoutPanel1.Controls.Add(this.listBox_diakok, 0, 0);
            this.tableLayoutPanel1.Controls.Add(this.groupBox1, 1, 0);
            this.tableLayoutPanel1.Dock = System.Windows.Forms.DockStyle.Fill;
            this.tableLayoutPanel1.Location = new System.Drawing.Point(0, 0);
            this.tableLayoutPanel1.Name = "tableLayoutPanel1";
            this.tableLayoutPanel1.RowCount = 1;
            this.tableLayoutPanel1.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 100F));
            this.tableLayoutPanel1.Size = new System.Drawing.Size(1294, 608);
            this.tableLayoutPanel1.TabIndex = 2;
            // 
            // listBox_diakok
            // 
            this.listBox_diakok.Dock = System.Windows.Forms.DockStyle.Left;
            this.listBox_diakok.FormattingEnabled = true;
            this.listBox_diakok.ItemHeight = 20;
            this.listBox_diakok.Location = new System.Drawing.Point(3, 3);
            this.listBox_diakok.Name = "listBox_diakok";
            this.listBox_diakok.Size = new System.Drawing.Size(194, 602);
            this.listBox_diakok.TabIndex = 1;
            this.listBox_diakok.SelectedIndexChanged += new System.EventHandler(this.listBox_diakok_SelectedIndexChanged_1);
            // 
            // groupBox1
            // 
            this.groupBox1.AutoSizeMode = System.Windows.Forms.AutoSizeMode.GrowAndShrink;
            this.groupBox1.Controls.Add(this.button_Update);
            this.groupBox1.Controls.Add(this.button_Create);
            this.groupBox1.Controls.Add(this.panel1);
            this.groupBox1.Controls.Add(this.textBox_Email);
            this.groupBox1.Controls.Add(this.textBox_TeljesNev);
            this.groupBox1.Controls.Add(this.textBox_id);
            this.groupBox1.Controls.Add(this.label3);
            this.groupBox1.Controls.Add(this.label2);
            this.groupBox1.Controls.Add(this.label1);
            this.groupBox1.Location = new System.Drawing.Point(203, 3);
            this.groupBox1.Name = "groupBox1";
            this.groupBox1.Size = new System.Drawing.Size(494, 450);
            this.groupBox1.TabIndex = 2;
            this.groupBox1.TabStop = false;
            this.groupBox1.Text = "Kiválasztott diák";
            // 
            // textBox_Email
            // 
            this.textBox_Email.Location = new System.Drawing.Point(175, 143);
            this.textBox_Email.Name = "textBox_Email";
            this.textBox_Email.Size = new System.Drawing.Size(208, 26);
            this.textBox_Email.TabIndex = 2;
            // 
            // textBox_TeljesNev
            // 
            this.textBox_TeljesNev.Location = new System.Drawing.Point(175, 96);
            this.textBox_TeljesNev.Name = "textBox_TeljesNev";
            this.textBox_TeljesNev.Size = new System.Drawing.Size(208, 26);
            this.textBox_TeljesNev.TabIndex = 2;
            // 
            // textBox_id
            // 
            this.textBox_id.Location = new System.Drawing.Point(175, 55);
            this.textBox_id.Name = "textBox_id";
            this.textBox_id.ReadOnly = true;
            this.textBox_id.Size = new System.Drawing.Size(100, 26);
            this.textBox_id.TabIndex = 1;
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.FlatStyle = System.Windows.Forms.FlatStyle.System;
            this.label3.Location = new System.Drawing.Point(35, 149);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(76, 20);
            this.label3.TabIndex = 0;
            this.label3.Text = "Email cím";
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.FlatStyle = System.Windows.Forms.FlatStyle.System;
            this.label2.Location = new System.Drawing.Point(35, 102);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(79, 20);
            this.label2.TabIndex = 0;
            this.label2.Text = "Teljes név";
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.FlatStyle = System.Windows.Forms.FlatStyle.System;
            this.label1.Location = new System.Drawing.Point(35, 55);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(21, 20);
            this.label1.TabIndex = 0;
            this.label1.Text = "id";
            // 
            // panel1
            // 
            this.panel1.AutoSize = true;
            this.panel1.AutoSizeMode = System.Windows.Forms.AutoSizeMode.GrowAndShrink;
            this.panel1.Dock = System.Windows.Forms.DockStyle.Right;
            this.panel1.Location = new System.Drawing.Point(491, 22);
            this.panel1.Name = "panel1";
            this.panel1.Size = new System.Drawing.Size(0, 425);
            this.panel1.TabIndex = 4;
            // 
            // pictureBox_Diak
            // 
            this.pictureBox_Diak.Dock = System.Windows.Forms.DockStyle.Fill;
            this.pictureBox_Diak.Location = new System.Drawing.Point(703, 3);
            this.pictureBox_Diak.Name = "pictureBox_Diak";
            this.pictureBox_Diak.Size = new System.Drawing.Size(588, 602);
            this.pictureBox_Diak.SizeMode = System.Windows.Forms.PictureBoxSizeMode.Zoom;
            this.pictureBox_Diak.TabIndex = 0;
            this.pictureBox_Diak.TabStop = false;
            // 
            // button_Create
            // 
            this.button_Create.Location = new System.Drawing.Point(35, 226);
            this.button_Create.Name = "button_Create";
            this.button_Create.Size = new System.Drawing.Size(79, 59);
            this.button_Create.TabIndex = 5;
            this.button_Create.Text = "&Create";
            this.button_Create.UseVisualStyleBackColor = true;
            this.button_Create.Click += new System.EventHandler(this.button_Create_Click);
            // 
            // button_Update
            // 
            this.button_Update.Location = new System.Drawing.Point(151, 226);
            this.button_Update.Name = "button_Update";
            this.button_Update.Size = new System.Drawing.Size(79, 59);
            this.button_Update.TabIndex = 5;
            this.button_Update.Text = "&Update";
            this.button_Update.UseVisualStyleBackColor = true;
            this.button_Update.Click += new System.EventHandler(this.button_Update_Click);
            // 
            // Form_Main
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(9F, 20F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(1294, 608);
            this.Controls.Add(this.tableLayoutPanel1);
            this.Name = "Form_Main";
            this.Text = "Adatelérés minta";
            this.Load += new System.EventHandler(this.Form_Main_Load);
            this.tableLayoutPanel1.ResumeLayout(false);
            this.groupBox1.ResumeLayout(false);
            this.groupBox1.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox_Diak)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion
        private System.Windows.Forms.TableLayoutPanel tableLayoutPanel1;
        private System.Windows.Forms.GroupBox groupBox1;
        private System.Windows.Forms.TextBox textBox_Email;
        private System.Windows.Forms.TextBox textBox_TeljesNev;
        private System.Windows.Forms.TextBox textBox_id;
        private System.Windows.Forms.Label label3;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.ListBox listBox_diakok;
        private System.Windows.Forms.PictureBox pictureBox_Diak;
        private System.Windows.Forms.Panel panel1;
        private System.Windows.Forms.Button button_Create;
        private System.Windows.Forms.Button button_Update;
    }
}

