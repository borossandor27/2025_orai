using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Statisztika
{
    internal class Program
    {
        static List<Telepules> telepulesek = new List<Telepules>();
        static void Main(string[] args)
        {
            betoltes();
            Console.WriteLine($"Beolvasott sorok száma: {telepulesek.Count}");
            Console.WriteLine($"települések száma megyénként:");
            var stat=telepulesek.Where(c => !string.IsNullOrEmpty(c.megye)).GroupBy(a => a.megye).Select(b => new { megye = b.Key, db = b.Count() });
            foreach (var item in stat)
            {
                Console.WriteLine($"\t{item.megye}: {item.db}");
            }
            Console.WriteLine("\nProgram vége!");
            Console.ReadLine();
        }

        private static void betoltes()
        {
            string fileName = "telepulesek.csv";
            if (!File.Exists(fileName))
            {
                Console.WriteLine("Hiányzik a forrásfájl!");
                Environment.Exit(1);
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
               
            }
            catch (Exception ex)
            {
                Console.WriteLine("Hiba a beolvasáskor!");

            }
        }
    }
}
