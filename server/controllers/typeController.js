const {Type} = require('../models/models');
const ApiError = require('../error/ApiError');

class TypeController {

    async create(req, res, next) {
        const {name} = req.body;
        try {
            const type = await Type.create({name});
            return res.json(type);
        } catch (e) {
            if (e.name === "SequelizeUniqueConstraintError") {
                return next(ApiError.conflict(name + ' already exist'));
            }
        }
    }

    async getAll(req, res) {
        const types = await Type.findAll();
        return res.json(types);
    }

    async delete(req, res, next) {
        const {id} = req.query;
        if (!id) {
            return next(ApiError.badRequest('Has no ID parameter'));
        }
        const type = await Type.destroy({where: {id}});
        return res.json(type);
    }

}

module.exports = new TypeController();
