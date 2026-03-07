using System.Windows;
using CyberNest.Models;
using CyberNest.Services;

namespace CyberNest
{
    public partial class MainWindow : Window
    {
        private readonly ApiService<Idopont> _apiService;

        public MainWindow()
        {
            InitializeComponent();
            _apiService = new ApiService<Idopont>("http://localhost:5050/api/");
            LoadData();
        }

        private async void LoadData()
        {
            var adatok = await _apiService.GetAllAsync("idopont");
            if (adatok != null)
            {
                IdopontokGrid.ItemsSource = adatok;
            }
            else
            {
                MessageBox.Show("Nem sikerült az adatok letöltése!");
            }
        }
    }
}