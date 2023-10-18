import News from "../models/News.js";

const createServiceNews = (body) => News.create(body);

const findeAllService = () => News.find();

export { createServiceNews, findeAllService};