document.addEventListener("DOMContentLoaded", function () {
    const questions = [
        {
            question: "What is 2 + 2?",
            answers: {
                a: "3",
                b: "4",
                c: "5",
                d: "6"
            },
            correctAnswer: "b",
        },
        {
            question: "What is 3 x 4?",
            answers: {
                a: "7",
                b: "10",
                c: "12",
                d: "11"
            },
            correctAnswer: "c",
        },
    ];

    const submitButton = document.getElementById("submit-button");
    const resultElement = document.getElementById("result");
    var questionName= document.getElementById("QuestionName");
    var questionNum= document.getElementById("num");
    let score = 0; var i=0;
    
    var Qa=document.getElementById("q1a");
    var Qb=document.getElementById("q1b");
    var Qc=document.getElementById("q1c");
    var Qd=document.getElementById("q1d");

function loadNextQuestion() {
    if (i < questions.length) {
        questionName.innerHTML = questions[i].question;
        questionNum.innerHTML = i + 1;
        Qa.innerHTML=questions[i].answers.a;
        Qb.innerHTML=questions[i].answers.b;
        Qc.innerHTML=questions[i].answers.c;
        Qd.innerHTML=questions[i].answers.d;

    } else {
        // All questions have been answered
        questionName.innerHTML = "Quiz completed!";
        questionNum.innerHTML = "";
        submitButton.disabled = true; // Disable the submit button
        resultElement.innerHTML = `You got ${score} out of ${questions.length} correct!`;
    }
}

loadNextQuestion(); // Load the first question when the page loads

submitButton.addEventListener("click", function () {
    const selectedAnswer = document.querySelector(`input[name="q${i + 1}"]:checked`);
    if (selectedAnswer) {
        if (selectedAnswer.value === questions[i].correctAnswer) {
            score++;
        }
    }

    i++;
     // Move to the next question
    loadNextQuestion(); // Load the next question or end the quiz if all questions are answered
});
});
