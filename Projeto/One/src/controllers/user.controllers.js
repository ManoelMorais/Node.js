const create = (req, res) => {
  const { name, larftsname, email, passworld, avatar, background } = req.body;

  if (!name || !larftsname || !email || !passworld || !avatar || !background) {
    res.status(400).send({ message: "Submit all fields for registration" });
  }

  res.status(201).send({
    message: "User created seccessfully",
    user: {
      name,
      larftsname,
      email,
      passworld,
      avatar,
      background,
    },
  });
};

module.exports = { create };
