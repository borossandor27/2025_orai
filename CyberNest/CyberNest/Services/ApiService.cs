using System.Net.Http;
using System.Text;
using System.Text.Json;


namespace CyberNest.Services
{


    public class ApiService<T> where T : class
    {
        private readonly string _baseUrl;
        private static readonly HttpClient _client = new HttpClient();

        private static readonly JsonSerializerOptions _jsonOptions = new JsonSerializerOptions
        {
            PropertyNameCaseInsensitive = true,
            WriteIndented = false
        };

        public ApiService(string baseUrl)
        {
            _baseUrl = baseUrl.EndsWith("/") ? baseUrl : baseUrl + "/";
        }

        // GET: Összes lekérése
        public async Task<List<T>> GetAllAsync(string endpoint)
        {
            var response = await _client.GetAsync(_baseUrl + endpoint);

            if (!response.IsSuccessStatusCode)
                return new List<T>();

            var json = await response.Content.ReadAsStringAsync();
            return JsonSerializer.Deserialize<List<T>>(json, _jsonOptions) ?? new List<T>();
        }

        // POST: Létrehozás
        public async Task<bool> CreateAsync(string endpoint, T item)
        {
            var json = JsonSerializer.Serialize(item, _jsonOptions);
            var content = new StringContent(json, Encoding.UTF8, "application/json");

            var response = await _client.PostAsync(_baseUrl + endpoint, content);
            return response.IsSuccessStatusCode;
        }

        // PUT: Frissítés
        public async Task<bool> UpdateAsync(string endpoint, int id, T item)
        {
            var json = JsonSerializer.Serialize(item, _jsonOptions);
            var content = new StringContent(json, Encoding.UTF8, "application/json");

            var response = await _client.PutAsync($"{_baseUrl}{endpoint}/{id}", content);
            return response.IsSuccessStatusCode;
        }

        // DELETE: Törlés
        public async Task<bool> DeleteAsync(string endpoint, int id)
        {
            var response = await _client.DeleteAsync($"{_baseUrl}{endpoint}/{id}");
            return response.IsSuccessStatusCode;
        }
    }

}
