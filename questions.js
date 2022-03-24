const questionTextElement = document.getElementById('questionText');
const nextBtnElement = document.getElementById('nextBtn');

const questions = [
  {
    text: 'test question 1',
    answers: {
      A: 'test reponse 1',
      B: 'test reponse 2',
    },
  },
  {
    text: 'test question 2',
    answers: {
      A: 'test reponse 1',
      B: 'test reponse 2',
    },
  },
];
/*
for (let i = 0; i < questions.length; i += 1) {
  const currentQuestion = questions[i];
  questionTextElement.innerHTML = currentQuestion.text;
}
*/
let currentIndex = 0;
function updatePageQuestion(currentQuestion) {
  questionTextElement.innerHTML = currentQuestion.text;
}

updatePageQuestion(questions[currentIndex]);

nextBtnElement.addEventListener('click', () => {
  currentIndex += 1;
  updatePageQuestion(questions[currentIndex]);
});
