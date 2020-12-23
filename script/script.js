'use script';

class Calculator {
    constructor(operationElement, resultElement) {
        this.operationElement = operationElement;
        this.resultElement = resultElement;
        this.clear();
    }
  
    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    chooseOperation(operation) {
        if (this.currentOperand === '') return
        if (this.previousOperand !== '') {
            this.compute();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }
    
    compute() {
        let computation;
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        if (isNaN(prev) || isNaN(current)) return;
        switch (this.operation) {
          case '+':
            computation = prev + current;
            break;
          case '-':
            computation = prev - current;
            break;
          case '×':
            computation = prev * current;
            break;
          case '÷':
            computation = prev / current;
            break;
          default:
            return
        }
        this.currentOperand = computation;
        this.operation = undefined;
        this.previousOperand = '';
    }

    getDisplayNumber(number) {
        const stringNumber = number.toString();
        const integerDigits = parseFloat(stringNumber.split('.')[0]);
        const decimalDigits = stringNumber.split('.')[1];
        let integerDisplay;
        if (isNaN(integerDigits)) {
            integerDisplay = '';
        } else {
            integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 });
        }
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`;
        } else {
            return integerDisplay;
        }
    }

    updateDisplay() {
        this.resultElement.innerText = this.currentOperand;
        if (this.operation !== undefined) {
            this.operationElement.innerText = `${this.getDisplayNumber(this.previousOperand)}${this.operation}${this.getDisplayNumber(this.currentOperand)}`;
        } else if ( this.currentOperand === ''){
            this.operationElement.innerText = '';
        }
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

equalsButton.addEventListener('click', () => {
    calculator.compute();
    calculator.updateDisplay();
})

allClearButton.addEventListener('click', () => {
    calculator.clear();
    calculator.updateDisplay();
})