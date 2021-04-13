var limite = 1000
var contatorePotenza = 1;
var potenza = 1;


while(potenza < limite){
  console.log(potenza)
  potenza = Math.pow(2, contatorePotenza);
  contatorePotenza++;
}
