const btn = document.getElementById("cal");
const resultEl = document.getElementById("result");

btn.addEventListener("click", calcIMC);

function calcIMC() {
  const holder1 = document.getElementById("cmPut").value;
  const holder2 = document.getElementById("kgPut").value;

  const imc = holder2 / (holder1 / 100) ** 2;

  resultEl.textContent = `Your IMC is ${imc.toFixed(1)}`;
}

console.log(calcIMC);

let imcresult = "";

if (calcIMC < 18.5) {
  imcresult = "Underweight";
} else if (calcIMC >= 18.5 && calcIMC < 25) {
  imcresult = "Normal";
} else if (calcIMC >= 25 && calcIMC <= 29.9) {
  imcresult = "Overweight";
} else if (calcIMC >= 30 && calcIMC <= 34.9) {
  imcresult = "Obese Class I";
} else if (calcIMC >= 35 && calcIMC <= 39.9) {
  imcresult = "Obese Class II";
} else if (calcIMC >= 40 && calcIMC <= 44.9) {
  imcresult = "Obese Class III";
} else if (calcIMC > 45) {
  imcresult = "Obese Class IV";
} else if ("Error: Please enter a valid number")
  resultEl.textContent = `${imcresult}`;

console.log(imcresult);
