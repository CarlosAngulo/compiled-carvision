const express = require('express');
const app = express();

// Configurar la ruta para archivos estáticos
app.use(express.static('public'));

// Otros manejadores de rutas y configuraciones

// Iniciar el servidor
const PORT = 80;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});