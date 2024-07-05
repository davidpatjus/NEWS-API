import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const API_KEY = process.env.NEWS_API_KEY;
const BASE_URL = "https://newsapi.org/v2";

const NEWS_API = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${API_KEY}`,
  },
});

// Interceptar las respuestas para manejar errores globalmente
NEWS_API.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    console.error('Error en la solicitud a News API:', error);

    // Manejo de errores
    if (error.response) {
      // El servidor respondió con un status code fuera del rango 2xx
      return Promise.reject({
        status: error.response.status,
        message: error.response.data.message
      });
    } else if (error.request) {
      // La solicitud fue hecha pero no se recibió respuesta
      return Promise.reject({
        status: 500,
        message: 'No response received from server'
      });
    } else {
      // Error en la configuración de la solicitud
      return Promise.reject({
        status: 500,
        message: error.message
      });
    }
  }
);

export default NEWS_API;
