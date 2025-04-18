const questions = [
    {
        question: "Which is largest animal in the world",
        answers: [
            { text: "Shark", correct: false},
            { text: "Blue Whale", correct: true},
            { text: "Elephant", correct: false},
            { text: "Giraffe", correct: false}
        ]
    },
    {
        question: "Which is smallest country in the world",
        answers: [
            { text: "Vatican City", correct: true},
            { text: "Bhutan", correct: false},
            { text: "Nepal", correct: false},
            { text: "Sri lanka", correct: false}
        ]
    },
    {
        question: "Which is largest desert in the world",
        answers: [
            { text: "Kalahari", correct: false},
            { text: "Sahara", correct: false},
            { text: "Gobi", correct: false},
            { text: "Antarctica", correct: true}
        ]
    },
    {
        question: "Which is smallest continent in the world",
        answers: [
            { text: "Asia", correct: false},
            { text: "Australia", correct: true},
            { text: "Artic", correct: false},
            { text: "Africa", correct: false}
        ]
    }
];

const quesElement = document.getElementById("question");
const ansBtn = document.getElementById("ans-btn");
const nextBtn = document.getElementById("next-btn");
const preBtn = document.getElementById("pre-btn");
const playAgainBtn = document.getElementById("playAgain-btn");

let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];

function startQuiz() {
    playAgainBtn.style.display = "none";
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = []; // Reset user answers when starting quiz
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    quesElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        ansBtn.appendChild(button);
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        if (userAnswers[currentQuestionIndex] && userAnswers[currentQuestionIndex].selected === answer.text) {
            button.classList.add(userAnswers[currentQuestionIndex].correct ? 'correct' : 'incorrect');
            button.disabled = true;
        }
    });
    nextBtn.style.display = "block";
    showPrevious();
}

function resetState() {
    while(ansBtn.firstChild) {
        ansBtn.removeChild(ansBtn.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === 'true';
    userAnswers[currentQuestionIndex] = {
        selected: selectedBtn.innerHTML,
        correct: isCorrect
    };
    if(isCorrect) {
        selectedBtn.classList.add('correct');
        score++;
    } else {
        selectedBtn.classList.add('incorrect');
    }
    Array.from(ansBtn.children).forEach(button => {
        if(button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    }); 
}

preBtn.addEventListener('click', () => {
    if (currentQuestionIndex >= 1) {
        currentQuestionIndex = currentQuestionIndex-1;
        showQuestion();
    }
    
});

nextBtn.addEventListener('click', () => {
    if(currentQuestionIndex < questions.length) {
        handleNextBtn();
    } else {
        startQuiz();
    }
})

function handleNextBtn() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
   
}

function showScore() {
    nextBtn.style.display = "none";
    preBtn.style.display = "none";
    resetState();
    quesElement.innerHTML = `You Scored ${score} out of ${questions.length}`;
    playAgainBtn.style.display = "block";
}
playAgainBtn.addEventListener('click', () => {
    startQuiz();
})

function showPrevious() {
    if (currentQuestionIndex >= 1) {
        preBtn.style.display = "block";
    }else {
        preBtn.style.display = "none";

    }
    
}

startQuiz();