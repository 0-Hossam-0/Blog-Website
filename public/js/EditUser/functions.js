export function whatEmpty(
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
    if (oldPassword != undefined) {
        if (oldPassword.value) {
            json["oldPassword"] = true;
            oldPassword.style.outline = "green solid";
            errorOldPassword.innerHTML = "";
        } else {
            json["oldPassword"] = false;
            oldPassword.style.outline = "red solid";
            errorOldPassword.innerHTML = "Empty Old Password Field";
        }
    }
    if (newPassword != undefined) {
        if (newPassword.value) {
            newPassword.style.outline = "green solid";
            errorNewPassword.innerHTML = "";
            json["newPassword"] = true;
        } else {
            newPassword.style.outline = "red solid";
            errorNewPassword.style.color = "red";
            errorNewPassword.innerHTML = "Empty New Password Field";
            json["newPassword"] = false;
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
    const response = await fetch("/api/check-email2", {
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
        return false;
    } else {
        email.style.outline = "green solid";
        errorEmail.innerHTML = "";
        return true;
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export function isNameValid(name) {
    const pattern = /^[a-zA-Z]*$/;
    return pattern.test(name);
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


export async function isPasswordTrue(password,errorPassword){
    const response = await fetch('/api/check-password',{
        method:'POST',
        headers: {
            "Content-Type": "application/json",
            "X-CSRF-TOKEN": document
                .querySelector('meta[name="csrf-token"]')
                .getAttribute("content"),
        },
        body:JSON.stringify({
            password :password.value,
            id:window.location.pathname.split('/').filter(Boolean).pop()
        })
    });
    const data = await response.text();
    if(data){
        password.style.outline = 'red solid 2px';
        errorPassword.innerHTML = 'Wrong Password';
        return false;
    }
    return true;
}