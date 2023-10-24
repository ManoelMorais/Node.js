import { Router } from "express";
import { authMiddlewere } from "../middlewares/auth.middlewares.js";
import { create, getAll, topNews, findbyid } from "../controllers/news.controllers.js";
const NewsRoute = Router()

NewsRoute.post("/", authMiddlewere, create)
NewsRoute.get("/", getAll)
NewsRoute.get("/top", topNews)
NewsRoute.get("/:id", findbyid)

export default NewsRoute;
