const form = document.querySelector(".form-state");
const completedState = document.querySelector(".completed-state");
const cardholderInput = document.querySelector(".cardholder-input");
const cardnumberInput = document.querySelector(".cardnumber-input");
const expdateMonthInput = document.querySelector(".expdate-month-input");
const expdateYearInput = document.querySelector(".expdate-year-input");
const cvcInput = document.querySelector(".cvc-input");
let error = false;

function validateCardholder() {
  const cardholderErrorMessage = document.getElementById(
    "cardholder-error-msg"
  );

  if (cardholderInput.value.length === 0) {
    cardholderErrorMessage.classList.add("visible");
    cardholderErrorMessage.textContent = "Can't be blank";
    cardholderInput.classList.add("input-error");
    error = true;
  } else {
    cardholderInput.classList.add("input-success");
  }

  setInterval(() => {
    cardholderErrorMessage.classList.remove("visible");
    cardholderInput.classList.remove("input-error", "input-success");
  }, 5000);
}

function containsOnlyNumbers(str) {
  return /^\d+$/.test(str);
}

function validateCardnumber() {
  const cardnumberErrorMessage = document.getElementById(
    "cardnumber-error-msg"
  );

  if (cardnumberInput.value.length === 0) {
    cardnumberErrorMessage.classList.add("visible");
    cardnumberErrorMessage.textContent = "Can't be blank";
    cardnumberInput.classList.add("input-error");
    error = true;
  } else if (!containsOnlyNumbers(cardnumberInput.value)) {
    cardnumberErrorMessage.classList.add("visible");
    cardnumberErrorMessage.textContent = "Wrong format, numbers only";
    cardnumberInput.classList.add("input-error");
    error = true;
  } else {
    cardnumberInput.classList.add("input-success");
  }

  setInterval(() => {
    cardnumberErrorMessage.classList.remove("visible");
    cardnumberInput.classList.remove("input-error", "input-success");
  }, 5000);
}

function validateExpdateMonth() {
  const monthErrorMessage = document.getElementById("month-error-msg");

  if (expdateMonthInput.value.length === 0) {
    monthErrorMessage.classList.add("visible");
    monthErrorMessage.textContent = "Can't be blank";
    expdateMonthInput.classList.add("input-error");
    error = true;
  } else {
    expdateMonthInput.classList.add("input-success");
  }

  setInterval(() => {
    monthErrorMessage.classList.remove("visible");
    expdateMonthInput.classList.remove("input-error", "input-success");
  }, 5000);
}

function validateExpdateYear() {
  const yearErrorMessage = document.getElementById("year-error-msg");

  if (expdateYearInput.value.length === 0) {
    yearErrorMessage.classList.add("visible");
    yearErrorMessage.textContent = "Can't be blank";
    expdateYearInput.classList.add("input-error");
    error = true;
  } else {
    expdateYearInput.classList.add("input-success");
  }

  setInterval(() => {
    yearErrorMessage.classList.remove("visible");
    expdateYearInput.classList.remove("input-error", "input-success");
  }, 5000);
}

function validateCVC() {
  const cvcErrorMessage = document.getElementById("cvc-error-msg");

  if (cvcInput.value.length === 0) {
    cvcErrorMessage.classList.add("visible");
    cvcErrorMessage.textContent = "Can't be blank";
    cvcInput.classList.add("input-error");
    error = true;
  } else {
    cvcInput.classList.add("input-success");
  }

  setInterval(() => {
    cvcErrorMessage.classList.remove("visible");
    cvcInput.classList.remove("input-error", "input-success");
  }, 5000);
}

function handleSubmit(e) {
  validateCardholder();
  validateCardnumber();
  validateExpdateMonth();
  validateExpdateYear();
  validateCVC();
  e.preventDefault();
  if (!error) {
    completedState.classList.add("show");
    form.classList.add("hide");
  }
}

form.addEventListener("submit", handleSubmit);
