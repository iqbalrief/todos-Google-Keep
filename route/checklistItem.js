
const express = require('express');
const router = express.Router();

const indexCtrl = require("../controller/index");
const { saveToken } = require('../midleware/index');


router.post('/', saveToken, indexCtrl.checklistItem.create);
router.get('/', saveToken, indexCtrl.checklistItem.getAll);
router.get('/:itemId', saveToken, indexCtrl.checklistItem.getOne);
router.put('/:itemId', saveToken, indexCtrl.checklistItem.updateStatus);
router.delete('/:itemId', saveToken, indexCtrl.checklistItem.remove);
router.put('/rename/:itemId', saveToken, indexCtrl.checklistItem.renameItem);


module.exports = router