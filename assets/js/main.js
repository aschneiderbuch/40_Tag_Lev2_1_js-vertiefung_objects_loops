console.log("test");



let edelMetallPreise = [
    { name: "Gold", preiseGramEuro: 42.91, veraenderung: "+0.12%" },
    { name: "Silber", preiseGramEuro: 0.51, veraenderung: "+1.02%" },
    { name: "Platin", preiseGramEuro: 25.74, veraenderung: "+0.41%" },
    { name: "Palladium", preiseGramEuro: 50.93, veraenderung: "0.00%" },
    { name: "Rhodium", preiseGramEuro: 160.12, veraenderung: "-0.10%" },
    { name: "Iridium", preiseGramEuro: 42.84, veraenderung: "0.00%" },
    { name: "Ruthenium", preiseGramEuro: 7.36, veraenderung: "0.00%" },
    { name: "Rhenium", preiseGramEuro: 37.22, veraenderung: "-0.53%" },
    { name: "Osmium", preiseGramEuro: 11.54, veraenderung: "0.00%" }
];


console.log(edelMetallPreise);
console.table(edelMetallPreise);

// push alle namen in ein neues Array mit forEach
const alleNamen = [];
edelMetallPreise.forEach((i) =>  { alleNamen.push(`${i.name} - <br>`);
    console.log(i.name);})
console.log(alleNamen);
console.table(alleNamen);

document.write(alleNamen);

const alleNamen2 = [];
for (let i in alleNamen) {
    alleNamen2.push(alleNamen[i]);
    console.log(alleNamen2)
    console.table(alleNamen2);
}

// mit .map auf alle Namen
edelMetallPreise.map((i) => {
     (i.name)                   // gibt kein ganzes Array   nur String ausgabe  weil er druchloopt
    console.log(i.name);
})

edelMetallPreise.map((i) => {
    console.log(i.name)
    return (i.name)   // mit return Array wird erzeugt
})


// alle Preise in neues Array pushen mit forEach
const allePreiseGramEuro = [];
edelMetallPreise.forEach((i) =>{
    allePreiseGramEuro.push(i.preiseGramEuro);
})
document.write(allePreiseGramEuro);
console.table(allePreiseGramEuro);
console.log(allePreiseGramEuro);

// .map bei preise Gram Euro
edelMetallPreise.map((i) =>{
     console.log(i.preiseGramEuro + " ====== " + "<br>  </br>");
     document.write(i.preiseGramEuro + " ====== " + "<br>  </br>")
    return i.preiseGramEuro;
})
console.log(edelMetallPreise);

allePreiseGramEuro.map((i) => {
    console.log(i);
    document.write(i + " +++ "  ); 
})

// alle Veränderungen
const alleVeraenderungen = [];
edelMetallPreise.forEach((i) => {
    alleVeraenderungen.push(i.veraenderung);
    console.log(i.veraenderung);
    document.write(i.veraenderung + " " );
})


// .map veränderung
alleVeraenderungen.map((i) => {
    console.log(i);
   return document.write(i + " >< "  ) })
    


   // .filter auf preiseGramEuro und alle >50
   edelMetallPreise.filter((i) => {
    if (i.preiseGramEuro > 50) {
        console.log(i.preiseGramEuro)
        document.write(" <br> " + i.preiseGramEuro + " == > 50 "  )}
   })

// in Tabelle Name Preis und Veränderungen rein
   edelMetallPreise.forEach((i) => {
    document.querySelector("table").innerHTML +=
    `<tr><td>${i.name}</td><td>${i.preiseGramEuro}</td><td>${i.veraenderung}</td></tr>`
   })