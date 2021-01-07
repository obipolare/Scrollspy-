const menuItems = document.querySelectorAll(".main-menu__item");
const article1 = document.getElementById("article-1");
const article2 = document.getElementById("article-2");
const article3 = document.getElementById("article-3");
const article4 = document.getElementById("article-4");
const article5 = document.getElementById("article-5");
const gif = document.getElementById("gif");

const getGif = async () => {
  const res = await fetch(
    "https://api.giphy.com/v1/gifs/random?api_key=Tgk3m9g3lF2HZVQztaVvytmkSJiGiTSF"
  );
  const { data } = await res.json();

  const fragment = document.createDocumentFragment();
  const img = document.createElement("IMG");
  img.setAttribute("src", data.images.original.url);
  fragment.appendChild(img);
  gif.appendChild(fragment);
};
getGif();
const removeActiveMenuItem = () => {
  menuItems.forEach((el) => el.classList.remove("main-menu__item--active"));
};

const addActiveMenuItem = (index) => {
  removeActiveMenuItem();
  menuItems[index - 1].classList.add("main-menu__item--active");
};

const checkElement = (element) =>
  element.getBoundingClientRect().top > 0 &&
  element.getBoundingClientRect().top < 50;

window.addEventListener("scroll", () => {
  checkElement(article1) && addActiveMenuItem(article1.dataset.index);
  checkElement(article2) && addActiveMenuItem(article2.dataset.index);
  checkElement(article3) && addActiveMenuItem(article3.dataset.index);
  checkElement(article4) && addActiveMenuItem(article4.dataset.index);
  checkElement(article5) && addActiveMenuItem(article5.dataset.index);
});
