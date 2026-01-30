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
using WindowsFormsApp1.Model;

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

        private void listBox_diakok_SelectedIndexChanged_1(object sender, EventArgs e)
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

        private async void button_Create_Click(object sender, EventArgs e)
        {
            // adatellenőrzés
            // adatok átalakítása JSON formátumra
            Diak ujDiak = new Diak
            {
                TeljesNev = textBox_TeljesNev.Text,
                Email = textBox_Email.Text
            };
            // POST kérés küldése az API-nak
            try
            {
                long diakid = await insertDiak(ujDiak);
                if (diakid >= 0)
                {
                    textBox_id.Text = diakid.ToString();
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message);
            }
        }

        private async Task<long> insertDiak(Diak ujDiak)
        {
            long ujId = -1;
            try
            {
                var jsonContent = JsonConvert.SerializeObject(ujDiak);
                var httpContent = new StringContent(jsonContent, Encoding.UTF8, "application/json");
                var response = await httpClient.PostAsync(apiUrl, httpContent);
                //response.EnsureSuccessStatusCode();
                if (!response.IsSuccessStatusCode)
                {
                    throw new Exception("API hiba: " + response.StatusCode);
                }
                var responseString = await response.Content.ReadAsStringAsync(); // visszaküldi az újonnan létrehozott diák ID-ját
                ujId = JsonConvert.DeserializeObject<Diak>(responseString).Id;
                MessageBox.Show("Sikeres létrehozás! Új diák ID: " + ujId);
                await getAllData();
                return ujId;
            }
            catch (Exception ex)
            {
                throw new Exception("Hiba a diák létrehozása során: " + ex.Message);
            }
        }

        private async void button_Update_Click(object sender, EventArgs e)
        {
            // Ellenőrzés
            // Adatmezők beolvasása
            Diak frissitettDiak = new Diak
            {
                Id = long.Parse(textBox_id.Text),
                TeljesNev = textBox_TeljesNev.Text,
                Email = textBox_Email.Text
            };
            try
            {
                bool sikeres = await updateDiak(frissitettDiak);
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message);
            }
        }

        private async Task<bool> updateDiak(Diak frissitettDiak)
        {
            bool sikeres = false;
            string jsonContent = JsonConvert.SerializeObject(frissitettDiak);
            var httpContent = new StringContent(jsonContent, Encoding.UTF8, "application/json");
            var response = await httpClient.PutAsync(apiUrl + "/" + frissitettDiak.Id, httpContent);
            if (!response.IsSuccessStatusCode)
            {
                throw new Exception("API hiba: " + response.StatusCode);

            }
            else
            {
                MessageBox.Show("Sikeres frissítés!");
                sikeres = true;
            }
            await getAllData();
            return sikeres;
        }
    }
}
