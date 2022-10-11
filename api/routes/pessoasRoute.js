const { Router } = require('express')
const PessoaController = require('../controllers/PessoasController.js')


const router = Router() 

// Router de gets Pessoas
router.get('/pessoas/ativas', PessoaController.pegaPessoasAtivas)
router.get('/pessoas', PessoaController.pegaTodasAsPessoas)
router.get('/pessoas/:id', PessoaController.buscaID)
router.get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.pegarUmaMatricula)
router.get('/pessoas/:estudanteId/matricula', PessoaController.pegaMatricula)
router.get('/pessoas/matricula/:turmaId/confirmadas', PessoaController.pegaMatriculasPorTurma)
router.get('/pessoas/matricula/lotadas', PessoaController.PegaTurmalotadas)
// Router de post Pessoas 
router.post('/pessoas', PessoaController.createPerson)
router.post('/pessoas/:id/restaura',PessoaController.restorePerson)
router.post('/pessoas/:estudanteId/matricula', PessoaController.createMatricula)

// Router de Put Pessoas 
router.put('/pessoas/:id', PessoaController.updatePerson)
router.put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.updateMatricula)
// Router de Delete Pessoas
router.delete('/pessoas/:id', PessoaController.deletePerson)
router.delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.deleteMatricula)


module.exports = router

