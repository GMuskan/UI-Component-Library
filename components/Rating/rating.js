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
