class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElemet) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElemet = currentOperandTextElemet;
    }
}

const numberButtons = document.querySelectorAll('[data-number]');
const operationsButtons = document.querySelectorAll('[data-operations]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElemet = document.querySelector('[data-current-operand]');


