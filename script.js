let currentInput = '';
let operator = '';
let previousInput = '';

function appendNumber(number) {
  currentInput += number;
  updateDisplay();
}

function setOperation(op) {
  if (currentInput === '') return;
  if (previousInput !== '') calculate();
  operator = op;
  previousInput = currentInput;
  currentInput = '';
}

function calculate() {
  let result;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);

  if (isNaN(prev) || isNaN(current)) return;

  switch (operator) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '*':
      result = prev * current;
      break;
    case '/':
      if (current === 0) {
        alert("Can't divide by zero");
        clearDisplay();
        return;
      }
      result = prev / current;
      break;
    default:
      return;
  }

  currentInput = result.toString();
  operator = '';
  previousInput = '';
  updateDisplay();
}

function clearDisplay() {
  currentInput = '';
  previousInput = '';
  operator = '';
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('display').value = currentInput;
}
