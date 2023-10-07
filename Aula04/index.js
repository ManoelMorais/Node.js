// passo 1 (exibindo a função que queremos executar)

const express = require('express');
const serve = express();

const userRoute = require('./src/routers/user.route')

serve.use('/soma', userRoute)

serve.listen(3000);
