# **Feladat: „ReceptTár” – React Router Gyakorló Projekt**

## **1. Bevezetés**

A feladatod egy többlapos receptböngésző alkalmazás elkészítése React keretrendszerben.  
A cél a **React Router (v6+)** magabiztos használata: útvonalak kezelése, dinamikus paraméterek átadása és a navigációs hook-ok alkalmazása.

---

## **2. Funkcionális elvárások (Útvonalak)**

Az alkalmazásnak az alábbi URL-struktúrát kell kezelnie:

| Útvonal | Megjelenítendő tartalom |
|--------|---------------------------|
| `/` | **Főoldal:** Üdvözlő szöveg és egy gomb, ami a receptekhez visz. |
| `/receptek` | **Listaoldal:** Az összes recept neve és kategóriája listázva. |
| `/receptek/:id` | **Részletek:** Egy konkrét recept leírása az ID alapján. |
| `/kereses` | **Kereső:** Egy input mező, ami query paraméterrel (`?nev=...`) szűr. |
| `/admin` | **Védett oldal:** Csak „bejelentkezve” látható, egyébként átirányít. |
| `*` | **404:** Hibaoldal, ha nem létező útvonalra téved a felhasználó. |

---

## **3. Technikai követelmények**

A megoldás során az alábbi eszközöket kell kötelezően használnod:

- `<BrowserRouter>`, `<Routes>`, `<Route>` – az alapvető struktúrához  
- `<NavLink>` – menüpontokhoz *(aktív állapot stílusozása kötelező)*  
- `useParams` – a recept részletes nézeténél az ID kinyeréséhez  
- `useNavigate` – „Vissza a listához” gomb megvalósításához  
- `useSearchParams` – a keresőoldalon a query paraméterek kezeléséhez  
- `Navigate` komponens – a védett `/admin` oldalról való átirányításhoz  

---

## **4. Segédadatok (Mock Data)**

Használd az alábbi adatstruktúrát a `receptek.js` fájlban vagy a fő komponensedben:

```js
const receptek = [
  {
    id: '1',
    nev: 'Bolognai spagetti',
    kateg: 'Olasz',
    leiras: 'Főzd ki a tésztát ... '
  },
  {
    id: '2',
    nev: 'Gulyásleves',
    kateg: 'Magyar',
    leiras: 'Pirítsd meg a hagymát ... '
  },
  {
    id: '3',
    nev: 'Sushi tál',
    kateg: 'Japán',
    leiras: 'Használj friss halat ... '
  }
];
```

---

## **5. Beadási feltételek**

- Az alkalmazás legyen **reszponzív** (alapszintű CSS).  
- Ne legyen **konzolhiba** navigáció közben.  
- A kód legyen **jól strukturált** (külön mappák a komponenseknek).

