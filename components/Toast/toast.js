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
