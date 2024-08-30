// server.js

const express = require('express');
const bodyParser = require('body-parser');
const ExcelJS = require('exceljs');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear los datos del formulario
app.use(bodyParser.urlencoded({ extended: false }));

// Datos simulados como si fueran de una base de datos
let formData = [];

// Ruta para manejar el envío del formulario
app.post('/submit-form', async (req, res) => {
  const { Nombre, Telefono, 'Respuesta y mensaje': Respuesta } = req.body;

  // Añadir datos al "base de datos" simulada
  formData.push({ Nombre, Telefono, Respuesta });

  // Añadir datos al archivo Excel
  await addToExcel(Nombre, Telefono, Respuesta);

  // Responder al cliente con una confirmación
  res.send('Formulario enviado correctamente y almacenado en Excel.');
});

// Función para agregar datos al archivo Excel
async function addToExcel(Nombre, Telefono, Respuesta) {
  const workbook = new ExcelJS.Workbook();
  try {
    await workbook.xlsx.readFile('data.xlsx');
  } catch (error) {
    console.log('No se encontró el archivo data.xlsx. Creando uno nuevo.');
  }

  const sheet = workbook.getWorksheet('Sheet1');
  const newRow = sheet.addRow([Nombre, Telefono, Respuesta]);

  await workbook.xlsx.writeFile('data.xlsx');
  console.log('Datos agregados al archivo Excel.');
}

// Función para actualizar periódicamente el archivo Excel
async function updateExcelPeriodically() {
  // Abrir el archivo Excel y preparar para escritura
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile('data.xlsx');
  const sheet = workbook.getWorksheet('Sheet1');

  // Limpiar la hoja de cálculo antes de agregar nuevos datos
  sheet.eachRow({ includeEmpty: true }, (row) => {
    sheet.spliceRows(row.number, 1);
  });

  // Agregar los datos actuales de la "base de datos" simulada al archivo Excel
  formData.forEach(data => {
    sheet.addRow([data.Nombre, data.Telefono, data.Respuesta]);
  });

  // Guardar los cambios en el archivo Excel
  await workbook.xlsx.writeFile('data.xlsx');

  console.log('Archivo Excel actualizado periódicamente.');
}

// Llamar a la función cada hora (3600000 milisegundos)
setInterval(updateExcelPeriodically, 3600000); // 1 hora en milisegundos

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor activo en http://localhost:${PORT}`);
});
