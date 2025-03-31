"use strict";

const firstName = document.querySelector("#fname");
const lastName = document.querySelector("#lname");
const email = document.querySelector("#email");
const queries = document.querySelectorAll(".query-radio");

const email_error = document.querySelector(".email-error");
const error_query = document.querySelector("#dispQueryError");
const error_term = document.querySelector("#dispTermError");
const error_message = document.querySelectorAll(".error-msg");
const inputs = document.querySelectorAll(".input-field");

const submitBtn = document.querySelector(".btn");

let fName, lName, comment, queryValue, termValue;

// Checks if a query type is selected
function querySelected() {
  document.querySelectorAll('input[type="radio"]').forEach((radio) => {
    radio.addEventListener("change", function () {
      queryValue = this.value;
      // console.log(queryValue);
      // console.log(`Selected: ${this.value}`);
    });
  });
}

// Check if the terms and conditions are agreed
function termSelected() {
  document
    .querySelector('input[type="checkbox"]')
    .addEventListener("click", function () {
      termValue = this.value;
      // console.log(this.value);
    });
}

// Submit the form after the validation is complete
submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const emailValue = email.value.trim();

  fName = firstName.value.trim();
  lName = lastName.value.trim();
  comment = message.value.trim();

  // Checks if the input fields are empty
  inputs.forEach(function (input, i) {
    if (input.value.trim() === "") {
      input.style.borderColor = "hsl(0, 66%, 54%)";
      input.style.color = "hsl(187, 24%, 22%)";
      error_message[i].style.display = "block";
    } else {
      input.style.borderColor = "hsl(169, 82%, 27%)";
      input.style.backgroundColor = "hsl(0, 0%, 100%)";
      error_message[i].style.display = "none";
    }
  });

  // Checks if the email address is formatted properly

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(emailValue)) {
    email_error.textContent = " Please enter a valid email address";
    email.style.borderColor = "hsl(0, 66%, 54%)";
    email.style.color = "hsl(0, 66%, 54%)";
  }

  if (!queryValue) {
    error_query.textContent = "Please select a query type";
  } else {
    error_query.textContent = "";
  }

  if (!termValue) {
    error_term.textContent =
      " To submit this form, please consent to being contacted";
  } else {
    error_term.textContent = "";
  }
});

querySelected();
termSelected();
