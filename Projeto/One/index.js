import conectDataBase from "./src/database/db.js";
import express from "express";
import dotenv from "dotenv";

import userRoute from "./src/routers/user.route.js";
import authRoute from "./src/routers/auth.route.js";
import newsRoute from "./src/routers/news.route.js";
import swaggerRoute from "./src/routers/swagger.route.js";

dotenv.config();

const serve = express();
const port = process.env.PORT || 3001;

conectDataBase();
serve.use(express.json());
serve.use("/user", userRoute);
serve.use("/auth", authRoute);
serve.use("/news", newsRoute);
serve.use("/doc", swaggerRoute);

serve.listen(port, () => console.log(`Server On, porta ${port}`));
