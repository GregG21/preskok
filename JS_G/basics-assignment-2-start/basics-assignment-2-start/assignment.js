const task3Element = document.getElementById("task-3");

function randomAlert() {
  alert("Inside function randomAlert");
}
function myName(inputName) {
  alert(`Hello ${inputName}`);
}

task3Element.addEventListener("click", randomAlert);

function threeString(a, b, c) {
  return a + b + c;
}

// alert(threeString("a", "b", "c"));
