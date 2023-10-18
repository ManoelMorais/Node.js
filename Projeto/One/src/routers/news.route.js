import { Router } from "express";
const NewsRoute = Router()

import { create, getAll} from "../controllers/news.controllers.js"

NewsRoute.post("/", create)
NewsRoute.get("/", getAll)

export default NewsRoute;