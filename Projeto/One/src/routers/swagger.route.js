import { Router } from "express";
const swaggerRoute = Router();

import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../swagger.json" assert { type: "json" };

if (typeof swaggerDocument === "object") {
    console.log("JSON importado com sucesso.");
  } else {
    console.error("O arquivo JSON não foi importado corretamente.");
  }

swaggerRoute.use('/', swaggerUi.serve);
swaggerRoute.get('/', swaggerUi.setup(swaggerDocument))

export default swaggerRoute;
