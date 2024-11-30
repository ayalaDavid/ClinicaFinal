const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Persona = require('./persona');

const Medico = sequelize.define('Medico', {
  id_medico: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_persona: {
    type: DataTypes.INTEGER,
    references: { model: Persona, key: 'id_persona' },
  },
  especialidad: { type: DataTypes.STRING, allowNull: false },
  nombre_usuario: { type: DataTypes.STRING, allowNull: false },
  clave_acceso: { type: DataTypes.STRING, allowNull: false },
});

Medico.belongsTo(Persona, { foreignKey: 'id_persona' });
module.exports = Medico;
