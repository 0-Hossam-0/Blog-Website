function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function openMenu() {
    const menuBar = document.getElementsByClassName("side-menu")[0];
    const profile = document.querySelector(".side-menu .profile");
    const settings = document.querySelector(".side-menu .settings");
    const home = document.querySelector('.side-menu .explore');

    if (menuBar.classList.contains("side-menu-transition")) {
        menuBar.classList.remove("side-menu-transition");
        await sleep(200);
        profile.style.visibility = "hidden";
        settings.style.visibility = "hidden";
        home.style.visibility = 'hidden';
    } else {
        menuBar.classList.add("side-menu-transition");
        await sleep(200);
        settings.style.visibility = "visible";
        profile.style.visibility = "visible";
        home.style.visibility = 'visible';
    }
}

const form = document.getElementsByClassName("form")[0];
form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const title = document.getElementsByClassName("post-title")[0];
    const titleError = document.getElementsByClassName("title-error")[0];
    const body = document.getElementsByClassName("body")[0];
    const titleLen = title.value.replace(/\s+/g, "").length;
    const bodyLen = body.value.replace(/\s+/g, "").length;
    const bodyError = document.getElementsByClassName("body-error")[0];
    if (!title.value || !title.value.replace(/\s+/g, "")) {
        title.style.outline = "red solid";
        titleError.innerHTML = "Empty Post Title";
        return;
    } else if (titleLen < 4) {
        titleError.innerHTML = "Title length should be more than 3 characters";
        title.style.outline = "red solid";
        return;
    } else {
        title.style.outline = "black solid";
        titleError.innerHTML = "";
    }
    if (!body.value || !body.value.replace(/\s+/g, "")) {
        body.style.outline = "red solid";
        bodyError.innerHTML = "Empty Post Body";
        return;
    } else if (bodyLen < 10) {
        bodyError.innerHTML = "Body length should be more than 10 characters";
        body.style.outline = "red solid";
        return;
    } else {
        body.style.outline = "black solid";
        bodyError.innerHTML = "";
    }
    const response = await fetch("api/create-post", {
        headers: {
            "Content-Type": "application/json",
            "X-CSRF-TOKEN": document
                .querySelector('meta[name="csrf-token"]')
                .getAttribute("content"),
        },
        method: "POST",
        body: JSON.stringify({
            post_title: title.value,
            post_body: body.value,
        }),
    });
    if (response) {
        window.location.href = "/";
    } else {
        bodyError.innerHTML = "Error while fetching...";
    }
});


const searchBar = document.getElementsByClassName('search-bar')[0];
const searchIcon = document.getElementsByClassName('search-icon')[0];
searchBar.addEventListener('keyup',search);
searchIcon.addEventListener('click',search);

function search(event){
            if(event.key == 'Enter' || event.key == undefined)
                {
                    if(searchBar.value && searchBar.value.trim())
                    {
                        window.location.href = `/search/${searchBar.value}`;
                    }
                }
}