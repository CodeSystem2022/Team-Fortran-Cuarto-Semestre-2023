import  Express  from "express";
import  Morgan  from "morgan";
import TareasRouter from "./router/tareas.routers.js";
import authRouter from "./router/auth.router.js"
import cookieParser from "cookie-parser";

const app = express();
// Middlewares
app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:false}))


app.get("/",(req,res)=>res.json({message:"Bienvenidos a mi primer proyecto"}));
app.use('/api/tareas',TareasRouter);
app.use('/api/auth',authRouter);
//Manejo de Errores
app.use((err,req,res,next)=>{
    res.status(500).json({
        status:'error',
        message:err.message


    });
});
export default app;
    