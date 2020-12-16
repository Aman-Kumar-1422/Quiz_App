const quizData=[
    {
        question: 'Who is the Prime Minister Of India?',
        a:'Narendra Modi',
        b:'Yogi Adityanath',
        c:'Arvind Kejriwal',
        d:'Rahul Gandhi',
        correct:'a'
    },
    {
        question: 'Who is the richest person in India?',
        a:'Ratan Tata',
        b:'Mukesh Ambani',
        c:'Azim Premji',
        d:'Gautam Adani',
        correct:'b'
    },
    {
        question: 'Who is the Captain of the Indian Cricket Team',
        a:'MS Dhoni',
        b:'Rohit Sharma',
        c:'KL Rahul',
        d:'Virat Kohli',
        correct:'d'
    },
    {
        question: 'What is the full form of HTML',
        a:'HyperText Markup Language',
        b:'Hypotext Mark Language',
        c:'High Text Measure Language',
        d:'Hypertext Markdown Langauge',
        correct:'a'
    },
    {
        question: 'When was Javascript launched?',
        a:'1996',
        b:'1989',
        c:'1999',
        d:'1995',
        correct:'d'
    },
    {
        question: 'When was iPhone launched?',
        a:'2011',
        b:'2009',
        c:'2007',
        d:'2005',
        correct:'c'
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});