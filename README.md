# Maps of Living Water

En **DeadHack**, somos un equipo comprometido de estudiantes, entusiastas de datos y defensores del medio ambiente que buscamos revolucionar el monitoreo de la calidad del agua. Nuestro objetivo es democratizar el acceso a información vital sobre la salud de nuestros cuerpos de agua. Hemos desarrollado una plataforma innovadora que permite a los usuarios explorar y visualizar la calidad del agua en las cuencas hidrográficas de Cusco. A través de mapas interactivos y datos en tiempo real, guiamos a los usuarios para comprender los aspectos físicos, químicos y microbiológicos del agua. Más allá de los datos, buscamos educar e inspirar a las comunidades para que se involucren en la protección de nuestros valiosos recursos hídricos.

---

## ¿Qué hace este proyecto?

**Maps of Living Water** es una plataforma enfocada en el monitoreo de la calidad del agua en las cuencas hidrográficas de Cusco, específicamente en la cuenca del Urubamba. A través de datos procesados y una interfaz interactiva, los usuarios pueden visualizar las condiciones físicas, químicas y microbiológicas del agua en tiempo real. El proyecto empodera a comunidades locales, ambientalistas y autoridades para tomar decisiones informadas sobre la salud de sus sistemas hídricos.

---

## ¿Cómo funciona?

La plataforma recopila datos de calidad del agua proporcionados por la **Autoridad Nacional del Agua (ANA)** y utiliza algoritmos de análisis para procesar y clasificar esta información. A través de mapas interactivos, los usuarios pueden visualizar los indicadores clave de calidad del agua, como pH, oxígeno disuelto, metales pesados, entre otros. El sistema también permite la detección de posibles contaminantes y proporciona reportes en tiempo real, asegurando que la información esté siempre actualizada y sea precisa.

---

## Beneficios del Proyecto

- **Acceso a información vital**: Democratiza el acceso a datos importantes sobre la calidad del agua, fomentando la transparencia y la participación comunitaria.
- **Educación y concienciación**: Proporciona recursos educativos para aumentar la conciencia sobre la conservación del medio ambiente y la importancia de proteger nuestros cuerpos de agua.
- **Toma de decisiones informadas**: Ayuda a las autoridades locales y a los ciudadanos a tomar decisiones con base en datos, promoviendo la gestión sostenible de los recursos hídricos.
- **Protección del agua**: Fomenta la colaboración entre científicos, gobiernos y ciudadanos para proteger los recursos hídricos de Cusco.

---

## Objetivos

Nuestro principal objetivo es contribuir al **Objetivo de Desarrollo Sostenible (ODS) 6: Agua limpia y saneamiento**. Queremos empoderar a las comunidades para que adopten medidas concretas hacia una gestión sostenible del agua y aumentar la conciencia ambiental. Además, buscamos fortalecer la colaboración entre ciudadanos, gobiernos y científicos para la protección de los recursos hídricos en Cusco.

---

## Herramientas Utilizadas

- **Lenguajes de Programación**: Python, JavaScript
- **Infraestructura y Alojamiento**: GoDaddy
- **Software**: ArcGIS, QGIS, Tableau
- **Herramientas de Desarrollo**: PyCharm, Visual Studio Code
- **Recursos**: Datos en tiempo real de la ANA

---

## Instalación

Para comenzar a utilizar este proyecto, sigue los siguientes pasos:

### 1. Clona el repositorio:

```bash
git clone https://github.com/tu-usuario/maps-of-living-water.git

```

## 2. Instala las dependencias:

En la carpeta raíz del proyecto, ejecuta:

```bash
npm install
```

## 3. Ejecuta el proyecto:
Inicia el servidor de desarrollo con:

```bash
npm start
```

Esto lanzará la aplicación en http://localhost:3000/.

Estructura del Proyecto
```bash
frontend/sistema-web/
├── .gitignore
├── README.md
├── package.json
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── MapView.js        # Componente para visualizar el mapa interactivo
│   │   ├── WaterQuality.js   # Componente que muestra la calidad del agua
│   │   ├── Navbar.js         # Barra de navegación
│   └── utils/
│       └── api.js            # Conexión con el backend
├── App.js                    # Componente principal de la aplicación
├── index.js                  # Punto de entrada de React
```
## Descripción de Componentes

- **MapView.js**: Muestra un mapa interactivo de las cuencas hidrográficas y los puntos de muestreo de agua.
- **WaterQuality.js**: Visualiza los datos de calidad del agua en tiempo real, incluidos indicadores físicos y químicos.
- **Navbar.js**: Barra de navegación superior de la aplicación.

## Próximos pasos

- Añadir funcionalidades para comparar datos históricos con los actuales.
- Implementar módulos adicionales para mostrar la biodiversidad y la vegetación de las cuencas afectadas.
- Crear alertas automatizadas para contaminantes detectados.

---