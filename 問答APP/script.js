const quizData = [
  {
    question: "下列哪種程式語言在瀏覽器中運行？",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "CSS 全名是什麼？",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
  },
  {
    question: "HTML 全名是什麼？",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "JavaScript 是在哪一年上線的？",
    a: "1998",
    b: "1995",
    c: "1992",
    d: "以上皆非",
    correct: "b",
  },
];

const quizContainer = document.querySelector(".quiz-container");
const answerNodes = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

submitBtn.addEventListener("click", () => {
  const finalAnswer = selectAnswer();
  if (finalAnswer) {
    updateScore(finalAnswer);
    currentQuiz++;
    updateQuizPanel();
  }
});

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionEl.textContent = currentQuizData.question;
  [a_text.textContent, b_text.textContent, c_text.textContent, d_text.textContent] = [currentQuizData.a, currentQuizData.b, currentQuizData.c, currentQuizData.d];
}

function selectAnswer() {
  let answer;
  for (let answerEl of answerNodes) {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  }
  return answer;
}

function deselectAnswers() {
  for (let answerEl of answerNodes) {
    answerEl.checked = false;
  }
}

function updateScore(answer) {
  if (answer === quizData[currentQuiz].correct) {
    score++;
  }
}

function updateQuizPanel() {
  if (currentQuiz < quizData.length) {
    loadQuiz();
  } else {
    quizContainer.innerHTML = `
        <h2 class="title"><i class="fa-regular fa-face-smile"></i> 你的答對率為：${score} / ${quizData.length} 題</h2>
        <button class="btn" onclick="location.reload()">重測一次</button>`;
  }
}