const { Router } = require('express')
const PessoaController = require('../controllers/PessoasController.js')


const router = Router()

router.get('/pessoas', PessoaController.pegaTodasAsPessoas)
router.get('/pessoas/:id', PessoaController.buscaID)
router.post('/pessoas', PessoaController.createPerson)
router.put('/pessoas/:id', PessoaController.updatePerson)
router.delete('/pessoas/:id', PessoaController.deletePerson)

module.exports = router