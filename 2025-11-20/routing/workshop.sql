-- Adatbázis létrehozása
CREATE DATABASE IF NOT EXISTS webshop CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;



-- Adatbázis használata
USE webshop;



-- 1. Kategóriák táblája (önreferáló kapcsolattal a hierarchiához)
CREATE TABLE Categories (
    Kategoria_ID INT AUTO_INCREMENT PRIMARY KEY,
    Kategoria_Nev VARCHAR(100) NOT NULL,
    Szulo_Kategoria_ID INT NULL,
    FOREIGN KEY (Szulo_Kategoria_ID) REFERENCES Categories(Kategoria_ID)
);



-- 2. Vásárlók táblája
CREATE TABLE Customers (
    Vasarlo_ID INT AUTO_INCREMENT PRIMARY KEY,
    Nev VARCHAR(100) NOT NULL,
    Email VARCHAR(100) UNIQUE NOT NULL,
    Cim TEXT NOT NULL,
    Regisztracio_Datuma DATETIME DEFAULT CURRENT_TIMESTAMP,
    Telefon VARCHAR(20),
    Jelszo_Hash VARCHAR(255) NOT NULL -- Biztonsági okokból hash-elt jelszó
);



-- 3. Termékek táblája
CREATE TABLE Products (
    Termek_ID INT AUTO_INCREMENT PRIMARY KEY,
    Nev VARCHAR(200) NOT NULL,
    Leiras TEXT,
    Ar DECIMAL(10, 2) NOT NULL CHECK (Ar >= 0),
    Kesztlet INT NOT NULL DEFAULT 0 CHECK (Kesztlet >= 0),
    Kategoria_ID INT,
    Kep_URL VARCHAR(500),
    Aktiv BOOLEAN DEFAULT TRUE,
    Letrehozas_Datuma DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (Kategoria_ID) REFERENCES Categories(Kategoria_ID)
);



-- 4. Rendelések táblája
CREATE TABLE Orders (
    Rendeles_ID INT AUTO_INCREMENT PRIMARY KEY,
    Vasarlo_ID INT NOT NULL,
    Rendeles_Datuma DATETIME DEFAULT CURRENT_TIMESTAMP,
    Szallitasi_Cim TEXT NOT NULL,
    Statusz ENUM('feldolgozás alatt', 'feldolgozva', 'kiszállítás alatt', 'kiszállítva', 'teljesítve', 'törölve') DEFAULT 'feldolgozás alatt',
    Fizetesi_Mod ENUM('bankkártya', 'utalás', 'készpénz', 'átutalás'),
    Vegosszeg DECIMAL(10, 2) NOT NULL CHECK (Vegosszeg >= 0),
    FOREIGN KEY (Vasarlo_ID) REFERENCES Customers(Vasarlo_ID)
);



-- 5. Rendelési tételek táblája
CREATE TABLE Order_Items (
    Tetel_ID INT AUTO_INCREMENT PRIMARY KEY,
    Rendeles_ID INT NOT NULL,
    Termek_ID INT NOT NULL,
    Mennyiseg INT NOT NULL CHECK (Mennyiseg > 0),
    Egysegar DECIMAL(10, 2) NOT NULL CHECK (Egysegar >= 0),
    FOREIGN KEY (Rendeles_ID) REFERENCES Orders(Rendeles_ID) ON DELETE CASCADE,
    FOREIGN KEY (Termek_ID) REFERENCES Products(Termek_ID),
    UNIQUE KEY (Rendeles_ID, Termek_ID) -- Egy termék csak egyszer szerepelhet egy rendelésben
);



