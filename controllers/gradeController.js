import { gradeModel } from '../models/gradeModel.js';
import { logger } from '../config/logger.js';

const create = async (req, res) => {
  try {
    res.send({ message: 'Grade inserido com sucesso' });
    logger.info(`POST /grade - ${JSON.stringify()}`);
  } catch (error) {
    res.status(500).send({
      message: error.message || 'Algum erro ocorreu ao tentar salvar',
    });
    logger.error(`POST /grade - ${JSON.stringify(error.message)}`);
  }
};

const findAll = async (req, res) => {
  // const name = req.query.name;
  //condicao para o filtro no findAll
  // var condition = name
  //   ? { name: { $regex: new RegExp(name), $options: 'i' } }
  //   : {};
  try {
    const grades = await gradeModel.find({}, { _id: 0, lastModified: 0 });
    res.send(grades);
    // logger.info(`GET /grade`);
  } catch (error) {
    res.status(500).send({
      message: error.message || 'Erro ao tentar listar os documentos',
    });
    logger.error(`GET /grade - ${JSON.stringify(error.message)}`);
  }
};

const findOne = async (req, res) => {
  const id = req.params.id;

  try {
    logger.info(`GET /grade - ${id}`);
  } catch (error) {
    res.status(500).send({ message: 'Erro ao buscar o Grade id: ' + id });
    logger.error(`GET /grade - ${JSON.stringify(error.message)}`);
  }
};

const update = async (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: 'Dados para atualização vazios',
    });
  }

  const id = req.params.id;

  try {
    logger.info(`PUT /grade - ${id} - ${JSON.stringify(req.body)}`);
  } catch (error) {
    res
      .status(500)
      .send({ message: 'Erro ao tentar atualizar a Grade id: ' + id });
    logger.error(`PUT /grade - ${JSON.stringify(error.message)}`);
  }
};

const remove = async (req, res) => {
  const id = req.params.id;

  try {
    logger.info(`DELETE /grade - ${id}`);
  } catch (error) {
    res
      .status(500)
      .send({ message: 'Nao foi possível deletar o grade com o id: ' + id });
    logger.error(`DELETE /grade - ${JSON.stringify(error.message)}`);
  }
};

const removeAll = async (req, res) => {
  try {
    logger.info(`DELETE /grade`);
  } catch (error) {
    res
      .status(500)
      .send({ message: 'Erro ao tentar excluir todos as Grades!' });
    logger.error(`DELETE /grade - ${JSON.stringify(error.message)}`);
  }
};

export default { create, findAll, findOne, update, remove, removeAll };
