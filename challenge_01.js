
/*********   CODE CHALLENGE 1 **********/
 
/*
Geben Sie über eine Prompt-Anforderung eine Zahl ein
Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein
Berechnen Sie die Summe der Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
‘Die Summe der Zahlen ist: summe ‘
*/
/*
let number1, number2, number3;
number1 = prompt("Gib hier deine Zahl ein");
number2 = prompt("Gib hier eine weitere Zahl ein!");


number3 = +number1 + +number2;


console.log(typeof number1);
console.log(typeof number2);
console.log(typeof number3);

console.log("Die Summe deiner Addition is : " + number3 );
*/
// meine lösung
/*
let num1 = parseInt(prompt("gib deine Zahl ein "));
let num2 = parseInt(prompt("gib deine zweite Zahl ein"));

//addition der zwei zahlen

let sum = num1 + num2;

console.log("die Summe von " +num1+ " und " +num2+ " ist gleich " +sum);
*/

/*
//vorschau dozent 
// nicht richtige rechnnung
let a = prompt("bitte zahl eingeben");
let b = prompt("bitte eine zweite zahl eingeben");

console.log(typeof a);
console.log(typeof b);

let c = a + b;
console.log(" die summer der zahlen ist : " + c);
*/

/*
// lösung dozent 1

// deklaration
let zahl1, zahl2 
let zahl1, zahl2, summe;


//eingabe :: ziffern
let a = prompt("bitte zahl eingeben");              //2
let b = prompt("bitte eine zweite zahl eingeben");  //2

console.log(typeof ziffer1);
console.log(typeof ziffer2);

// typkonvertierung | ziffern --> zahl ( string --> number)

zahl1 = parseInt(ziffer1);
zahl2 = parseInt(ziffer2);
console.log(typeof zahl1);
console.log(typeof zahl2);

// berechnung :: summe
summe = zahl1 + zahl2;
console.log("die summe is : " + summe);
*/


// **************Variante 2
/*
let zahl1, zahl2, summe;
zahl1 = parseInt(prompt("ziffer eingeben"));
zahl2 = parseInt(prompt("weiter zahl eingeben"));
summe = zahl2 + zahl2;
console.log(" die summer der zahlen ist : " + summe);
*/


// ************variante 3  
//kompakt, aber schlecht lesbar
/*
console.log
(
    "die summe ist :" +
    (
        parseInt(prompt("bitte zahl 1 eingeben")) +
        parseInt(prompt("bitte zahl 2 eingeben"))
    )
);
*/











