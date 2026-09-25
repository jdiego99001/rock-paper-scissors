function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3 ) + 1
    computerChoice = selection(computerChoice)
    console.log("The computer choice is: " + computerChoice) 
    return computerChoice
}

function getHumanChoice(num) {
    let humanChoice = num
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
        console.log("Won the computer: " + computer + " beat the " + human)
        return [0, 3]
    }
}


// function playgame() {

//     let humanScore = 0
//     let computerScore = 0

//     for ( let i = 0; i < 5; i++ ){

//         let round = playground(getHumanChoice(), getComputerChoice())
//         humanScore = humanScore + round[0]
//         computerScore = computerScore + round[1]
//         console.log("The human score is: " + humanScore)
//         console.log("The computer score is: " + computerScore)   
//     }

// }


const rock_button = document.querySelector("#rock")
const paper_button = document.querySelector("#paper")
const scissors_button = document.querySelector("#scissors")

rock_button.addEventListener("click", (e) => { 
    playground(getHumanChoice(1), getComputerChoice())
})

paper_button.addEventListener("click", (e) => { 
    playground(getHumanChoice(2), getComputerChoice())
})

scissors_button.addEventListener("click", (e) => { 
    playground(getHumanChoice(3), getComputerChoice())
})