function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function openMenu() {
    const menuBar = document.getElementsByClassName("side-menu")[0];
    const profile = document.querySelector(".side-menu .profile");
    const settings = document.querySelector(".side-menu .settings");
    const home = document.querySelector(".side-menu .explore");

    if (menuBar.classList.contains("side-menu-transition")) {
        menuBar.classList.remove("side-menu-transition");
        await sleep(200);
        profile.style.visibility = "hidden";
        settings.style.visibility = "hidden";
        home.style.visibility = "hidden";
    } else {
        menuBar.classList.add("side-menu-transition");
        await sleep(200);
        settings.style.visibility = "visible";
        profile.style.visibility = "visible";
        home.style.visibility = "visible";
    }
}
function getCookieValue(name) {
    const nameEQ = name + "=";
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.indexOf(nameEQ) === 0) {
            return cookie.substring(nameEQ.length);
        }
    }
    return null;
}

function changeCookieDarkMode(isDark) {
    const encoded = getCookieValue("data");
    if (encoded) {
        const decoded = decodeURIComponent(encoded);
        const cookieData = JSON.parse(decoded);
        cookieData.darkMode = isDark;
        const modifiedValue = JSON.stringify(cookieData);
        const encodedModifiedValue = encodeURIComponent(modifiedValue);
        document.cookie = "data" + "=" + encodedModifiedValue;
    }
}

// function darkMode() {
//     const header = document.getElementsByClassName("header")[0];
//     const searchBar = document.getElementsByClassName("search-bar")[0];
//     const menuBar = document.getElementsByClassName("side-menu")[0];
//     const posts = document.querySelectorAll(".post-body");
//     const postDots = document.querySelectorAll(
//         ".post-body .post-header .right-side .dots-icon"
//     );
//     const postComments = document.querySelectorAll(".footer .comments-text");
//     const headerLine = document.querySelectorAll(".post-body .post-header");
//     const footerLine = document.querySelectorAll(".footer");
//     const createPost = document.getElementsByClassName("create-post")[0];
//     const createTitle = document.getElementsByClassName("post-title")[0];
//     const createBody = document.getElementsByClassName("body")[0];
//     const darkButton = document.getElementsByClassName("dark-mode")[0];
//     const settingsHeader = document.querySelector(
//         ".header .buttons .settings-icon"
//     );
//     const settingsMenu = document.querySelector(
//         ".side-menu .settings .settings-option .settings-icon"
//     );
//     const menuButton = document.getElementsByClassName("menu-icon")[0];
//     const commentIcon = document.querySelectorAll(".footer .comments-icon");
//     const profile = document.getElementsByClassName("profile")[0];
//     if (document.body.style.backgroundColor == "rgb(24, 25, 26)") {
//         changeCookieDarkMode(false);
//         darkOff(
//             header.style,
//             searchBar.style,
//             menuBar.style,
//             posts,
//             createPost.style,
//             darkButton.style,
//             settingsHeader.style,
//             settingsMenu.style,
//             menuButton.style,
//             createTitle.style,
//             createBody.style,
//             postComments,
//             footerLine,
//             postDots,
//             headerLine,
//             commentIcon,
//             profile.style
//         );
//         transition(
//             header.style,
//             searchBar.style,
//             menuBar.style,
//             posts,
//             createPost.style,
//             createTitle.style,
//             createBody.style,
//             profile.style
//         );
//         return;
//     }
//     changeCookieDarkMode(true);
//     darkOn(
//         header.style,
//         searchBar.style,
//         menuBar.style,
//         posts,
//         createPost.style,
//         darkButton.style,
//         settingsHeader.style,
//         settingsMenu.style,
//         menuButton.style,
//         createTitle.style,
//         createBody.style,
//         postComments,
//         footerLine,
//         postDots,
//         headerLine,
//         commentIcon,
//         profile.style
//     );
//     transition(
//         header.style,
//         searchBar.style,
//         menuBar.style,
//         posts,
//         createPost.style,
//         createTitle.style,
//         createBody.style,
//         profile.style
//     );
// }

