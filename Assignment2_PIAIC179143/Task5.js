var guess = prompt("Guess Number?");
var guess1 = parseInt(guess);
var num= 6;
if(guess1 === num){
    alert("You Won!!!");
}
else if (guess1 === 7){
       alert("You are Close Enough");
}
else if (guess1 === 5){
    alert("You are Close Enough");
}
else{
    alert("You Lost.")
}