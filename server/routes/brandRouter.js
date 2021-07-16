const Router = require('express');
const router = new Router();
const brandController = require('../controllers/brandController');
const checkMiddleware = require('../middleware/CheckRoleMiddleware');

router.post('/', checkMiddleware('ADMIN'), brandController.create);
router.get('/', brandController.getAll);
router.delete('/', checkMiddleware('ADMIN'), brandController.delete);

module.exports = router;