// function darkOn(
//     header,
//     searchBar,
//     menuBar,
//     posts,
//     createPost,
//     darkButton,
//     settingsHeader,
//     settingsMenu,
//     menuButton,
//     createTitle,
//     createBody,
//     postComments,
//     footerLine,
//     postDots,
//     headerLine,
//     commentIcon,
//     profile
// ) {
//     header.backgroundColor = "rgb(60, 61, 62)";
//     header.outlineColor = "white";
//     searchBar.backgroundColor = "rgb(184, 187, 191)";
//     menuBar.backgroundColor = "rgb(184, 187, 191)";
//     createPost.backgroundColor = "rgb(36, 37, 38)";
//     createPost.border = "#8d8b8b solid";
//     createTitle.backgroundColor = "rgb(184, 187, 191)";
//     createBody.backgroundColor = "rgb(184, 187, 191)";
//     darkButton.backgroundColor = "rgb(184, 187, 191)";
//     darkButton.color = "white";
//     settingsHeader.backgroundColor = "rgb(184, 187, 191)";
//     settingsHeader.color = "white";
//     settingsMenu.backgroundColor = "rgb(184, 187, 191)";
//     settingsMenu.color = "white";
//     menuButton.backgroundColor = "rgb(184, 187, 191)";
//     document.body.style.backgroundColor = "rgb(24, 25, 26)";
//     profile.color = "white";
//     posts.forEach((post) => {
//         post.style.backgroundColor = "rgb(36, 37, 38)";
//         post.style.color = "white";
//         post.style.border = "#8d8b8b solid";
//     });
//     postComments.forEach((comment) => {
//         comment.style.color = "white";
//     });
//     footerLine.forEach((line) => {
//         line.style.borderColor = "white";
//     });
//     postDots.forEach((dot) => {
//         dot.style.color = "white";
//     });
//     headerLine.forEach((line) => {
//         line.style.borderColor = "white";
//     });
//     commentIcon.forEach((icon) => {
//         icon.style.color = "white";
//     });
// }

// function darkOff(
//     header,
//     searchBar,
//     menuBar,
//     posts,
//     createPost,
//     darkButton,
//     settingsHeader,
//     settingsMenu,
//     menuButton,
//     createTitle,
//     createBody,
//     postComments,
//     footerLine,
//     postDots,
//     headerLine,
//     commentIcon,
//     profile
// ) {
//     header.backgroundColor = "rgb(169, 222, 249)"; //
//     header.outlineColor = "black";
//     searchBar.backgroundColor = "white"; //
//     menuBar.backgroundColor = "white";
//     createPost.backgroundColor = "white";
//     createPost.border = "#8d8b8b solid";
//     createTitle.backgroundColor = "rgb(241, 250, 255)"; //
//     createBody.backgroundColor = "rgb(241, 250, 255)"; //
//     darkButton.backgroundColor = "white";
//     darkButton.color = "black";
//     settingsHeader.backgroundColor = "white";
//     settingsHeader.color = "black";
//     settingsMenu.backgroundColor = "rgb(169, 222, 249)"; //
//     settingsMenu.color = "black"; //
//     menuButton.backgroundColor = "white";
//     document.body.style.backgroundColor = "rgb(238, 249, 255)";
//     profile.color = "black";
//     posts.forEach((post) => {
//         post.style.backgroundColor = "white";
//         post.style.color = "black";
//         post.style.border = "black solid";
//     });
//     postComments.forEach((comment) => {
//         comment.style.color = "black";
//     });
//     footerLine.forEach((line) => {
//         line.style.borderColor = "black";
//     });
//     postDots.forEach((dot) => {
//         dot.style.color = "black";
//     });
//     headerLine.forEach((line) => {
//         line.style.borderColor = "black";
//     });
//     commentIcon.forEach((icon) => {
//         icon.style.color = "black";
//     });
// }

