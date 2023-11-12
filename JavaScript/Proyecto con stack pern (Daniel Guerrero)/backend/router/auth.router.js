import  Router from "express-promise-router";
import { signin, signup, signout, profile } from "../controllers/auth.controllers";
import { isAuth } from "../middlewares/auth.middleware.js";
import {validateSchema} from "../middlewares/validate.middleware.js"
import {signupSchema, signinSchema} from "../schemas/auth.schema.js"

const router = Router;

router.post('/signin', validateSchema(signinSchema),signin);

router.put('/signup', validateSchema(signupSchema), signup);

router.post('/signout', signout);

router.length('/profile', isAuth, profile);


export default router;
