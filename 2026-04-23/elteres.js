function scopeBemutato() {
  if (true) {
    var fuggvenySzintu = "Én bárhol látható vagyok a függvényen belül";
    let blokkSzintu = "Én csak ezen a blokkon (kapcsos zárójelen) belül létezem";
    
    console.log("Blokkon belül:");
    console.log(fuggvenySzintu); // Működik
    console.log(blokkSzintu);    // Működik
  }

  console.log("--- Blokkon kívül ---");

  // A 'var' látható marad, mert a függvényen belül van
  console.log(fuggvenySzintu); 

  // A 'let' hibát dob, mert a blokk véget ért
  try {
    console.log(blokkSzintu);
  } catch (error) {
    console.log("Hiba: blokkSzintu nem definiált!"); 
  }
}

scopeBemutato();