import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery')

function createGallaryMarkup(items){
    return items.map((item)=>`<div class="gallery__item">
    <a class="gallery__link" href="${item.original}">
    <img class="gallery__image"
    src="${item.preview}"
    data-source="${item.original}"
    alt="${item.description}"/>
    </a>
    </div>`).join("");
}
const addGallaryMarkup = createGallaryMarkup(galleryItems);
gallery.innerHTML=addGallaryMarkup;
gallery.addEventListener('click',onImageClick);
function onImageClick(evt){
blockStandartAction(evt);
if (evt.target.nodeName!=="img") {
    return;
}
const instance=basicLightbox.create(`<img src="${evt.target.dataset.source}" width="800" height="600"`);
instance.show();
gallery.addEventListener("keydown",(evt)=>{
    if(evt.code==="Escape"){
        instance.close();
    }
}
);
}
function blockStandartAction(evt){
    evt.preventDefault();
 } 

//  galleryItems.forEach(({preview,description})=>{
//     const img = document.createElement('img')
//     img.src = preview;
//     img.alt= description;
//     img.style.cssText='width:360px;height:240px;'
//     gallery.append(img);
//     })
//     import * as basicLightbox from 'basiclightbox'
    
//     const instance = basicLightbox.create(`
//         <img src="assets/images/image.png" width="800" height="600">
//     `)
    
//     instance.show()