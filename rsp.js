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

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));