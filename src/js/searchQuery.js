import fetchImage from './apiService.js';
import refs from './refs.js';
import markup from './markup.js';
import { getInfo, myInfo } from './pnotify.js';
import showGallery from './basicLinghtbox';

const { search, expand, anchor, input, listImg } = refs;

const getQuery = event => {
  event.preventDefault();

  anchor.classList.add('is-hidden');
  listImg.innerHTML = '';
  fetchImage.page = 1;

  getfetch(input.value);

  listImg.addEventListener('click', showGallery);

  getInfo(myInfo(input.value));

  expand.classList.remove('is-hidden');
};

const getfetch = value => {
  fetchImage.quiry(value).then(arrayImg => {
    markup(arrayImg), window.scrollTo(0, document.documentElement.offsetHeight);
  });
};

const expandNewImg = event => {
  event.preventDefault();
  getfetch(input.value);
  anchor.classList.remove('is-hidden');
};

const getQueryEnter = event => {
  if (event.code === 'Enter') {
    getQuery(event);
  }
};

search.addEventListener('click', getQuery);
input.addEventListener('keydown', getQueryEnter);
expand.addEventListener('click', expandNewImg);
