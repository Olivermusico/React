/* Formulari de cerca */
function validateFormSearch() {
    var inputValidator = document.forms["search-form"]["search"].value;
    var inputCaixa = document.getElementById("Buscar");
    if (inputValidator.length > 3) {
        inputCaixa.classList.add('is-valid');
        inputCaixa.classList.remove('is-invalid');
    } else {
        inputCaixa.classList.add('is-invalid');
        inputCaixa.classList.remove('is-valid');
    }
    return false;
}

/* Formulari Login */
function validateFormLogin() {

    var mailPerValidar = document.forms["form-login"]["email1"].value;
    var pwdPerValidar = document.forms["form-login"]["pwd1"].value;
    inputMail = document.getElementById("email1");
    inputPsw = document.getElementById("pwd1");
    validationEmail(mailPerValidar, inputMail);
    validationPswd(pwdPerValidar, inputPsw);
    return false;
}

const validationEmail = (email, input) => {
    if (email.indexOf('@') <= 0) {
        input.classList.add('is-invalid');
    }
    if ((email.charAt(email.length - 4) != '.') && (email.charAt(email.length - 3) != '.')) {
        input.classList.add('is-invalid');
    } else {
        input.classList.add('is-valid');
        input.classList.remove('is-invalid')
    }
    return false;
}
const validationPswd = (pwd, input) => {
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;
    if (pwd.length >= 8 && pwd.match(upperCaseLetters) && pwd.match(numbers)) {
        input.classList.add('is-valid');
        input.classList.remove('is-invalid');
    } else {
        input.classList.remove('is-valid');
        input.classList.add('is-invalid');
    }
    return false;
}