let gyumolcsokJSON = '{ "neve": "alma", "ara": 200, "mennyiseg": 5 }';
console.log(gyumolcsokJSON);
console.log(typeof gyumolcsokJSON);
let gyumolcsokObj = JSON.parse(gyumolcsokJSON);
console.log(typeof gyumolcsokObj);
console.log(gyumolcsokObj);
console.log(gyumolcsokObj.neve);
console.log(gyumolcsokObj.ara);

console.log(gyumolcsokObj.mennyiseg);
// újra szöveggé alakítás továbbítás előtt
let gyumolcsokJSONujra = JSON.stringify(gyumolcsokObj);
console.log(gyumolcsokJSONujra);