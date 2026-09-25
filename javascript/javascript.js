function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3 ) + 1
    computerChoice = selection(computerChoice)
    return computerChoice
}

function getHumanChoice(button) {
    humanChoice = selection(button)
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

    let text = ""
    let points = []

    if (human === computer) {
        text = "It's a tie, they both chose: " + human
        points = [1, 1]
    }

    else if (human === "Rock" && computer === "Scissors") {
        text = "Won the human: " + human + " beat the " + computer
        points = [3, 0]
    }

    else if (human === "Scissors" && computer === "Paper") {
        text = "Won the human: " + human + " beat the " + computer
        points = [3, 0]
    }

    else if (human === "Paper" && computer === "Rock") {
        text = "Won the human: " + human + " beat the " + computer
        points = [3, 0]
    }

    else {
        text = "Won the computer: " + computer + " beat the " + human
        points = [0, 3]
    }

    const textHumanChoice = "The human choice is: " + human
    const texComputerChoice = "The computer choice is: " + computer


    const div = document.createElement("div")
    const humanChoice_p = document.createElement("p")
    const computerChoice_p = document.createElement("p")
    const result = document.createElement("p")
    humanChoice_p.textContent = textHumanChoice
    computerChoice_p.textContent = texComputerChoice
    result.textContent = text

    div.appendChild(humanChoice_p)
    div.appendChild(computerChoice_p)
    div.appendChild(result)

    document.body.appendChild(div)

    return points

}


function playgame(num) {

    if (ronda < 5){

        let round = playground(getHumanChoice(num), getComputerChoice())
        humanScore = humanScore + round[0]
        computerScore = computerScore + round[1]


        const marcador = document.createElement("div")
        const humanScore_p = document.createElement("p")
        const computerScore_p = document.createElement("p")
        
        humanScore_p.textContent = "The human score is: " + humanScore
        computerScore_p.textContent = "The computer score is: " + computerScore

        marcador.appendChild(humanScore_p)
        marcador.appendChild(computerScore_p)

        document.body.appendChild(marcador)

        if (ronda === 4) {
            const finish = document.createElement("div")
            finish.textContent = "Acabo la partida"
            document.body.appendChild(finish)

            if (humanScore > computerScore) {
                const winner = document.createElement("div")
                winner.textContent = "Haz ganado la partida!"
                document.body.appendChild(winner)
            }

            else {
                const winner = document.createElement("div")
                winner.textContent = "El computador ha ganado la partida!"
                document.body.appendChild(winner)
            }
        }

        else {
            ronda++
        }
        
    }

    else {
        const finish = document.createElement("div")
        finish.textContent = "Acabo la partida"
        document.body.appendChild(finish)
    }
}


const rock_button = document.querySelector("#rock")
const paper_button = document.querySelector("#paper")
const scissors_button = document.querySelector("#scissors")

let humanScore = 0
let computerScore = 0
let ronda = 0

rock_button.addEventListener("click", (e) => {
    playgame(1)
    
})

paper_button.addEventListener("click", (e) => { 
    playgame(2)
})

scissors_button.addEventListener("click", (e) => { 
    playgame(3)
})


