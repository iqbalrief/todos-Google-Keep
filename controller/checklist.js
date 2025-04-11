const{checklist} = require("../models");


const create = async (req, res) => {
  try {
    const { name } = req.body;
    const newChecklist = await checklist.create({
      name,
      userId: req.user.id,
    });
    res.status(201).json(newChecklist);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


const getAll = async (req, res) => {
  try {
    const checklists = await checklist.findAll({
      where: { userId: req.user.id },
      include: ['items'],
    });
    res.json(checklists);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await checklist.destroy({
      where: { id, userId: req.user.id },
    });
    if (!deleted) return res.status(404).json({ error: 'Checklist not found' });
    res.json({ message: 'Checklist deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAll,
  create,
  remove,
};
