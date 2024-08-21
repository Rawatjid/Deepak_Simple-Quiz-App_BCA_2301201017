const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correct: 2
    },
    {
        question: "Which language is used for web development?",
        options: ["Python", "JavaScript", "C++", "Java"],
        correct: 1
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        correct: 1
    },
    {
        question: "Who wrote 'Hamlet'?",
        options: ["Leo Tolstoy", "Charles Dickens", "William Shakespeare", "Mark Twain"],
        correct: 2
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEls = document.querySelectorAll(".quiz-option");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;
    optionsEls.forEach((el, index) => {
        el.textContent = currentQuestion.options[index];
        el.style.backgroundColor = "#444"; // Reset button color
    });
    nextBtn.style.display = "none";
    resultEl.style.display = "none";
}

function selectAnswer(optionIndex) {
    const currentQuestion = quizData[currentQuestionIndex];
    if (optionIndex === currentQuestion.correct) {
        optionsEls[optionIndex].style.backgroundColor = "green";
        score++;
    } else {
        optionsEls[optionIndex].style.backgroundColor = "red";
        optionsEls[currentQuestion.correct].style.backgroundColor = "green";
    }
    nextBtn.style.display = "block";
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionEl.style.display = "none";
    optionsEls.forEach(el => el.style.display = "none");
    nextBtn.style.display = "none";
    resultEl.style.display = "block";
    resultEl.textContent = `You scored ${score} out of ${quizData.length}!`;
}

// Load the first question
loadQuestion();
