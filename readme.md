# Amari

Amari es un prototipo web de una plataforma de asistencia automotriz. Su interfaz permite explorar el registro de conductores y especialistas mecánicos, reportar fallas del vehículo, consultar una ubicación en el mapa y visualizar pantallas de pago y confirmación de servicio.

## Funcionalidades

- **Bienvenida:** presentación del servicio y acceso al formulario de registro.
- **Registro (`register.html`):** formulario para conductores y mecánicos. Incluye datos personales, identificación y, para especialistas, información de experiencia y documentos de acreditación.
- **Reporte de fallas (`home.html`):** selección de categoría, síntomas y urgencia, además de un campo para describir el problema y controles para adjuntar evidencia.
- **Ubicación (`map.html`):** imagen de referencia fija con búsqueda de direcciones y sugerencias de lugares; no utiliza un mapa en tiempo real ni la ubicación del dispositivo.
- **Pago (`banking.html`):** formulario visual para agregar una tarjeta, con selección de tipo y vista previa.
- **Confirmación (`confirmation.html`):** pantalla demostrativa del estado de una solicitud de asistencia.
- **Tema visual:** paleta centralizada en rojo y blanco, definida en `assets/theme.js` y `assets/theme.json`.

## Cómo ejecutar

No se incluye un proceso de compilación ni un gestor de dependencias del proyecto. Para probarlo, sirve los archivos estáticos desde la carpeta `Amari`:

1. Abre una terminal en la carpeta `Amari`.
2. Inicia un servidor local con Python:

   ```bash
   python -m http.server 8000
   ```

   En Windows también puedes usar `py -m http.server 8000`.

3. Abre [http://localhost:8000](http://localhost:8000) en el navegador.
4. La pantalla de bienvenida es `index.html`; las demás pantallas se encuentran también en esa carpeta y algunos flujos enlazan directamente entre ellas.

Para publicar el proyecto, configura GitHub Pages para servir la carpeta raíz del repositorio desde la rama `main`. Abre la URL de GitHub Pages para usar la aplicación; la vista de archivos de `github.com` muestra el código fuente y no ejecuta las páginas HTML. El proyecto no requiere compilación y sus rutas a imágenes y scripts son relativas para funcionar bajo la ruta del repositorio.

Se necesita conexión a internet para cargar las fuentes y usar la búsqueda de direcciones.

## Tecnologías y servicios externos

- HTML, CSS y JavaScript (sin framework de aplicación).
- [Tailwind CSS](https://tailwindcss.com/) y [Lucide](https://lucide.dev/) cargados desde CDN en la pantalla de reporte.
- Búsqueda de direcciones mediante [Nominatim de OpenStreetMap](https://nominatim.org/).
- Fuente Plus Jakarta Sans servida por Google Fonts.

## Estructura del proyecto

```text
Amari/
├── readme.md
└── Amari/
    ├── index.html
    ├── register.html
    ├── home.html
    ├── map.html
    ├── confirmation.html
    ├── banking.html
    ├── theme.js
    └── assets/
        ├── logoamari.png
        ├── LocationImage.png
        ├── theme.js
        └── theme.json
```

## Alcance actual

El contenido disponible corresponde a una interfaz de demostración del lado del cliente. No se encontró un backend ni una integración de procesamiento de pagos; por tanto, los formularios y estados de servicio no deben considerarse un sistema de producción ni utilizarse para enviar datos reales de tarjetas o documentos.

## Integrantes del equipo

- Jonathan Alexis Ferreira Hernández
- Alvaro Morales Leyva
- Gabriel Arias Ferrer
- Cristian Rodrigo Flores Amador
- Luis Ángel Villaseñor García