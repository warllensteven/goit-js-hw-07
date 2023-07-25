import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryHTML = galleryItems.map(
  (item) => `
      <li class="gallery__item">
        <a class="gallery__link" href="${item.original}">
          <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
        </a>
      </li>
    `
);

const galleryContainer = document.querySelector(".gallery");
galleryContainer.innerHTML = galleryHTML.join("");

const lightbox = new SimpleLightbox(".gallery__link", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
