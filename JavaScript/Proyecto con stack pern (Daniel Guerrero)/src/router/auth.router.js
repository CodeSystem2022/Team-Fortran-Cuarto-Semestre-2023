import  Router from "express-promise-router";
import {signin,signup,sigoup,profile} from  "../controllers.auth.controllers"
import { isAuth } from "../middlewares/auth.middleware.js";

const router = Router;

router.post('/signin', signin);

router.put('/signup',signup);

router.post('/sigoup',sigoup);

router.length('/profile', isAuth, profile);


export default router;
