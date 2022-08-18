const {Router} = require('express')
const TurmasController = require('../controllers/TurmasController.js')

const router = Router()

router
    .get('/turmas', TurmasController.pegaTodasAsTurmas)
    .get('/turmas/:id', TurmasController.buscaId)
    .post('/turmas', TurmasController.createdTurma)
    .put('/turmas/:id', TurmasController.updateTurma)
    .delete('/turmas', TurmasController.deleteTurma)


module.exports = router