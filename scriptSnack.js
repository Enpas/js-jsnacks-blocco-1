// jSnack 2
var parola1 = prompt("inserisci parola 1")
var parola2 = prompt("inserisci parola 2")
console.log(parola1)
console.log(parola2)

if (parola1.length == parola2.length){
  alert("le parole sono uguali")
}else if(parola1.length < parola2.length){
  console.log(parola1 + " "+ parola2)
}else{
  console.log(parola2 + " "+ parola1)
}



// jSnack 3
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




// jSnack 4
var invitati = ["a", "b", "c", "d", "e"];
var nomInvitato = prompt("come ti chiami?")
var puoiEntrare = false;


for (var i = 0; i < invitati.length; i++){
  var this_invitato = invitati[i];

  if(this_invitato === nomInvitato){
   var puoiEntrare = true;
  }
}

if(puoiEntrare){
  console.log("puoi entrare")
}else{
  console.log("non puoi entrare")
}



// jSnack 5
var arrayNum = [];

for(var i = 0; i < 6; i++){
  var numeroNuovo = parseInt(prompt("inserisci un numero"))
  
if (numeroNuovo % 2 != 0){
  arrayNum.push(numeroNuovo);
  }
}

console.log(arrayNum);



// jSnack 6
var num= parseInt(prompt("inserisci un numero"));
console.log(num)
var somma= 0;

for(var i = 1; i <= num; i++){
  console.log(i)
  console.log(Math.pow(i,3))
  somma += Math.pow(i,3);
  console.log("-somma-"+ somma)
}

console.log("la somma dei cubi è "+somma)



// jSnack 7
var limite = 1000
var contatorePotenza = 1;
var potenza = 1;


while(potenza < limite){
  console.log(potenza)
  potenza = Math.pow(2, contatorePotenza);
  contatorePotenza++;
}



// jSnack 8
var numeroUtente = parseInt(prompt("inserisci un numero di quattro cifre:"));
/* console.log(numeroUtente) */
var somma = 0;

while (numeroUtente) {
  somma += numeroUtente % 10;
  numeroUtente = Math.floor(numeroUtente / 10);
}
console.log(somma);



// jSnack 9
var numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
/* console.log(numeri) */
var somma = 0;
var media = 0;

for (i = 0; i < numeri.length; i++) {
  var num = numeri[i];
  somma += num;
}
console.log("La somma dei numeri è: " + somma);

media = somma / numeri.length;
console.log("La media è: " + media);