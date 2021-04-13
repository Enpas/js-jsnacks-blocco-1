var numeroUtente = parseInt(prompt("inserisci un numero di quattro cifre:"));
/* console.log(numeroUtente) */
var somma = 0;

while (numeroUtente) {
  somma += numeroUtente % 10;
  numeroUtente = Math.floor(numeroUtente / 10);
}
console.log(somma);