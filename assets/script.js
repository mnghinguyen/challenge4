var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

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


  // we'll want to store the list of answer choices
const answers = [];

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
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );
  
    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
}

function showResults(){}

// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);




  



// and for each available answer...
for(letter in currentQuestion.answers){

  // ...add an html radio button
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
  `<div class="question"> ${currentQuestion.question} </div>
  <div class="answers"> ${answers.join('')} </div>`
);

quizContainer.innerHTML = output.join('');

