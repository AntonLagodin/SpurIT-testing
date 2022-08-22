const button = document.querySelector('.collapsible__button');
const content = document.querySelector('.collapsible__content');
const btnTextVisible = document.querySelector('.collapsible__action--visible');
const btnTextHidden = document.querySelector('.collapsible__action--hidden');
btnTextHidden.style.display = 'none';

const btnValue = () => {
    if(btnTextHidden.style.display === 'none') {
        btnTextVisible.style.display = 'none';
        btnTextHidden.style.display = 'block';
    } else {
        btnTextVisible.style.display = 'block';
        btnTextHidden.style.display = 'none';
    }
}

const animationContent = content.animate(
    { opacity: [0, 1]},
    {
        duration: 500,
        fill: 'both',
        easing: 'ease-in-out',
        delay: 10,
    }
);

button.addEventListener('click', () => {
    btnValue();
    if(animationContent.playState === 'paused') {
        animationContent.play();
    }
    animationContent.reverse();
});