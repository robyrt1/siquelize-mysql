const  express = require('express');
const bodyParser = require('body-parser');
const app = express()

app.use(bodyParser.json())

const port = 3000;

app.get('/teste', (_req, res) =>{
    res.status(200).send({message: ' Olá'})
})

app.listen(port, (console.log('conectado ao servido')))


module.exports = app;