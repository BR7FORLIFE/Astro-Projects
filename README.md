
# Astro Projects

Este repositorio contiene una colección de proyectos desarrollados con [Astro](https://astro.build/), un moderno framework para construir sitios web rápidos y eficientes. Cada subcarpeta representa un proyecto independiente, con su propia configuración y propósito. A continuación se detalla la estructura y funcionalidad de cada uno:

## Estructura General

```
Astro-Projects/
├── dashboardWeather/
├── intellisense-interface-simulator/
├── neon-clone-website/
├── practice-astro/
├── surveySimulator/
├── package.json
├── README.md
└── ...
```

Cada subproyecto incluye su propio `astro.config.mjs`, `package.json`, y carpeta `src/` con componentes, páginas y estilos.

---

## Proyectos Incluidos

### 1. dashboardWeather
Aplicación para mostrar métricas y datos meteorológicos en un dashboard visual. Utiliza Astro y TailwindCSS para la interfaz. Incluye componentes como `Dashboard.astro`, `Metrics.astro`, y scripts para gráficos.

**Estructura:**
- `src/components/`: Componentes visuales del dashboard.
- `src/pages/`: Página principal.
- `public/scripts/Chart.js`: Script para gráficos.

### 2. intellisense-interface-simulator
Simulador de interfaz con funcionalidades de panel y navegación, ideal para pruebas de UI y UX. Basado en Astro y TailwindCSS.

**Estructura:**
- `src/components/Panel.astro`: Componente principal del panel.
- `src/pages/index.astro`: Página principal.

### 3. neon-clone-website
Clon de un sitio web moderno con diseño atractivo, inspirado en temas "neón". Incluye selección de productos y tarjetas informativas.

**Estructura:**
- `src/components/header/`: Componentes de cabecera y selección.
- `src/scripts/Products.js`: Lógica de productos.
- `src/sections/Header.astro`: Sección principal del header.

### 4. practice-astro
Proyecto de práctica para aprender Astro, con ejemplos de layouts, secciones y manejo de datos.

**Estructura:**
- `src/layouts/MyLayout.astro`: Layout principal.
- `src/pages/Course.astro`: Página de cursos.
- `src/sections/`: Varias secciones de ejemplo.

### 5. surveySimulator
Simulador de encuestas con dashboard, formulario y visor de resultados. Permite crear y visualizar encuestas de manera interactiva.

**Estructura:**
- `src/components/SurveyDashboard.astro`: Dashboard de encuestas.
- `src/components/SurveyForm.astro`: Formulario de encuestas.
- `src/components/SurveyViewer.astro`: Visualizador de resultados.

---

## Tecnologías Utilizadas
- **Astro**: Framework principal para todos los proyectos.
- **TailwindCSS**: Utilizado en varios subproyectos para estilos rápidos y responsivos.
- **TypeScript**: Soporte en algunos proyectos para tipado estático.

## Instalación y Uso
Para instalar dependencias y ejecutar cualquier subproyecto:

```bash
cd <nombre-del-proyecto>
npm install
npm run dev
```

Esto iniciará el servidor de desarrollo en `localhost:4321` (puede variar según configuración).

## Recursos y Enlaces
- [Documentación Astro](https://docs.astro.build/)
- [TailwindCSS](https://tailwindcss.com/)

## Contribución
Puedes crear nuevos subproyectos siguiendo la estructura existente. Se recomienda mantener la organización y documentación para facilitar el mantenimiento.

---

## Créditos
Repositorio creado y mantenido por BR7FORLIFE.
