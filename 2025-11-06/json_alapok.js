let jsonData = {
  "name": "John",
  "age": 30,
  "city": "New York"
};

let json_string=JSON.stringify(jsonData); // továbbítás előtt
let Megint_object=JSON.parse(json_string); // kapott adatok

let json_array=[
  {"termek":"Alma","ar":200},
  {"termek":"Korte","ar":250},
  {"termek":"Szilva","ar":300}
];

json_array.forEach(item =>  
  console.log({"termek": item.termek, "ar": item.ar * 1.27})
);

let emelt_arak = json_array.map(item => {
  return {"termek": item.termek, "ar": item.ar * 1.27};
});
console.log(emelt_arak);