export function whatEmpty(
    email,
    errorEmail,
    password,
    errorPassword,
) {
    let json = {};
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

export async function Login(password,email){
    const response = await fetch('api/login',{
        method:'POST',
        headers: {
            "Content-Type": "application/json",
            "X-CSRF-TOKEN": document
                .querySelector('meta[name="csrf-token"]')
                .getAttribute("content"),
        },
        body:JSON.stringify({
            email: email.value,
            password: password.value
        })
    });
    return response.text();
}