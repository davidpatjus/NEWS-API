import NEWS_API from "../api/config.js";

export const getArticles = async (req, res) => {
    const { query, category, language = "en", page = 1, pageSize = 10, fromDate, toDate, q, country } = req.query;

    try {
        let endpoint = "/everything"; // Endpoint por defecto

        if (category) {
            endpoint = "/top-headlines"; // Cambiamos a top-headlines si se especifica category
        }

        const response = await NEWS_API.get(endpoint, {
            params: {
                q,
                category,
                language,
                page,
                pageSize,
                from: fromDate,
                to: toDate,
                query: query,
                country
            },
        });

        return res.json(response.data);
    } catch (error) {
        console.error("Error fetching articles:", error);

        // Manejo de errores específico para News API
        if (error.status === 404) {
            return res.status(404).json({ error: "No se encontraron artículos." });
        } else if (error.status === 400) {
            return res.status(400).json({ error: "Solicitud inválida." });
        } else if (error.status === 401) {
            return res.status(401).json({ error: "Acceso no autorizado." });
        } else {
            return res.status(500).json({ error: "Error al obtener artículos." });
        }
    }
};

export const getArticleById = async (req, res) => {
    const id = req.params.id;

    try {
        const response = await NEWS_API.get("/everything", {
            params: {
                q: id,
            },
        });

        if (!response.data.articles.length) {
            return res.status(404).send("Artículo no encontrado.");
        }

        // Devolvemos el primer artículo encontrado
        return res.json(response.data.articles[0]);
    } catch (error) {
        console.error("Error fetching article by ID:", error);

        // Manejo de errores genérico
        return res.status(500).send("Error al obtener el artículo.");
    }
};

export const getBreakingEvents = async (req, res) => {
    const language = req.query.language || "en";
    const region = req.query.region;
    const category = req.query.category;
    const page = req.query.page || 1;
    const pageSize = req.query.pageSize || 10;

    try {
        const response = await NEWS_API.get("/top-headlines", {
          params: {
            language,
            country: region,
            category,
            pageSize,
            page,
          },
        });

        return res.json(response.data);
    } catch (error) {
        console.error("Error fetching breaking events:", error);

        // Manejo de errores genérico
        return res.status(500).json({ error: "Error al obtener eventos destacados." });
    }
};
