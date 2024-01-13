document.addEventListener("DOMContentLoaded", function () {
  const expressionDisplay = document.querySelector(".expression");
  const resultDisplay = document.querySelector(".result");
  const buttons = document.querySelectorAll(".buttons button");

  let expression = "";
  let result = 0;

  buttons.forEach((button) => {
    button.addEventListener("click", () => handleButtonClick(button.innerText));
  });

  function handleButtonClick(value) {
    switch (value) {
      case "=":
        evaluateExpression();
        break;
      case "C":
        clearCalculator();
        break;
      default:
        updateExpression(value);
    }

    updateDisplay();
  }

  function updateExpression(value) {
    expression += value;
  }

  function evaluateExpression() {
    try {
      result = eval(expression);
      expression = "";
    } catch (error) {
      result = "Error";
    }
  }

  function clearCalculator() {
    expression = "";
    result = 0;
  }

  function updateDisplay() {
    expressionDisplay.textContent = expression;
    resultDisplay.textContent = result;
  }
});
