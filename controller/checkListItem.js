const{checklistItem} = require("../models");


const create = async (req, res) => {
    try {
        const { checklistId } = req.params;
        const { itemName } = req.body;
        const item = await checklistItem.create({ itemName, checklistId });
        res.status(201).json(item);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getAll = async (req, res) => {
  try {
    const { checklistId } = req.params;
    const items = await checklistItem.findAll({ where: { checklistId } });
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getOne = async (req, res) => {
  try {
    const { checklistId, itemId } = req.params;
    const item = await checklistItem.findOne({
      where: { id: itemId, checklistId },
    });
    if (!item) return res.status(404).json({ error: 'Item not found' });
    res.json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateStatus = async (req, res) => {
  try {
    const { checklistId, itemId } = req.params;
    const item = await checklistItem.findOne({
      where: { id: itemId, checklistId },
    });
    if (!item) return res.status(404).json({ error: 'Item not found' });

    item.status = !item.status;
    await item.save();
    res.json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const renameItem = async (req, res) => {
  try {
    const { checklistId, itemId } = req.params;
    const { itemName } = req.body;
    const item = await checklistItem.findOne({
      where: { id: itemId, checklistId },
    });
    if (!item) return res.status(404).json({ error: 'Item not found' });

    item.itemName = itemName;
    await item.save();
    res.json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const remove = async (req, res) => {
  try {
    const { checklistId, itemId } = req.params;
    const deleted = await checklistItem.destroy({
      where: { id: itemId, checklistId },
    });
    if (!deleted) return res.status(404).json({ error: 'Item not found' });
    res.json({ message: 'Item deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAll,
  create,
  getOne,
  updateStatus,
  renameItem,
  remove,
};
