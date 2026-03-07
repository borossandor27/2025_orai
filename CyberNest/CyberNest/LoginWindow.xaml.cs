using CyberNest;
using CyberNest.Services;
using System.Net.Http;
using System.Net.Http.Json;
using System.Windows;

namespace CyberNest
{
    /// <summary>
    /// Interaction logic for LoginWindow.xaml
    /// </summary>
    public partial class LoginWindow : Window
    {
        private static readonly HttpClient _client = new HttpClient();

        public LoginWindow() => InitializeComponent();

        private async void LoginButton_Click(object sender, RoutedEventArgs e)
        {
            var loginData = new
            {
                elerhetoseg = EmailInput.Text,
                jelszo = PasswordInput.Password
            };

            try
            {
                var response = await _client.PostAsJsonAsync("http://localhost:5050/api/auth/login", loginData);

                if (response.IsSuccessStatusCode)
                {
                    var result = await response.Content.ReadFromJsonAsync<AdminData>();

                    if (result != null && result.User.Role == "admin")
                    {
                        // Itt elmentheted a token-t későbbi használatra
                        // pl. Properties.Settings.Default.Token = result.Token;
                        AdminData admin = (AdminData) result;
                        AuthService.Token = admin.Token;
                        this.DialogResult = true;

                        this.Close();
                    }
                    else
                    {
                        MessageBox.Show("Nincs admin jogosultságod!", "Hiba", MessageBoxButton.OK, MessageBoxImage.Warning);
                    }
                }
                else
                {
                    var error = await response.Content.ReadAsStringAsync();
                    MessageBox.Show($"Hibás adatok! Szerver válasz: {error}", "Hiba", MessageBoxButton.OK, MessageBoxImage.Error);
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show($"Szerver hiba: {ex.Message}", "Hiba", MessageBoxButton.OK, MessageBoxImage.Error);
            }
        }
    }
}
