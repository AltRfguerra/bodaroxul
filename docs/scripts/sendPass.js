"use strict";

// scripts/formulario.js

document.getElementById('asistencia-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevenir el envío del formulario por defecto

  // Obtener los valores del formulario
  var nombre = document.getElementById('Nombre').value;
  var asistencia = document.querySelector('input[name="attendance"]:checked').value;
  var mensaje = document.getElementById('Mensaje').value;

  // Crear el mensaje de WhatsApp
  var whatsappMessage = "Nombre: ".concat(nombre, "%0AAsistencia: ").concat(asistencia, "%0AMensaje: ").concat(mensaje);

  // Número de WhatsApp al que se enviará el mensaje
  var whatsappNumber = '526143839597'; // Reemplaza con tu número, incluyendo el código de país

  // Crear el enlace de WhatsApp
  var whatsappLink = "https://api.whatsapp.com/send?phone=".concat(whatsappNumber, "&text=").concat(whatsappMessage);

  // Redirigir al usuario a WhatsApp con el mensaje preconfigurado
  window.open(whatsappLink, '_blank');
});