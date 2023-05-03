

let playerScore=0;
let computerScore=0;
let totalRound=0;


const rock=document.getElementById("btn-rock");
const paper=document.getElementById("btn-paper");
const scissors=document.getElementById("btn-scissors");


const playerDiv=document.querySelector("#div-player");
const computerDiv=document.querySelector("#div-computer");
const winnerDiv=document.querySelector("#div-winnerRound");
const scoreDiv=document.querySelector("#div-score");
const totalRoundDiv=document.querySelector("#div-totalRound")



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
  if(totalRound===5){
    if(playerScore>computerScore){
      alert("Player Wins");
      location.reload();
      return
    }if(playerScore<computerScore){
      alert("Computer Wins");
      location.reload();
      return
    }if(playerScore===computerScore){
      alert("Draw");
      location.reload();
      return
    }
    
    
  }
  totalRound+=1;
  computerDiv.classList.remove("scissors-img")
  computerDiv.classList.remove("paper-img")
  computerDiv.classList.remove("rock-img")

  playerDiv.classList.remove("scissors-img")
  playerDiv.classList.remove("paper-img")
  playerDiv.classList.remove("rock-img")

  console.log("------------------------------------------");  
  console.log("Player: "+player);
  console.log("Computer: "+computer);
  
  if(computer==="rock"){
    computerDiv.classList.add("rock-img")
  }if(computer==="paper"){
    computerDiv.classList.add("paper-img");
  }if(computer==="scissors"){
    computerDiv.classList.add("scissors-img")
  }if(player==="rock"){
    playerDiv.classList.add("rock-img")
  }if(player==="paper"){
    playerDiv.classList.add("paper-img")
  }if(player==="scissors"){
    playerDiv.classList.add("scissors-img")
  }
  
  if((player==="rock"&&computer==="rock")||
     (player==="paper"&&computer==="paper")||
     (player==="scissors"&&computer==="scissors")){
        console.log("DRAW");
        
        playerScore+=1;
        computerScore+=1;

        scoreDiv.innerHTML=`player: ${playerScore} computer: ${computerScore}`
        winnerDiv.innerHTML="<span>DRAW</span>"
  }if((player==="rock"&&computer==="scissors")||
      (player==="paper"&&computer==="rock")||
      (player==="scissors"&&computer==="paper")){
        console.log("PLAYER WIN THIS ROUND");
        playerScore+=1

        scoreDiv.innerHTML=`player: ${playerScore} computer: ${computerScore}`
        winnerDiv.innerHTML="<span>PLAYER WIN THIS ROUND</span>"
  }if((player==="rock"&&computer==="paper")||
      (player==="paper"&&computer==="scissors")||
      (player==="scissors"&&computer==="rock")){
        console.log("COMPUTER WIN THIS ROUND");
        computerScore+=1

        scoreDiv.innerHTML=`player: ${playerScore} computer: ${computerScore}`
        winnerDiv.innerHTML="<span>COMPUTER WIN THIS ROUND</span>"
      }
   
  
  
  console.log("playerScore: "+playerScore);
  console.log("computerScore: "+computerScore);
  console.log(totalRound);
  console.log("------------------------------------------");
  totalRoundDiv.innerHTML=`<span>ROUND: ${totalRound}</span>`
  
}


rock.addEventListener("click",function(){playRound("rock",computerSelection())})
paper.addEventListener("click",function(){playRound("paper",computerSelection())})
scissors.addEventListener("click",function(){playRound("scissors",computerSelection())})