// function transition(
//     header,
//     searchBar,
//     menuBar,
//     posts,
//     createPost,
//     createTitle,
//     createBody,
//     profile
// ) {
//     header.transition = "1s";
//     createBody.transition = "1s";
//     createTitle.transition = "1s";
//     createPost.transition = "1s";
//     menuBar.transition = "1s";
//     searchBar.transition = "1s";
//     profile.transition = "1s";
//     document.body.style.transition = "1s";
//     posts.forEach((post) => {
//         post.style.transition = "1s";
//     });
// }

// window.addEventListener("DOMContentLoaded", defaultMode);
// function defaultMode() {
//     const header = document.getElementsByClassName("header")[0];
//     const searchBar = document.getElementsByClassName("search-bar")[0];
//     const menuBar = document.getElementsByClassName("side-menu")[0];
//     const posts = document.querySelectorAll(".post-body");
//     const postDots = document.querySelectorAll(
//         ".post-body .post-header .right-side .dots-icon"
//     );
//     const postComments = document.querySelectorAll(".footer .comments-text");
//     const headerLine = document.querySelectorAll(".post-body .post-header");
//     const footerLine = document.querySelectorAll(".footer");
//     const createPost = document.getElementsByClassName("create-post")[0];
//     const createTitle = document.getElementsByClassName("post-title")[0];
//     const createBody = document.getElementsByClassName("body")[0];
//     const darkButton = document.getElementsByClassName("dark-mode")[0];
//     const settingsHeader = document.querySelector(
//         ".header .buttons .settings-icon"
//     );
//     const settingsMenu = document.querySelector(
//         ".side-menu .settings .settings-option .settings-icon"
//     );
//     const menuButton = document.getElementsByClassName("menu-icon")[0];
//     const commentIcon = document.querySelectorAll(".footer .comments-icon");
//     const profile = document.getElementsByClassName("profile")[0];
//     if (
//         JSON.parse(decodeURIComponent(getCookieValue("data")))["darkMode"] ===
//         true
//     ) {
//         darkOn(
//             header.style,
//             searchBar.style,
//             menuBar.style,
//             posts,
//             createPost.style,
//             darkButton.style,
//             settingsHeader.style,
//             settingsMenu.style,
//             menuButton.style,
//             createTitle.style,
//             createBody.style,
//             postComments,
//             footerLine,
//             postDots,
//             headerLine,
//             commentIcon,
//             profile.style
//         );
//         return;
//     }
//     darkOff(
//         header.style,
//         searchBar.style,
//         menuBar.style,
//         posts,
//         createPost.style,
//         darkButton.style,
//         settingsHeader.style,
//         settingsMenu.style,
//         menuButton.style,
//         createTitle.style,
//         createBody.style,
//         postComments,
//         footerLine,
//         postDots,
//         headerLine,
//         commentIcon,
//         profile.style
//     );
// }

const form = document.getElementsByClassName("form")[0];
form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const title = document.getElementsByClassName("title-input")[0];
    const titleError = document.getElementsByClassName("title-error")[0];
    const body = document.getElementsByClassName("body-input")[0];
    const bodyError = document.getElementsByClassName("body-error")[0];
    if (!title.value || title.value.trim() === "") {
        titleError.innerHTML = "Empty Title Field";
        return;
    } else if (title.value.trim().length <= 3) {
        titleError.innerHTML = "Post Title Should Be More Than 3 Characters";
        return;
    } else {
        titleError.innerHTML = "";
    }
    if (!body.value || body.value.trim() === "") {
        bodyError.innerHTML = "Empty Body Field";
        return;
    } else if (body.value.trim().length <= 5) {
            bodyError.innerHTML = "Post Body Should Be More Than 5 Characters";
            return;
    } else {
        bodyError.innerHTML = "";
    }

    response = await fetch("/api/edit-post", {
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
            post_id:window.location.href.substring(window.location.href.lastIndexOf("/") + 1)
        }),
    }).then(() =>window.location.href = '/post/' + window.location.href.substring(window.location.href.lastIndexOf("/") + 1));
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
