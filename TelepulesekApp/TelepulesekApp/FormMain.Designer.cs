namespace TelepulesekApp
{
    partial class FormMain
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
            this.menuStrip1 = new System.Windows.Forms.MenuStrip();
            this.fájlToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.megnyitásToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.listBox_telepulesek = new System.Windows.Forms.ListBox();
            this.tableLayoutPanel1 = new System.Windows.Forms.TableLayoutPanel();
            this.groupBox1 = new System.Windows.Forms.GroupBox();
            this.label1 = new System.Windows.Forms.Label();
            this.label2 = new System.Windows.Forms.Label();
            this.label3 = new System.Windows.Forms.Label();
            this.textBox_helysegnev = new System.Windows.Forms.TextBox();
            this.textBox_megye = new System.Windows.Forms.TextBox();
            this.textBox_lakossag = new System.Windows.Forms.TextBox();
            this.rendezésToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.megyeToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.tipusToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.ujAblakToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.menuStrip1.SuspendLayout();
            this.tableLayoutPanel1.SuspendLayout();
            this.groupBox1.SuspendLayout();
            this.SuspendLayout();
            // 
            // menuStrip1
            // 
            this.menuStrip1.GripMargin = new System.Windows.Forms.Padding(2, 2, 0, 2);
            this.menuStrip1.ImageScalingSize = new System.Drawing.Size(24, 24);
            this.menuStrip1.Items.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.fájlToolStripMenuItem,
            this.rendezésToolStripMenuItem,
            this.ujAblakToolStripMenuItem});
            this.menuStrip1.Location = new System.Drawing.Point(0, 0);
            this.menuStrip1.Name = "menuStrip1";
            this.menuStrip1.Size = new System.Drawing.Size(800, 33);
            this.menuStrip1.TabIndex = 0;
            this.menuStrip1.Text = "menuStrip1";
            // 
            // fájlToolStripMenuItem
            // 
            this.fájlToolStripMenuItem.DropDownItems.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.megnyitásToolStripMenuItem});
            this.fájlToolStripMenuItem.Name = "fájlToolStripMenuItem";
            this.fájlToolStripMenuItem.Size = new System.Drawing.Size(53, 32);
            this.fájlToolStripMenuItem.Text = "Fájl";
            // 
            // megnyitásToolStripMenuItem
            // 
            this.megnyitásToolStripMenuItem.Name = "megnyitásToolStripMenuItem";
            this.megnyitásToolStripMenuItem.Size = new System.Drawing.Size(270, 34);
            this.megnyitásToolStripMenuItem.Text = "Megnyitás";
            this.megnyitásToolStripMenuItem.Click += new System.EventHandler(this.megnyitásToolStripMenuItem_Click);
            // 
            // listBox_telepulesek
            // 
            this.listBox_telepulesek.Dock = System.Windows.Forms.DockStyle.Left;
            this.listBox_telepulesek.FormattingEnabled = true;
            this.listBox_telepulesek.ItemHeight = 20;
            this.listBox_telepulesek.Location = new System.Drawing.Point(0, 33);
            this.listBox_telepulesek.Name = "listBox_telepulesek";
            this.listBox_telepulesek.Size = new System.Drawing.Size(184, 417);
            this.listBox_telepulesek.TabIndex = 1;
            this.listBox_telepulesek.SelectedIndexChanged += new System.EventHandler(this.listBox_telepulesek_SelectedIndexChanged);
            // 
            // tableLayoutPanel1
            // 
            this.tableLayoutPanel1.ColumnCount = 1;
            this.tableLayoutPanel1.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 50F));
            this.tableLayoutPanel1.Controls.Add(this.groupBox1, 0, 0);
            this.tableLayoutPanel1.Dock = System.Windows.Forms.DockStyle.Fill;
            this.tableLayoutPanel1.Location = new System.Drawing.Point(184, 33);
            this.tableLayoutPanel1.Name = "tableLayoutPanel1";
            this.tableLayoutPanel1.RowCount = 2;
            this.tableLayoutPanel1.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 50F));
            this.tableLayoutPanel1.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 50F));
            this.tableLayoutPanel1.Size = new System.Drawing.Size(616, 417);
            this.tableLayoutPanel1.TabIndex = 2;
            // 
            // groupBox1
            // 
            this.groupBox1.Controls.Add(this.textBox_lakossag);
            this.groupBox1.Controls.Add(this.textBox_megye);
            this.groupBox1.Controls.Add(this.textBox_helysegnev);
            this.groupBox1.Controls.Add(this.label3);
            this.groupBox1.Controls.Add(this.label2);
            this.groupBox1.Controls.Add(this.label1);
            this.groupBox1.Dock = System.Windows.Forms.DockStyle.Fill;
            this.groupBox1.Location = new System.Drawing.Point(3, 3);
            this.groupBox1.Name = "groupBox1";
            this.groupBox1.Size = new System.Drawing.Size(610, 202);
            this.groupBox1.TabIndex = 0;
            this.groupBox1.TabStop = false;
            this.groupBox1.Text = "Kiválasztott település";
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(52, 42);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(88, 20);
            this.label1.TabIndex = 0;
            this.label1.Text = "helységnév";
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Location = new System.Drawing.Point(52, 84);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(56, 20);
            this.label2.TabIndex = 0;
            this.label2.Text = "megye";
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.Location = new System.Drawing.Point(56, 128);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(72, 20);
            this.label3.TabIndex = 1;
            this.label3.Text = "lakosság";
            // 
            // textBox_helysegnev
            // 
            this.textBox_helysegnev.Location = new System.Drawing.Point(209, 35);
            this.textBox_helysegnev.Name = "textBox_helysegnev";
            this.textBox_helysegnev.Size = new System.Drawing.Size(232, 26);
            this.textBox_helysegnev.TabIndex = 2;
            // 
            // textBox_megye
            // 
            this.textBox_megye.Location = new System.Drawing.Point(209, 84);
            this.textBox_megye.Name = "textBox_megye";
            this.textBox_megye.Size = new System.Drawing.Size(232, 26);
            this.textBox_megye.TabIndex = 2;
            // 
            // textBox_lakossag
            // 
            this.textBox_lakossag.Location = new System.Drawing.Point(209, 125);
            this.textBox_lakossag.Name = "textBox_lakossag";
            this.textBox_lakossag.Size = new System.Drawing.Size(232, 26);
            this.textBox_lakossag.TabIndex = 2;
            // 
            // rendezésToolStripMenuItem
            // 
            this.rendezésToolStripMenuItem.DropDownItems.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.megyeToolStripMenuItem,
            this.tipusToolStripMenuItem});
            this.rendezésToolStripMenuItem.Name = "rendezésToolStripMenuItem";
            this.rendezésToolStripMenuItem.Size = new System.Drawing.Size(102, 29);
            this.rendezésToolStripMenuItem.Text = "Rendezés";
            // 
            // megyeToolStripMenuItem
            // 
            this.megyeToolStripMenuItem.Name = "megyeToolStripMenuItem";
            this.megyeToolStripMenuItem.Size = new System.Drawing.Size(270, 34);
            this.megyeToolStripMenuItem.Text = "megye";
            this.megyeToolStripMenuItem.Click += new System.EventHandler(this.megyeToolStripMenuItem_Click);
            // 
            // tipusToolStripMenuItem
            // 
            this.tipusToolStripMenuItem.Name = "tipusToolStripMenuItem";
            this.tipusToolStripMenuItem.Size = new System.Drawing.Size(270, 34);
            this.tipusToolStripMenuItem.Text = "tipus";
            // 
            // ujAblakToolStripMenuItem
            // 
            this.ujAblakToolStripMenuItem.Name = "ujAblakToolStripMenuItem";
            this.ujAblakToolStripMenuItem.Size = new System.Drawing.Size(89, 29);
            this.ujAblakToolStripMenuItem.Text = "uj ablak";
            this.ujAblakToolStripMenuItem.Click += new System.EventHandler(this.ujAblakToolStripMenuItem_Click);
            // 
            // FormMain
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(9F, 20F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(800, 450);
            this.Controls.Add(this.tableLayoutPanel1);
            this.Controls.Add(this.listBox_telepulesek);
            this.Controls.Add(this.menuStrip1);
            this.MainMenuStrip = this.menuStrip1;
            this.Name = "FormMain";
            this.Text = "Magyarországi települések";
            this.menuStrip1.ResumeLayout(false);
            this.menuStrip1.PerformLayout();
            this.tableLayoutPanel1.ResumeLayout(false);
            this.groupBox1.ResumeLayout(false);
            this.groupBox1.PerformLayout();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.MenuStrip menuStrip1;
        private System.Windows.Forms.ToolStripMenuItem fájlToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem megnyitásToolStripMenuItem;
        private System.Windows.Forms.ListBox listBox_telepulesek;
        private System.Windows.Forms.TableLayoutPanel tableLayoutPanel1;
        private System.Windows.Forms.GroupBox groupBox1;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Label label3;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.TextBox textBox_megye;
        private System.Windows.Forms.TextBox textBox_helysegnev;
        private System.Windows.Forms.TextBox textBox_lakossag;
        private System.Windows.Forms.ToolStripMenuItem rendezésToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem megyeToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem tipusToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem ujAblakToolStripMenuItem;
    }
}

