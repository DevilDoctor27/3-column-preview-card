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

if (notMobile) {
  cardsButton.forEach((button) => {
    button.addEventListener("mouseover", colorizeSection);
    button.addEventListener("mouseleave", resetSectionColor);
  });
}
