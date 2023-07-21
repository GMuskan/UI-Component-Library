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

const btn = document.querySelector("[data-modal]");
const btnHeader = document.querySelector("[data-modal-with-header]");
const modalClose = document.querySelector(".modal-close");
const modalCloseHeader = document.querySelector("[data-close]");
const modalContainer = document.querySelector(".modal-container");
const modalWithHeader = document.querySelector("[data-with-header]");
const modalContent = document.querySelector(".modal-content");

function modal() {
    if (btn) {
        btn.addEventListener("click", () => {
            if (modalContent.classList.contains("with-header"))
                modalWithHeader.classList.add("active");
            else modalContainer.classList.add("active");
        });
    }
    if (btnHeader) {
        btnHeader.addEventListener("click", () => {
            modalWithHeader.classList.add("active");
        });
    }
    if (modalClose) {
        modalClose.addEventListener("click", () => {
            modalContainer.classList.remove("active");
        });
    }
    if (modalCloseHeader) {
        modalCloseHeader.addEventListener("click", () => {
            modalWithHeader.classList.remove("active");
        });
    }
}

modal();

const ratingStars = document.querySelectorAll(".rating-input");
const form = document.querySelector(".submit-review");
const showReview = document.querySelector(".show-review");

function checkStars(idx) {
    if (ratingStars[idx].checked) {
        for (let j = idx - 1; j >= 0; j--) {
            ratingStars[j].checked = true;
        }
    } else {
        for (let j = idx + 1; j < ratingStars.length; j++) {
            ratingStars[j].checked = false;
        }
    }
}

function rating() {
    ratingStars.forEach((star, id) => {
        star.addEventListener("change", () => checkStars(id));
    });

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            let sum = 0;
            ratingStars.forEach((star) => {
                if (star.checked) sum += 1;
            });

            if (sum != 0) showReview.innerText = `Thank you for ${sum} stars!`;
        });
    }
}

rating();

const toastContainer = document.querySelector(".toast");
const openToast = document.querySelector("[data-toast]");
const openToast2 = document.querySelector("[data-toast-2]");
const btnClose = document.querySelector(".btn-close");

let timerID, timerID2;

function toast() {
    if (openToast) {
        openToast.addEventListener("click", () => {
            toastContainer.style.display = "block";
            timerID = setTimeout(() => {
                toastContainer.style.display = "none";
            }, 3000);
        });
    }

    if (btnClose) {
        btnClose.addEventListener("click", () => {
            clearTimeout(timerID);
            toastContainer.style.display = "none";
        });
    }
}

toast();


