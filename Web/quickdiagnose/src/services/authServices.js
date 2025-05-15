
const API_URL = 'http://localhost:5000/api';


// Doktor giriş
export const loginDoctor = async (credentials) => {
  try {
    console.log('>>> loginDoctor gönderilen veri:', credentials);

    const response = await fetch(`${API_URL}/doctors/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    });

    if (!response.ok) {
      let message = 'Giriş hatası';
      try {
        const errData = await response.json();
        message = errData.message || message;
      } catch (jsonError) {
        console.warn('⚠️ JSON çözümleme hatası:', jsonError);
      }
      throw new Error(message);
    }

    return await response.json();
  } catch (error) {
    console.error('Doktor giriş hatası:', error);
    throw error;
  }
};


// Hasta giriş
export const loginPatient = async (credentials) => {
  try {
    const response = await fetch(`${API_URL}/patients/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    });

    if (!response.ok) {
      const errData = await response.json();
      throw new Error(errData.message || 'Giriş hatası');
    }

    return await response.json();
  } catch (error) {
    console.error('Hasta giriş hatası:', error);
    throw error;
  }
};
