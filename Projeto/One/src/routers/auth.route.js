import { Router } from "express";
import { login } from '../controllers/auth.controllers.js'

const authRoute = Router();

authRoute.post('/', login)

export default authRoute;
