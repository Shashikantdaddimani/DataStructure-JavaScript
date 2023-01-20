

let RandomNumber;
let RollDice;

RollDice= prompt("How many times do you want to roll the dice?",10);

for(i=1;i<=RollDice;i++){
RandomNumber = Math.floor(Math.random()*6);
document.writeln(RandomNumber+"<br>");
}
