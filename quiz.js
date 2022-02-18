const quizDB =[
    {
        question: "Q1:Which of the following keywords is used to define a variable in Javascript?",
        a: "var",
        b: "let",
        c:"Both A & B",
        d: "None",
        ans:"ans3"
    },
      {
        question: "Q2: What is the full form of CSS?",
        a: "Cascading Style Sheets",
        b: "Cascading Style Sheep",
        c:"Cartoon Style Sheet",
        d: "None",
        ans:"ans1"
      },
      {
          question: "Q3: What is the full form of Js?",
          a:"JavaSheet",
          b:"JavaScript",
          c:"JavaSceen",
          d:"None",
          ans:"ans2"
      },
      {
          question:"Q4: What is the full form of html?",
          a:"Hypertext Markup learning",
          b:"HyperTest makeup language",
          c:"Hello To My Land",
          d:"Hypertext Markup language",
          ans:"ans4"
      }
];
const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');

let questionCount=0;
let score =0;
const loadQuestion = ()=>{
    const questionList=quizDB[questionCount];
question.innerHTML=questionList.question;

option1.innerHTML=questionList.a;
option2.innerHTML=questionList.b;
option3.innerHTML=questionList.c;
option4.innerHTML=questionList.d;
}
loadQuestion();
 const getCheckAnswer=()=>{
     let answer;

     answers.forEach((curAnsElem) =>{
      if(curAnsElem.checked){
          answer=curAnsElem.id;
      }
     
     });

     return answer;

};

const deselectAll=()=>{
    answers.forEach((curAnsElem)=> curAnsElem.checked=false);
}

submit.addEventListener('click', () =>{
    const checkedAnswer= getCheckAnswer();
    console.log(checkedAnswer);
 
    if(checkedAnswer === quizDB[questionCount].ans){
        score++;
    };
    questionCount++;
    deselectAll();
if(questionCount < quizDB.length){
    loadQuestion();
}

else{
    let gf = score;
    gf=gf//1;

    showScore.innerHTML=
   '<h3> You Scored'+" "+ gf.toString() +'</h3>' +
    '<button class="btn" onclick="location.reload()">Play Again </button>"';
    showScore.classList.remove('scoreArea');

}


});