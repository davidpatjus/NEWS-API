Documentación de API para Noticias
Bienvenido a la documentación de la API para interactuar con nuestro proveedor de noticias. Esta API te permite acceder a artículos, eventos destacados y detalles específicos de artículos por ID.

Endpoints Disponibles
Obtener Artículos
Recupera una lista de artículos de noticias basados en los parámetros de búsqueda y filtrado proporcionados.

URL

bash
Copy code
GET /api/articles
Parámetros de Consulta (Query Parameters)

query (string): Término de búsqueda para filtrar artículos por palabra clave.
category (string): Categoría de noticias para filtrar (ejemplo: technology, sports).
language (string): Código de idioma (ISO 639-1). Por defecto, en.
page (int): Número de página para la paginación. Por defecto, 1.
pageSize (int): Número de artículos por página. Por defecto, 10.
fromDate (string): Fecha de inicio para filtrar artículos (YYYY-MM-DD).
toDate (string): Fecha de finalización para filtrar artículos (YYYY-MM-DD).
country (string): País para filtrar artículos por país de origen.
Ejemplo de Uso

bash
Copy code
GET /api/articles?query=bitcoin&category=technology&pageSize=5
Obtener Eventos Destacados (Breaking Events)
Recupera una lista de eventos de última hora basados en los parámetros de búsqueda y filtrado proporcionados.

URL

bash
Copy code
GET /api/breaking-events
Parámetros de Consulta

language (string): Código de idioma (ISO 639-1). Por defecto, en.
region (string): Región geográfica para filtrar eventos.
category (string): Categoría de eventos para filtrar (ejemplo: politics, health).
page (int): Número de página para la paginación. Por defecto, 1.
pageSize (int): Número de eventos por página. Por defecto, 10.
Ejemplo de Uso

bash
Copy code
GET /api/breaking-events?category=politics&pageSize=3
Obtener Detalles de un Artículo por ID
Obtiene los detalles completos de un artículo específico utilizando su identificador único.

URL

bash
Copy code
GET /api/articles/:id
Parámetros de Ruta (Path Parameter)

id (string): Identificador único del artículo.
Ejemplo de Uso

bash
Copy code
GET /api/articles/12345
Estado de la API
Verifica el estado de la API para asegurarse de que esté en funcionamiento.

URL

bash
Copy code
GET /api/health
Respuesta

json
Copy code
{
  "status": "API is running",
  "newsAPIConnection": "OK"
}
