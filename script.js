// Global Variables
const newGame = document.querySelector("#newGame")
const submit = document.querySelector("#submit")
const score = document.querySelector("#score")
const skip = document.querySelector("#skip")
const answerForm = document.querySelector("#answer")
const question = document.querySelector("#question")

let answer = answerForm.value
let currentQuestion
let currentAnswer
let currentValue
let currentCategoryTitle


// Gets all the infomation for the question
async function getInfo() {
    //event.preventDefault()
    let url = "http://jservice.io/api/random"
    let data = axios.get(url).then(res => {
        const results = res.data[0];
        const getQuestion = results.question
        console.log(getQuestion)
        const getAnswer = results.answer
        const getValue = results.value
        const getCategoryTitle = results.category.title

        currentQuestion = getQuestion
        console.log(currentQuestion)
        currentAnswer = getAnswer
        currentValue = getValue
        currentCategoryTitle = getCategoryTitle
    })
}

// Appends Category to Dom
let displayCategory = () => {
    let showCategory = document.createElement('h1')
    showCategory.innerHTML =`Category <br> ${currentCategoryTitle}`
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


let playGame = () => {
    getInfo()
    setTimeout(displayCategory,1000)
    setTimeout(displayQuestion, 5000)
}
playGame()







