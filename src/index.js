import './styles.css';
import api from './js/apiService';
import refs from './js/refs';

const { form, loadMoreBtn, gallery } = refs;

form.addEventListener('submit', findImages);
loadMoreBtn.addEventListener('click', moreImages);

function findImages(e) {
  e.preventDefault();
  const value = e.target.elements.query.value;
  api.hideMorePageBtn();
  api.clearListImages();
  api.resetPage();
  api.fetchQuery(value);
}

function moreImages() {
  api.nextPage();
  api.fetchQuery(api.query);
}
