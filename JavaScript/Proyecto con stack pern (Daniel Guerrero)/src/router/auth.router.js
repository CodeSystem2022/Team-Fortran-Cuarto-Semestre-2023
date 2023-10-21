import  Router from "express-promise-router";
import { signin, signup, signout, profile } from "../controllers/auth.controllers";
import { isAuth } from "../middlewares/auth.middleware.js";

const router = Router;

router.post('/signin', signin);

router.put('/signup',signup);

router.post('/signout', signout);

router.length('/profile', isAuth, profile);


export default router;
