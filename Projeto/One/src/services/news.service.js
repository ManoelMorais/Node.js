import News from "../models/News.js";

export const createServiceNews = (body) => News.create(body);

export const findeAllService = (limit, offset) =>
  News.find().sort({ _id: -1 }).skip(offset).limit(limit).populate("user");

export const conuterNews = () => News.countDocuments();

export const topNewsService = () =>
  News.findOne().sort({ _id: -1 }).populate("user");

export const findbyidService = (id) => News.findById(id).populate("user");
