// Global Variables
const newGame = document.querySelector("#newGame")
const submit = document.querySelector("#submit")
const score = document.querySelector("#score")
const skip = document.querySelector("#skip")
let answerForm = []
const question = document.querySelector("#question")
const value = document.querySelector("#value")
const category = document.querySelector("#category")


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
    if (turn == 15) {
        endGame()
    } else {
    getInfo()
    // setTimeout(displayCategory,1000)
    setTimeout(appendValue, 1000)
    setTimeout(appendCategory, 1000)
    setTimeout(displayQuestion, 1000)
    turn ++
    console.log(turn)
    }
}


//Skips question adds a number to turn
skip.addEventListener("click", funtion = () => {
    let correctAnswer = document.createElement('h1')
    correctAnswer.innerHTML = `The correct answer is: ${currentAnswer}`
    question.innerHTML = ""
    question.append(correctAnswer)
    setTimeout(playGame,1000)
    
})


// New Game Fuction and event listener
let startNewGame = () => {
    turn = 0
    points = 0
    playGame()
}

newGame.addEventListener("click", startNewGame)

// Score
score.innerHTML = `Score: $${points}`


//check answerbox with actual answer
let compareAnswer = () => {
    event.preventDefault()
    answerForm = document.querySelector("#answer")
    answer = answerForm.value
    cleanAnswer = currentAnswer.replace(/<\/?[^>]+(>|$)/g, "")
    yourCleanAnswer = answer.replace(/<\/?[^>]+(>|$)/g, "")
    if (yourCleanAnswer.toLowerCase() == cleanAnswer.toLowerCase()) {
        let yourCorrect = document.createElement('h1')
        yourCorrect.innerHTML = "Correct!"
        question.innerHTML = ""
        question.append(yourCorrect)
        points = points + currentValue
        score.innerHTML = `Score: ${points}`
        setTimeout(playGame,1500)
    } else {
        let actualAnswer = document.createElement('h1')
        actualAnswer.innerHTML = (`Incorrect <br><br> Correct Answer: ${currentAnswer}`)
        question.innerHTML = ""
        question.append(actualAnswer)
        setTimeout(playGame,1500)
    }
}
submit.addEventListener("click", compareAnswer)


// endgame function
let endGame = () => {
    question.innerHTML = ""
    question.append(`Congratulations Your Score Is: ${points}`)
}


// Append Category to the category section
let appendCategory = () => {
    category.innerHTML = ""
    category.append(`Category: ${toTitleCase(currentCategoryTitle)}`)
}


// Append Question Value to the value section
let appendValue = () => {
    value.innerHTML = ""
    value.append(`Question Value: $${currentValue}`)
}

// Uppercase function found on StackOverflow
function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

// Adding mouseovers to the Buttons

// let buttonMouseOver = () => {
//     let newGameButton = document.querySelector("#newGame")
//     newGameButton.style.color = "purple"
// }

// let buttonMouseOut = () => {
//     let newGameButton = document.querySelector("#newGame")
//     newGameButton.style.color = "green"
// }


// newGame.addEventListener("mouseover", buttonMouseOver)
// newGame.addEventListener("mouseout", buttonMouseOut)


// submit.addEventListener("mouseover", buttonMouseOver)
// skip.addEventListener("mouseover", buttonMouseOver)


// newGame.mouseover = function () {
//     this.classList.add("buttonMouseOverColor");
// }
// newGame.mouseout = function () {
//     this.classList.add("button");
// }

