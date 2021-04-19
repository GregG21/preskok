const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);

function createAndWriteOutput(operator, resultBefore, calcNumber) {
  outputDescription = `${resultBefore} ${operator} ${calcNumber}`;
  outputResult(currentResult, outputDescription);
}

function calculateResult(calculationType) {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  let mathOperator;
  switch (calculationType.toLowerCase()) {
    case "add":
      currentResult += enteredNumber;
      mathOperator = "+";
      break;

    case "subtract":
      currentResult -= enteredNumber;
      mathOperator = "-";
      break;
    case "multiply":
      currentResult *= enteredNumber;
      mathOperator = "*";
      break;
    case "divide":
      currentResult /= enteredNumber;
      mathOperator = "/";
      break;
  }
  console.log(mathOperator);
  createAndWriteOutput(mathOperator, initialResult, enteredNumber);
  writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

function writeToLog(
  operationIndentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIndentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function getUserNumberInput() {
  return parseInt(userInput.value);
}

function add() {
  calculateResult("ADD");
}

function subtract() {
  calculateResult("SUBTRACT");
}

function multiply() {
  calculateResult("MULTIPLY");
}

function divide() {
  calculateResult("DIVIDE");
}
