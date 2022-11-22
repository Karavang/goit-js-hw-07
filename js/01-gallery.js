import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");
const galleryItemMarkup = creatGalleryMarkup(galleryItems);
galleryEl.insertAdjacentHTML("beforeend", galleryItemMarkup);

function creatGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
         <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
             src="${preview}"
            data-source="${original}"
             alt="${description}"
         />
         </a>
       </div>`;
    })
    .join("");
}

galleryEl.addEventListener("click", openImgModal);

function openImgModal(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  const imgUrlOriganal = event.target.dataset.source;

  const instance = basicLightbox.create(
    `
    <div class="modal">
       <img src="${imgUrlOriganal}" width="800" height="600">
       <a>Close</a>
    </div>
`,
    {
      onShow: () => {
        document.addEventListener("keyup", onEscClose);
      },
      onClose: () => {
        document.removeEventListener("keyup", onEscClose);
      },
    }
  );

  function onEscClose(evt) {
    if (evt.key === "Escape") {
      instance.close();
    }
  }

  instance.show();
}