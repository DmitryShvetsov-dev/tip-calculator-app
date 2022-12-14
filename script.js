let timserForCalculator = setInterval(() => calculator(), 20);
let timserForBillInput = setInterval(() => checkBillInput(), 20);
let timserForPeopleAmountInput = setInterval(
  () => checkPeopleAmountInput(),
  20
);
let timserForButton6 = setInterval(() => checkButton6(), 20);
let timserForResetButton = setInterval(() => resetButtonActive(), 20);
function calculator() {
  values = [
    document.getElementById("billInput").value,
    document.getElementById("peopleAmountInput").value,
  ];
  let tip = document.getElementById("tipNumber");
  let total = document.getElementById("totalNumber");
  let tipValue = Math.round(((values[0] / 100) * tipPercent) / values[1]);
  let totalValue = Math.round(values[0] / values[1] + tipValue);
  tip.innerHTML = tipValue;
  total.innerHTML = totalValue;
  if (isNaN(tipValue)) {
    tip.innerHTML = "0.00";
  }
  if (isNaN(totalValue)) {
    total.innerHTML = "0.00";
  }
  if (tipValue == Infinity) {
    tip.innerHTML = "0.00";
  }
  if (totalValue == Infinity) {
    total.innerHTML = "0.00";
  }
}
function reset() {
  location.reload();
}
function resetButtonActive() {
  let button = document.getElementById("resetButton");
  if (tipPercent != 0) {
    button.id = "resetButtonActive";
  }
}
let tipPercent = 0;
let button6IsActive = false;
function button1() {
  tipPercent = 5;
}
function button2() {
  tipPercent = 10;
}
function button3() {
  tipPercent = 15;
}
function button4() {
  tipPercent = 25;
}
function button5() {
  tipPercent = 50;
}
function button6() {
  document.getElementById("customButton").style.display = "none";
  document.getElementById("percentInput").style.display = "block";
  button6IsActive = true;
}

function checkButton6() {
  if (button6IsActive) {
    tipPercent = document.getElementById("percentInput").value;
  } else {
    return;
  }
  parseInt(tipPercent);
  if (isNaN(tipPercent)) {
    document.getElementById("percentInput").style.border =
      "solid 2px hsl(5, 90%, 51%)";
  } else {
    document.getElementById("percentInput").style.border =
      "solid 2px hsl(172, 67%, 45%)";
  }
}
function checkBillInput() {
  let billInput = document.getElementById("billInput").value;
  parseInt(billInput);
  if (isNaN(billInput)) {
    document.getElementById("billInput").style.border =
      "solid 2px hsl(5, 90%, 51%)";
  } else {
    document.getElementById("billInput").style.border =
      "solid 2px hsl(172, 67%, 45%)";
  }
}
function checkPeopleAmountInput() {
  let amountInput = document.getElementById("peopleAmountInput").value;
  parseInt(amountInput);
  if (isNaN(amountInput)) {
    document.getElementById("peopleAmountInput").style.border =
      "solid 2px hsl(5, 90%, 51%)";
  } else {
    document.getElementById("peopleAmountInput").style.border =
      "solid 2px hsl(172, 67%, 45%)";
  }
}
