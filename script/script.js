'use script';

class Calculator {
    constructor(operationElement, resultElement) {
        this.operationElement = operationElement
        this.resultElement = resultElement
        this.clear()
    }
  
    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    updateDisplay() {
        this.operationElement.innerText = `${this.currentOperand}`
    }
}

const numberButtons = document.querySelectorAll('.calculator__btn--number');
const operationButtons = document.querySelectorAll('.calculator__btn--operation'); 
const equalsButton = document.querySelector('.calculator__btn--equal'); 
const allClearButton = document.querySelector('.calculator__btn--clear');
const operationElement = document.querySelector('.calculator__operation');
const resultElement = document.querySelector('.calculator__result');

const calculator = new Calculator(operationElement, resultElement);

numberButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault()
      calculator.appendNumber(button.innerText)
      calculator.updateDisplay()
    })
  })