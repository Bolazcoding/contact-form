"use strict";

const firstName = document.querySelector("#fname");
const lastName = document.querySelector("#lname");
const email = document.querySelector("#email");
const queries = document.querySelectorAll(".query-radio");

const email_error = document.querySelector("#email-error");
const error_query = document.querySelector("#dispQueryError");
const error_term = document.querySelector("#dispTermError");
const error_message = document.querySelectorAll(".error-msg");
const inputs = document.querySelectorAll(".input-field");

const success_container = document.querySelector(".success-container");
const contact_form = document.querySelector("#contact-form");

const submitBtn = document.querySelector(".btn");

let fName, lName, comment, emailValue, queryValue, termValue;

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

  if (formValidation()) {
    showSuccessMessage();
    document.getElementById("contact-form").reset();
  }
});

// The function to validate the input fields
function formValidation() {
  emailValue = email.value.trim();

  fName = firstName.value.trim();
  lName = lastName.value.trim();
  comment = message.value.trim();

  // Checks if the input fields are empty
  inputs.forEach(function (input, i) {
    if (input.value.trim() === "") {
      input.style.borderColor = "hsl(0, 66%, 54%)";
      input.style.color = "hsl(187, 24%, 22%)";
      error_message[i].textContent = "This field is required";
      return;
    } else {
      input.style.borderColor = "hsl(186, 15%, 59%)";
      input.style.backgroundColor = "hsl(0, 0%, 100%)";
      error_message[i].style.display = "none";
    }
  });

  // Checks if the email address is formatted properly

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(emailValue)) {
    email_error.textContent = "Please enter a valid email address";
    email.style.borderColor = "hsl(0, 66%, 54%)";
    email.style.color = "hsl(187, 24%, 22%)";
    return;
  }

  if (!queryValue) {
    error_query.textContent = "Please select a query type";
    return;
  } else {
    error_query.textContent = "";
  }

  if (!termValue) {
    error_term.textContent =
      " To submit this form, please consent to being contacted";
    return;
  } else {
    error_term.textContent = "";
  }

  return true;
}

// the function to show the success message
function showSuccessMessage() {
  success_container.style.display = "block";

  setTimeout(() => {
    success_container.style.display = "none";
  }, 5000);
}

querySelected();
termSelected();
