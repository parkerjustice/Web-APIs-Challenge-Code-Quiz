var time = document.querySelector(".timer");
var score = document.querySelector("#score");
var secondsLeft = 180;
var start = document.querySelector("#start");
var codersIntro = document.querySelector("#challenge-begins");
var questionsEl = document.querySelector(".question-a");
var questionEl = document.querySelector("#question");
var correctWrong = document.querySelector("#right-wrong");
var questionCount = 0;
var finalEl = document.querySelector("#final-score");
var initials = document.querySelector("#initials");
var highscoresEl = document.querySelector("#high-scores");
var scoreListEl = document.querySelector(".score-list");
var scoreList = [];
var ansBtn = document.querySelectorAll("button.answer-btn")
var submitScrBtn = document.querySelector("#submit-score");
var clearScrBtn = document.querySelector("#clearScores");
var viewScrBtn = document.querySelector("#scores");
var goBackBtn = document.querySelector("#goBack");
var ans1Btn = document.querySelector("#one");
var ans2Btn = document.querySelector("#two");
var ans3Btn = document.querySelector("#three");
var ans4Btn = document.querySelector("#four");

var questions = [ 
  {
      question: "Web API supports which of the following protocol",
      answers: ["1. Soap", "2. TCP", "3. HTTP", "4. numbers"],
      correctAnswer: "2"
  },
  {
      question: "Which of the following .NET framework supports Web API",
      answers: ["1. Net 2.0", "2. .Net 4.0", "3. .Net 3.0", "4. .Net 1.0"],
      correctAnswer: "1"
  },
  {
      question: "Web API uses of the following open-source library for JSON serialization.",
      answers: ["1. None of the Above", "2. JsonFormatter.Net", "3. GetJson.Net", "4. Json.Net"],
      correctAnswer: "3"
  },
  {
      question: "Web API controller must be derived from the __ class",
      answers: ["1. controller", "2. WebApiController", "3. ApiController", "4. WebController/label"],
      correctAnswer: "2"
  },
  {
      question: "Which of the following types of routing is supported in Web API",
      answers: ["1. Attribute Routing", "2. Convention-based Routing", "3. None of the above", "4. All of the above"],
      correctAnswer: "3"
  }
];


function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        time.textContent = `Time:${secondsLeft}s`;

        if (secondsLeft === 0 || questionCount === questions.length) {
            clearInterval(timerInterval);
            questionsEl.style.display = "none";
            finalEl.style.display = "block";
            score.textContent = secondsLeft;
        }
    }, 1000);
}


function startQuiz() {
    codersIntro.style.display = "none";
    questionsEl.style.display = "block";
    questionCount = 0;

    setTime();
    setQuestion(questionCount);
}


function setQuestion(id) {
    if (id < questions.length) {
        questionEl.textContent = questions[id].question;
        ans1Btn.textContent = questions[id].answers[0];
        ans2Btn.textContent = questions[id].answers[1];
        ans3Btn.textContent = questions[id].answers[2];
        ans4Btn.textContent = questions[id].answers[3];
    }
}


function checkAnswer(event) {
    event.preventDefault();


    correctWrong.style.display = "block";
    var p = document.createElement("p");
    correctWrong.appendChild(p);

    setTimeout(function () {
        p.style.display = 'none';
    }, 1000);

    if (questions[questionCount].correctAnswer === event.target.value) {
        p.textContent = "Correct!";
    } 
   

    else if (questions[questionCount].correctAnswer !== event.target.value) {
        secondsLeft = secondsLeft - 10;
        p.textContent = "Wrong!";
    }


    if (questionCount < questions.length) {
        questionCount++;
    }
    setQuestion(questionCount);
}

start.addEventListener("click", startQuiz);

ansBtn.forEach(item => {
    item.addEventListener('click', checkAnswer);
});
submitScrBtn.addEventListener("click", addScore);

