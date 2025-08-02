"use strict";

// First Calculation
const part = document.querySelector("#part");
const whole = document.querySelector("#whole");
const calcBtn = document.querySelector("#calc-btn");
const resultDiv = document.querySelector("#results");

calcBtn.addEventListener("click", () => {
  if (part.value === "" || whole.value === "") {
    alert("Error: Kindly fill all the necessary inputs!");
  } else {
    const result = (part.value / whole.value) * 100;
    const para = document.createElement("p");
    para.textContent = `That is ${result}%`;

    resultDiv.append(para);

    calcBtn.disabled = true;
  }
});

const clearBtn = document.querySelector("#clear-btn");

clearBtn.addEventListener("click", () => {
  part.value = "";
  whole.value = "";
  resultDiv.innerHTML = "";

  calcBtn.disabled = false;
});

// Second Calculation
const percent = document.querySelector("#percent");
const value = document.querySelector("#value");
const secResultDiv = document.querySelector("#sec-results");
const secCalcBtn = document.querySelector("#sec-calc-btn");

secCalcBtn.addEventListener("click", () => {
  if (percent.value === "" || value.value === "") {
    alert("Error: Kindly fill all the necessary inputs!");
  } else {
    const result = (value.value / 100) * percent.value;
    const para = document.createElement("p");
    para.textContent = result;

    secResultDiv.append(para);

    secCalcBtn.disabled = true;
  }
});

const secResetBtn = document.querySelector("#sec-reset-btn");

secResetBtn.addEventListener("click", () => {
  percent.value = "";
  value.value = "";
  secResultDiv.innerHTML = "";

  secCalcBtn.disabled = false;
});
