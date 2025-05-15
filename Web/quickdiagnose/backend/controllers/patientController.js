const Patient = require('../models/Patient');

// HASTA KAYIT
exports.registerPatient = async (req, res) => {
  const { tc, fullName, email, password, birthDate } = req.body;

  try {
    const existing = await Patient.findOne({ tc });
    if (existing) return res.status(400).json({ message: 'Bu TC ile bir hasta zaten kayıtlı.' });

    const newPatient = new Patient({
      tc,
      fullName,
      email,
      password, // Şifre düz metin
      birthDate
    });

    await newPatient.save();

    res.status(201).json({ message: 'Hasta kaydı başarılı', patient: newPatient });
  } catch (error) {
    res.status(500).json({ message: 'Hasta kaydı hatası', error: error.message });
  }
};

// HASTA GİRİŞ
exports.loginPatient = async (req, res) => {
  const { tc, password } = req.body;

  try {
    const patient = await Patient.findOne({ tc });
    if (!patient) return res.status(404).json({ message: 'Hasta bulunamadı' });

    if (patient.password !== password) {
      return res.status(401).json({ message: 'Şifre yanlış' });
    }

    const token = jwt.sign({ id: patient._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

    res.json({
      message: 'Giriş başarılı',
      patient: {
        id: patient._id,
        fullName: patient.fullName,
        tc: patient.tc,
        email: patient.email
      },
      token
    });
  } catch (error) {
    res.status(500).json({ message: 'Hasta giriş hatası', error: error.message });
  }
};
