//premene

let cislo = 0;
let meno = "majk";

//konstanty

const url = "www.youtube.com";

//dat polia/arrays
/*
Accessing: array[index]
Adding/removing elements: .push(), .pop(), .shift(), .unshift()
Iterating: .forEach(), .map(), .filter(), .reduce()
Sorting: .sort()
*/
//dva typy deklaracie...
let pole = [];
let pole2 = new Array();

pole2.push(1,2,3,4);
console.log(pole2);
//vlozenie do pola cez index
pole[0] = 4;

//vlozenie do pola
pole.push(5,3,2,1);

console.log(pole);

//odcvakne ti pole od indexu 0 az po 2 nie vratane 2
let slicedPole = pole.slice(0,2);

console.log(slicedPole);
console.log(slicedPole.length);

let slovoPole = ["sigmujem", "na", "spseke"];
console.log(slovoPole);

//premeni ti pole na string |spoji|joine ti to, do zatvorky das cim to chces mat oddelene
let slovo = slovoPole.join(" ");
console.log(slovo);

//control flow

if(cislo == 0){
    console.log("helo");
}
else{
    console.log("niga");
}

//loops

for(let i = 0; i < 10; i++){
    console.log(i + "forloop");
}

while(cislo < 20){
    console.log(cislo + "whielup\n");
    cislo ++;
}

do{
    console.log(cislo + "dowhile\n");
    cislo ++;
}while(cislo < 40);


//funkcie

function pozdravSa(meno){
    console.log("Helo i am " + meno);
}

function prepisCislo(cislo){
    cislo = 4;
    return cislo;
}

//k tomuto na konci mas moj myslienkovy pochod
const add = (a,b) => {console.log(a+b)}

//vyvolanie funkcie

pozdravSa("Sigma");
add(2,8);

let cisielko = 6;
console.log(cisielko);
cisielko = prepisCislo(cisielko);
console.log(cisielko);


//mapa || key:value pairs
let hashmapa = new Map([
    ["Gogo", 18],
    ["Simon", 2],
    ["Majk", 50]
])

//pridas novy key value
hashmapa.set("Baro", 20);
//zoberes value z kluca
let vek = hashmapa.get("Baro");
//mozes takto updatnut napr value
hashmapa.set("Baro", vek+=1);
console.log(hashmapa);

//objekt

const ludia = {
    "Majk" : 20,
    "Sigma" : 10,
    "Ujo2" : 40,
}
console.log(ludia);
console.log(ludia["Majk"]);

//takto vytvoris novy key value
ludia["Gogo"] = 15;
//takto mozes zmenit hodnotu value, kus jednoduchsie jak v mape ale tak javascript moment
ludia["Majk"]++;

console.log(ludia);

//sposoby cyklovania cez objekt, celkom useful shi aj na take logicke programovanie lebo objekty/mapy su OP shit

for(let kluc in ludia){
    console.log(kluc, ludia[kluc] + "\n");
}

Object.keys(ludia).forEach(key => {
    console.log(key, ludia[key] + "\n");
})

Object.entries(ludia).forEach(([key, value]) => {
    console.log(key, value + "\n");
  });

//toto je specialna funkcia len pre mapy a nie objekty, dost sex
hashmapa.forEach((value, key) => {
    console.log(key, value);
  });
//objekt a mapa su podobny shi, ale v mape vies dat aj do values napr. funkcie alebo aj objekty.
//objekty maju len string a int dovoleny myslim



/*BONUS!! Cudoval som sa ze co znamena => pri funkciach v javascripte lebo nikde som sa s tym nestretol a zistil som ze je to vlastne dalsia
forma pisania funkcii v javascripte, s rozdielom ze nema vlastnu this hodnotu a bere ju z napr vonkajsej funkcie, taze vie to byt handy celkom

Syntax:

function add(a,b){
  return a+b;
}

add(a,b)

const add = (a,b) => {return a+b}

add(a,b)

Ale asi kukni GPT ked nevis toto this abo v skole vysvetlim

Dufam ze to je setko na js basics...
*/