//Uses random numbers to decide the answer
function getComputerChoice() {
    let compChoice = Math.floor(Math.random() * 3);
    let answer = '';
    if (compChoice === 0) {
        answer = "rock"
    }
    else if (compChoice === 1) {
        answer = "paper"
    }
    else if (compChoice === 2) {
        answer = "scissors"
    }
    else {
        return "Something went wrong"
    }
    return answer
}

//Prompt user to input a chocie and convert to lowercase
function getHumanChoice() {
    let userChoice = prompt("rock, paper or scissors?")
    userChoice = userChoice.toLocaleLowerCase()
    return userChoice
}

//Storing called functions to variables
// let humanSelection = getHumanChoice()
// let computerSelection = getComputerChoice()


//Main Game
function playGame() {
    //Creating scoreboard
    let humanScore = 0
    let computerScore = 0

    function playRound(humanChoice, computerChoice) {
        if(humanChoice.toLowerCase() === "rock" && computerChoice === "paper") {
            console.log("Computer Wins")
            computerScore += 1
        }
        else if(humanChoice.toLowerCase() === "paper" && computerChoice === "scissors") {
            console.log("Computer Wins")
            computerScore += 1
        }
        else if(humanChoice.toLowerCase() === "scissors" && computerChoice === "rock") {
            console.log("Computer Wins")
            computerScore += 1
        }
        else if(humanChoice.toLowerCase() === computerChoice) {
            console.log("you tied")
        }
        else {
            console.log("you win this round")
            humanScore += 1
        }
        console.log(humanScore, computerScore)
    }
    let round = 5
    for(let i = 0; i < round; i++) {
        playRound(getHumanChoice(), getComputerChoice())
    }
    function findWinner() {
        if(humanScore > computerScore) {
        console.log("YOU won the game")
    }
    else if (humanScore === computerScore) {
        console.log("You and the computer tied")
    }
    else {
        console.log("Sorry, you lost")
    }
}
findWinner()
}  

playGame()

