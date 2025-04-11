const{User} = require("../models");
const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

const register = async (req, res) => { 

   const { userName, email, password } = req.body;
    try {
      const existing = await User.findOne({ where: { email } });
      if (existing) return res.status(400).json({ error: 'Email already used' });

      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await User.create({ userName, email, password: hashedPassword });

      res.status(201).json({ message: 'User registered', user: newUser });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
}

const login = async (req, res) => {
    const { username, password } = req.body;
    try {
      const user = await User.findOne({ where: { userName: username } });
      if (!user) return res.status(404).json({ error: 'User not found' });

      const match = await bcrypt.compare(password, user.password);
      if (!match) return res.status(401).json({ error: 'Invalid password' });

      const token = jwt.sign({ id: user.id, username: user.userName },  process.env.JWT_SECRET, {
        expiresIn: '1d',
      });

      res.json({ token });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  module.exports = {
    register,
    login
}
