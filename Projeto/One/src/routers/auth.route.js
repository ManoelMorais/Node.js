import { Router } from "express";
const authRoute = Router();

import { login } from '../controllers/auth.controllers.js'



authRoute.post('/', login)

export default authRoute;
