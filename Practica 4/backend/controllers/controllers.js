import { pool } from "../db.js";

export const getPacientes = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM pacientes');
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getPaciente = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM pacientes WHERE id = ?', [req.params.id]);
    if (result.length === 0) return res.status(404).json({ message: 'Paciente no encontrado' });
    res.json(result[0]);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const createPacientes = async (req, res) => {
    try {
        const {nombre, apellido, edad, talla, peso, sexo} = req.body;
    const result = await pool.query('INSERT INTO pacientes (nombre, apellido, edad, talla, peso, sexo) VALUES (?, ?, ?, ?, ?, ?)', [nombre, apellido, edad, talla, peso, sexo]);
    res.json({
        message: 'Paciente creado',
        body: {
            paciente: {nombre, apellido, edad, talla, peso, sexo}
        }
    });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const updatePacientes = async (req, res) => {
    try {
        const result = await pool.query('UPDATE pacientes SET ? WHERE id=?', [req.body, req.params.id]);
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Paciente no encontrado' });
    res.json({ message: 'Paciente actualizado' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const deletePacientes = async (req, res) => {
    try {
        const result = await pool.query('DELETE FROM pacientes WHERE id = ?', [req.params.id]);
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Paciente no encontrado' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    res.json({ message: 'Paciente eliminado' });
} 