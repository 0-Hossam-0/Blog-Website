import * as functions from "./functions.js";

const firstName = document.getElementsByClassName("first-name")[0];
const errorFirstName = document.getElementsByClassName("first-name-error")[0];
const lastName = document.getElementsByClassName("last-name")[0];
const errorLastName = document.getElementsByClassName("last-name-error")[0];
const address = document.getElementsByClassName("address")[0];
const errorAddress = document.getElementsByClassName("address-error")[0];
const email = document.getElementsByClassName("email")[0];
const errorEmail = document.getElementsByClassName("email-error")[0];
const oldPassword = document.getElementsByClassName("old-password")[0];
const errorOldPassword =
    document.getElementsByClassName("old-password-error")[0];
const newPassword = document.getElementsByClassName("new-password")[0];
const errorNewPassword =
    document.getElementsByClassName("new-password-error")[0];

const male = document.getElementsByClassName('male-checkbox')[0]
const female = document.getElementsByClassName('female-checkbox')[0];

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

oldPassword.addEventListener("focusout", () => {
    const myJson = functions.whatEmpty(
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        oldPassword,
        errorOldPassword
    );
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

address.addEventListener("focusout", () => {
    const myJson = functions.whatEmpty(
        undefined,
        undefined,
        undefined,
        undefined,
        address,
        errorAddress
    );
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

newPassword.addEventListener("focusout", () => {
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
        newPassword,
        errorNewPassword
    );
});

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

const form = document.getElementById("form");
form.addEventListener("submit", async (event) => {
    event.preventDefault();

    let isFirstNameGood = false;
    let isLastNameGood = false;
    let isEmailGood = false;
    let isAddressGood = false;
    let isOldPasswordGood = false;
    let isNewPasswordGood = false;
    let whatGender = null;

    const myJson = functions.whatEmpty(
        firstName,
        errorFirstName,
        lastName,
        errorLastName,
        address,
        errorAddress,
        email,
        errorEmail,
        oldPassword,
        errorOldPassword,
        newPassword,
        errorNewPassword
    );
    if (myJson["firstName"]) {
        if (functions.isNameValid(firstName.value)) {
            firstName.style.outline = "green solid";
            errorFirstName.innerHTML = "";
            isFirstNameGood = true;
        } else {
            firstName.style.outline = "red solid";
            errorFirstName.innerHTML = "First Name Is Not Valid";
            isFirstNameGood = false;
        }
        if (myJson["lastName"]) {
            if (functions.isNameValid(lastName.value)) {
                lastName.style.outline = "green solid";
                errorLastName.innerHTML = "";
                isLastNameGood = true;
            } else {
                lastName.style.outline = "red solid";
                errorLastName.innerHTML = "Last Name Is Not Valid";
                isLastNameGood = false;
            }
        }
        if (myJson["address"]) {
            isAddressGood = true;
        }
        if (myJson["email"]) {
            if (functions.isEmailValid(email, errorEmail)) {
                isEmailGood = await functions.isEmailExist(email, errorEmail);
            }
            if (myJson["newPassword"]) {
                isNewPasswordGood = true;
            }
            if (myJson["oldPassword"]) {
                isOldPasswordGood = true;
            }
        }
        if(male.checked)
            {
                whatGender = 'Male';
            }
            else if(female.checked)
            {
                whatGender = 'Female';
            }
    }
    if ( isFirstNameGood && isLastNameGood && isAddressGood && isEmailGood && isOldPasswordGood && isNewPasswordGood && await functions.isPasswordTrue(oldPassword,errorOldPassword) && whatGender) {
        const response =  await fetch('/update/edit-account',{
            method:'POST',
            headers: {
                "Content-Type": "application/json",
                "X-CSRF-TOKEN": document
                    .querySelector('meta[name="csrf-token"]')
                    .getAttribute("content"),
            },
            body:JSON.stringify({
                 firstName:firstName.value,
                 lastName:lastName.value,
                 address:address.value,
                 email:email.value,
                 newPassword:newPassword.value,
                 gender:whatGender,
                 id:window.location.pathname.split('/').filter(Boolean).pop()
            })
        });
        window.location.href = '/';
    }
});
