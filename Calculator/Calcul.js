let text;
let waitSec = false;
let oprType;
let buff = 0;
let firstVal = 0;
window.onload = () => {
  text = document.querySelectorAll(".form-text");
  const num = document.querySelectorAll(".numbers");
  const opr = document.querySelectorAll(".operators");

  num[0].addEventListener("click", (e) => {
    if (e.target.nodeName == "BUTTON" && e.target.value != "CE") {
      sendNum(e.target.value);
    } else resetAll();
  });

  opr[0].addEventListener("click", (e) => {
    if (e.target.nodeName == "BUTTON" && e.target.value != "=") {
      catchOper(e.target.value);
    } else resolve();
  });
};

function resolve() {
  buff = Number(text[0].value);
  switch (oprType) {
    case "+":
      firstVal = firstVal + buff;
      break;
    case "-":
      firstVal = firstVal - buff;
      break;
    case "/":
      firstVal = firstVal / buff;
      break;
    case "*":
      firstVal = firstVal * buff;
      break;
  }
  waitSec = false;
  text[0].value = firstVal;
  buff = 0;
}

function catchOper(opr) {
  if (!waitSec) {
    firstVal = Number(text[0].value);
    oprType = opr;
    waitSec = true;
    text[0].value = "0";
  } else if (waitSec) {
    buff = Number(text[0].value);
    resolve();
  }
}

function sendNum(num) {
  if (text[0].value == "0") {
    text[0].value = num;
  } else text[0].value += num;
}

function resetAll() {
  text[0].value = "0";
  waitSec = false;
}
