import {Calculator} from './class.js';

const numberButtons = document.querySelectorAll('.calculator__btn--number');
const operationButtons = document.querySelectorAll('.calculator__btn--operation'); 
const equalButton = document.querySelector('.calculator__btn--equal'); 
const allClearButton = document.querySelector('.calculator__btn--clear');
const operationElement = document.querySelector('.calculator__operation');
const resultElement = document.querySelector('.calculator__result');
const percentButton = document.querySelector('.calculator__btn--percent');
const plusMinusButton = document.querySelector('.calculator__btn--plus-minus');

const calculator = new Calculator(operationElement, resultElement);
  
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    })
})

equalButton.addEventListener('click', () => {
    calculator.compute();
    calculator.updateDisplay();
})

allClearButton.addEventListener('click', () => {
    calculator.clear();
    calculator.updateDisplay();
})

percentButton.addEventListener('click', () => {
    calculator.computeOperationWithPercent();
})

plusMinusButton.addEventListener('click', () => {
    calculator.computeOperationWithNegativeValues();
})
  