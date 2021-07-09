const {Brand} = require('../models/models');
const ApiError = require('../error/ApiError');

class BrandController {

    async create(req, res, next) {
        const {name} = req.body;
        try {
            const brand = await Brand.create({name});
            return res.json(brand);
        } catch (e) {
            if (e.name === "SequelizeUniqueConstraintError") {
                return next(ApiError.conflict(name + ' already exist'));
            }
        }
    }

    async getAll(req, res) {
        const brands = await Brand.findAll();
        return res.json(brands);
    }

    async delete(req, res, next) {
        const {id} = req.query;
        if (!id) {
            return next(ApiError.badRequest('Has no ID parameter'));
        }
        const brandID = await Brand.destroy({where: {id}});
        return res.json(brandID);
    }

}

module.exports = new BrandController();
