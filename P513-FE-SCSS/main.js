const header = document.querySelector(".header");
const listItemLink = [
  ...document.querySelectorAll(
    ".header__container__nav__list__list-item__link"
  ),
];
const logo1 = document.querySelector("#logo_1");
const logo2 = document.querySelector("#logo_2");
let sticky = header.offsetTop;
logo2.style.display = "none";
window.addEventListener("scroll", () => {
  listItemLink.forEach((item) => {
    if (window.pageYOffset - 140 > sticky) {
      header.classList.add("sticky");
      item.style.color = "black";
      logo2.style.display = "block";
      logo1.style.display = "none";
    } else {
      header.classList.remove("sticky");
      item.style.color = "#eee";
      logo2.style.display = "none";
      logo1.style.display = "block";
    }
  });
});
