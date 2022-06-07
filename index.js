const display = document.getElementById('text');
const submit = document.getElementById('submit');
const empty = document.getElementById('empty');
const arrow = document.getElementsByClassName('arrow');
const container = document.getElementsByClassName('container');
const brac = document.getElementById('brac');

const func = (e) => {
    display.innerText += e;
}

submit.addEventListener('click', () => {
    try {
        display.innerText = eval(display.innerText);
    } catch (error) {
        display.innerText = '';
    }
});

brac.addEventListener('click', () => {
    let toogle = 0;
    for(let i = 0; i < display.innerText.length; i++) {
        if(display.innerText[i] === ')') toogle = 0;
        if(display.innerText[i] === '(') toogle = 1;
    }
    if(toogle === 0)  display.innerText += '(';
    else  display.innerText += ')';
});

empty.addEventListener('click', () => {
    display.innerText = '';
});

arrow[0].addEventListener('click', () => {
    display.innerText = display.innerText.slice(0, display.innerText.length - 1);
});

document.addEventListener('keydown', (e) => {
    e = e.key
    if((e >= 0 && e <= 9) || e === '+' || e === '-' || e === '*' || e === '/' || e === '%' || e === '(' || e === ')' || e === 'Enter' || e === 'Backspace'){
        if(e === 'Enter') {
            display.innerText = eval(display.innerText);
        }
        else if(e === 'Backspace') {
            display.innerText = display.innerText.slice(0, display.innerText.length - 1);
        }
        else
            display.innerText += e;
    }
});