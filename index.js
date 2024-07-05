// Importar módulos
import express from 'express';
import dotenv from 'dotenv';
import axios from 'axios';
import { getArticles, getBreakingEvents, getArticleById } from './controllers/articlesController.js';

// Configurar variables de entorno
dotenv.config();

// Inicializar Express
const app = express();
const PORT = process.env.PORT || 3000;

// Definir middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Endpoint para obtener artículos
app.get('/api/articles', async (req, res) => {
    try {
        await getArticles(req, res);
    } catch (error) {
        console.error('Error fetching articles:', error);
        res.status(500).json({ error: 'Failed to fetch articles' });
    }
});

// Endpoint para obtener eventos destacados
app.get('/api/breaking-events', async (req, res) => {
    try {
        await getBreakingEvents(req, res);
    } catch (error) {
        console.error('Error fetching breaking events:', error);
        res.status(500).json({ error: 'Failed to fetch breaking events' });
    }
});

// Endpoint para obtener detalles de un artículo por ID
app.get('/api/articles/:id', async (req, res) => {
    try {
        await getArticleById(req, res);
    } catch (error) {
        console.error('Error fetching article by ID:', error);
        res.status(500).json({ error: 'Failed to fetch article by ID' });
    }
});

// Endpoint de salud
app.get('/api/health', async (req, res) => {
    try {
        // Realizar una solicitud de prueba a https://www.newsapi.ai/
        const response = await axios.get('https://www.newsapi.ai/');

        // Verificar el estado de la respuesta
        if (response.status === 200) {
            res.json({ status: 'API is running', newsAPIConnection: 'OK' });
        } else {
            res.status(503).json({ status: 'API is running', newsAPIConnection: 'Error' });
        }
    } catch (error) {
        console.error('Error checking News API connection:', error);
        res.status(503).json({ status: 'API is running', newsAPIConnection: 'Error' });
    }
});

// Manejo de errores genérico para cualquier otra ruta no encontrada
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
});
