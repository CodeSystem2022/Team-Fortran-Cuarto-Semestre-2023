import {pool} from '../db.js';

export const listarTareas = async(req, res)=> {

        const resultado = await pool.query('SELECT * FROM tareas');
        console.log(resultado);
        return res.json(resultado.rows);

}


export const listarTarea =(req,res)=>res.send('Obtener tarea unica');

export const crearTarea = async(req,res)=> {
    const {titulo, descripcion} = req.body;

    
    try {
        const result = await pool.query('INSERT INTO tareas (titulo, descripcion) VALUES ($1, $2) RETURNING *', [titulo, descripcion]);
        res.json(result.rows[0]);
        console.log(result.rows[0]);
    } catch (error) {
        if(error.code === '23505') {
            return res.status(409).json({
                message: 'Ya existe una tarea con ese titulo'

            });


        }  
        console.log(error);
        next(error);
    }


}
export const actulizarTarea =(req,res)=>res.send('Actualizando la tarea unica');
export const eliminarTarea =(req,res)=>res.send('Eliminado la tarea unica')