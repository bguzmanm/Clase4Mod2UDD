const tResult = document.getElementById("resultado");

const btnsNum = document.getElementsByClassName('btn btn-dark');

for (let i = 0; i < document.getElementsByClassName('btn btn-dark').length; i++) {
  const element = btnsNum[i];
  element.addEventListener('click', function () { putNumber(element.innerText) });
}

const clean = () => {
  tResult.value = '';
}
const putNumber = (value) => {
  tResult.value += value;
}

const bClean = document.getElementById("bclean");
bClean.addEventListener("click", function () { clean() })

const btnOperation = document.getElementsByClassName("btn btn-primary");
for (let i = 0; i < btnOperation.length; i++) {
  const element = btnOperation[i];
  element.addEventListener('click', function () { putOperation(element.innerText) });
}

const putOperation = (op) => {
  tResult.value += op;
}

const bEqual = document.getElementById("bequal");
bEqual.addEventListener("click", function () { equal() });

const equal = () => {
  tResult.value = eval(tResult.value);
}