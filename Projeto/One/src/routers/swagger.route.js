import { Router } from "express";
const swaggerRoute = Router();

import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../swagger.json" assert { type: "json"};

swaggerRoute.use('/', swaggerUi.serve);
swaggerRoute.get('/', swaggerUi.setup(swaggerDocument))

export default swaggerRoute;
