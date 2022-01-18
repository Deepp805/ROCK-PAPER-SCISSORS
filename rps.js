function computerPlay(){
    const plays = ['ROCK','PAPER','SCISSORS']
    return plays[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection,computerSelection){
    playerSelection=playerSelection.toUpperCase()
    if (playerSelection=='ROCK' && computerSelection=='PAPER'){
        return `You lose! Rock beats Paper`
    }
        else if (playerSelection=='PAPER' && computerSelection=='ROCK'){
            return `You win! Rock beats Paper`
        }
        else if (playerSelection=='PAPER' && computerSelection=='SCISSORS'){
            return `You lose! Scissors beats Paper`
        }
        else if (playerSelection=='SCISSORS' && computerSelection=='PAPER'){
            return `You win! Scissors beats Paper`
        }
        else if (playerSelection=='ROCK' && computerSelection=='SCISSORS'){
            return `You win! Rock beats Scissor`
        }
        else if (playerSelection=='SCISSORS' && computerSelection=='ROCK'){
            return `You lose! Rock beats Scissor`
        }
        else if (playerSelection=='PAPER' && computerSelection=='PAPER'){
            return `You tie!`
        }
        else if (playerSelection=='ROCK' && computerSelection=='ROCK'){
            return `You tie!`
        }
        else if (playerSelection=='SCISSORS' && computerSelection=='SCISSORS'){
            return `You tie!`
        }
}


var btn = document.createElement("button");
btn.innerHTML = "Rock";
document.body.appendChild(btn);
btn.addEventListener("click",function(){game(btn.textContent,computerPlay())})


let bt = document.createElement("button");
bt.innerHTML = "Paper";
document.body.appendChild(bt);
bt.addEventListener("click",function(){game(btn.textContent,computerPlay())})

let b = document.createElement("button");
b.innerHTML = "Scissors";
document.body.appendChild(b);
b.addEventListener("click",function(){game(btn.textContent,computerPlay())})

let wins=0
let loss=0
let tie=0
const tubbons = document.getElementsByTagName("button")
function game(playerSelection,computerSelection){
    if (playRound(playerSelection,computerSelection).includes('win')) {
        wins=wins+1
        div.innerHTML = `Wins: ${wins}   Losses: ${loss}   Ties: ${tie}`
        if (wins>4){
            keep.innerHTML='you win the game'
            const body=document.getElementsByTagName("body")
            document.body.removeChild(tubbons[0])
            document.body.removeChild(tubbons[0])
            document.body.removeChild(tubbons[0])

        }
    }
    else if (playRound(playerSelection,computerSelection).includes('lose')){
        loss=loss+1
        div.innerHTML = `Wins: ${wins}   Losses: ${loss}   Ties: ${tie}`
        if (loss>4){
            keep.innerHTML='you lose the game'
            const body=document.getElementsByTagName("body")
            document.body.removeChild(tubbons[0])
            document.body.removeChild(tubbons[0])
            document.body.removeChild(tubbons[0])
        }
    }
    else{
        tie=tie+1
        div.innerHTML = `Wins: ${wins}   Losses: ${loss}   Ties: ${tie}`
    }
}

let keep = document.createElement("div")

let div = document.createElement("div");
div.innerHTML = `Wins: ${wins}   Losses: ${loss}   Ties: ${tie}`
document.body.appendChild(div)
document.body.appendChild(keep)