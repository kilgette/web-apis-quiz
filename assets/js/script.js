//global variables
//use the DOM API to select an HTML element by ID
var startBtn = document.querySelector('#start-button');
var questionsDisplay = document.querySelector('#questionsDisplay');
var questionsQuestions = document.querySelector('#questionsQuestion');
var questionsButtons = document.querySelector('#questionsButtons');
var quizStart = document.querySelector('#quizStart');
//current question
var currQuestion = 0;

//array of objects detailing questions, options and answers
const questionArray = [
  {
    question: "What is Gonzo's favorite animal?",
    options: ["goldfish", "cow", "cat", "chicken"],
    answer: "chicken"
  },
  {
    question: "What instrument does Animal play?",
    options: ["drums", "trombone", "guitar", "piano"],
    answer: "drums"
  }, 
  {
    question: "In The Great Muppet Caper, Kermit and Fozzie Bear have what relationship?",
    options: ["twins", "rival thieves", "law-enforcement partners", "father and son"],
    answer: "twins"
  }, 
  {
    question: "Balcony hecklers Waldorf and Statler are named for what New York City fixtures?",
    options: ["parks", "stadiums", "hotels", "streets"],
    answer: "hotels"
  }, 
  {
    question: "Before starring on The Muppet Show, which Muppet first appeared in commercials for Purina?",
    options: ["Gonzo", "Big Bird", "Rowlf", "Elmo"],
    answer: "Rowlf"
  }, 
]

//function for starting the timer
function timer(){
  var time = 60; // set the total time in seconds
  var countdown = setInterval(function() {
    if (time <= 0) {
      clearInterval(countdown); // stop the countdown when the time runs out
      displayScore(); // display the final score
    } else {
      time--; // decrement the time
      // update the timer display
      var timerDisplay = document.querySelector('#timer');
      timerDisplay.textContent = 'Time remaining: ' + time + ' seconds';
    }
  }, 1000); // set the interval to 1 second
}
  


//display score 
function displayScore() {

}

function startTheQuiz() {
  quizStart.style.display="none"
  questionsDisplay.style.display="block"
  timer();
  displayQuestion();

}
function handleOptionClick(event) {
  var selectedAnswer = event.target.textContent;
  var currentQuestionObject = questionArray[currQuestion];
  if (selectedAnswer === currentQuestionObject.answer) {
    // handle correct answer
  } else {
    // handle incorrect answer
    var timerDisplay = document.querySelector('#timer');
    var remainingTime = parseInt(timerDisplay.textContent.match(/\d+/)[0]);
    remainingTime -= 10; // deduct 10 seconds
    if (remainingTime < 0) {
      remainingTime = 0; // prevent negative time
    }
    timerDisplay.textContent = 'Time remaining: ' + remainingTime + ' seconds';
  }
  currQuestion++;
  displayQuestion();
}

function displayQuestion() {
  var currentQuestionObject = questionArray[currQuestion];
  console.log(currentQuestionObject)

  questionsQuestions.textContent = currentQuestionObject.question;
  questionsButtons.innerHTML=""
  
  // let's use a for loop to do something repetitively
  for(var i = 0; i < currentQuestionObject.options.length; i = i + 1){
    console.log('i is', i);
    var button = document.createElement('button');
       button.textContent = questionArray[currQuestion].options[i];
       button.addEventListener("click" , handleOptionClick); 
    questionsButtons.append(button);
  }
}

function gradeTheUsersChoice(event) {
  console.log('event.target is', event.target);
  if(event.target.matches('button')) {
    // grade user's selection once li is clicked 
    console.log('target\'s textContent is', event.target.textContent);
  }
  // now I can compare the li's text to the current question's "answer" property
}


// event listeners
startBtn.addEventListener('click', startTheQuiz);
questionChoicesEl.addEventListener('click', gradeTheUsersChoice);

