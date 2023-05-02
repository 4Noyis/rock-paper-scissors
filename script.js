

let playerScore=0;
let computerScore=0;
let totalRound=0;


const rock=document.getElementById("btn-rock");
const paper=document.getElementById("btn-paper");
const scissors=document.getElementById("btn-scissors");





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


rock.addEventListener("click",function(){playRound("rock",computerSelection())})
paper.addEventListener("click",function(){playRound("paper",computerSelection())})
scissors.addEventListener("click",function(){playRound("scissors",computerSelection())})
