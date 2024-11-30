const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Persona = require('./persona');

const Paciente = sequelize.define('Paciente', {
  id_paciente: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_persona: {
    type: DataTypes.INTEGER,
    references: { model: Persona, key: 'id_persona' },
  },
});

Paciente.belongsTo(Persona, { foreignKey: 'id_persona' });
module.exports = Paciente;
