import {
  createServiceNews,
  findeAllService,
  conuterNews
} from "../services/news.service.js";

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
      user: req.userId,
    });

    res.send(201);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const getAll = async (req, res) => {
  try {
    
    let {limit, offset} = req.query;

    limit = Number(limit);
    offset = Number(offset);

    if(!limit){
      limit = 5;
    };
    if(!offset){
      offset = 0;
    };

    const news = await findeAllService(limit, offset);
    const total = await conuterNews();
    const currentyUrl = req.baseUrl;

    const next = offset + limit;
    const nextUrl = next < total ? `${currentyUrl}?limit=${limit}&offset=${next}` : null;

    const preVious = offset - limit < 0 ? null : offset - limit;
    const preViousUrl = preVious != null ? `${currentyUrl}?limit=${limit}&offset=${preVious}` : null;

    if (news.lenght === 0) {
      return res.status(400).send({ message: "There are no registered news" });
    };

    res.send({
      nextUrl,
      preViousUrl,
      limit,
      offset,
      total,

      results: news.map(newsItem => ({
        if: newsItem._id,
        title: newsItem.title,
        text: newsItem.text,
        banner: newsItem.banner,
        likes: newsItem.likes,
        commets: newsItem.commets,
        name: newsItem.user.name,
        larftsname: newsItem.user.larftsname,
        useravatar: newsItem.user.avatar,
      })),
    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export { create, getAll };
