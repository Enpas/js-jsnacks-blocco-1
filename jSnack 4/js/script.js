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




