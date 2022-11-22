import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryItem = document.querySelector(".gallery");
const galleryItemMarkup = creatGalleryMarkup(galleryItems);
galleryItem.insertAdjacentHTML("beforeend", galleryItemMarkup);

function creatGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li>
         <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
       </li>`;
    })
    .join("");
}
const lightbox = new SimpleLightbox(".gallery__item", {
  captionsData: "alt",
  captionDelay: 250,
});