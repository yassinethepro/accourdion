let btn = document.querySelectorAll('.question');
let answer = document.querySelectorAll('.answer');


btn.forEach((question, index) => {
    question.addEventListener('click', () => {
      question.classList.toggle('plus')
        answer[index].classList.toggle('show');
        
    })
})
