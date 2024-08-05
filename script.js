let displayValue = '';
let currentOperation = null;
let firstOperand = null;

function updateDisplay() {
    document.getElementById('display').innerText = displayValue || '0';
}

function clearDisplay() {
    displayValue = '';
    firstOperand = null;
    currentOperation = null;
    updateDisplay();
}

function appendNumber(number) {
    if (currentOperation && firstOperand === null) {
        firstOperand = parseFloat(displayValue);
        displayValue = '';
    }
    displayValue += number;
    updateDisplay();
}

function setOperation(operator) {
    if (firstOperand === null && displayValue) {
        firstOperand = parseFloat(displayValue);
        displayValue += ` ${operator} `;
    } else if (currentOperation) {
        calculate();
        displayValue += ` ${operator} `;
    } else {
        displayValue = `${firstOperand} ${operator} `;
    }
    currentOperation = operator;
    updateDisplay();
}

function calculate() {
    if (currentOperation && firstOperand !== null) {
        const secondOperand = parseFloat(displayValue.split(' ').pop());
        let result = '';
        switch (currentOperation) {
            case '+':
                result = firstOperand + secondOperand;
                break;
            case '-':
                result = firstOperand - secondOperand;
                break;
            case '*':
                result = firstOperand * secondOperand;
                break;
            case '/':
                result = secondOperand !== 0 ? firstOperand / secondOperand : 'Error';
                break;
        }
        displayValue = result.toString();
        firstOperand = null;
        currentOperation = null;
    }
    updateDisplay();
}

updateDisplay();
