let currentNumber = '';
let previousNumber = '';
let operation = null;

const display = document.getElementById('display');


function appendNumber(s){
    if(currentNumber.includes('.') && s == '.'){
        return;
    }
    currentNumber = currentNumber.toString() + s.toString();
    updateDisplay();

    // if(display.innerText == 0){
    //     display.innerText = s;
    // }
    // else{
    //     display.innerText += s;
    // }
}

function chooseOperation(op){
    if(currentNumber === '') return;
    if(previousNumber !== ''){
        compute();
    }

    operation = op;
    previousNumber = currentNumber;
    currentNumber = '';
}

function clearDisplay(){
    // display.innerText = 0;
    currentNumber = '';
    previousNumber = '';
    operation = null;
    updateDisplay();
}

function compute(){
    if(previousNumber === ''){
        return;
    }
    let computation;

    const prev = parseFloat(previousNumber);
    const current = parseFloat(currentNumber);
    if(isNaN(prev) || isNaN(current)) return;

    switch(operation){
        case '+':
            computation = prev + current;
            break;
        case '-':
            computation = prev - current;
            break;
        case '*':
            computation = prev * current;
            break;
        case '/':
            computation = prev / current;
             break;
        default:
            return;
    }
    currentNumber = computation;
    operation = undefined;
    previousNumber = '';
    updateDisplay();
}


function updateDisplay(){
    display.innerText = currentNumber;
    if(currentNumber === ''){
        display.innerText = 0;
    }
}