const {Router} = require('express')
const TurmasController = require('../controllers/TurmasController.js')

const router = Router()
// Router Get
router.get('/turmas', TurmasController.pegaTodasAsTurmas)
router.get('/turmas/:id', TurmasController.buscaId)
// Router Post
router.post('/turmas', TurmasController.createdTurma)
// Router Put
router.put('/turmas/:id', TurmasController.updateTurma)
// Router Delete
router.delete('/turmas', TurmasController.deleteTurma)


module.exports = router