import userRoute from './src/routers/user.route.js';
import conectDataBase from './src/database/db.js';
import express, { json } from 'express';

const serve = express();
const port = 3000;

conectDataBase();
serve.use(json());
serve.use('/user', userRoute);


serve.listen(port, () => console.log(`Server On, porta ${port}`));
