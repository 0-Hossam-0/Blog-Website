function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function openMenu() {
    const menuBar = document.getElementsByClassName("side-menu")[0];
    const profile = document.querySelector(".side-menu .profile");
    const settings = document.querySelector(".side-menu .settings");
    const addComment = document.querySelector(".add-comment");
    const comments = document.querySelector(".comments");
    if (menuBar.classList.contains("side-menu-transition")) {
        menuBar.classList.remove("side-menu-transition");
        comments.style.marginLeft = "15vw";
        addComment.style.marginLeft = "15vw";
        await sleep(200);
        profile.style.visibility = "hidden";
        settings.style.visibility = "hidden";
    } else {
        menuBar.classList.add("side-menu-transition");
        comments.style.marginLeft = "25vw";
        addComment.style.marginLeft = "25vw";
        await sleep(200);
        settings.style.visibility = "visible";
        profile.style.visibility = "visible";
    }
}

const form = document.getElementsByClassName("form")[0];
form.addEventListener("submit", addComment);
async function addComment(event) {
    event.preventDefault();
    const commentInput = document.getElementsByClassName("input")[0];
    const commentSend = document.getElementsByClassName("comment-button")[0];
    if (commentInput.value && commentInput.value.trim()) {
        commentInput.style.border = "1px black solid";
        commentSend.disabled = true;
        if (event.key === "Enter") {
            event.preventDefault();
        }
        console.log(typeof(decodeURIComponent(getCookieValue("data"))));
        if (decodeURIComponent(getCookieValue("data")) != 'null') {
            return await fetch("/api/create-comment", {
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRF-TOKEN": document
                        .querySelector('meta[name="csrf-token"]')
                        .getAttribute("content"),
                },
                method: "POST",
                body: JSON.stringify({
                    comment: commentInput.value,
                    userUrl: window.location.href,
                    post_id: window.location.href.substring(
                        window.location.href.lastIndexOf("/") + 1
                    ),
                    user_id: JSON.parse(
                        decodeURIComponent(getCookieValue("data"))
                    )["id"],
                }),
            }).then(() => window.location.reload());
        } else {
            window.location.href = "http://127.0.0.1:8000/register";
        }
    }
    commentInput.style.border = "red 2px solid";
}

window.onclick = function (event) {
    const drops = document.querySelectorAll(".dropdown-content");
    if (event.target.id) {
        if (
            document.getElementById("dropdown-" + event.target.id).style
                .visibility == "visible"
        ) {
            document.getElementById(
                "dropdown-" + event.target.id
            ).style.visibility = "hidden";
            return;
        }
        document.getElementById(
            "dropdown-" + event.target.id
        ).style.visibility = "visible";
    } else {
        drops.forEach((drop) => {
            drop.style.visibility = "hidden";
        });
    }
};
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