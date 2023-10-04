// const beginQuizEl = document.getElementById("start-quiz");
const quizQuestions = [{
    question: "Commonly used data types DO NOT include: ",
    answer: 
        [{text: "Strings", isCorrect : false },
        {text: "Boolean", isCorrect: false },
        {text: "alert", isCorrect: true },
        {text: "Numbers", isCorrect: false },
    ]

},
{
    question: "The condition in an if/else statement is enclosed with _____. ",
    answer: 
        [{text: "quotes", isCorrect : false },
        {text: "curly brackets", isCorrect: true },
        {text: "parenthesis", isCorrect: false },
        {text: "square brackets", isCorrect: false },
    ]

},
{
    question: "Arrays in JavaScript can be used to store_____. ",
    answer: 
        [{text: "numbers and strings", isCorrect : false },
        {text: "other arrays", isCorrect: false },
        {text: "booleans", isCorrect: false },
        {text: "all of the above", isCorrect: true },
    ]

},
{
    question: "String values must be enclosed within ____ when being assigned to variables.",
    answer: 
        [{text: "commas", isCorrect : false },
        {text: "curly brackets", isCorrect: false },
        {text: "quotes", isCorrect: true },
        {text: "parenthesis", isCorrect: false },
    ]},
    // List of the questions for quiz
];

const questionsElement = document.getElementById("questions");
const answerBtn = document.getElementById("answer-buttons");
const nextBtn = document.getElementById("submit-button");
// will be used in functions

let currentQuestionIndex = 0;
let score = 0;
// starter points for both the points-counted and question-order

function startGame(){
// function added to start the game that will have question number and be scored
    currentQuestionIndex = 0;
    score = 0; 
    nextBtn.innerHTML = "NEXT";
   
    showQuestion();
    // call functon to display questions
}

function showQuestion(){
    // function to show question and answers
    let currentQuestion = quizQuestions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    /* to make the zero [] into 1 in order to have the first question be the with the first listed question in the quizQuestion array */ 
    questionsElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("button");
        answerBtn.appendChild(button);
        /* will show both the button-class-answer and the answers to the queston */
    });
}

startGame();


