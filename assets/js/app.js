const section = document.getElementById("cards-section");
const cardsButton = document.querySelectorAll(".card__button");
const sectionDefaultColor = window.getComputedStyle(section).backgroundColor;

cardsButton.forEach((button) => {
  button.addEventListener("mouseover", () => {
    section.style.backgroundColor = window.getComputedStyle(button).color;
  });
  button.addEventListener("mouseleave", () => {
    section.style.backgroundColor = sectionDefaultColor;
  });
});
