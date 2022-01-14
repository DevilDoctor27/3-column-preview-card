const section = document.getElementById("cards-section");
const cardsButton = document.querySelectorAll(".card__button");
const sectionDefaultColor = window.getComputedStyle(section).backgroundColor;

let notMobile = window.innerWidth >= 960;

window.addEventListener("resize", () => {
  console.log(window.innerWidth);
  notMobile = window.innerWidth < 959;
  return notMobile;
});

if (notMobile) {
  cardsButton.forEach((button) => {
    button.addEventListener("mouseover", () => {
      section.style.backgroundColor = window.getComputedStyle(button).color;
    });
    button.addEventListener("mouseleave", () => {
      section.style.backgroundColor = sectionDefaultColor;
    });
  });
}
