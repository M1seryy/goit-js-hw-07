import { galleryItems } from "./gallery-items.js";
// Change code below this line
// console.log(galleryItems);
const ul = document.querySelector(".gallery");

// instance.show()
ul.addEventListener("click", urlHandler);
let newArr = galleryItems
  .map((item) => {
    return `<li class="gallery__item">
  <a class="gallery__link" href="#">
    <img
      class="gallery__image"
      src=${item.preview}
      data-source=${item.original}
      alt=${item.description}
    />
  </a>
</li>`;
  })
  .join("");
let img;
ul.insertAdjacentHTML("afterbegin", newArr);
function createMyLigthBox(dataAtr) {
  const instance = basicLightbox.create(`
    <img src=${dataAtr} width="800" height="600">
    `);
  img = instance;
}
function urlHandler(e) {
  if (e.target.nodeName === "IMG") {
    createMyLigthBox(e.target.getAttribute("data-source"));
    img.show();
  } else {
    return;
  }
}

window.addEventListener("keydown", (e) => {
  if (e.keyCode === 27) {
    img.close();
  }
});
