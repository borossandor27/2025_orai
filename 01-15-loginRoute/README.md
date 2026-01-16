# Védett lapok

Figyeljük, hogy van-e belépett felhasználó és ettől tesszük függővé a hozzáférést bizonyos oldalakhoz.

## Feladat

1. Hozz létre egy új oldalt `Profile` néven a `src/pages` könyvtárban, amely csak akkor érhető el, ha a felhasználó be van jelentkezve.
2. A `Profile` oldal jelenítse meg a bejelentkezett felhasználó nevét és email címét.
3. Ha a felhasználó nincs bejelentkezve, akkor a `Profile` oldalra való navigáció esetén irányítsd át a felhasználót a `Login` oldalra.
4. A `Login` oldalon legyen egy gomb, amely szimulálja a bejelentkezést (pl. állítsd be a felhasználó adatait egy kontextusban vagy globális állapotban).
5. Miután a felhasználó bejelentkezett, irányítsd vissza őt a `Profile` oldalra.
6. Győződj meg róla, hogy a bejelentkezési állapot megmarad az oldalak közötti navigáció során.
7. Bejelentkezés után a navigációban jelenjen meg egy `Logout` gomb, amely kijelentkezteti a felhasználót és visszairányítja a `Login` oldalra.
8. Teszteld az alkalmazást, hogy megbizonyosodj arról, hogy a védett oldalak csak bejelentkezett felhasználók számára érhetők el, és a kijelentkezés megfelelően működik.
## Megoldás
A feladat megoldásához a következő lépéseket kell követned:
1. Hozz létre egy `Profile` komponenst a `src/pages` könyvtárban.
2. Hozz létre egy AuthContext-et a felhasználói állapot kezeléséhez. ez tartalmazza a bejelentkezési és kijelentkezési funkciókat.