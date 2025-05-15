const express = require('express');
const router = express.Router();

const {
  registerDoctor,
  loginDoctor,
  registerPatient,
  loginPatient
} = require('./authController'); // Yolu doğruysa böyle, değilse '../controllers/authController'

router.post('/register/doctor', registerDoctor);
router.post('/login/doctor', loginDoctor);

router.post('/register/patient', registerPatient);
router.post('/login/patient', loginPatient);

module.exports = router;
