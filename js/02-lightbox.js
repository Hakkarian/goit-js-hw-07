import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector('.gallery');

const onMarkup = () => {
    const newGallery = galleryItems.map(item => {
        return `<a class="gallery__item" href="${item.original}">
                        <img class="gallery__image" 
                        src="${item.preview}" 
                        alt="${item.description}"
                        title="Caption" />
                        </a>`
    
    }).join(' ');


    gallery.insertAdjacentHTML('beforeend', newGallery);
    return gallery;
}

onMarkup();


//-----------------------------------------------------------------modal


const onModal = (e) => {

    e.preventDefault();

    if (e.target.nodeName !== 'IMG') {
        return;
    }

}

let img = document.querySelector('.gallery__image');

let lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250, 
});
console.log(img.alt);



gallery.addEventListener("click", onModal);