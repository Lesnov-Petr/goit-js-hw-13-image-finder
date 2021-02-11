import fetchImage from './apiService.js';
import refs from './refs.js';

const { search, extand, input, listImg } = refs;

const getQuery = event => {
  event.preventDefault();
  listImg.innerHTML = '';
  fetchImage.page = 1;
  fetchImage.quiry(input.value);
};

const extandNewImg = event => {
  event.preventDefault();
  fetchImage.quiry(input.value);
};

search.addEventListener('click', getQuery);
extand.addEventListener('click', extandNewImg);
