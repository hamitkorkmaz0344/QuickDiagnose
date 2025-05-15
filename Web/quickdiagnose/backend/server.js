require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Doctor = require('./controllers/Doctorcontroller');
const Patient = require('./models/Patient');

const app = express();
const port = process.env.PORT || 5000;

// MongoDB bağlantısı
const mongoURI = process.env.MONGO_URI;
if (!mongoURI) {
  console.error('MONGO_URI bulunamadı! Lütfen .env dosyasını kontrol edin.');
  process.exit(1);
}

mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB bağlantısı başarılı'))
  .catch(err => console.error('MongoDB bağlantı hatası:', err));

app.use(cors());
app.use(express.json());

// Doktor Kayıt
app.post('/api/doctors/register', async (req, res) => {
  try {
    const { username, email, password, fullName, specialization, licenseNumber } = req.body;
    console.log('Doktor kayıt verisi:', req.body);

    const existingDoctor = await Doctor.findOne({ 
      $or: [{ email }, { username }, { licenseNumber }] 
    });

    if (existingDoctor) {
      return res.status(400).json({ 
        message: 'Bu email, kullanıcı adı veya lisans numarası zaten kayıtlı!' 
      });
    }

    const doctor = new Doctor({ username, email, password, fullName, specialization, licenseNumber });
    await doctor.save();

    res.status(201).json({ message: 'Doktor kaydı başarılı', doctor });
  } catch (error) {
    console.error('Doktor kayıt hatası:', error);
    res.status(400).json({ message: error.message });
  }
});

// Doktor Giriş
app.post('/api/doctors/login', async (req, res) => {
    try {
      const { tc, password } = req.body;
  
      if (!tc || !password) {
        return res.status(400).json({ message: 'TC ve şifre zorunludur' });
      }
  
      const doctor = await Doctor.findOne({ tc });
  
      if (!doctor) {
        return res.status(401).json({ message: 'TC bulunamadı' });
      }
  
      if (doctor.password !== password) {
        return res.status(401).json({ message: 'Hatalı şifre' });
      }
  
      // 🔥 Giriş başarılıysa mutlaka bir JSON yanıt dön
      return res.status(200).json({
        message: 'Giriş başarılı',
        doctor // frontend bunu localStorage’a yazacak
      });
  
    } catch (error) {
      console.error('Sunucu hatası:', error);
      res.status(500).json({ message: 'Sunucu hatası', error: error.message });
    }
  });
  

// Hasta Kayıt
app.post('/api/patients/register', async (req, res) => {
  try {
    const { username, email, password, fullName, dateOfBirth, gender, phoneNumber } = req.body;
    console.log('Hasta kayıt verisi:', req.body);

    const existingPatient = await Patient.findOne({ 
      $or: [{ email }, { username }] 
    });

    if (existingPatient) {
      return res.status(400).json({ 
        message: 'Bu email veya kullanıcı adı zaten kayıtlı!' 
      });
    }

    const patient = new Patient({ username, email, password, fullName, dateOfBirth, gender, phoneNumber });
    await patient.save();

    res.status(201).json({ message: 'Hasta kaydı başarılı', patient });
  } catch (error) {
    console.error('Hasta kayıt hatası:', error);
    res.status(400).json({ message: error.message });
  }
});

// Hasta Giriş
app.post('/api/patients/login', async (req, res) => {
  console.log('>>> Hasta giriş isteği geldi');

  try {
    console.log('Hasta giriş verisi:', req.body);
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: 'Kullanıcı adı ve şifre zorunludur' });
    }

    const patient = await Patient.findOne({ username });

    if (!patient) {
      return res.status(401).json({ message: 'Kullanıcı adı bulunamadı' });
    }

    if (patient.password !== password) {
      return res.status(401).json({ message: 'Hatalı şifre' });
    }

    console.log('>>> Hasta giriş başarılı');
    res.json({ message: 'Giriş başarılı', patient });
  } catch (error) {
    console.error('Hasta login hatası:', error);
    res.status(500).json({ message: 'Sunucu hatası', error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server ${port} portunda çalışıyor`);
});
