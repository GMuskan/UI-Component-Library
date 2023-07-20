// import { modal } from "./components/Modal/modal";
// import { toast } from "./components/Toast/toast";
// import { rating } from "./components/Rating/rating";

const btnToTop = document.querySelector("[data-top]");
const rootElement = document.documentElement;
const drawerBtn = document.querySelector("[data-drawer]");
const drawer = document.querySelector(".drawer");
const backdrop = document.querySelector(".backdrop");
const themeToggle = document.querySelector(".theme-icon");

const key = "UI_DARK_THEME";

let themeMode = localStorage.getItem(key);

// modal();
// toast();
// rating();

const enableDarkMode = () => {
    document.body.classList.add("dark-theme");
    localStorage.setItem(key, "enabled");
    themeToggle.className = "fas fa-sun theme-icon";
};

const disableDarkMode = () => {
    document.body.classList.remove("dark-theme");
    localStorage.setItem(key, null);
    themeToggle.className = "fas fa-moon theme-icon";
};

if (themeMode === "enabled") {
    themeToggle.className = "fas fa-sun theme-icon";
    enableDarkMode();
}

window.addEventListener("scroll", () => {
    let nav = document.querySelector(".navbar");
    let windowPosition = window.scrollY > 100;
    nav.classList.toggle("scrolling-active", windowPosition);

    // For floating action btn
    if (document.body.scrollTop > 30 || rootElement.scrollTop > 30) {
        btnToTop.style.display = "flex";
    } else {
        btnToTop.style.display = "none";
    }
});

btnToTop.addEventListener("click", () => {
    rootElement.scrollTo({
        top: 0,
    });
});

if (drawerBtn) {
    drawerBtn.addEventListener("click", () => {
        backdrop.style.display = "block";
        drawer.style.transform = "translateX(0)";
    });
}

if (backdrop) {
    backdrop.addEventListener("click", () => {
        backdrop.style.display = "none";
        drawer.style.transform = "translateX(-100%)";
    });
}

themeToggle.addEventListener("click", () => {
    themeMode = localStorage.getItem(key);

    if (themeMode !== "enabled") {
        themeToggle.className = "fas fa-sun theme-icon";
        enableDarkMode();
    } else {
        themeToggle.className = "fas fa-moon theme-icon";
        disableDarkMode();
    }
});
