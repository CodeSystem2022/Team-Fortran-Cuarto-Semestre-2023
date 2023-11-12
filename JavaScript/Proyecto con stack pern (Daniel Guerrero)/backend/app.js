import express  from "express";
import morgan  from "morgan";
import TareasRouters from "./router/tareas.routers.js";
import authRouter from "./router/auth.router.js"
import cookieParser from "cookie-parser";
import cors from "cors";
import { pool } from "./db.js";
import { ORIGIN } from "./config.js";

const app = express();
// Middlewares
app.use(morgan("dev"));
app.use(cors( 
    {
        origin: ORIGIN,
        credentials: true   
    }
));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.get("/",(req,res)=>res.json({message:"Bienvenidos a mi primer proyecto"}));
app.get("/api/ping", async(req, res) => {
    const result = await pool.query("SELECT NOW()");
    res.json(result.rows[0]);
  });
app.use('/api', TareasRouters);
app.use('/api', authRouter);

//Manejo de Errores
app.use((err,req,res,next)=>{
    res.status(500).json({
        status:'error',
        message:err.message
    });
});

export default app;
    