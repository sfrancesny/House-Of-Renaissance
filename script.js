// script.js

const questions = [
  {
    question: "Renaissance is Beyonce's ___ Concert Tour",
    choices: ["Ninth", "Third", "Eleventh", "Eighth"],
    correctAnswer: "Ninth"
  },
  {
    question: "The World Tour Debuted In Which Country?",
    choices: ["Rome, Italy", "London, United Kingdom", "Stockholm, Sweden","Paris, France"],
    correctAnswer: "Stockholm, Sweden"
  },
  {
    question: "Which Artist Is Not Credited On The Renaissance Studio Album?",
    choices: ["The Dream", "Tems", "Drake", "Nicki Minaj"],
    correctAnswer: "Nicki Minaj"
  },
  {
    question: "Which Black Designer Did Beyonce NOT Wear On Tour for Juneteenth?",
    choices: ["Maximilian Davis", "Telfar Clemens", "LaQuan Smith", "Olivier Rousteing"],
    correctAnswer: "Telfar Clemens"
  },
  {
    question: "Which Song Was Released Before The Official Album Drop?",
    choices: ["Cuff It", "America Has A Problem", "Break My Soul", "Summer Renaissance"],
    correctAnswer: "Break My Soul"

  },
  {
    question: "Please Date The Official Drop For The Renaissance Album",
    choices: ["July 29, 2022", "May 10, 2023", "February 5, 2023", "June 20, 2022"],
    correctAnswer: "July 29, 2022"
    
  },
  {
    question: "Which Song Never Made The Set List For The Renaissance World Tour?",
    choices: ["Run The World", "Flawless", "Dangerously In Love", "Before I Let Go"],
    correctAnswer: "Flawless"
    
  },
  {
    question: "How Much Did The Two Auctioned Tickets Sell For At The Wearable Art Gala?",
    choices: ["$20,000", "$25,000", "$75,000", "$50,000"],
    correctAnswer: "$50,000"
    
  },
  {
    question: "Which Of Beyonce's Dancers Did Not Join This Tour's Run?",
    choices: ["Aliya Janell", "Honey Balenciaga", "Ashley Everett","Les Twins"],
    correctAnswer: "Ashley Everett"
    
  },
  // {
  //   question: "Name the special guest who appeared on Beyonce's Renaissance Tour (Provide The Full Name):",
  //   correctAnswers: ["blue ivy carter", "Blue Ivy Carter"]
  // }
  
  // Add more questions here...
];

let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.getElementById('questionContainer');
const startQuizButton = document.getElementById('startQuizButton');
const resultsContainer = document.getElementById('resultsContainer');

let quizStarted = false; // Add a global variable to track if the quiz has started

// Function to start the quiz
function startQuiz() {
  // Hide the quiz image
  const quizImage = document.getElementById('quizImage');
  quizImage.style.display = 'none';

  // Adjust the container height to the fixed value
  const quizSectionContainer = document.querySelector('.quiz-section-container');
  quizSectionContainer.style.height = '400px'; // Same value as in the CSS rule

  startQuizButton.style.display = 'none'; // Hide the start button after the quiz starts
  showQuestion();

  // Show the restart button at the start of the quiz
  const restartButton = document.getElementById('restart-btn');
  restartButton.style.display = 'none';

  // Set quizStarted to true when the quiz starts
  quizStarted = true;
  localStorage.setItem('quizStarted', 'true');
}

// Function to display a question
function showQuestion() {
  if (currentQuestionIndex < questions.length) {
    const questionData = questions[currentQuestionIndex];
    questionContainer.style.display = 'block';
    resultsContainer.style.display = 'none';

    questionContainer.innerHTML = `
      <h2>${questionData.question}</h2>
      <ul>
        ${questionData.choices
          .map(
            (choice) =>
              `<li><button onclick="checkAnswer('${choice}')">${choice}</button></li>`
          )
          .join('')}
      </ul>`;
  } else {
    showResults();
  }
}

// Function to check the user's answer
function checkAnswer(userAnswer) {
  const questionData = questions[currentQuestionIndex];
  if (userAnswer === questionData.correctAnswer) {
    score++;
  }
  currentQuestionIndex++;
  showQuestion();
}

// Function to display the final results
function showResults() {
  questionContainer.style.display = 'none';
  resultsContainer.style.display = 'block'; // Show the results container

  // Show the restart button at the end of the quiz
  const restartButton = document.getElementById('restart-btn');
  restartButton.style.display = 'inline-block'; // or 'block', depending on your design

  resultsContainer.innerHTML = `
    <h2>Quiz Results</h2>
    <p>You got ${score} out of ${questions.length} questions correct!</p>
  `;

  // Hide the restart button during the quiz
  startQuizButton.style.display = 'none';
}

// Add click event listener to the start quiz button
startQuizButton.addEventListener('click', startQuiz);

// JavaScript code for the quiz and restart functionality
document.addEventListener("DOMContentLoaded", function () {
  const quizContainer = document.getElementById("quiz-container");
  const resultContainer = document.getElementById("result-container");
  const restartButton = document.getElementById("restart-btn");

 // Retrieve the quizStarted flag from localStorage
 const isQuizStarted = localStorage.getItem('quizStarted');

 // Check if the page was reloaded, if not and the quiz hasn't started yet, show the start button
 if (performance.navigation.type !== 1 && !isQuizStarted) {
   startQuizButton.style.display = 'block';
 }

// Define the restartQuiz function
  function restartQuiz() {
    // Reset variables for the quiz
    currentQuestionIndex = 0;
    score = 0;

// Show the first question again
  showQuestion();

  // Hide the quiz results container if it's visible
  resultsContainer.style.display = 'none';

  // Show the start quiz button and hide the restart button
  const restartButton = document.getElementById('restart-btn');
  restartButton.style.display = 'none';

  // Set quizStarted back to false
  quizStarted = false;
}

// Add an event listener to the restart button
restartButton.addEventListener('click', restartQuiz);
});