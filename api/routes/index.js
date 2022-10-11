const pessoas = require ('./pessoasRoute.js');
const niveis  = require ('./niveisRoutes.js');
const turmas = require('./turmasRoutes.js')

const todoRoutes = (app) =>{
    app.use(
        pessoas,
        niveis,
        turmas,
        )
}
module.exports = { todoRoutes };