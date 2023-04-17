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

function validateNumberInput(input, errorMsgID) {
  const errorMessage = document.getElementById(errorMsgID);

  if (input.value.length === 0) {
    errorMessage.classList.add("visible");
    errorMessage.textContent = "Can't be blank";
    input.classList.add("input-error");
    error = true;
  } else if (!containsOnlyNumbers(input.value)) {
    errorMessage.classList.add("visible");
    errorMessage.textContent = "Wrong format, numbers only";
    input.classList.add("input-error");
    error = true;
  } else {
    input.classList.add("input-success");
  }

  setInterval(() => {
    errorMessage.classList.remove("visible");
    input.classList.remove("input-error", "input-success");
  }, 5000);
}

function handleSubmit(e) {
  e.preventDefault();
  validateCardholder();
  validateNumberInput(cardnumberInput, "cardnumber-error-msg");
  validateNumberInput(expdateMonthInput, "month-error-msg");
  validateNumberInput(expdateYearInput, "year-error-msg");
  validateNumberInput(cvcInput, "cvc-error-msg");
  if (!error) {
    completedState.classList.add("show");
    form.classList.add("hide");
  }
}

form.addEventListener("submit", handleSubmit);
