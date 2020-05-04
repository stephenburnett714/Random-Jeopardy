// Global Variables

const { tween, styler } = popmotion
const newGame = document.querySelector("#new-game")
const submit = document.querySelector("#submit")
const score = document.querySelector("#score")
const skip = document.querySelector("#skip")
const questionNumber = document.querySelector("#question-number")
let answerForm = []
const question = document.querySelector("#question")
const value = document.querySelector("#value")
const category = document.querySelector("#category")
const dailyDoubleSound = document.querySelector("#dailyDoubleSound")
const moveQuestionBox = popmotion.styler(document.querySelector("#question"))







let currentQuestion
let currentAnswer
let currentValue
let currentCategoryTitle
let answer
let turn = 0
let points = 0
let correct = 0
let numberOfQuestions = 10


//Animation for bringing in the quesion box
let bringQuestion = () => {
    popmotion.tween({
        from: {
            scale: .4
        },
        to: {
            scale:1
        },
        duration: 1000
    }).start(moveQuestionBox.set)
}




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

let checkInfo = () => {
    if (currentQuestion == null 
        || currentQuestion == ""
        || currentQuestion.includes("heard")
        || currentQuestion.includes("/")
        || currentCategoryTitle == null 
        || currentCategoryTitle == "" 
        || currentValue == 0 
        || currentValue == null 
        || currentValue == "") {
        getInfo()
    }
}

let readyInfo = () => {
    getInfo()
    setTimeout(checkInfo, 333)
    setTimeout(checkInfo, 666)
}


// Appends Category to DOM
let displayCategory = () => {
    let showCategory = document.createElement('h1')
    showCategory.innerHTML =`Category: <br><br> ${currentCategoryTitle.toUpperCase()}`
    question.innerHTML = ""
    question.append(showCategory)
}


// Daily Double
let dailyDoubleNumber = Math.floor(Math.random() * numberOfQuestions-1) + 1


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
        readyInfo()
        setTimeout(dailyDoubleSound.play(),1000)
        showDailyDouble.innerHTML = 'Daily Double!!'
        question.innerHTML = ""
        setTimeout(question.append(showDailyDouble),1000)
        setTimeout(bringQuestion, 1000)
        setTimeout(appendValueDD, 1000)
        setTimeout(appendQuestionNumber, 1000)
        setTimeout(appendCategory, 1000)
        setTimeout(displayQuestion, 2000)

        answerForm.value=''
        console.log(turn)
        console.log("dailyDouble")
    } else if (turn == numberOfQuestions +1) {
        endGame()
    } else {
        readyInfo()
        setTimeout(bringQuestion, 1000)
        setTimeout(appendValue, 1000)
        setTimeout(appendQuestionNumber, 1000)
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
        if(turn == numberOfQuestions+1) {
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
        correct ++
        setTimeout(playGame,1500)
    }else if (yourCleanAnswer.toLowerCase() == cleanAnswer.toLowerCase() && turn != dailyDoubleNumber) {
        let yourCorrect = document.createElement('h1')
        yourCorrect.innerHTML = "Correct!"
        question.innerHTML = ""
        question.append(yourCorrect)
        points = points + currentValue
        score.innerHTML = `Score: ${points}`
        correct ++
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
if (correct/numberOfQuestions <= .25) {
    question.innerHTML = `
    <p id='end-screen'>Better Luck Next Time! <br> Your Score Is: $${points} <br> You got ${correct} out of ${numberOfQuestions}!</p>
    `
}
else if (correct/numberOfQuestions <= .5) {
    question.innerHTML = `
    <p id='end-screen'>Good Job! <br> Your Score Is: $${points} <br> You got ${correct} out of ${numberOfQuestions}!</p>
    `
}
else if (correct/numberOfQuestions <= .75) {
    question.innerHTML = `
    <p id='end-screen'>Great Job! <br> Your Score Is: $${points} <br> You got ${correct} out of ${numberOfQuestions}!</p>
    `  
}
else if (correct/numberOfQuestions <= 1) {
    question.innerHTML = `
    <p id='end-screen'>Amazing!! <br> Your Score Is: $${points} <br> You got ${correct} out of ${numberOfQuestions}!</p>
    `
    
}
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

//Appends question number
let appendQuestionNumber = () => {
    questionNumber.innerHTML = ""
    questionNumber.append(`Question: ${turn} of ${numberOfQuestions}`)
}


// Uppercase function found on StackOverflow
function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

