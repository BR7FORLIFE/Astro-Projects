# 🚀 Plataforma de Contenidos — Dev.to + Dashboard (Astro)

Este proyecto forma parte del repositorio **Astro Projects** y representa una **plataforma de contenidos avanzada** inspirada en sitios como Dev.to, combinando **blog técnico, documentación y un dashboard personalizado**, todo construido con Astro y enfocado al **aprendizaje profundo del framework**.

El objetivo NO es solo terminar una app, sino **dominar Astro a nivel profesional**, entendiendo cuándo usar contenido estático, cuándo SSR, cómo aplicar Islands Architecture y cómo optimizar rendimiento de verdad.

---

## 🧠 Objetivo de aprendizaje

Al completar este proyecto deberías ser capaz de:

* Entender el modelo mental de Astro (static-first)
* Usar Content Collections de forma avanzada
* Diseñar aplicaciones híbridas (SSG + SSR)
* Aplicar Islands Architecture conscientemente
* Optimizar rendimiento, imágenes y carga de JS
* Construir dashboards modernos sin convertir todo en una SPA

---

## 🧱 Stack obligatorio

Este proyecto **debe** usar los siguientes elementos:

* **Astro** (core del proyecto)
* **MDX** para contenido avanzado
* **Astro Content Collections** (posts, autores, series)
* **React o Solid** para islands interactivas
* **Tailwind CSS** para el sistema de estilos
* **@astrojs/image** para optimización de imágenes
* **View Transitions API** para navegación fluida
* **Middleware** para auth y control de rutas
* **Endpoints API** como micro-backend
* **SSR híbrido** (solo donde sea necesario)

---

## 📂 Estructura base del proyecto

```txt
src/
 ├─ content/
 │   ├─ posts/        # Artículos en MDX
 │   ├─ authors/      # Información de autores
 │   └─ series/       # Series de artículos
 ├─ components/
 │   ├─ islands/      # Componentes interactivos
 │   └─ ui/           # Componentes de UI reutilizables
 ├─ layouts/          # Layouts base
 ├─ pages/
 │   ├─ index.astro
 │   ├─ posts/
 │   ├─ dashboard/
 │   └─ api/          # Endpoints
 ├─ middleware.ts
```

---

## 📚 Content Collections (obligatorio)

Debes definir **tres colecciones principales**:

### `posts`

* Artículos técnicos
* MDX
* Tipados y validados

Campos recomendados:

* title
* description
* author (reference)
* series (reference opcional)
* tags
* publishedAt
* draft

### `authors`

* Información de cada autor
* Avatar optimizado con Astro Image

### `series`

* Agrupación de artículos
* Orden y progreso

👉 Objetivo: aprender **contenido escalable, tipado y mantenible**.

---

## 🏝️ Islands Architecture

Toda interactividad **debe vivir en islands**, por ejemplo:

* ❤️ Botón de like
* 🔖 Bookmark
* 🔍 Buscador en vivo
* 🌗 Dark mode

Reglas:

* Nada de hidratar páginas completas
* Usar `client:visible`, `client:idle` o `client:load`
* Cada island debe tener un propósito claro

---

## 🧪 Endpoints API

Crear endpoints en:

```txt
src/pages/api/
```

Casos de uso:

* Guardar likes
* Guardar bookmarks
* Obtener datos del dashboard

👉 Objetivo: entender Astro como **fullstack ligero**.

---

## 🔐 Middleware y autenticación

Implementar middleware para:

* Proteger `/dashboard`
* Redirigir usuarios no autenticados
* Leer cookies o headers

No hace falta auth compleja, pero sí:

* Lógica clara
* Separación de responsabilidades

---

## 🔄 SSR híbrido

Las siguientes rutas **NO deben prerenderizarse**:

* `/dashboard`
* `/profile`

Usar:

```ts
export const prerender = false;
```

👉 Objetivo: aprender cuándo **NO** usar estático.

---

## 🖼️ Optimización de imágenes

Usar `@astrojs/image` para:

* Avatares de autores
* Portadas de posts
* Imágenes MDX

Enfocarse en:

* LCP
* Responsive images
* Lazy loading

---

## ✨ View Transitions

Implementar transiciones entre:

* Home → post
* Listado → detalle

Objetivo:

* UX tipo SPA
* Sin router pesado

---

## 📊 Dashboard

El dashboard debe incluir:

* Posts guardados
* Likes realizados
* Progreso de series

Debe combinar:

* SSR
* Islands
* Fetch a endpoints

---

## 🧠 Criterios de éxito

Este proyecto está completo cuando:

* El JS enviado al cliente es mínimo
* El contenido es 100% tipado
* La navegación es fluida
* El dashboard funciona sin SPA completa
* Puedes explicar por qué cada cosa es estática o dinámica

---

## 🏁 Resultado esperado

Al terminar este proyecto:

* Dominas Astro más allá del nivel básico
* Entiendes performance real en frontend
* Tienes un proyecto de portfolio sólido
* Sabes cuándo NO usar JavaScript

---

**Proyecto:** Plataforma de Contenidos con Astro
**Repositorio:** Astro Projects
