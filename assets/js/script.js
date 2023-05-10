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

function startTimer() {
  var secondsLeft = 60; // set the initial number of seconds to count down from
  var countdown = setInterval(function() {
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
  var scoreDisplay = document.createElement("div");
  var score = (currQuestion / questionArray.length) * 100; // calculate the score
  scoreDisplay.textContent = "Your score is: " + score + "%";
  quizStart.appendChild(scoreDisplay);
}


function startTheQuiz() {
  quizStart.style.display = "none"
  questionsDisplay.style.display = "block"
  startTimer()
  displayQuestion()
}

function handleOptionClick() {
  currQuestion++
  displayQuestion()
}

function displayQuestion() {
  var currentQuestionObject = questionArray[currQuestion];
  console.log(currentQuestionObject)

  questionsQuestions.textContent = currentQuestionObject.question;
  questionsButtons.innerHTML = ""

  // let's use a for loop to do something repetitively
  for (var i = 0; i < currentQuestionObject.options.length; i = i + 1) {
    console.log('i is', i);
    var button = document.createElement('button'); // create a button element
    button.textContent = questionArray[currQuestion].options[i];
    button.classList.add('option-button'); // add a CSS class to the button element
    button.addEventListener("click", handleOptionClick);
    questionsButtons.append(button); // append the button element to the parent element
  }
}

function gradeTheUsersChoice(event) {
  console.log('event.target is', event.target);
  if (event.target.matches('li')) {
    
    // grade user's selection once li is clicked 
    console.log('target\'s textContent is', event.target.textContent);
  }
}

// event listeners
startBtn.addEventListener('click', startTheQuiz);
questionChoicesEl.addEventListener('click', gradeTheUsersChoice);
questionsButtons.addEventListener('click', gradeTheUsersChoice);


