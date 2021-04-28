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

}

const validationEmail = (email, input) => {
    if (mailPerValidar.indexOf('@') <= 0) {
        inputMail.classList.add('is-invalid');
        return false;
    }
    if ((mailPerValidar.charAt(mailPerValidar.length - 4) != '.') && (mailPerValidar.charAt(mailPerValidar.length - 3) != '.')) {
        inputMail.classList.add('is-invalid');
        return false;
    } else {
        inputMail.classList.add('is-valid');
        inputMail.classList.remove('is-invalid')
        return false;
    }
}
const validationPswd = (pwd, input) => {
    if (pwd.length < 6 || pwd == "") {
        input.classList.add('is-invalid');
        return false;
    } else {
        input.classList.add('is-valid');
        input.classList.remove('is-invalid');
        return false;
    }
}