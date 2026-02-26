using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.IO;

namespace TelepulesekApp
{
    public partial class FormMain : Form
    {
        BindingList<Telepules> telepulesek = new BindingList<Telepules>();

        public FormMain()
        {
            InitializeComponent();
        }

        private void megnyitásToolStripMenuItem_Click(object sender, EventArgs e)
        {
            string fileName = "telepulesek.csv";
            if (!File.Exists(fileName))
            {
                MessageBox.Show("A fájl nem található: " + fileName);
                return;
            }
            try
            {
                using (StreamReader sr = new StreamReader(fileName))
                {
                    sr.ReadLine(); // olvassa az első sort és a következő sor elejére áll
                    while (!sr.EndOfStream)
                    {
                        string[] adatok = sr.ReadLine().Split(';');
                        Telepules t = new Telepules();
                        t.helysegnev = adatok[0];
                        t.tipus = adatok[1];
                        t.megye = adatok[2];
                        t.jaras = adatok[3];
                        t.jarasSzekhely = adatok[4];
                        t.terulet = int.Parse(adatok[5].Replace(" ", ""));
                        t.lakossag = int.Parse(adatok[6]);
                        t.lakosokszama = int.Parse(adatok[7]);

                        telepulesek.Add(t);
                    }
                }
                listBox_telepulesek.DataSource = telepulesek;
                listBox_telepulesek.DisplayMember = "helysegnev";
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message);

            }
        }

        private void listBox_telepulesek_SelectedIndexChanged(object sender, EventArgs e)
        {
            if (listBox_telepulesek.SelectedIndex < 0)
            {
                return;
            }
            Telepules t = (Telepules)listBox_telepulesek.SelectedItem;
            textBox_helysegnev.Text = t.helysegnev;
            textBox_megye.Text = t.megye;
            textBox_lakossag.Text = t.lakossag.ToString();
        }

        private void megyeToolStripMenuItem_Click(object sender, EventArgs e)
        {
            listBox_telepulesek.DataSource = telepulesek.OrderBy(t => t.megye).ToList();
        }

        private void ujAblakToolStripMenuItem_Click(object sender, EventArgs e)
        {
            Form_terkep form_terkep = new Form_terkep();
            form_terkep.ShowDialog(); // Modal ablak megnyitása
        }
    }
}
