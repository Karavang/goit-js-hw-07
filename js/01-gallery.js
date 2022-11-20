import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery')

galleryItems.forEach(({preview,description})=>{
const img = document.createElement('img')
img.src = preview;
img.alt= description;
img.style.cssText='width:360px;height:240px;'
gallery.append(img);
})
import * as basicLightbox from 'basiclightbox'

const instance = basicLightbox.create(`
    <img src="assets/images/image.png" width="800" height="600">
`)

instance.show()