const dataBase = require('../models');

class PessoaController {
    static async pegaTodasAsPessoas(_req, res){
        try {
            const todasAsPessoas = await dataBase.Pessoas.findAll()
            return res.status(200).json(todasAsPessoas)
        }catch(err){
            return res.status(500).json(error.message)
        }
    }

    static async buscaID (req, res) {
        const {id} = req.params
        try{
             const onePerson = await dataBase.Pessoas.findOne(
                {
                    where: {id: Number(id)
                    }
                })

             return res.status(200).json(onePerson);

        }catch(error){
            return res.status(400).json(error.message)
        }
    }

    static async createPerson(req, res) {
        const newPerson = req.body
        try {
            const newPersonCreate = await dataBase.Pessoas.create(newPerson)
            return res.status(201).json(newPersonCreate)
        }catch(error){
            return res.status(500).json(error.message)
        }
    } 

    static async updatePerson (req, res){
        const {id} = req.params
        const newInformation = req.body
        try{
            await dataBase.Pessoas.update(newInformation, {where : {id: Number(id) } })
            const atualizedPerson = await dataBase.Pessoas.findOne({where: {id: Number(id) } })

            return res.status(200).json(atualizedPerson)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async deletePerson (req, res) {
        const {id} = req.params
        try{
            await dataBase.Pessoas.destroy({where: {id: Number(id)}})
            return res.status(200).json({Success: `id: ${id} excluido`})
        }catch(error){
            return res.status(500).json(erro.message)
        }
    }

}

module.exports = PessoaController