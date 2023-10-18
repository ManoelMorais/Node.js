import { createServiceNews, findeAllService} from "../services/news.service.js"
import { ObjectId } from "mongodb";

const create = async (req, res) => {
  try {
    const { title, text, banner } = req.body;

    if (!title || !text || !banner) {
      res.status(400).send({
        message: "Submit all fields for registration",
      });
    }

    await createServiceNews({
        title,
        text,
        banner,
        user: {_id: "652eb9bc551936ed1ed11e97"},
    });

    res.send(201);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const getAll = async (req, res) => {
    try {
        const news = await findeAllService();
    
        if (news.lenght === 0) {
          return res.status(400).send({ message: "There are no registered news" });
        }
    
        res.send(news);
      } catch (err) {
        res.status(500).send({ message: err.message });
      }
};

export  { create, getAll };
