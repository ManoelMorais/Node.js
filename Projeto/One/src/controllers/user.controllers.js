const UserService = require('../services/user.service')
const mongoose = require('mongoose')

const create = async (req, res) => {
  const { name, larftsname, email, password, avatar, background } = req.body;

  if (!name || !larftsname || !email || !password || !avatar || !background) {
    res.status(400).send({ message: "Submit all fields for registration" });
  }

  const user = await UserService.createService(req.body);

  if (!user){
    return req.status(400).send({ message: "Error creating User" });
  }

  res.status(201).send({
    message: "User created seccessfully",
    user: {
      id: user._id,
      name,
      larftsname,
      email,
      password,
      avatar,
      background,
    },
  });
};

const findAll = async (req, res) => {
  const users = await UserService.findAllService()

  if (users.lenght === 0){
    return res.status(400).send({ message: 'There are no registered users'})
  }

  res.send(users)
};

const findById = async (req, res) => {
  const id = req.params.id

  if (!mongoose.Types.ObjectId.isValid(id)){
    return res.status(400).send({ message: "Invalid id"})
  }

  const user = await UserService.findByIdService(id)

  if (!user){
    return res.status(400).send({ message: "User not found"})
  }

  res.send(user)
};

const update = async (req, res) => {
  const { name, larftsname, email, password, avatar, background } = req.body;

  if (!name && !larftsname && !email && !password && !avatar && !background) {
    res.status(400).send({ message: "Submit at Lister one field for update" });
  }

  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)){
    return res.status(400).send({ message: "Invalid id"})
  }

  const user = await UserService.findByIdService(id);

  if (!user){
    return res.status(400).send({ message: "User not found"})
  }

  await UserService.updadeService(
    id,
    name,
    larftsname,
    email,
    password,
    avatar,
    background
  );

  res.send({ message: "User successfully updated!"})

};

module.exports = { create,  findAll, findById, update };
