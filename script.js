const questions = [
  {
    question: "¿La celulosa es un polímero...?",
    answers: [
      { text: "Natural", correct: true },
      { text: "Sintético", correct: false },
      { text: "Artificial", correct: false }
    ]
  },
  {
    question: "El nylon es un polímero...",
    answers: [
      { text: "Natural", correct: false },
      { text: "Sintético", correct: true },
      { text: "Artificial", correct: false }
    ]
  },
  {
    question: "El rayón (viscosa) es un polímero...",
    answers: [
      { text: "Natural", correct: false },
      { text: "Sintético", correct: false },
      { text: "Artificial", correct: true }
    ]
  },
  {
    question: "El caucho natural es...",
    answers: [
      { text: "Natural", correct: true },
      { text: "Sintético", correct: false },
      { text: "Artificial", correct: false }
    ]
  }
];

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const nextButton = document.getElementById("next-btn");
const resultContainer = document.getElementById("result-container");
const quizContainer = document.getElementById("quiz-container");
const scoreElement = document.getElementById("score");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  resultContainer.classList.add("hidden");
  quizContainer.classList.remove("hidden");
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  questionElement.innerText = currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.addEventListener("click", () => selectAnswer(button, answer.correct));
    answersElement.appendChild(button);
  });
}

function resetState() {
  nextButton.classList.add("hidden");
  answersElement.innerHTML = "";
}

function selectAnswer(button, correct) {
  if (correct) {
    button.classList.add("correct");
    score++;
  } else {
    button.classList.add("wrong");
  }

  Array.from(answersElement.children).forEach(btn => {
    btn.disabled = true;
  });

  nextButton.classList.remove("hidden");
}

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  quizContainer.classList.add("hidden");
  resultContainer.classList.remove("hidden");
  scoreElement.innerText = `Has obtenido ${score} de ${questions.length} respuestas correctas.`;
}

function restartQuiz() {
  startQuiz();
}

startQuiz();
