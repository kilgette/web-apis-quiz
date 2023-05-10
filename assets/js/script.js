//global variables
//use the DOM API to select an HTML element by ID
var startBtn = document.querySelector('#start-button');
var questionsDisplay = document.querySelector('#questionsDisplay');
var questionsQuestion = document.querySelector('#questionsQuestion');
var questionsButtons = document.querySelector('#questionsButtons');
var questionOptionsEl = document.querySelector('#questionOptions');
var quizStart = document.querySelector('#quizStart');
var score = 0; // variable to store the score

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

function startTimer() {
  var secondsLeft = 60; // set the initial number of seconds to count down from
  var countdown = setInterval(function () {
    secondsLeft--; // decrement the secondsLeft variable
    if (secondsLeft <= 0) {
      clearInterval(countdown); // clear the interval once the timer reaches 0
      displayScore(); // display the final score once the timer reaches 0
    } else {
      // display the remaining seconds in the HTML
      document.querySelector('#timerDisplay').textContent = "Time left: " + secondsLeft + " seconds";
    }
  }, 1000); // run the interval every second
}

//display score 
function displayScore() {
  questionsDisplay.style.display = "none";
  var displayScore = document.createElement("div");
  score = Math.round((score / questionArray.length) * 100); // calculate the final score
  displayScore.textContent = "Your score is: " + score + "%";
  quizStart.appendChild(displayScore);
}


function startTheQuiz() {
  quizStart.style.display = "none"
  questionsDisplay.style.display = "block"
  displayQuestion();
  startTimer();
}


function handleOptionClick() {
  var currentQuestionObject = questionArray[currQuestion];
  if (this.textContent === currentQuestionObject.answer) {
    score++;
  } else {
    var secondsLeft = parseInt(document.querySelector('#timer').textContent.split(" ")[2]);
    secondsLeft -= 10;
    document.querySelector('#timer').textContent = "Time left: " + secondsLeft + " seconds";
  }
  currQuestion++;
  if (currQuestion < questionArray.length) {
    displayQuestion();
  } else {
    displayScore();
  }
}
function displayQuestion() {
  var currentQuestionObject = questionArray[currQuestion];
  questionsQuestion.textContent = currentQuestionObject.question;
  questionOptionsEl.innerHTML = ""; // Clear the options
  for (var i = 0; i < currentQuestionObject.options.length; i++) {
    var option = document.createElement("li");
    option.className = "option-button";
    option.textContent = currentQuestionObject.options[i];
    option.addEventListener("click", handleOptionClick);
    questionOptionsEl.appendChild(option);
  }
}