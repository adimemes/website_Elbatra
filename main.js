const result = document.getElementById('result');
let currentOperand = '';
let previousOperand = '';
let operator = '';

function appendNumber(number) {
    currentOperand += number;
    updateResult();
}

function appendOperator(op) {
    if (currentOperand === '') return;
    if (previousOperand !== '') {
        calculate();
    }
    operator = op;
    previousOperand = currentOperand;
    currentOperand = '';
}

function clearResult() {
    currentOperand = '';
    previousOperand = '';
    operator = '';
    updateResult();
}

function calculate() {
    if (operator === '') return;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    let computation;
    switch (operator) {
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
    currentOperand = computation.toString();
    operator = '';
    previousOperand = '';
    updateResult();
}

function updateResult() {
    result.value = currentOperand;
}