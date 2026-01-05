"use strict";

let form= document.getElementById("registerForm");

let firstName= document.getElementById("firstName");
let lastName= document.getElementById("lastName");
let email= document.getElementById("email");
let password= document.getElementById("password");
let confirmPassword= document.getElementById("confirmPassword");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    validateForm();
});

function validateForm() {
    clearErrors();
    let isValid = true;
    if (firstName.value.trim() === "") {
        showError(firstName, "First name is required");
        isValid = false;
    }
    if (lastName.value.trim() === "") {
        showError(lastName, "Last name is required");
        isValid = false;
    }
    if (!email.value.includes("@") || !email.value.endsWith(".com")) {
        showError(email, "Email must be a valid email address");
        isValid = false;
    }
    if (password.value.length < 6) {
        showError(password, "Password must be at least 6 characters");
        isValid = false;
    }
    if (password.value !== confirmPassword.value) {
        showError(confirmPassword, "Passwords do not match");
        isValid = false;
    }
    if (isValid) {
        alert("Registration successful!");
        form.reset();
    }
}

function showError(input, message) {
    let small= input.nextElementSibling;
    small.textContent = message;
}
function clearErrors() {
    let smalls = form.querySelectorAll("small");
    smalls.forEach(function(small) {
        small.textContent = "";
    });
}

