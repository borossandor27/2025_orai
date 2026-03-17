using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp
{
    internal class Fa
    {
        public int Azon { get; set; }
        public string Faj { get; set; }
        public int Kormeret { get; set; }
        public int TelepulesId { get; set; }
        public int MeresEve { get; set; }
        public string TelepulesNev { get; set; }

        public Fa(string sor)
        {
            // "azon","faj","kormeret","telepules_id","meres"
            string[] adatok = sor.Replace("\"", "").Split(';');
            Azon = int.Parse(adatok[0]);
            Faj = adatok[1];
            Kormeret = int.Parse(adatok[2]);

            TelepulesId = int.Parse(adatok[3]);
            MeresEve = int.Parse(adatok[4]);
            TelepulesNev = string.Empty;

        }

    }
}
