function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3 ) + 1
    computerChoice = selection(computerChoice)
    console.log("The computer choice is: " + computerChoice) 
    return computerChoice
}

function getHumanChoice() {
    let humanChoice = Number(prompt("Choose some option:  1):Rock  -  2):Paper  -  3):Scissors"))
    humanChoice = selection(humanChoice)
    console.log("The human choice is: " + humanChoice)
    return humanChoice
}

function selection(num) {
   switch (num) {
    case 1:
        const rock = "Rock"
        return rock
        break;
    case 2:
        const paper = "Paper"
        return paper
        break;
    case 3: 
        const scissors = "Scissors"
        return scissors
        break;
    default:
        return "No valido"
   }
}

function playground(human, computer) {

    if (human === computer) {
        console.log("It's a tie, they both chose: " + human)
        return [1, 1]
    }

    else if (human === "Rock" && computer === "Scissors") {
        console.log("Won the human: " + human + " beat the " + computer)
        return [3, 0]
    }

    else if (human === "Scissors" && computer === "Paper") {
        console.log("Won the human: " + human + " beat the " + computer)
        return [3, 0]
    }

    else if (human === "Paper" && computer === "Rock") {
        console.log("Won the human: " + human + " beat the " + computer)
        return [3, 0]
    }

    else {
        console.log("Won thee computer: " + computer + " beat the " + human)
        return [0, 3]
    }
}


function playgame() {

    let humanScore = 0
    let computerScore = 0

    for ( let i = 0; i < 5; i++ ){

        let round = playground(getHumanChoice(), getComputerChoice())
        humanScore = humanScore + round[0]
        computerScore = computerScore + round[1]
        console.log("The human score is: " + humanScore)
        console.log("The computer score is: " + computerScore)   
    }

}

playgame()



