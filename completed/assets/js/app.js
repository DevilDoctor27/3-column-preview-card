const section = document.getElementById("cards-section");
const cardsButton = document.querySelectorAll(".card__button");
const sectionDefaultColor = window.getComputedStyle(section).backgroundColor;

let notMobile = window.innerWidth >= 960;

const colorizeSection = (event) => {
  section.style.backgroundColor = window.getComputedStyle(event.target).color;
};

const resetSectionColor = () => {
  section.style.backgroundColor = sectionDefaultColor;
};

const addButtonEvents = () => {
  cardsButton.forEach((button) => {
    button.addEventListener("mouseover", colorizeSection);
    button.addEventListener("mouseleave", resetSectionColor);
  });
};

const removeButtonEvents = () => {
  cardsButton.forEach((button) => {
    button.removeEventListener("mouseover", colorizeSection);
    button.removeEventListener("mouseleave", resetSectionColor);
  });
};

if (notMobile) {
  addButtonEvents();
}

window.addEventListener(
  "resize",
  throttle(() => {
    window.innerWidth < 960 ? removeButtonEvents() : addButtonEvents();
  }, 50)
);

// This peace of code I found in internet.
/* 
  This function prevents my heavy event listeners
  from being used for too many times 
 */
function throttle(callback, limit) {
  var wait = false;
  return function () {
    if (!wait) {
      callback.apply(null, arguments);
      wait = true;
      setTimeout(function () {
        wait = false;
      }, limit);
    }
  };
}
