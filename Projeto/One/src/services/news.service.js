import News from "../models/News.js";

const createServiceNews = (body) => News.create(body);

const findeAllService = (limit, offset) => News.find().sort({_id: -1}).skip(offset).limit(limit).populate("user");

const conuterNews = () => News.countDocuments()

export { createServiceNews, findeAllService, conuterNews};