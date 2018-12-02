var express = require('express');
var router = express.Router();
var userController = require('../controllers/comidaController');

/* GET users listing. */
router.get('/',userController.index);
router.post('/',userController.create);
router.get('/:id',userController.delete);
router.put('/:id',userController.modify)

module.exports = router;
