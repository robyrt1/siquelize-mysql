const pessoas = require ('./pessoasRoute.js');
const niveis  = require ('./niveisRoutes.js');
// const turmas = require('./turmasRoutes.js')

const routes = [
    pessoas,
    niveis
]
module.exports = routes;