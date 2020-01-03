// Global Variables
const newGame = document.querySelector("#newGame")
const submit = document.querySelector("#submit")
const score = document.querySelector("#score")
const skip = document.querySelector("#skip")
let answerForm = []
const question = document.querySelector("#question")


let currentQuestion
let currentAnswer
let currentValue
let currentCategoryTitle
let answer
let turn = 0
let points = 0


// Gets all the infomation for the question
async function getInfo() {
    //event.preventDefault()
    let url = "http://jservice.io/api/random"
    let data = axios.get(url).then(res => {
        const results = res.data[0];
        const getQuestion = results.question
        const getAnswer = results.answer
        const getValue = results.value
        const getCategoryTitle = results.category.title

        currentQuestion = getQuestion
        console.log(currentQuestion)
        currentAnswer = getAnswer
        console.log(currentAnswer)
        currentValue = getValue
        currentCategoryTitle = getCategoryTitle
    })
}

// Appends Category to DOM
let displayCategory = () => {
    let showCategory = document.createElement('h1')
    showCategory.innerHTML =`Category: <br><br> ${currentCategoryTitle.toUpperCase()}`
    question.innerHTML = ""
    question.append(showCategory)

}

// Appends Question to DOM
let displayQuestion = () => {
    let showQuestion = document.createElement('h1')
    showQuestion.innerHTML = currentQuestion
    question.innerHTML = ""
    question.append(showQuestion)
}


//Playing though turn
let playGame = () => {
    getInfo()
    setTimeout(displayCategory,1000)
    setTimeout(displayQuestion, 5000)
    turn ++
    console.log(turn)
}


//Skips question adds a number to turn
skip.addEventListener("click", playGame)


// New Game Fuction and event listener
let startNewGame = () => {
    turn = 0
    points = 0
    playGame()
}

newGame.addEventListener("click", startNewGame)

// Score
score.innerHTML = `Score: ${points}`


//check answerbox with actual answer
let compareAnswer = () => {
    event.preventDefault()
    answerForm = document.querySelector("#answer")
    answer = answerForm.value
    console.log(answer);
    console.log(currentAnswer);
    if (answer.toLowerCase() == currentAnswer.toLowerCase()) {
        let yourCorrect = document.createElement('h1')
        yourCorrect.innerHTML = "Correct!"
        question.innerHTML = ""
        question.append(yourCorrect)
        points = points + currentValue
        setTimeout(playGame,1500)
    } else {
        let actualAnswer = document.createElement('h1')
        actualAnswer.innerHTML = (`Correct Answer: ${currentAnswer}`)
        question.innerHTML = ""
        question.append(actualAnswer)
        setTimeout(playGame,1500)
    }
}
submit.addEventListener("click", compareAnswer)












