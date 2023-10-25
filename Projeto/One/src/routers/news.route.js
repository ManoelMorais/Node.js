import { Router } from "express";
const NewsRoute = Router();

import { authMiddlewere } from "../middlewares/auth.middlewares.js";
import {
  create,
  getAll,
  topNews,
  findbyid,
  searchByTitle,
} from "../controllers/news.controllers.js";


NewsRoute.post("/", authMiddlewere, create);
NewsRoute.get("/", getAll);
NewsRoute.get("/top", topNews);
NewsRoute.get("/search", searchByTitle);

NewsRoute.get("/:id", authMiddlewere, findbyid);

export default NewsRoute;
