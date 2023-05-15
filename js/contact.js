const contactForm = document.querySelector("#contactForm");
const name = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const contactMessage = document.querySelector("#contactMessage");

function validateContactForm(event) {

    event.preventDefault();

    if (checkLength(name.value, 1) === true) {
        nameError.style.display = "none";
    }
    else {
        nameError.style.display = "block";
    }

    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    }
    else {
        emailError.style.display = "block";
    }

    if (checkLength(subject.value, 10) === true) {
        subjectError.style.display = "none";
    }
    else {
        subjectError.style.display = "block";
    }

    if (
        checkLength(name.value, 1) === true,
        validateEmail(email.value) === true,
        checkLength(subject.value, 10) === true
    ) {
        contactMessage.classList.add('show');
        contactForm.reset();

        setTimeout(function(){
            window.location.reload();
         }, 5000);
    }
}

contactForm.addEventListener("submit", validateContactForm);

function checkLength(value, len) {

    if (value.trim().length >= len) {
        return true;
    }
    else {
        return false;
    }

}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}