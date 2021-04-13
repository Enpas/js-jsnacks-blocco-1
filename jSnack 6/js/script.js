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

