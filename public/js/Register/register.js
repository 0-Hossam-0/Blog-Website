import * as functions from "./functions.js";

const form1 = document.getElementById("form1");
const form2 = document.getElementById("form2");
const back = document.getElementsByClassName("back-button")[0];

const firstName = document.getElementsByClassName("first-name")[0];
const lastName = document.getElementsByClassName("last-name")[0];
const address = document.getElementsByClassName("address")[0];
const male = document.getElementsByClassName("male-checkbox")[0];
const female = document.getElementsByClassName("female-checkbox")[0];
var gender = null;

const email = document.getElementsByClassName("email")[0];
const password = document.getElementsByClassName("password")[0];
const Rpassword = document.getElementsByClassName("Rpassword")[0];

const errorFirstName = document.getElementsByClassName("first-name-error")[0];
const errorLastName = document.getElementsByClassName("last-name-error")[0];
const errorAddress = document.getElementsByClassName("address-error")[0];
const errorGender = document.querySelector(".gender-error");

const errorEmail = document.getElementsByClassName("email_error")[0];
const errorPassword = document.getElementsByClassName("password_error")[0];
const errorRpassword = document.getElementsByClassName("Rpassword_error")[0];
const register = document.getElementsByClassName("registered")[0];

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

firstName.addEventListener("focusout", () => {
    const myJson = functions.whatEmpty(firstName, errorFirstName);
    if (myJson["firstName"]) {
        if (functions.isNameValid(firstName.value)) {
            firstName.style.outline = "green solid";
            errorFirstName.innerHTML = "";
        } else {
            firstName.style.outline = "red solid";
            errorFirstName.innerHTML = "First Name Is Not Valid";
        }
    }
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

lastName.addEventListener("focusout", () => {
    const myJson = functions.whatEmpty(
        undefined,
        undefined,
        lastName,
        errorLastName
    );
    if (myJson["lastName"]) {
        if (functions.isNameValid(lastName.value)) {
            lastName.style.outline = "green solid";
            errorLastName.innerHTML = "";
        } else {
            lastName.style.outline = "red solid";
            errorLastName.innerHTML = "Last Name Is Not Valid";
        }
    }
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

email.addEventListener("focusout", () => {
    const myJson = functions.whatEmpty(
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        email,
        errorEmail
    );

    if (myJson["email"]) {
        if (functions.isEmailValid(email, errorEmail)) {
            functions.isEmailExist(email, errorEmail);
        }
    }
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

password.addEventListener("focusout", () => {
    const myJson = functions.whatEmpty(
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        password,
        errorPassword
    );
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Rpassword.addEventListener("focusout", () => {
    const myJson = functions.whatEmpty(
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        Rpassword,
        errorRpassword
    );

    if (myJson["Rpassword"]) {
        functions.isRepeatedPassword(password, Rpassword, errorRpassword);
    }
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

back.addEventListener("click", (event) => {
    event.preventDefault();
    form1.style.display = "inline";
    form2.style.display = "none";

});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let isFirstNameGood = false;
let isLastNameGood = false;
let isAddressGood = false;
let isGenderGood = false;

form1.addEventListener("submit", async function (event) {
    event.preventDefault();
    const inputs = functions.whatEmpty(
        firstName,
        errorFirstName,
        lastName,
        errorLastName,
        address,
        errorAddress
    );

    if (inputs["firstName"]) {
        if (functions.isNameValid(firstName.value)) {
            firstName.style.outline = "green solid";
            errorFirstName.innerHTML = "";
            isFirstNameGood = true;
        } else {
            firstName.style.outline = "red solid";
            errorFirstName.innerHTML = "First Name Is Not Valid";
        }
        if (inputs["lastName"]) {
            if (functions.isNameValid(lastName.value)) {
                lastName.style.outline = "green solid";
                errorLastName.innerHTML = "";
                isLastNameGood = true;
            } else {
                lastName.style.outline = "red solid";
                errorLastName.innerHTML = "Last Name Is Not Valid";
            }
        }
        if (inputs["address"]) {
            isAddressGood = true;
        }
        if (male.checked || female.checked) {
            isGenderGood = true;
            errorGender.innerHTML = "";
        } else {
            errorGender.innerHTML = "Choose Your Gender";
        }
        if(male.checked)
            {
                gender = 'Male';
            }
        else if(female.checked)
            {
                gender = 'Female'
            }
        if (
            isFirstNameGood &&
            isLastNameGood &&
            isAddressGood &&
            isGenderGood
        ) {
            form1.style.display = "none";
            form2.style.display = "inline";
        }
    }
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let isEmailGood = false;
let isPasswordGood = false;
let isRpasswordGood = false;

form2.addEventListener("submit", async (event) => {
    event.preventDefault();
    
    const inputs = functions.whatEmpty(
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        email,
        errorEmail,
        password,
        errorPassword,
        Rpassword,
        errorRpassword
    );

    if (inputs["email"]) {
        if (functions.isEmailValid(email, errorEmail)) {
            isEmailGood = !(await functions.isEmailExist(email, errorEmail));
        }
    }
    if (inputs["password"]) {
        isPasswordGood = true;
        isRpasswordGood = functions.isRepeatedPassword(
            password,
            Rpassword,
            errorRpassword
        );
    }
    // const response = await functions.createAccount(firstName, lastName, address,gender,email,password);
    if ( isEmailGood && isPasswordGood && isRpasswordGood && isFirstNameGood && isLastNameGood && isAddressGood & isGenderGood) {
        if ((await functions.createAccount(firstName, lastName, address,gender,email,password))) {
            console.log('here');
            password.value = "";
            Rpassword.value = "";
            window.location.href = '/login';
        } 
    }
});
