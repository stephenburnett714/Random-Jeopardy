# Jeopardy
Gives user Jeopardy Questions

# Project Overview

## Project Name

Jeopardy

## Project Description

Create a game that gives you 3 randmon 100,200,300,400 and 500 point Jeopardy questions. Will get points untill all 15 questons are asked. Will have the ability to restart the game or skip questions at any time. A score out of 4500 will be given after the 15 questions are asked. 

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
|Jan 2rd| Project Prompt | Incomplete
|Jan 3rd| Wireframes / Priority Matrix / Functional Components | Incomplete
|Jan 5th| Pseudocode, HTML, CSS | Incomplete
|Jan 6th| JS | Incomplete
|Jan 7th| Initial Clickable Model/Debugging  | Incomplete
|Jan 8th| MVP, more CSS and Animations| Incomplete
|Jan 9th| Present | Incomplete

## Priority Matrix

https://res.cloudinary.com/dkwosricc/image/upload/v1577998945/IMG_0148_o5wrhx.jpg

## Timeframes

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Psudocoding | H | 2.5hrs| 1hr |  |
| HTML | H | 1hrs| 1hr |  |
| Designing | M | 3hrs| 2hrs |  |
| CSS | H | 8hrs| 9hrs |  |
| JavaScript/Animation | H | 9hrs| 10hrs |  |
| Testing & Debugging | H | 6hrs| 4hrs |  |
| Total | H | 29.5hrs| 27hrs |  |


## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  

Instead of choosing 3 random 100-500 questions. I picked 15 random questions for the payer to pick from.


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
