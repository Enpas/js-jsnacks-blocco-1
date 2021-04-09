/* var num1 = parseInt(prompt("inserisci un numero"));
var num2 = parseInt(prompt("inserisci un numero"));
var num3 = parseInt(prompt("inserisci un numero"));
var num4 = parseInt(prompt("inserisci un numero"));
var num5 = parseInt(prompt("inserisci un numero"));
var num6 = parseInt(prompt("inserisci un numero"));
var num7 = parseInt(prompt("inserisci un numero"));
var num8 = parseInt(prompt("inserisci un numero"));
var num9 = parseInt(prompt("inserisci un numero"));
var num10 = parseInt(prompt("inserisci un numero"));
var somma = parseInt(num1 + num2 + num3 + num4 + num5 + num6 + num7 + num8 + num9 + num10);
console.log(somma) */



var somma = 0;

for(var i = 0; i < 10; i++){
  var numeroNuovo = parseInt(prompt("inserisci un numero"))
  somma += numeroNuovo;
}

console.log(somma);




