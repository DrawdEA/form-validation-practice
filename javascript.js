// email: with @
// country: text with at least 3 
// zip code: 4 letters
//password must be the same for both, that's theo nly constraint

const email = document.querySelector("#email");
const country = document.querySelector("#country");
const zipCode = document.querySelector("#zip-code");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");

const emailError = document.querySelector("#email-error");
const countryError = document.querySelector("#country-error");
const zipCodeError = document.querySelector("#zip-code-error");
const passwordError = document.querySelector("#password-error");

const form = document.querySelector("#practice-form")
const submissionSpan = document.querySelector("#submission-error");

function displayError(errorDocument, show, text) {
    errorDocument.textContent = text;
    errorDocument.style.display = show === true ? "inline" : "none";
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!(email.value.length !== 0 && emailRegExp.test(email.value)) || !form.checkValidity || password.value != confirmPassword.value) {
        displayError(submissionSpan, true, "There is still an error!");
        submissionSpan.classList = "";
    } else {
        displayError(submissionSpan, true, "High five!");
        submissionSpan.classList = "good";
    }
})

const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


email.addEventListener("blur", () => {
    if (!(email.value.length !== 0 && emailRegExp.test(email.value))) {
        displayError(emailError, true, "Must be an email!");
        email.setCustomValidity("Must be an email!");
    } else {
        displayError(emailError, false, "")
        email.setCustomValidity("");
    }
})

country.addEventListener("blur", () => {
    if (!country.checkValidity()) {
        if (country.validity.tooShort) {
            displayError(countryError, true, "Must be at least 3 characters!");
            country.setCustomValidity("Must be at least 3 characters!");
        } else {
            displayError(countryError, false, "");
            country.setCustomValidity("");
        }
    } else {
        displayError(countryError, false, "");
        country.setCustomValidity("");
    }
    
})

zipCode.addEventListener("blur", () => {
    if (!zipCode.checkValidity()) {
        if (zipCode.validity.patternMismatch) {
            displayError(zipCodeError, true, "Must be a zip code! (4 digits)");
            zipCode.setCustomValidity("Must be a zip code! (4 digits)");
        } else {
            displayError(zipCodeError, false, "");
            zipCode.setCustomValidity("");
        }
    } else {
        displayError(zipCodeError, false, "");
        zipCode.setCustomValidity("");
    }
})

password.addEventListener("blur", () => {
    if (password.value != confirmPassword.value) {
        displayError(passwordError, true, "Password and Confirm Password must be the same!");
        confirmPassword.setCustomValidity("Password and Confirm Password must be the same!");
        password.setCustomValidity("Password and Confirm Password must be the same!");
    } else {
        displayError(passwordError, false, "");
        confirmPassword.setCustomValidity("");
        password.setCustomValidity("");
    }
})

confirmPassword.addEventListener("blur", () => {
    if (password.value != confirmPassword.value) {
        displayError(passwordError, true, "[Password] and [Confirm Password] must be the same!");
        confirmPassword.setCustomValidity("Password and Confirm Password must be the same!");
        password.setCustomValidity("Password and Confirm Password must be the same!");
    } else {
        displayError(passwordError, false, "");
        confirmPassword.setCustomValidity("");
        password.setCustomValidity("");
    }
})