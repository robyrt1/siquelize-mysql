const dataBase = require("../models");
const Sequelize = require("sequelize");
/**
 *  Controller de um Crud ,
 *  1 requisito : Exibir só os ativos
 *  2 requisito : Excluir sem deletar do Banco e restaurar quando necessario
 */
class PessoaController {
  static async pegaPessoasAtivas(_req, res) {
    try {
      const pessoasAtivas = await dataBase.Pessoas.findAll();
      return res.status(200).json(pessoasAtivas);
    } catch (err) {
      return res.status(500).json(error.message);
    }
  }
  static async pegaTodasAsPessoas(_req, res) {
    try {
      const todasAsPessoas = await dataBase.Pessoas.scope("todos").findAll();
      return res.status(200).json(todasAsPessoas);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async buscaID(req, res) {
    const { id } = req.params;
    try {
      const onePerson = await dataBase.Pessoas.findOne({
        where: { id: Number(id) },
      });

      return res.status(200).json(onePerson);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }

  static async createPerson(req, res) {
    const newPerson = req.body;
    try {
      const newPersonCreate = await dataBase.Pessoas.create(newPerson);
      return res.status(201).json(newPersonCreate);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async updatePerson(req, res) {
    const { id } = req.params;
    const newInformation = req.body;
    try {
      await dataBase.Pessoas.update(newInformation, {
        where: { id: Number(id) },
      });
      const atualizedPerson = await dataBase.Pessoas.findOne({
        where: { id: Number(id) },
      });

      return res.status(200).json(atualizedPerson);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async deletePerson(req, res) {
    const { id } = req.params;
    try {
      await dataBase.Pessoas.destroy({ where: { id: Number(id) } });
      return res.status(200).json({ Success: `id: ${id} excluido` });
    } catch (error) {
      return res.status(500).json(erro.message);
    }
  }

  static async restorePerson(req, res) {
    const { id } = req.params;
    try {
      await dataBase.Pessoas.restore({ where: { id: Number(id) } });
      return res.status(200).json({ message: `id ${id} restaurado` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  // MATRICULAS
  static async pegarUmaMatricula(req, res) {
    const { estudanteId, matriculaId } = req.params;
    try {
      const oneMatricula = await dataBase.Matriculas.findOne({
        where: {
          id: Number(matriculaId),
          estudante_Id: Number(estudanteId),
        },
      });

      return res.status(200).json(oneMatricula);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }

  static async createMatricula(req, res) {
    const { estudanteId } = req.params;
    const newMatricula = { ...req.body, estudante_Id: Number(estudanteId) };
    try {
      const newMatriculaCreate = await dataBase.Matriculas.create(newMatricula);
      return res.status(201).json(newMatriculaCreate);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async updateMatricula(req, res) {
    const { estudanteId, matriculaId } = req.params; //
    const newInformation = req.body;
    try {
      await dataBase.Matriculas.update(newInformation, {
        where: { id: Number(matriculaId), estudante_Id: Number(estudanteId) },
      });
      const atualizedMatricula = await dataBase.Matriculas.findOne({
        where: { id: Number(matriculaId) },
      });

      return res.status(200).json(atualizedMatricula);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async deleteMatricula(req, res) {
    const { estudanteId, matriculaId } = req.params;
    try {
      await dataBase.Matriculas.destroy({ where: { id: Number(matriculaId) } });
      return res.status(200).json({ Success: `id: ${matriculaId} excluido` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async pegaMatricula(req, res) {
    const { estudanteId } = req.params;
    try {
      const pessoa = await dataBase.Pessoas.findOne({
        where: { id: Number(estudanteId) },
      });

      const matriculas = await pessoa.getAulasMatriculadas();
      return res.status(200).json(matriculas);
    } catch (error) {
      return res
        .status(500)
        .json(
          "Estudante não encontrado: 1) Estudante sem registrou ou 2) Matricula Cancelada"
        );
    }
  }

  static async pegaMatriculasPorTurma(req, res) {
    const { turmaId } = req.params;
    try {
      const todasAsMatriculas = await dataBase.Matriculas.findAndCountAll({
        where: {
          turma_id: Number(turmaId),
          status: "confirmado",
        },
        limit: 20,
        order: [['estudante_id', 'DESC']],
      });
      return res.status(200).json(todasAsMatriculas);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async PegaTurmalotadas(req, res) {
    const lotacaoTurma = 2;
    try {
      const turmasLotadas = await dataBase.Matriculas.findAndCountAll({
        where: { 
          status: "confirmado",
        },
        attributes : ['turma_id'],
        grup : ['turma_id'],
        having : Sequelize.literal(`count(turma_id) >= ${lotacaoTurma}`)
      });

      return res.status(200).json(turmasLotadas);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = PessoaController;
