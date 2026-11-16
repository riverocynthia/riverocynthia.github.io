# riverocynthia.github.io

Portfolio personal de Cynthia Rivero — Diseñadora UX/UI Senior especializada en accesibilidad digital.

## Stack

- **React 19** + Vite
- CSS puro con variables custom (sin frameworks)
- Deploy automático a GitHub Pages vía `gh-pages`

## Desarrollo local

```bash
npm install
npm run dev
```

Abrir [http://localhost:5173](http://localhost:5173)

## Deploy a GitHub Pages

### Primera vez — configurar el remote

```bash
git init
git remote add origin https://github.com/riverocynthia/riverocynthia.github.io.git
git add .
git commit -m "Initial commit"
git push -u origin master
```

### Publicar el sitio

```bash
npm run deploy
```

Este comando:
1. Ejecuta `npm run build` → genera la carpeta `dist/`
2. Sube el contenido de `dist/` a la rama `gh-pages`
3. GitHub Pages sirve ese branch automáticamente en [https://riverocynthia.github.io](https://riverocynthia.github.io)

### Configurar GitHub Pages (solo la primera vez)

1. Ir a **Settings → Pages** en el repo
2. En *Source* seleccionar la rama **gh-pages**
3. Guardar — en unos minutos el sitio estará en línea

## Estructura

```
src/
  App.jsx      # Todos los componentes (Nav, Hero, About, Experience, Skills, Education, Contact)
  App.css      # Estilos por sección
  index.css    # Variables de color, reset, utilidades globales
  main.jsx     # Entry point
index.html     # HTML base con meta tags SEO
```
