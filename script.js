

let playerScore=0;
let computerScore=0;
let totalRound=0;


let playerSelection = ()=>{
  let playerInput=prompt("rock paper scissors ?");

  if (playerInput==="rock"||playerInput==="Rock"||playerInput==="ROCK") {
    return "rock"
  }if (playerInput==="paper"||playerInput==="Paper"||playerInput==="PAPER") {
    return "paper"
  }if (playerInput==="scissors"||playerInput==="Scissors"||playerInput==="SCISSORS") {
    return "scissors"
  }else{
    
  }
}

let computerSelection =()=>{
  let random= Math.floor(Math.random() * 3);

  if (random===0) {
    return "rock"
  }if(random===1){
    return "paper"
  }if(random===2){
    return "scissors"
  }
}


function playRound(player,computer){
  totalRound+=1;
  console.log("------------------------------------------");  
  console.log("Player: "+player);
  console.log("Computer: "+computer);

  if((player==="rock"&&computer==="rock")||
     (player==="paper"&&computer==="paper")||
     (player==="scissors"&&computer==="scissors")){
        console.log("DRAW");
        playerScore+=1;
        computerScore+=1;
  }if((player==="rock"&&computer==="scissors")||
      (player==="paper"&&computer==="rock")||
      (player==="scissors"&&computer==="paper")){
        console.log("PLAYER WIN THIS ROUND");
        playerScore+=1
  }if((player==="rock"&&computer==="paper")||
      (player==="paper"&&computer==="scissors")||
      (player==="scissors"&&computer==="rock")){
        console.log("COMPUTER WIN THIS ROUND");
        computerScore+=1
      }
   
  
  
  console.log("playerScore: "+playerScore);
  console.log("computerScore: "+computerScore);
  console.log(totalRound);
  console.log("------------------------------------------");
  
  
}

while (totalRound<5) {
  
  playRound(playerSelection(),computerSelection());
  
}

console.log("hello world");
