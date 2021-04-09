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
