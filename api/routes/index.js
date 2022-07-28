const bodyParser = require('body-Parser');
const pessoas = require ('./pessoasRoute.js')
module.exports = app => {
    app.use(bodyParser.json())
    app.use(pessoas)
}