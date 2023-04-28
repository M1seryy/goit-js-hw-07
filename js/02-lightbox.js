import { galleryItems } from "./gallery-items.js";
const ul = document.querySelector(".gallery");

// instance.show()
let newArr = galleryItems
  .map((item) => {
    return `<li class="gallery__item">
  <a class="gallery__link" href="${item.original}">
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
ul.insertAdjacentHTML("afterbegin", newArr);
var lightbox = new SimpleLightbox(".gallery__link", {
  captionsData: "alt",
  captionDelay: "250",
  captionPosition: "bottom",
});
