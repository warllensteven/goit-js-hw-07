import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryContainer = document.querySelector(".gallery");
const galleryItemsHTML = galleryItems.map(
  (item) => `
<li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
    <img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}">
    </a>
</li>
`
);
const galleryHTML = galleryItemsHTML.join("");
galleryContainer.insertAdjacentHTML("beforeend", galleryHTML);

galleryContainer.addEventListener("click", onGalleryClick);

function onGalleryClick(event) {
  event.preventDefault();

  const target = event.target;

  if (target.nodeName !== "IMG") {
    return;
  }

  const largeImageURL = target.dataset.source;
}

galleryContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("gallery__image")) {
    const imageURL = event.target.dataset.source;

    const lightbox = basicLightbox.create(`<img src="${imageURL}">`);

    lightbox.show();
  }
});
