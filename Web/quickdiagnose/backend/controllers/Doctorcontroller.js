const Doctor = require('../models/Doctor'); // ✅ Dosya adı: Doctor.js olmalı
const jwt = require('jsonwebtoken');

exports.registerDoctor = async (req, res) => {
  const { tc, fullName, email, password, specialization, licenseNumber } = req.body;
  console.log('🟢 [registerDoctor] Gelen veri:', req.body);

  try {
    const existing = await Doctor.findOne({ tc });
    if (existing) {
      console.log('⚠️ [registerDoctor] Bu TC zaten kayıtlı:', tc);
      return res.status(400).json({ message: 'Bu TC ile bir doktor zaten kayıtlı.' });
    }

    const newDoctor = new Doctor({
      tc,
      fullName,
      email,
      password,
      specialization,
      licenseNumber
    });

    await newDoctor.save();
    console.log('✅ [registerDoctor] Doktor başarıyla kaydedildi:', newDoctor);

    res.status(201).json({ message: 'Kayıt başarılı', doctor: newDoctor });
  } catch (error) {
    console.error('❌ [registerDoctor] HATA:', error);
    res.status(500).json({ message: 'Kayıt hatası', error: error.message });
  }
};

exports.loginDoctor = async (req, res) => {
  console.log('🟡 [loginDoctor] Gelen veri:', req.body);

  try {
    const { tc, password } = req.body;

    if (!tc || !password) {
      console.log('⚠️ [loginDoctor] Eksik TC veya şifre');
      return res.status(400).json({ message: 'TC ve şifre zorunludur' });
    }

    const doctor = await Doctor.findOne({ tc });
    if (!doctor) {
      console.log('❌ [loginDoctor] Doktor bulunamadı:', tc);
      return res.status(404).json({ message: 'Doktor bulunamadı' });
    }

    if (doctor.password !== password) {
      console.log('❌ [loginDoctor] Şifre eşleşmiyor');
      return res.status(401).json({ message: 'Şifre yanlış' });
    }

    const token = jwt.sign(
      { id: doctor._id },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    console.log('✅ [loginDoctor] Giriş başarılı:', doctor.email);

    res.status(200).json({
      message: 'Giriş başarılı',
      doctor: {
        id: doctor._id,
        fullName: doctor.fullName,
        tc: doctor.tc,
        email: doctor.email
      },
      token
    });

  } catch (error) {
    console.error('❌ [loginDoctor] HATA:', error);
    res.status(500).json({ message: 'Sunucu hatası', error: error.message });
  }
};
