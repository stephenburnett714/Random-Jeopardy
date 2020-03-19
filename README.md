# Jeopardy
Gives user Jeopardy Questions

# Project Overview

## Project Name

Jeopardy

## Project Description

Created a game that gives you 10 random 100,200,300,400 and 500 point Jeopardy questions. Will get points until all 15 questons are asked. Will have the ability to restart the game or skip questions at any time.
## API and Data Sample

link: http://jservice.io/

https://res.cloudinary.com/dkwosricc/image/upload/v1577996958/Screen_Shot_2020-01-02_at_2.44.51_PM_sgcxqo.png



## Wireframes

https://res.cloudinary.com/dkwosricc/image/upload/v1577998580/IMG_0149_vxo2xd.heic

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP 

- Find and use external api 
- Render questions on page
- Allow user to type in answer
- if answer is correct add the number of points for the question to total score and move on to next question. 
- If answer is incorrect show the correct answer and move to the next question.

#### PostMVP 

- Animations
- Add a random daily double question that doubles the score for that question.
- Max time of 30 seconds per question


## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Jan 2rd| Project Prompt | Complete
|Jan 3rd| Wireframes / Priority Matrix / Functional Components | Complete
|Jan 5th| Pseudocode, HTML, CSS | Complete
|Jan 6th| JS | Complete
|Jan 7th| Initial Clickable Model/Debugging  | Complete
|Jan 8th| MVP, more CSS and Animations| Complete
|Jan 9th| Present | Incomplete

## Priority Matrix

https://res.cloudinary.com/dkwosricc/image/upload/v1577998945/IMG_0148_o5wrhx.jpg

## Timeframes

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Psudocoding | H | 2.5hrs| 1hr |  |
| HTML | H | 1hrs| 1hr |  |
| Designing | M | 3hrs| 5hrs |  |
| CSS | H | 8hrs| 11hrs |  |
| JavaScript/Animation | H | 9hrs| 12hrs |  |
| Testing & Debugging | H | 6hrs| 8hrs |  |
| Total | H | 29.5hrs| 38hrs |  |


## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

```
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
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  

Instead of choosing 3 random 100-500 questions. I picked 10 random questions for the payer to pick from.


## Pseudocode

HTML 3 buttons are need 
New Game
Skip
Submit
Form to input the answers
Create a display for the question

JS
Bring in api
Button 1 - (New Game) Will restart the game from question one and reset the score.
Button 2 - (Skip) Will skip the current question will return the correct answer and reward zero points.
Button 3 - (Submit) Will check to see if the answer in the textbox is equal to the correct answer. If the answer is correct a message will come up that says correct. The amount of points for the question will be added to the score and then the next question will be displayed.

Create a loop for questions when question count reaches 15 end game dispay score and ask if the user wants to play again.
