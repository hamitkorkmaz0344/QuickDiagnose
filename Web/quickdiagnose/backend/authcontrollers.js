const User = require('./models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
  const { tc, password } = req.body;

  try {
    const user = await User.findOne({ tc });

    if (!user) {
      return res.status(400).json({ message: 'TC numarası hatalı.' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: 'Şifre yanlış.' });
    }

    const token = jwt.sign(
      { id: user._id, tc: user.tc },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    res.json({
      message: 'Giriş başarılı',
      user: {
        id: user._id,
        tc: user.tc,
        name: user.name
      },
      token
    });
  } catch (error) {
    res.status(500).json({ message: 'Sunucu hatası', error: error.message });
  }
};
