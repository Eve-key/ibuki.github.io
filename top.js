window.onload = () => {
  const text = document.querySelector("h2");
  setInterval(() => text.classList.toggle("float-up"), 300);

  setTimeout(() => {
    const loader = document.querySelector(".loader");
    loader.classList.add("loaded");
    const content = document.querySelector(".content");
    content.style.visibility = "visible";
    // document.querySelector("body").style.visibility = "visible";
  }, 1000);

  const image = document.querySelector(".background");
  image.addEventListener("mouseover", () => {
    image.style.backgroundColor = "orange";
  });

  image.addEventListener("mouseleave", () => {
    image.style.backgroundColor = "transparent";
  });
};
