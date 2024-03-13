const question = [
    {
        question: "Q1",
        answer: [
            { text: "A1", correct: false },
            { text: "A2", correct: true },
            { text: "A3", correct: false },
            { text: "A4", correct: false },
        ]
    },
    {
        question: "Q2",
        answer: [
            { text: "A1", correct: false },
            { text: "A2", correct: false },
            { text: "A3", correct: false },
            { text: "A4", correct: true },
        ]
    },
    {
        question: "Q3",
        answer: [
            { text: "A1", correct: true },
            { text: "A2", correct: false },
            { text: "A3", correct: false },
            { text: "A4", correct: false },
        ]
    },
    {
        question: "Q4",
        answer: [
            { text: "A1", correct: false },
            { text: "A2", correct: false },
            { text: "A3", correct: true },
            { text: "A4", correct: false },
        ]
    },
];

const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = 'Next';
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = question[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + '. ' + currentQuestion.question;

        currentQuestion.answer.forEach(answer => {
            const button = document.createElement('button');
            button.innerHTML = answer.text;
            button.classList.add('btn');
            answerButtons.appendChild(button);
            if(answer.correct){
                button.dataset.correct = answer.correct;
            }
            button.addEventListener('click', selectAnswer);
        })
}

function resetState(){
    nextButton.style.display = 'none';
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === 'true';
    console.log(isCorrect);
    if(isCorrect) selectedBtn.classList.add('correct')
    else selectedBtn.classList.add('incorrect');
}

startQuiz();