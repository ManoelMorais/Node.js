const userRoute = require('./src/routers/user.route');

const conectDataBase = require("./src/database/db");

const express = require('express');
const serve = express();

const port = 3000;


conectDataBase()
serve.use(express.json());
serve.use('/user', userRoute);


serve.listen(port, () => console.log(`Server On, porta ${port}`));
