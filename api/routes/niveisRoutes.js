const { Router } = require('express')
const NiveisController = require('../controllers/NiveisController.js')

const router = Router()

router
    .get('/niveis', NiveisController.pegaTodasOsNiveis)
    .get('/niveis/:id', NiveisController.buscaID)
    .post('/niveis/created', NiveisController.createNivel)
    .put('/niveis/updated', NiveisController.updateNivel)
    .delete('/niveis/:id', NiveisController.deleteNivel)

module.exports = router;



