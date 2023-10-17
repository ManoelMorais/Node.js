import mongoose from 'mongoose';

const conectDataBase = () => {
  console.log("Wait connecting to the datavase...")

  mongoose
    .connect( process.env.MONGODB_URI ,
      { 
        useNewUrlParser: true, 
        useUnifiedTopology: true, 
      }
    )
    .then(() => console.log("MongoDB Atlas Connected"))
    .catch((err) => console.log(err));
};

export default conectDataBase;
