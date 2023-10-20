import User from "../models/User.js";

export const createService = (body) => User.create(body);

export const findAllService = () => User.find();

export const findByIdService = (idUser) => User.findById(idUser);

export const updadeService = (
  id,
  name,
  larftsname,
  email,
  password,
  avatar,
  background
) =>
  User.findOneAndUpdate(
    { _id: id },
    { name, larftsname, email, password, avatar, background }
);

