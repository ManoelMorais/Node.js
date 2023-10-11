const User = require("../models/User");

const createService = (body) => User.create(body);

const findAllService = () => User.find();

const findByIdService = (id) => User.findById(id);

const updadeService = (
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



module.exports = {
    createService,
    findAllService,
    findByIdService,
    updadeService,
}
