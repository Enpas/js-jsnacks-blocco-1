var arrayNum = [];

for(var i = 0; i < 6; i++){
  var numeroNuovo = parseInt(prompt("inserisci un numero"))
  
if (numeroNuovo % 2 != 0){
  arrayNum.push(numeroNuovo);
  }
}

console.log(arrayNum);
