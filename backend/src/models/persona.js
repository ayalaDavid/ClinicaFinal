const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Conexión configurada

const Persona = sequelize.define('Persona', {
  id_persona: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: { type: DataTypes.STRING, allowNull: false },
  apellido: { type: DataTypes.STRING, allowNull: false },
  ci_persona: { type: DataTypes.INTEGER, allowNull: false },
  nro_celular: { type: DataTypes.INTEGER, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false },
  fecha_nacimiento: { type: DataTypes.DATE, allowNull: false },
});

module.exports = Persona;
