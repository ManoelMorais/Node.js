import userRoute from './src/routers/user.route.js';
import conectDataBase from './src/database/db.js';
import express, { json } from 'express';
import dotenv from 'dotenv';


dotenv.config()

const serve = express();
const port = process.env.PORT || 3000;

conectDataBase();
serve.use(express.json());
serve.use('/user', userRoute);


serve.listen(port, () => console.log(`Server On, porta ${port}`));
