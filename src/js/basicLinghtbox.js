import * as basicLightbox from 'basiclightbox';
import style from 'basiclightbox/dist/basicLightbox.min.css';

const showGallery = event => {
  event.preventDefault();
  const image = basicLightbox
    .create(`<img src="${event.target.src}" alt="${event.target.alt}">`)
    .show();
};

export default showGallery;
