using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Globalization;

namespace CyberNest.Models
{
    public class Idopont
    {
        public int Id { get; set; }
        public int Eszkoz_id { get; set; }
        public DateTime Atvetel_datum { get; set; }
        public string Atvetel_idopont { get; set; }
        public string Statusz { get; set; }
        public string Cpu { get; set; }
        public string Ram { get; set; }
        public string Hdd { get; set; }
    }
}
