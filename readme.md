API de Noticias

API para interactuar con un proveedor de noticias y obtener información actualizada sobre artículos y eventos destacados.

Endpoints Disponibles


Obtener Artículos
Recupera una lista de artículos de noticias.


URL
GET /api/articles


Parámetros de Consulta

query (string): Término de búsqueda para filtrar artículos.
category (string): Categoría de noticias (ejemplo: technology, sports).
language (string): Código de idioma (ISO 639-1). Por defecto, en.
page (int): Número de página. Por defecto, 1.
pageSize (int): Número de artículos por página. Por defecto, 10.
fromDate (string): Fecha de inicio (YYYY-MM-DD).
toDate (string): Fecha de finalización (YYYY-MM-DD).
country (string): País de origen.

Ejemplo de Uso

GET /api/articles?query=bitcoin&category=technology&pageSize=5
Obtener Eventos Destacados
Recupera eventos de última hora.

GET /api/breaking-events
Parámetros de Consulta

category (string): Categoría de eventos (ejemplo: politics, health).
language (string): Código de idioma (ISO 639-1). Por defecto, en.
region (string): Región geográfica.
page (int): Número de página. Por defecto, 1.
pageSize (int): Número de eventos por página. Por defecto, 10.
Ejemplo de Uso

GET /api/breaking-events?category=politics&pageSize=3
Obtener Detalles de un Artículo por ID
Obtiene los detalles completos de un artículo específico.

GET /api/articles/:id
Ejemplo de Uso

GET /api/articles/12345
Estado de la API
Verifica el estado de la API.

URL

GET /api/health
Respuesta

{
  "status": "API is running",
  "newsAPIConnection": "OK"
}
