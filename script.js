// Global Variables
const newGame = document.querySelector("#new-game")
const submit = document.querySelector("#submit")
const score = document.querySelector("#score")
const skip = document.querySelector("#skip")
let answerForm = []
const question = document.querySelector("#question")
const value = document.querySelector("#value")
const category = document.querySelector("#category")

let dailyDoubleSound = document.querySelector("#dailyDoubleSound")
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


// Daily Double
let dailyDoubleNumber = Math.floor(Math.random() * 14) + 1


// Appends Question to DOM
let displayQuestion = () => {
    let showQuestion = document.createElement('h1')
    showQuestion.innerHTML = currentQuestion
    question.innerHTML = ""
    question.append(showQuestion)
}


//Playing though turn
let playGame = () => {
    turn ++
    if (turn == dailyDoubleNumber) {
        let showDailyDouble = document.createElement('h1')
        dailyDoubleSound.play()
        showDailyDouble.innerHTML = 'Daily Double!!'
        question.innerHTML = ""

        question.append(showDailyDouble)
        getInfo()
        // setTimeout(displayCategory,1000)
        setTimeout(appendValueDD, 1000)
        setTimeout(appendCategory, 1000)
        setTimeout(displayQuestion, 1000)

        answerForm.value=''
        console.log(turn)
        console.log("dailyDouble")
    } else if (turn == 16) {
        endGame()
    } else {
        getInfo()
        // setTimeout(displayCategory,1000)
        setTimeout(appendValue, 1000)
        setTimeout(appendCategory, 1000)
        setTimeout(displayQuestion, 1000)
        answerForm.value=''
        console.log(turn)
    }
}

let cancel = 0


//Skips question
skip.addEventListener("click", funtion = () => {
    
    if (cancel != 1) {
        cancel = 1
        let skippedAnswer = document.createElement('h1')
        skippedAnswer.innerHTML = `The correct answer is ${currentAnswer}`
        question.innerHTML = ""
        question.append(skippedAnswer)
        if(turn == 16) {
            endGame()
        } else {
            playGame()
        }
        setTimeout(() => cancel = 0, 3000)
    }
})


// New Game Fuction and event listener
let startNewGame = () => {
    submit.classList.remove("fin")
    skip.classList.remove("fin")
    turn = 0
    points = 0
    playGame()
}

newGame.addEventListener("click", startNewGame)


// Score
score.innerHTML = `Score: $${points}`


//check answerbox with actual answer gives score and checks if DD was correct
let compareAnswer = () => {
    event.preventDefault()
    if (cancel != 1) {
    cancel = 1
    answerForm = document.querySelector("#answer")
    answer = answerForm.value
    cleanAnswer = currentAnswer.replace(/<\/?[^>]+(>|$)/g, "")
    yourCleanAnswer = answer.replace(/<\/?[^>]+(>|$)/g, "")
    if (yourCleanAnswer.toLowerCase() == cleanAnswer.toLowerCase() && turn == dailyDoubleNumber) {
        let dailyDouble = document.createElement('h1')
        dailyDouble.innerHTML = "You got the Daily Double Correct!"
        question.innerHTML = ""
        question.append(dailyDouble)
        points = points + currentValue * 2
        score.innerHTML = `Score: ${points}`
        setTimeout(playGame,1500)
    }else if (yourCleanAnswer.toLowerCase() == cleanAnswer.toLowerCase() && turn != dailyDoubleNumber) {
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
    setTimeout(() => cancel = 0, 4000)
}
}
submit.addEventListener("click", compareAnswer)


// endgame function
let endGame = () => {
    let end = document.createElement('h1')

    question.innerHTML = `
    <p id='end-screen'>Congratulations <br> Your Score Is: $${points} </p>
    `
    submit.classList.add("fin")
    skip.classList.add("fin")
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


// Appends value for the daily Double
let appendValueDD = () => {
    value.innerHTML = ""
    value.append(`Daily Double Value: $${currentValue} X 2`)
}


// Uppercase function found on StackOverflow
function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

