using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
namespace jelszo_ellenorzo
{
    class jelszoellenorzes
    {
        static void Main(string[] args)
        {
            int[] szam = { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 };
            string[] abc = { "a", "á", "b", "c", "d", "e", "é", "f", "g", "h", "i", "í", "j", "k", "l", "m", "n", "o", "ó", "ö", "ő", "p", "q", "r", "s", "t", "u", "ú", "ü", "ű", "v", "w", "x","y", "z" };
            bool hossz = false;
            bool betukarakter = false;
            bool szamkarakter = false;

            bool biztonsagos = false;
            Console.Write("Jelszó: ");
            string bekert = Console.ReadLine();
            while (true)
            {   
                for (int i = 0; i < bekert.Length; i++)
                {
                    for (int j = 0; j < abc.Length; j++)
                    {
                        if (Convert.ToString(bekert[i])==Convert.ToString(abc[j]))
                        {
                            betukarakter = true;
                            break;
                        }
                        else
                        {
                            betukarakter = false;
                        }
                    }
                    if (betukarakter ==true)
                    {
                        break;
                    }
                }
                for (int i = 0; i < bekert.Length; i++)
                {
                    for (int j = 0; j < szam.Length; j++)
                    {
                        if (Convert.ToString(bekert[i]) == Convert.ToString(szam[j]))
                        {
                            szamkarakter = true;
                            break;
                        }
                        else
                        {
                            szamkarakter = false;
                        }
                    }
                    if (szamkarakter == true)
                    {
                        break;
                    }
                }
                if (bekert.Length >= 6)
                {
                    hossz = true;
                }
                else
                {
                    hossz = false;
                }

                if (!hossz || !betukarakter || !szamkarakter)
                {
                    biztonsagos = false;
                }
                else
                {
                    biztonsagos = true;
                }
                if (biztonsagos)
                {
                    Console.WriteLine("Biztonságos jelszó");
                    break;
                }
                if (!hossz)
                {
                    Console.WriteLine("A jelszónak legalább 6 karakter hosszúnak kell lennie!");
                }
                if (!betukarakter)
                {
                    Console.WriteLine("A biztonságos jelszónak tartalmaznia kell legalább egy betűt!");
                }
                if (!szamkarakter)
                {
                    Console.WriteLine("A biztonságos jelszónak tartalmaznia kell legalább egy számot!");
                }
                Console.Write("Jelszó: ");
                bekert = Console.ReadLine();
            }
            Console.ReadLine();
        }
    }
}
