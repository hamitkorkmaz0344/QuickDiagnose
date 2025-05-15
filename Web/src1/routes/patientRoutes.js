const express = require('express');
const router = express.Router();
const patientController = require('../../quickdiagnose/backend/controllers/patientController');

// Hasta kaydı
router.post('/register', patientController.registerPatient);

// Hasta girişi
router.post('/login', patientController.loginPatient);

// Hasta bilgilerini getir
router.get('/:id', patientController.getPatient);

// Hasta bilgilerini güncelle
router.put('/:id', patientController.updatePatient);

module.exports = router;  