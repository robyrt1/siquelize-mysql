"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Pessoas extends Model {
    /** k
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Pessoas.hasMany(models.Turmas, {
        foreignKey: "docente_id",
      });
      Pessoas.hasMany(models.Matriculas, {
        foreignKey: "estudante_id",
        scope: { status: "confirmado" },
        as: "aulasMatriculadas",
      });
    }
  }
  Pessoas.init(
    {
      nome: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          funcaoValidadora: function (dado) {
            if (dado.length < 3)
              throw new Error("O campo deve ter mais de 3 caracteres");
          },
        },
      },
      cpf: {
        type:DataTypes.STRING,
        validate: {
          is:/(^\d{3}\d{3}\d{3}\d{2}$)|(^\d{3}\.\d{3}\.\d{3}\-\d{2}$)/,
        }
      },
      ativo: DataTypes.BOOLEAN,
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: {
            args: true,
            msg: "Email invalido",
          },
        },
      },
      role: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Pessoas",
      paranoid: true, // exclusão suave de registro
      defaultScope: {
        where: { ativo: true },
      },
      scopes: {
        allPessoas: { where: {} },
      },
    }
  );
  return Pessoas;
};
