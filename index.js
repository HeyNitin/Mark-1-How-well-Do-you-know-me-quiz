var readlineSync = require('readline-sync');
var score = 0

var topScores = 
[
{

userName: 'Nitin',
score: 5,

},

]


console.log("Welcome to DO YOU KNOW Nitin");

var userName = readlineSync.question("What's Your Name? ");

var response = readlineSync.keyInYN("Are you ready to play? ");




var questions = 
[
{

question: "What is my full Name? ",
answer: "Nitin Kalra"

},

{

question: "Which state do I live in? ",
answer: "Rajasthan"


},

{

question: "Which city do I work in? ",
answer: "Pune"

},
{

question: "Favoite dish? ",
answer: "Samosa"

},
{

question: "Dream destination? ",
answer: "Qatar"

},
]

function Play(question,answer){

var input = readlineSync.question(question)

if (input.toUpperCase() === answer.toUpperCase())
{

console.log("That's right")
score += 1
console.log("Your current score is ", score)

}
else{

console.log("That's incorrect")
console.log("Your current score is ", score)

}

}

function game() {


  if (response)

{

console.log("Aight! Let's Begin");



for (var i=0; i<questions.length; i++ )
{

Play(questions[i].question,questions[i].answer)

}

console.log("You've completed the game \nYour final score is ", score)

if (score>=topScores[0].score)
{

console.log("You've created a highscore, Send me a Screenshot so that I can update")
console.log("Previous high score was \n", topScores[0].userName, '-', topScores[0].score)

}
else
{
console.log("Check the highscores \n", topScores[0].userName, '-', topScores[0].score)

}
}
else
{

console.log("Oops! that's not a yes, lagta hai humara saath yahi tak tha (^_^) \n\nExiting, click on the play button at bottom right if you change your mind and decide to play")

}



}

game()
