export function whatEmpty(
    firstName,
    errorFirstName,
    lastName,
    errorLastName,
    address,
    errorAddress,
    email,
    errorEmail,
    password,
    errorPassword,
    Rpassword,
    errorRpassword
) {
    let json = {};
    if (firstName != undefined) {
        if (firstName.value) {
            json["firstName"] = true;
            firstName.style.outline = "green solid";
            errorFirstName.innerHTML = "";
        } else {
            json["firstName"] = false;
            firstName.style.outline = "red solid";
            errorFirstName.innerHTML = "Empty First Name Field";
        }
    }
    if (lastName != undefined) {
        if (lastName.value) {
            json["lastName"] = true;
            lastName.style.outline = "green solid";
            errorLastName.innerHTML = "";
        } else {
            json["lastName"] = false;
            lastName.style.outline = "red solid";
            errorLastName.innerHTML = "Empty Last Name Field";
        }
    }
    if (address != undefined) {
        if (address.value) {
            json["address"] = true;
            address.style.outline = "green solid";
            errorAddress.innerHTML = "";
        } else {
            json["address"] = false;
            address.style.outline = "red solid";
            errorAddress.innerHTML = "Empty Address Field";
        }
    }

    if (email != undefined) {
        if (email.value) {
            json["email"] = true;
            email.style.outline = "green solid";
            errorEmail.innerHTML = "";
        } else {
            json["email"] = false;
            email.style.outline = "red solid";
            errorEmail.innerHTML = "Empty Email Field";
        }
    }
    if (password != undefined) {
        if (password.value) {
            json["password"] = true;
            password.style.outline = "green solid";
            errorPassword.innerHTML = "";
        } else {
            json["password"] = false;
            password.style.outline = "red solid";
            errorPassword.innerHTML = "Empty Password Field";
        }
    }
    if (Rpassword != undefined) {
        if (Rpassword.value) {
            Rpassword.style.outline = "green solid";
            errorRpassword.innerHTML = "";
            json["Rpassword"] = true;
        } else {
            Rpassword.style.outline = "red solid";
            errorRpassword.style.color = "red";
            errorRpassword.innerHTML = "Empty Repeat Password Field";
            json["Rpassword"] = false;
        }
    }
    return json;
}



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export function isEmailValid(email, errorEmail) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailPattern.test(email.value)) {
        email.style.outline = "green solid";
        errorEmail.innerHTML = "";
        return true;
    }
    email.style.outline = "red solid";
    errorEmail.innerHTML =
        "Invalid email! Please enter a valid email address (e.g., user@example.com).";
    return false;
}



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export async function isEmailExist(email, errorEmail) {
    const response = await fetch("/api/check-email", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-CSRF-TOKEN": document
                .querySelector('meta[name="csrf-token"]')
                .getAttribute("content"),
        },
        body: JSON.stringify({ email: email.value }),
    });
    const data = await response.text();
    if (data) {
        email.style.outline = "red solid";
        errorEmail.style.color = "red";
        errorEmail.innerHTML = "Email Already Exist";
        return true;
    } else {
        email.style.outline = "green solid";
        errorEmail.innerHTML = "";
        return false;
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export function isRepeatedPassword(password, Rpassword, errorRpassword) {
    if (password.value != Rpassword.value) {
        Rpassword.style.outline = "red solid";
        errorRpassword.style.color = "red";
        errorRpassword.innerHTML = "Repeat Password Doesn`t Match Password";
        return false;
    }
    Rpassword.style.outline = "green solid";
    errorRpassword.style.color = "green";
    return true;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export async function createAccount(firstName, lastName, address,gender,email,password) {
    return await fetch("/api/create-account", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-CSRF-TOKEN": document
                .querySelector('meta[name="csrf-token"]')
                .getAttribute("content"),
        },
        body: JSON.stringify({
            firstName: firstName.value,
            lastName: lastName.value,
            address: address.value,
            gender: gender,
            email: email.value,
            password: password.value,
        }),
    });
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export function isNameValid(name) {
    const pattern = /^[a-zA-Z]*$/;
    return pattern.test(name);
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
