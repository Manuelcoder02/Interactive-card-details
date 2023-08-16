"use strict";
// STATE VARIABLES
const showCVCEL = document.querySelector(".back-card-text");
const showCardNumberEL = document.querySelector(".show-card-number");
const showCardNameEL = document.querySelector(".show-card-name");
const showMonthExpiryEL = document.querySelector(".mm");
const showYearExpiryEL = document.querySelector(".yy");
console.log(showMonthExpiryEL, showYearExpiryEL);

const cardholderNameInputEL = document.querySelector(".cardholder-name-input");
const cardholderNumberInputEL = document.querySelector(".card-number-input");
const monthInputEL = document.querySelector(".expiry-date__month");
const yearInputEL = document.querySelector(".expiry-date__year");
const cvcInputEL = document.querySelector(".cvc-input");

const errorEL = document.querySelectorAll(".error");
const cardErrorEL = document.querySelector(".card-name-err");
const cardNumberErrorEL = document.querySelector(".card-number-err");
const expiryErrorEL = document.querySelector(".expiry-err");
const cvcErrorEL = document.querySelector(".cvc-err");
console.log(errorEL);

const btnContinueEL = document.querySelector(".btn-continue");
const btnConfirmEL = document.querySelector(".btn-confirm");

const nameRegEX = /^[A-Za-z]+$/; // Regular expression for Name

const nameInputValue = cardholderNameInputEL.value;
const numberInputValue = cardholderNumberInputEL.value;
const monthInputValue = monthInputEL.value;
const yearInputValue = yearInputEL.value;
const cvcInputValue = cvcInputEL.value;

const negativeRegEX = nameRegEX.test(cardholderNameInputEL.value);
btnConfirmEL.addEventListener("click", function () {
  // Cardholder Name

  if (
    !nameInputValue ||
    !numberInputValue ||
    !monthInputValue ||
    !yearInputValue ||
    !cvcInputValue
  ) {
    if (!nameInputValue && !negativeRegEX) {
      cardErrorEL.classList.remove("hidden");
      cardErrorEL.textContent = "Wrong format, name only";
      cardholderNameInputEL.style.border = "1px solid hsl(0, 100%, 66%)";
    }

    if (!numberInputValue) {
      cardNumberErrorEL.classList.remove("hidden");
      cardholderNumberInputEL.style.border = "1px solid hsl(0, 100%, 66%)";
    }

    if (!monthInputValue) {
      expiryErrorEL.classList.remove("hidden");
      monthInputEL.style.border = "1px solid hsl(0, 100%, 66%)";
    }

    if (!yearInputValue) {
      expiryErrorEL.classList.remove("hidden");
      yearInputEL.style.border = "1px solid hsl(0, 100%, 66%)";
    }

    if (!cvcInputValue) {
      cvcErrorEL.classList.remove("hidden");
      cvcInputEL.style.border = "1px solid hsl(0, 100%, 66%)";
    }
  } else {
    showCardNumberEL.textContent = cardholderNumberInputEL.value;
    cardNumberErrorEL.classList.add("hidden");
    cardholderNumberInputEL.style.border = "1px solid hsl(279, 6%, 55%)";
  }
  //   if (!cardholderNameInputEL.value) {
  //     cardErrorEL.classList.remove("hidden");
  //     cardErrorEL.textContent = "Please input a name";
  //     cardholderNameInputEL.style.border = "1px solid hsl(0, 100%, 66%)";
  //   } else {
  //     if (nameRegEX.test(cardholderNameInputEL.value)) {
  //       showCardNameEL.textContent = cardholderNameInputEL.value;
  //       cardErrorEL.classList.add("hidden");
  //       cardholderNameInputEL.style.border = "1px solid hsl(279, 6%, 55%)";
  //     } else {
  //       cardErrorEL.classList.remove("hidden");
  //       cardErrorEL.textContent = "Wrong format, name only";
  //       cardholderNameInputEL.style.border = "1px solid hsl(0, 100%, 66%)";
  //     }
  //   }

  // // Cardholder  number
  // if (!cardholderNumberInputEL.value) {
  //   cardNumberErrorEL.classList.remove("hidden");
  //   cardholderNumberInputEL.style.border = "1px solid hsl(0, 100%, 66%)";
  // } else {
  //   showCardNumberEL.textContent = cardholderNumberInputEL.value;
  //   cardNumberErrorEL.classList.add("hidden");
  //   cardholderNumberInputEL.style.border = "1px solid hsl(279, 6%, 55%)";
  // }

  // // Expiry Field
  // if (!monthInputEL.value) {
  //   expiryErrorEL.classList.remove("hidden");
  //   monthInputEL.style.border = "1px solid hsl(0, 100%, 66%)";
  // } else {
  //   showMonthExpiryEL.textContent = monthInputEL.value;
  //   expiryErrorEL.classList.add("hidden");
  //   monthInputEL.style.border = "1px solid hsl(279, 6%, 55%)";
  // }

  // if (!yearInputEL.value) {
  //   expiryErrorEL.classList.remove("hidden");
  //   yearInputEL.style.border = "1px solid hsl(0, 100%, 66%)";
  // } else {
  //   showYearExpiryEL.textContent = yearInputEL.value;
  //   expiryErrorEL.classList.add("hidden");
  //   yearInputEL.style.border = "1px solid hsl(279, 6%, 55%)";
  // }

  // if (!cvcInputEL.value) {
  //   cvcErrorEL.classList.remove("hidden");
  //   cvcInputEL.style.border = "1px solid hsl(0, 100%, 66%)";
  // } else {
  //   showCVCEL.textContent = cvcInputEL.value;
  //   cvcErrorEL.classList.add("hidden");
  //   cvcInputEL.style.border = "1px solid hsl(279, 6%, 55%)";
  // }
});
