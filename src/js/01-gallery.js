// Задание 1. Библиотека SimpleLightbox
// Выполняй это задание в файлах 01-gallery.html и 01-gallery.js. Разбей его на несколько подзадач:

// 1. Добавь библиотеку SimpleLightbox как зависимость проекта используя npm (ссылка на CDN из твоей прошлой работы больше не нужна).
// 2. Используй свой JavaScript код из предыдущей домашней работы, но выполни рефакторинг с учетом того, что библиотека была установлена через npm (синтаксис import/export).

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';

const gallaryContainer = document.querySelector('.gallery');
const createGallaryImages = createGalleryImagesMarcup(galleryItems);

gallaryContainer.insertAdjacentHTML('afterbegin', createGallaryImages);
gallaryContainer.addEventListener('click', onClickImages);

function createGalleryImagesMarcup(galleryItems) {
  return galleryItems.map(({ preview, original, description }) => 
  `<div class="gallery__item">
  <a class="gallery__link" href="${original}" onclick = "event.preventDefault()">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
).join('');
}

function onClickImages(e) {
  e.preventDefault(); 
}

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

console.log(galleryItems);
