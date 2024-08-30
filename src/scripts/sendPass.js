// scripts/formulario.js

document.getElementById('asistencia-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevenir el envío del formulario por defecto

  // Obtener los valores del formulario
  const nombre = document.getElementById('Nombre').value;
  const asistencia = document.querySelector('input[name="attendance"]:checked').value;
  const mensaje = document.getElementById('Mensaje').value;

  // Crear el mensaje de WhatsApp
  const whatsappMessage = `Nombre: ${nombre}%0AAsistencia: ${asistencia}%0AMensaje: ${mensaje}`;

  // Número de WhatsApp al que se enviará el mensaje
  const whatsappNumber = '526143839597'; // Reemplaza con tu número, incluyendo el código de país

  // Crear el enlace de WhatsApp
  const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${whatsappMessage}`;

  // Redirigir al usuario a WhatsApp con el mensaje preconfigurado
  window.open(whatsappLink, '_blank');
});
