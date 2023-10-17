import { createService, findAllService, updadeService } from "../services/user.service.js";

const create = async (req, res) => {
  try {
    const { name, larftsname, email, password, avatar, background } = req.body;

    if (!name || !larftsname || !email || !password || !avatar || !background) {
      res.status(400).send({ message: "Submit all fields for registration" });
    }

    const user = await createService(req.body);

    if (!user) {
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
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const findAll = async (req, res) => {
  try {
    const users = await findAllService();

    if (users.lenght === 0) {
      return res.status(400).send({ message: "There are no registered users" });
    }

    res.send(users);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const findById = async (req, res) => {
  try{ 
    const user = req.user;
    res.send(user);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const update = async (req, res) => {
  try {
    const { name, larftsname, email, password, avatar, background } = req.body;

    if (!name && !larftsname && !email && !password && !avatar && !background) {
      res
        .status(400)
        .send({ message: "Submit at Lister one field for update" });
    }

    const { id, user } = req;

    await updadeService(
      id,
      name,
      larftsname,
      email,
      password,
      avatar,
      background
    );

    res.send({ message: "User successfully updated!" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export default { create, findAll, findById, update };
