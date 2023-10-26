import { Router } from "express";
const NewsRoute = Router();

import { authMiddlewere } from "../middlewares/auth.middlewares.js";
import {
  create,
  getAll,
  topNews,
  findbyid,
  searchByTitle,
  byUser,
  update,
  erase,
  likeNews,
} from "../controllers/news.controllers.js";

NewsRoute.post("/", authMiddlewere, create);
NewsRoute.get("/", getAll);
NewsRoute.get("/top", topNews);
NewsRoute.get("/search", searchByTitle);
NewsRoute.get("/byUser", authMiddlewere, byUser);

NewsRoute.get("/:id", authMiddlewere, findbyid);
NewsRoute.patch("/:id", authMiddlewere, update);
NewsRoute.delete("/:id", authMiddlewere, erase);
NewsRoute.patch("/like/:id", authMiddlewere, likeNews);

export default NewsRoute;
