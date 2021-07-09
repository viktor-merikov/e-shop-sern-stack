const {User, Basket} = require('../models/models');
const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt');

class UserController {
    async registration(req, res, next) {
        const {email, password, role} = req.body;
        if (!email || !password) {
            return next(ApiError.badRequest('Incorrect email or password'));
        }
        const candidate = await User.findOne({where: {email}});
        if (candidate) {
            return next(ApiError.badRequest('User with "' + email + '" already exist.'));
        }

        const hashPassword = await bcrypt.hash(password, 5);
        const user = User.create({email, role, password: hashPassword});
        const basket = await Basket.create({userId: user.id});

    }

    async login(req, res) {

    }

    async check(req, res, next) {
        const {id} = req.query;
        if (!id) {
            return next(ApiError.badRequest('Has no ID parameter'));
        }
        res.json(id);
    }
}

module.exports = new UserController();
