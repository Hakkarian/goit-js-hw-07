import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');
    
//-----------------------markup
//we're creating markup from given template
const onMarkup = () => {
    const newGallery = galleryItems.map(item => {
        return `<div class="gallery__item">
                         <a class="gallery__link" href="${item.original}">
                         <img
                         class="gallery__image"
                         src="${item.preview}"
                         data-source="${item.original}"
                         alt="${item.description}"
                         />
                         </a>
                         </div>`
    
    }).join(' '); //and joining him from array to string

    //and adding this string to the html, before the end of the div tag
    gallery.insertAdjacentHTML('beforeend', newGallery);
    return gallery;
}
//finally, calling for this method
onMarkup();


    
//----------------------modal onclick

    
const clickImage = (e) => {

    //preventing default
    e.preventDefault();
    //seeking for the information about source of the target on click
    console.log(e.target.dataset.source)
    //if target is not equal to the tag, we are pressing return from this point
    if (e.target.nodeName !== 'IMG') {
        return;
    }
    //we're creating lightbox instance
    const instance = basicLightbox.create(`
	<img width="1400" height="900" src="${e.target.dataset.source}">`)
    instance.show();
    //and escape method - when we're pressing the escape button, we're moving from modal window
    gallery.addEventListener("keydown",(e) => {
        if (e.key === 'Escape') {
            instance.close();
        }
    })
}
//add event listener to the gallery, delegation method
gallery.addEventListener("click", clickImage);


console.dir(galleryItems)

    




