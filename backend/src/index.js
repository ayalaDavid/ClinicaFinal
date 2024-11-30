const express = require('express');
const sequelize = require('./config/database');
const pacienteRoutes = require('./routes/pacienteRoutes');

const app = express();
app.use(express.json());

// Rutas
app.use('/api/pacientes', pacienteRoutes);

// Sincronización con la base de datos
sequelize.sync({ force: false }) // Cambia a "true" si quieres recrear las tablas
  .then(() => console.log('Tablas sincronizadas'))
  .catch((error) => console.error('Error al sincronizar:', error));

// Levantar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
