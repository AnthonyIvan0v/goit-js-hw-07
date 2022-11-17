import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryRef = document.querySelector('.gallery');
const cardsGallery = createItemGallery(galleryItems);

galleryRef.innerHTML= cardsGallery;

galleryRef.addEventListener('click', onCardsGallery);

function createItemGallery(element) {
    return element.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
                    <a class="gallery__link" href="${original}">
                        <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
                    </a>
                </div>`}).join('');
};


function onCardsGallery(event) {
    event.preventDefault();

    if (event.target.classList.contains("gallery")) {
        return
    };
    const source = event.target.dataset.source;
    const instance = basicLightbox.create(`
    <img src="${source}"width="800" height="600">`);
  instance.show();

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        instance.close();
    };
  })

}
