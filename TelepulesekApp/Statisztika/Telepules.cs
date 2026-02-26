using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace Statisztika
{
    public class Telepules
    {
        public string helysegnev;
        public string tipus;
        public string megye;
        public string jaras;
        public string jarasSzekhely;
        public int terulet;
        public int lakossag;
        public int lakosokszama;

        override public string ToString()
        {
            return helysegnev;
        }
    }
}
