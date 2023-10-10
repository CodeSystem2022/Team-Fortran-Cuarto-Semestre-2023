import {pool} from '../db.js';

export const listarTareas = (req,res)=>res.send('Obtener tareas');
export const listarTarea =(req,res)=>res.send('Obtener tarea unica');
export const crearTarea = async(req,res)=> {
    const {titulo, descripcion} = req.body;
    
    try { const {rows} = await pool.query('INSERT INTO tareas (titulo, descripcion) VALUES ($1, $2)', [titulo, descripcion]);
    console.log(rows);
    res.send('creando tarea');
    } catch (error){
        console.log("Algo salio mal");
    }
}
export const actulizarTarea =(req,res)=>res.send('Actualizando la tarea unica');
export const eliminarTarea =(req,res)=>res.send('Eliminado la tarea unica')