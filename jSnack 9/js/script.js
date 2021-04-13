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