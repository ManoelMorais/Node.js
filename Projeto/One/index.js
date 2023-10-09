const express = require('express');
const serve = express();
const port = 3000

const userRoute = require('./src/routers/user.route')

serve.use(express.json())
serve.use('/user', userRoute)

serve.listen(port, () => console.log(`Server On, porta ${port}`));
