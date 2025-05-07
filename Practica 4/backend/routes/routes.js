import {Router} from 'express';
import { 
    getPaciente, 
    getPacientes, 
    createPacientes, 
    updatePacientes, 
    deletePacientes} from '../controllers/controllers.js';   

const router = Router();

router.get('/pacientes', getPacientes);

router.get('/pacientes/:id', getPaciente);

router.post('/pacientes', createPacientes);

router.put('/pacientes/:id', updatePacientes);

router.delete('/pacientes/:id', deletePacientes);

export default router;