const bodyParser = require('body-Parser');
const pessoas = require ('./pessoasRoute.js');
const niveis = require ('./niveisRoutes.js');
const turmas = require('./turmasRoutes.js')
module.exports = app => {
    app.use(
        bodyParser.json(),
        pessoas,
        niveis,
        turmas,
        )
}