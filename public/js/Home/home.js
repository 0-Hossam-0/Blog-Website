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