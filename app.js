const input = document.getElementById("input");
const from = document.getElementById("from");
const to = document.getElementById("to");
const initialValue = document.getElementById("initialValue");
const finalValue = document.getElementById("finalValue");
const btn = document.getElementById("btn");
const rp = document.getElementById("rp");

function convert() {
  let fromUnit = from.value.toLowerCase();
  let toUnit = to.value.toLowerCase();
  //from gram to kg
  if (fromUnit == "gram" && toUnit == "kg") {
    console.log(input.value / 1000 + "kg");
    initialValue.innerHTML = input.value + " grams";
    finalValue.innerHTML = input.value / 1000 + " kg";
    //from gram to tonne
  } else if (fromUnit == "gram" && toUnit == "tonne") {
    initialValue.innerHTML = input.value + " grams";
    finalValue.innerHTML = input.value / 1000000 + " tonnes";
    //from kg to tonne
  } else if (fromUnit == "kg" && toUnit == "tonne") {
    initialValue.innerHTML = input.value + " kg";
    finalValue.innerHTML = input.value / 1000 + " tonnes";
    //from kg to gram
  } else if (fromUnit == "kg" && toUnit == "gram") {
    initialValue.innerHTML = input.value + " kg";
    finalValue.innerHTML = input.value * 1000 + " grams";
    //from tonne to kg
  } else if (fromUnit == "tonne" && toUnit == "kg") {
    initialValue.innerHTML = input.value + " grams";
    finalValue.innerHTML = input.value * 1000 + " kg";
    //from tonne to gram
  } else if (fromUnit == "tonne" && toUnit == "gram") {
    initialValue.innerHTML = input.value + " grams";
    finalValue.innerHTML = input.value * 1000000 + " kg";
  } else if (fromUnit == toUnit && fromUnit !== "default") {
    initialValue.innerHTML = input.value + fromUnit;
    finalValue.innerHTML = input.value + fromUnit;
  } else {
    let msg = "please select the unit for conversion";
    rp.innerHTML = msg;
  }
}
//event listeners
btn.addEventListener("click", convert);
