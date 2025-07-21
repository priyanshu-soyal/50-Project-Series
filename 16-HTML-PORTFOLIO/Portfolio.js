const sideMenu = document.getElementById("sideMenu");

function openMenu() {
    sideMenu.style.right = "0";
}

function closeMenu() {
    sideMenu.style.right = "-200px";
}


const tabLinks = document.getElementsByClassName("tab-links");
const tabContents = document.getElementsByClassName("tab-content");

function openTab(tabName) {
    for(let tabLink of tabLinks) {
        tabLink.classList.remove("active-tab-links");
    }
    for(let tabContent of tabContents) {
        tabContent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-tab-links");
    document.getElementById(tabName).classList.add("active-tab")
}
