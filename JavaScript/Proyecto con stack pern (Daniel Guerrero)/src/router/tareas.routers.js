import Router from "express-promise-router";
import  {actulizarTarea, crearTarea, eliminarTarea, listarTarea, listarTareas} from "../controllers/tareas.controllers";
import { isAuth } from "../middlewares/auth.middleware.js";
const router = Router();

router.get('/tareas', isAuth, listarTareas);
router.get ('/tareas/id', isAuth, listarTarea);
router.post('/tarea',isAuth, crearTarea);
router.put('/tarea/id', isAuth, actulizarTarea);
router.delete('/tareas/id',isAuth, eliminarTarea);

 export default router;
