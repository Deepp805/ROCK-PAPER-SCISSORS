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

function game(){
    let compwins=0
    let playerwins=0
    for ( let q = 0;  q < 5 ; q++ ){
        playerSelection = window.prompt('rock,paper, or scissor?');
        let res = playRound(playerSelection,computerPlay())
        let result = res.includes("win");
        if (result==true){
            ++playerwins
        }
            else if (res.includes("lose")){
                ++compwins
            }
        console.log(res)
    }

if (compwins > playerwins){
    console.log('computer wins the game')
}   else if (playerwins>compwins){
        console.log('player wins the game')
    }
    else{
        console.log('the game is a tie')
    }
    
}

game()
