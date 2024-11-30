const Paciente = require('../models/paciente');
const Persona = require('../models/persona');

exports.getAllPacientes = async (req, res) => {
  try {
    const pacientes = await Paciente.findAll({
      include: [{ model: Persona }],
    });
    res.status(200).json(pacientes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
