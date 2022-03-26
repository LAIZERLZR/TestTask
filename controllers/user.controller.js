const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.userController = {
  registration: async (req, res) => {
    try {
      const { login, password } = req.body;

      const user = await User.findOne({ login });

      if (user) {
        return res.status(401).json("Логин занят");
      }

      const hash = await bcrypt.hash(
        password,
        Number(process.env.BCRYPT_ROUNDS)
      );

      const createUser = await User.create({ login, password: hash });

      res.json(createUser);
    } catch (error) {}
  },
  authorization: async (req, res) => {
    try {
      const { login, password } = req.body;

      const user = await User.findOne({ login });

      if (!user) {
        res.status(401).json("Неверный логин или пароль");
      }

      const pass = await bcrypt.compare(password, user.password);

      if (!pass) {
        res.status(401).json("Неверный логин или пароль");
      }

      const payload = {
        id: user._id,
        login: user.login,
      };

      const token = await jwt.sign(payload, process.env.SECRET_JWT_KEY, {
        expiresIn: "24h",
      });

      res.json({ token });
    } catch (error) {
      res
        .status(401)
        .json({ error: "Ошибка при входе в аккаунт" + error.toString() });
    }
  },
};
