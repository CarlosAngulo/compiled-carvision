const express = require('express');
const path = require('path');
const app = express();
require('dotenv').config();

// Configuración para servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Configuración para manejar todas las rutas y redirigirlas a index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Manejo de rutas no encontradas (404)
app.use((req, res) => {
  res.status(404).send('Página no encontrada');
});

// Inicia el servidor en el puerto 3000 (puedes ajustar el puerto según tu necesidad)
const port = process.env.PORT || 80;
app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});