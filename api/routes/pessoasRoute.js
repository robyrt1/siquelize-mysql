const { Router } = require('express')
const PessoaController = require('../controllers/PessoasController.js')


const router = Router()

router.get('/pessoas/ativas', PessoaController.pegaPessoasAtivas)
router.get('/pessoas', PessoaController.pegaTodasAsPessoas)
router.get('/pessoas/:id', PessoaController.buscaID)
router.post('/pessoas', PessoaController.createPerson)
router.post('/pessoas/:id/restaura',PessoaController.restorePerson)
router.put('/pessoas/:id', PessoaController.updatePerson)
router.delete('/pessoas/:id', PessoaController.deletePerson)
router.get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.pegarUmaMatricula)
router.post('/pessoas/:estudanteId/matricula', PessoaController.createMatricula)
router.put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.updateMatricula)
router.delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.deleteMatricula)


module.exports = router

