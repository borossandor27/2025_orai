using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Configuration;
using System.Net.Http;
using Newtonsoft.Json;
using WindowsFormsApp1;

namespace WindowsFormsApp1
{
    public partial class Form_Main : Form
    {
        string apiUrl = ConfigurationManager.AppSettings["ApiUrl"];
        HttpClient httpClient = new HttpClient();
        BindingList<Diak> diakok = new BindingList<Diak>();
        public Form_Main()
        {
            InitializeComponent();
            //MessageBox.Show("konstruktor");
        }

        private void Form_Main_Load(object sender, EventArgs e)
        {
            
            getAllData();
        }

        async Task getAllData()
        {
            try
            {
                diakok.Clear();
                var response = await httpClient.GetAsync(apiUrl);
                if (!response.IsSuccessStatusCode)
                {
                    MessageBox.Show("API hiba: " + response.StatusCode);
                    return;
                }
                var jsonString = await response.Content.ReadAsStringAsync();
                var adatok = Diak.FromJson(jsonString);

                foreach (Diak d in adatok)
                {
                    diakok.Add(d);
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show("Hiba az adatok lekérése során: " + ex.Message);

            }
            listBox_diakok.DataSource = diakok;
        }

        private void listBox_diakok_SelectedIndexChanged(object sender, EventArgs e)
        {
            if (listBox_diakok.SelectedIndex >= 0)
            {
                Diak selectedDiak = (Diak)listBox_diakok.SelectedItem;
                textBox_id.Text = selectedDiak.Id.ToString();
                textBox_TeljesNev.Text = selectedDiak.TeljesNev;
                textBox_Email.Text = selectedDiak.Email;
                pictureBox_Diak.ImageLocation = selectedDiak.ImageUrl;
            }
        }
    }
}