-- Indexek létrehozása a teljesítmény érdekében
CREATE INDEX idx_customers_email ON Customers(Email);
CREATE INDEX idx_products_category ON Products(Kategoria_ID);
CREATE INDEX idx_products_active ON Products(Aktiv);
CREATE INDEX idx_orders_customer_date ON Orders(Vasarlo_ID, Rendeles_Datuma);
CREATE INDEX idx_orders_status ON Orders(Statusz);
CREATE INDEX idx_order_items_order ON Order_Items(Rendeles_ID);
CREATE INDEX idx_order_items_product ON Order_Items(Termek_ID);
CREATE INDEX idx_categories_parent ON Categories(Szulo_Kategoria_ID);



-- Mintaadatok beszúrása (opcionális)
INSERT INTO Categories (Kategoria_Nev, Szulo_Kategoria_ID) VALUES
('Elektronika', NULL),
('Számítástechnika', 1),
('Okoseszközök', 1),
('Könyvek', NULL),
('Szépirodalom', 4),
('Informatika', 4);



INSERT INTO Customers (Nev, Email, Cim, Telefon, Jelszo_Hash) VALUES
('Kovács Anna', 'anna.kovacs@email.hu', '1234 Budapest, Petőfi Sándor utca 12.', '+3612345678', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi'),
('Nagy Péter', 'peter.nagy@email.hu', '5678 Debrecen, Kossuth Lajos utca 45.', '+3620345678', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi');



INSERT INTO Products (Nev, Leiras, Ar, Kesztlet, Kategoria_ID) VALUES
('ASUS Laptop', 'Magas teljesítményű laptop programozáshoz', 299990.00, 5, 2),
('Okosóra', 'Sportokosóra egészségmonitorozással', 49990.00, 10, 3),
('Java Programozás', 'Alapfokú Java programozás tankönyv', 8990.00, 20, 6);



INSERT INTO Orders (Vasarlo_ID, Szallitasi_Cim, Statusz, Fizetesi_Mod, Vegosszeg) VALUES
(1, '1234 Budapest, Petőfi Sándor utca 12.', 'kiszállítás alatt', 'bankkártya', 349980.00),
(2, '5678 Debrecen, Kossuth Lajos utca 45.', 'feldolgozva', 'utalás', 49990.00);



INSERT INTO Order_Items (Rendeles_ID, Termek_ID, Mennyiseg, Egysegar) VALUES
(1, 1, 1, 299990.00),
(1, 2, 1, 49990.00),
(2, 2, 1, 49990.00);



-- Nézet létrehozása a rendelés részleteinek megjelenítésére
CREATE VIEW Rendeles_Reszletek AS
SELECT 
    o.Rendeles_ID,
    o.Rendeles_Datuma,
    c.Nev AS Vasarlo_Neve,
    c.Email,
    o.Szallitasi_Cim,
    o.Statusz,
    o.Vegosszeg,
    COUNT(oi.Tetel_ID) AS Termekek_Szama
FROM Orders o
JOIN Customers c ON o.Vasarlo_ID = c.Vasarlo_ID
LEFT JOIN Order_Items oi ON o.Rendeles_ID = oi.Rendeles_ID
GROUP BY o.Rendeles_ID;



-- Stored procedure a készlet frissítéséhez
DELIMITER //
CREATE PROCEDURE KesztletFrissites(IN termek_id INT, IN eladott_mennyiseg INT)
BEGIN
    UPDATE Products 
    SET Kesztlet = Kesztlet - eladott_mennyiseg 
    WHERE Termek_ID = termek_id AND Kesztlet >= eladott_mennyiseg;
END//
DELIMITER ;



-- Trigger a rendelés teljes összegének automatikus számításához
DELIMITER //
CREATE TRIGGER Rendeles_Osszeg_Frissites
AFTER INSERT ON Order_Items
FOR EACH ROW
BEGIN
    UPDATE Orders o
    SET o.Vegosszeg = (
        SELECT SUM(oi.Mennyiseg * oi.Egysegar)
        FROM Order_Items oi
        WHERE oi.Rendeles_ID = NEW.Rendeles_ID
    )
    WHERE o.Rendeles_ID = NEW.Rendeles_ID;
END//
DELIMITER ;