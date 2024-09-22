const ham = document.querySelector("#js-hamburger");
const nav = document.querySelector("#js-nav");

ham.addEventListener("click", () => {
  ham.classList.toggle("active");
  nav.classList.toggle("active");
});
