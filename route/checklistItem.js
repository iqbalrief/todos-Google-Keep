
const express = require('express');
const router = express.Router();

const indexCtrl = require("../controller/index");
const { saveToken } = require('../midleware/index');


router.post('/:checklistId', saveToken, indexCtrl.checklistItem.create);
router.get('/', saveToken, indexCtrl.checklistItem.getAll);
router.get('/:itemId/:checklistId', saveToken, indexCtrl.checklistItem.getOne);
router.put('/:itemId/:checklistId', saveToken, indexCtrl.checklistItem.updateStatus);
router.delete('/:itemId/:checklistId', saveToken, indexCtrl.checklistItem.remove);
router.put('/rename/:itemId/:checklistId', saveToken, indexCtrl.checklistItem.renameItem);


module.exports = router