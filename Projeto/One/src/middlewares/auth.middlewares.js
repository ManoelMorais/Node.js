import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { findByIdService } from "../services/user.service.js";

dotenv.config();

export const authMiddlewere = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.send(401);
    }

    const parts = authorization.split(" ");
    if (parts.length !== 2) {
      return res.send(401);
    }

    const [schema, token] = parts;
    if (schema !== "Bearer") {
      return res.send(401);
    }

    jwt.verify(token, process.env.JWT, async (error, element) => {

      if (error) {
        return res.send(401).send({ message: "Token is invalid!" });
      }

      const user = await findByIdService(element.id);

      if (!user || !user._id) {
        return res.send(401).send({ message: "Invalid Token!" });
      }

      req.userId = user._id;
      next();
    });

    
  } catch (err) {
    res.status(500).send(err.message);
  }
};
