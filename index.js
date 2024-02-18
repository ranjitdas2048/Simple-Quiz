const form = document.querySelector('.quiz-form');
const actualAnswer = ['A', 'A', 'A', 'A', 'A'];

const showResult = document.querySelector(".result");
const result = document.querySelector(".result > p");

const Qustions = document.querySelectorAll(".qustion");
// console.log(allQustion);

// allQustion.classList.add("correct");

form.addEventListener("submit", (event) =>{
    event.preventDefault();
    let score = 0;
    const formAnswer= [form.q1.value , form.q2.value, form.q3.value, form.q4.value, form.q5.value];
    // console.log(formAnswer);
    formAnswer.forEach((value,index) =>{
        if(value === actualAnswer[index]){
            score = score + 1; 
            Qustions[index].style.backgroundColor = "#c8ffdf";
        }else{
            Qustions[index].style.backgroundColor = "#ffd1d1";
        }
    });
    console.log(score);
    showResult.classList.remove("hide");
    console.log(showResult.firstChild);
    scrollTo(0,0);

    showResult.querySelector("p").textContent = `You Scored ${score}/5!`;

});

