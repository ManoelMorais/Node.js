import { Router } from "express";
import { authMiddlewere } from "../middlewares/auth.middlewares.js";
import { create, getAll} from "../controllers/news.controllers.js";
const NewsRoute = Router()

NewsRoute.post("/", authMiddlewere, create)
NewsRoute.get("/", getAll)

export default NewsRoute;
