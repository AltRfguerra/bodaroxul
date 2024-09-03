"use strict";

document.addEventListener('DOMContentLoaded', function () {
  // Tu código JS aquí
});

// Selección de los elementos del DOM
var prevButton = document.querySelector('.prev');
var nextButton = document.querySelector('.next');
var images = document.querySelectorAll('.gallery-image');
var descriptions = document.querySelectorAll('.image-description');
var currentIndex = 0; // Índice de la imagen actual

function showImage(index) {
  images.forEach(function (img, i) {
    img.style.display = i === index ? 'block' : 'none'; // Controla la visibilidad de la imagen
    descriptions[i].style.display = i === index ? 'block' : 'none'; // Controla la visibilidad de la descripción
  });
  currentIndex = index; // Actualiza el índice actual cada vez que cambias la imagen
  showDescription(index); // Llama a showDescription aquí
}
function showDescription(index) {
  descriptions.forEach(function (desc, i) {
    desc.classList.toggle('active', i === index);
  });
}
function nextImage() {
  currentIndex = (currentIndex + 1) % images.length; // Cicla hacia adelante a través de las imágenes
  showImage(currentIndex);
}
function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length; // Cicla hacia atrás a través de las imágenes
  showImage(currentIndex);
}

// Vincular los eventos de clic con las funciones
prevButton.addEventListener('click', prevImage);
nextButton.addEventListener('click', nextImage);

// Mostrar la primera imagen al cargar la página
showImage(currentIndex);

// Inicializa la galería mostrando la primera imagen
showImage(currentIndex);