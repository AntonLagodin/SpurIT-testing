const button = document.querySelector('.collapsible__button');
const content = document.querySelector('.collapsible__content');
const btnTextVisible = document.querySelector('.collapsible__action--visible');
const btnTextHidden = document.querySelector('.collapsible__action--hidden');
btnTextHidden.style.display = 'none';

const btnTextValue = () => {
    if(btnTextHidden.style.display === 'none') {
        btnTextVisible.style.display = 'none';
        btnTextHidden.style.display = 'block';
    } else {
        btnTextVisible.style.display = 'block';
        btnTextHidden.style.display = 'none';
    }
}

const animation = content.animate(
    { opacity: [0, 1]},
    {
        duration: 500,
        fill: 'both',
        easing: 'ease-in-out',
        delay: 100,
    }
);

const clickHandler = () => {
    btnTextValue();
    if(animation.playState === 'paused') {
        animation.play();
    }
    animation.reverse();
}

button.addEventListener('click', clickHandler);