import mongoose from 'mongoose';

const conectDataBase = () => {
  mongoose
    .connect(
      "mongodb+srv://ManoelMorais:Sda1945bm10.@cluster0.xqvnque.mongodb.net/?retryWrites=true&w=majority",
      { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log("MongoDB Atlas Connected"))
    .catch((error) => console.log(error));
};

export default conectDataBase;
