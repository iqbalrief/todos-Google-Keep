
const express = require('express');
const router = express.Router();

const indexCtrl = require("../controller/index");
const { saveToken } = require('../midleware/index');


router.post('/', saveToken, indexCtrl.checklistCtrl.create);
router.get('/', saveToken, indexCtrl.checklistCtrl.getAll);
router.delete('/:id', saveToken, indexCtrl.checklistCtrl.remove);


module.exports = router