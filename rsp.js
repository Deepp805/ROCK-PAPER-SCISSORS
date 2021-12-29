function computerPlay(){
    const plays = ['rock','paper','scissors']
    return plays[Math.floor(Math.random() * 3)];
}

console.log(computerPlay())