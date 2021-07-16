const Router = require('express');
const router = new Router();
const typeController = require('../controllers/typeController');
const checkMiddleware = require('../middleware/CheckRoleMiddleware');

router.post('/', checkMiddleware('ADMIN'), typeController.create);
router.get('/', typeController.getAll);
router.delete('/', checkMiddleware, typeController.delete);

module.exports = router;
