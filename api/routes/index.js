const pessoas = require ('./pessoasRoute.js');
const niveis  = require ('./niveisRoutes.js');
const matriculas = require('./matriculasRoutes')
const turmas = require('./turmasRoutes')

const routes = [
    pessoas,
    niveis,
    matriculas,
    turmas,
]
module.exports = routes;