const buttonLeft = document.querySelector('.button-arrow.-left');
const buttonRight = document.querySelector('.button-arrow.-right');
const elements = document.querySelector('.elements');
let translate = 0;

buttonLeft.addEventListener('click', function() {
    translate -= 50;
    elements.style = `transform: translateX(${translate}px)`;
});

buttonRight.addEventListener('click', function() {
    translate += 50;
    elements.style = `transform: translateX(${translate}px)`;
});
