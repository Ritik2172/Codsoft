let display = document.getElementById('display');
let clearButton = document.getElementById('clear');
let backspaceButton = document.getElementById('backspace');
let equalsButton = document.getElementById('equals');
let expression = '';
let result = 0;
// Add event listeners to buttons
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        let value = button.textContent;
        if (value === 'C') {
            clear();
        } else if (value === '←') {
            backspace();
        } else if (value === '=') {
            calculate();
        } else {
            expression += value;
            display.value = expression;
        }
    });
});
// Clear function
function clear() {
    expression = '';
    display.value = '';
}
// Backspace function
function backspace() {
    expression = expression.slice(0, -1);
    display.value = expression;
}
// Calculate function
function calculate() {
    try {
        result = eval(expression);
        display.value = result;
        expression = result.toString();
    } catch (error) {
        display.value = 'Error';
        expression = '';
    }
}
