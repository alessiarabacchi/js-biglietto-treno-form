const usernameInput = document.getElementById("user-name");
const kmInput = document.getElementById("user-km");
const ageInput = document.getElementById("user-age");
const printButton = document.getElementById("print-button");
const resetButton = document.getElementById("reset-button");
const resultElement = document.getElementById("result-element-price");
const resultName = document.getElementById("result-name");
const resultKm = document.getElementById("result-km");
const resultAge = document.getElementById("result-age");

const fullPrice = parseInt((kmInput * 0.21).toFixed(2));
console.log(fullPrice);

// Va applicato uno sconto del 20% per i minorenni
const minPrice = parseInt((fullPrice - (fullPrice * 20) / 100).toFixed(2));
console.log(minPrice);

// Va applicato uno sconto del 40% per gli over 65
const overPrice = parseInt((fullPrice - (fullPrice * 40) / 100).toFixed(2));
console.log(overPrice);

printButton.addEventListener("click", function () {
  const username = usernameInput.value;
  console.log(username);
  const km = kmInput.value;
  console.log(km);
  const age = ageInput.value;
  console.log(age);

  resultName.innerText = "Nome Passeggero" + ":" + username;
  resultKm.innerText = "Km Totali" + ":" + km;
  resultAge.innerText = "Km Totali" + ":" + age;

  if (ageInput === "minorenne") {
    resultElement.innerText =
      "Il prezzo del tuo biglietto è" + minPrice + "euro";
  }

  if (ageInput === "over65") {
    resultElement.innerText =
      "Il prezzo del tuo biglietto è" + overPrice + "euro";
  }

  if (ageInput === "maggiorenne") {
    resultElement.innerText =
      "Il prezzo del tuo biglietto è" + fullPrice + "euro";
  }
});
