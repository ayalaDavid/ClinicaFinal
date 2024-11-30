const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('Clinica', 'postgres', 'admin', {
    host: 'localhost',
    dialect: 'postgresql',
});

sequelize
    .authenticate()
    .then(() => console.log('Conexión exitosa a la base de datos.'))
    .catch((error) => console.error('Error al conectar con la base de datos:', error));

module.exports = sequelize;
