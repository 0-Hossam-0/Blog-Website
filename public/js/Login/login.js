import * as functions from "./functions.js";

const form = document.getElementById("form");

const email = document.getElementsByClassName("email")[0];
const password = document.getElementsByClassName("password")[0];



const errorEmail = document.getElementsByClassName("email_error")[0];
const errorPassword = document.getElementsByClassName("password_error")[0];

console.log("Javascript is working...");




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

email.addEventListener("focusout", () => {
    const myJson = functions.whatEmpty(
        email,
        errorEmail
    );

    if (myJson["email"]) {
        functions.isEmailValid(email, errorEmail)
    }
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

password.addEventListener("focusout", () => {
    const myJson = functions.whatEmpty(
        undefined,
        undefined,
        password,
        errorPassword
    );
});


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let isEmailGood = false;
let isPasswordGood = false;

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const inputs = functions.whatEmpty(
        email,
        errorEmail,
        password,
        errorPassword,
    );

    if(inputs['email'])
        {
            if(functions.isEmailValid(email,errorEmail))
                {
                    isEmailGood = true;
                }
        }


    if (inputs["password"]) {
        isPasswordGood = true;
    }

    if ( isEmailGood && isPasswordGood ) {
        const response = functions.Login(password,email);
        console.log((await response).valueOf());
        if((await response).valueOf() === 'True')
            {
                window.location.href = '/';
            }
        else if((await response).valueOf() === 'Wrong'){
            email.style.outline = 'red solid';
            errorPassword.innerHTML = 'Wrong Password';
            password.style.outline = 'red solid';
        }
        else{
            email.style.outline = 'red solid';
            password.style.outline = 'red solid';
            errorPassword.innerHTML = 'Account Doesn`t Exist';
            
        }
    }
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

