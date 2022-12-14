// variables
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
// Quiz Questions
const myQuestions = [
    {
      question: "What is the correct JavaScript syntax to print “Hello World” in the console?",
      answers: {
        a: "print(Hello World);",
        b: "console.log('Hello World');",
        c: "console.lon(Hello Wolrd);"
      },
      correctAnswer: "b"
    },
    {
      question: "Which of the following print content on the browser window?",
      answers: {
        a: "document.write(“print content”);",
        b: "document.write(print content);",
        c: "write(“print content”);"
      },
      correctAnswer: "a"
    },
    {
      question: "Which of the following statements will show a message as well as ask for user input in a popup?",
      answers: {
        a: "alert()",
        b: "confirm()",
        c: "prompt()",
        d: "message()"
      },
      correctAnswer: "c"
    }
  ];

// --- FUNCTIONS ---

// 1. Build Quiz
(function(){
  // Functions
  function buildQuiz(){
    // variable to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        // variable to store the list of possible answers
        const answers = [];

        // and for each available answer...
        for(letter in currentQuestion.answers){

          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

        // add this question and its answers to the output
        output.push(
          `<div class="slide">
            <div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>
          </div>`
        );
      }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }

// 2. SHOW RESULTS
function showResults(){
  const answerContainers = quizContainer.querySelectorAll('.answers');
  let numCorrect = 0;
  myQuestions.forEach( (currentQuestion, questionNumber) => {

    // find selected answer
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    // if answer is correct
    if(userAnswer === currentQuestion.correctAnswer){
      // add to the number of correct answers
      numCorrect++;

      // color the answers green
      answerContainers[questionNumber].style.color = 'lightgreen';
    }
    // if answer is wrong or blank
    else{
      // color the answers red
      answerContainers[questionNumber].style.color = 'red';
    }
  });

  // show number of correct answers out of total
  resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length} correct!`;
}


// 3. Show SLides 
function showSlide(n) {
  slides[currentSlide].classList.remove('active-slide');
  slides[n].classList.add('active-slide');
  currentSlide = n;
  if(currentSlide === 0){
    previousButton.style.display = 'none';
  }
  else{
    previousButton.style.display = 'inline-block';
  }
  if(currentSlide === slides.length-1){
    nextButton.style.display = 'none';
    submitButton.style.display = 'inline-block';
  }
  else{
    nextButton.style.display = 'inline-block';
    submitButton.style.display = 'none';
  }
}

// Start
buildQuiz();

// Pagination
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

// Show the first slide
showSlide(currentSlide);

// Show next slide
function showNextSlide() {
  showSlide(currentSlide + 1);
}
// SHow Previous Slide
function showPreviousSlide() {
  showSlide(currentSlide - 1);
}

// Event listeners
submitButton.addEventListener('click', showResults);
previousButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);
})();