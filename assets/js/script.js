//global variables; we are going to want to declare some global variables, accessible throughout all of our functions
var startBtn = document.querySelector('#start-button');
var questionTitle = document.querySelector('#quiz-question');
var questionChoicesEl = document.getElementById('quiz-choices');
console.log(questionTitle, questionChoicesEl);
// declare a variable in the global scope which will keep track of the current question
// you are on. You need this to proceed to the next question when it's time
var currQuestion = 0;

//array of objects detailing questions, options and answers
const questionArray = [
  {
    question: "What is Gonzo's favorite animal:",
    options: ["goldfish", "cows", "cats", "chickens"],
    answer: "chickens"
  },
  {
    question: "What is the next day after Tuesday?",
    options: ["Monday", "Wednesday", "cats", "chickens"],
    answer: "Wednesday"
  }, 
]

// console.log(questionArray[1].options);

//function for starting the quiz

//function for starting the timer
function timer(){
  var countdown = setInterval
}

//function to display the next question 

//function for checking answer against the array 

//function runs if correct answer

//function runs if incorrect answer


//display score 

function startTheQuiz() {
  //console.log('quiz has started')
  //console.log(questionTitle.textContent);

}

function showNextQuestion() {
  questionTitle.textContent = questionArray[currQuestion].question;
  // let's use a for loop to do something repetitively
  for(var i = 0; i < 4; i = i + 1){
    console.log('i is', i);
    var li = document.createElement('li');
    // to do: add an event
    li.textContent = questionArray[currQuestion].options[i];
    questionChoicesEl.append(li);
  }
}

function gradeTheUsersChoice(event) {
  console.log('event.target is', event.target);
  if(event.target.matches('li')) {
    // now that you dtermined a li was clicked, go ahead and grade the user's selection
    console.log('target\'s textContent is', event.target.textContent);
  }
  // now I can compare the li's text to the current question's "answer" property


}

// add event listeners
startBtn.addEventListener('click', startTheQuiz);
questionChoicesEl.addEventListener('click', gradeTheUsersChoice);