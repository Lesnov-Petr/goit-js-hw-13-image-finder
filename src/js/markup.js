import markupQuary from '../templates/markupQuary.hbs';
import refs from './refs.js';

const markup = img => {
  const updateMarkup = markupQuary(img.hits);
  refs.listImg.insertAdjacentHTML('beforeend', updateMarkup);
};

export default markup;
