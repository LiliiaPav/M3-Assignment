let coinFlip = Math.round(Math.random());
let choice = prompt("Heads or Tails", "Heads");

let flip
if (coinFlip >= 0.49) { flip=true} //Heads
else {flip=false} //Tails

if (choice==="Heads"){
    if(flip){
        alert("The flip was heads and you chose heads...you win!");
    }
    else {
        alert("The flip was tails but you chose heads...you lose!");
    }

} 
else if (choice==="Tails"){
    if(flip){
        alert("The flip was heads but you chose tails...you lose!");
    }
    else {
        alert("The flip was tails and you chose tails...you win!");
    }
}
else {
    alert ("Invalid input, sorry");
}