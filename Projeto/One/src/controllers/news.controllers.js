import {
  createServiceNews,
  findeAllService,
  conuterNews,
  topNewsService,
  findbyidService,
  searchByTitleService,
  byUserService,
  updateService,
} from "../services/news.service.js";

export const create = async (req, res) => {
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

export const getAll = async (req, res) => {
  try {
    let { limit, offset } = req.query;

    limit = Number(limit);
    offset = Number(offset);

    if (!limit) {
      limit = 5;
    }
    if (!offset) {
      offset = 0;
    }

    const news = await findeAllService(limit, offset);
    const total = await conuterNews();
    const currentyUrl = req.baseUrl;

    const next = offset + limit;
    const nextUrl =
      next < total ? `${currentyUrl}?limit=${limit}&offset=${next}` : null;

    const preVious = offset - limit < 0 ? null : offset - limit;
    const preViousUrl =
      preVious != null
        ? `${currentyUrl}?limit=${limit}&offset=${preVious}`
        : null;

    if (news.lenght === 0) {
      return res.status(400).send({ message: "There are no registered news" });
    }

    res.send({
      nextUrl,
      preViousUrl,
      limit,
      offset,
      total,

      results: news.map((newsItem) => ({
        id: newsItem._id,
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

export const topNews = async (req, res) => {
  try {
    const news = await topNewsService();

    if (!news) {
      return res.status(400).send({ message: "There is no registered post" });
    }

    res.send({
      news: {
        id: news._id,
        title: news.title,
        text: news.text,
        banner: news.banner,
        likes: news.likes,
        commets: news.commets,
        name: news.user.name,
        larftsname: news.user.larftsname,
        useravatar: news.user.avatar,
      },
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const findbyid = async (req, res) => {
  try {
    const { id } = req.params;
    const news = await findbyidService(id);

    return res.send({
      news: {
        id: news._id,
        title: news.title,
        text: news.text,
        banner: news.banner,
        likes: news.likes,
        commets: news.commets,
        name: news.user.name,
        larftsname: news.user.larftsname,
        useravatar: news.user.avatar,
      },
    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export const searchByTitle = async (req, res) => {
  try {
    const { title } = req.query;
    const news = await searchByTitleService(title);

    if (news.lenght === 0) {
      return res
        .status(400)
        .send({ message: "There are no news with this title" });
    }

    return res.send({
      results: news.map((newsItem) => ({
        id: newsItem._id,
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
  } catch (error) {
    res.status(500).send({ message: err.message });
  }
};

export const byUser = async (req, res) => {
  try {
    const id = req.userId;
    const news = await byUserService(id);

    return res.send({
      results: news.map((newsItem) => ({
        id: newsItem._id,
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
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const update = async (req, res) => {
  try {
    const { title, text, banner } = req.body;
    const { id } = req.params;

    if (!title && !text && !banner) {
      res.status(400).send({
        message: "Submit at last one field to update the post",
      });
    }

    const news = await findbyidService(id);

    if (news.user.id != req.userId) {
      return res.status(400).send({
        message: "You didn't update this post",
      });
    }

    await updateService(id, title, text, banner);

    return res.send({ message: "Post succesfully update!" });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
