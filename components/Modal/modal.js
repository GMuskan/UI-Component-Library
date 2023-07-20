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
