# MANUAL TÉCNICO — TARJETA DE PRESENTACIÓN DIGITAL

---

## 1. Portada

| Campo           | Detalle                                      |
|-----------------|----------------------------------------------|
| **Nombre**      | Juan Ma                                      |
| **Proyecto**    | Tarjeta de Presentación Digital              |
| **Fecha**       | 2025                                         |
| **URL Vercel**  | *(completar después del despliegue)*         |
| **Repo GitHub** | *(completar después de subir a GitHub)*      |

---

## 2. Descripción general

Esta aplicación es una tarjeta de presentación digital personal. Su propósito es mostrar quién soy, un breve texto sobre mí y mis redes sociales de forma interactiva. El visitante puede hacer clic en dos botones: uno cambia el color de mi nombre en pantalla, y otro muestra u oculta mis redes sociales. Está construida solo con tecnologías web básicas: HTML, CSS y JavaScript, sin ningún framework externo.

---

## 3. Arquitectura de archivos

```
/mi-tarjeta/
├── index.html         → Estructura y contenido de la página
├── styles.css         → Diseño visual (colores, tamaños, posiciones)
├── script.js          → Lógica interactiva (funciones JavaScript)
└── MANUAL_TECNICO.md  → Este documento explicativo
```

### ¿Qué hace cada enlace dentro del HTML?

- `<link rel="stylesheet" href="styles.css">` — le dice al navegador que cargue el archivo de estilos externo antes de mostrar la página. Sin esta línea, la tarjeta se vería sin formato.
- `<script src="script.js"></script>` — carga el archivo JavaScript al final del `<body>` para que primero se cargue todo el HTML y luego el script pueda encontrar los elementos del DOM sin errores.

---

## 4. Inventario de etiquetas HTML usadas

| Etiqueta   | Por qué la usé aquí                                                                 |
|------------|-------------------------------------------------------------------------------------|
| `<!DOCTYPE html>` | Indica al navegador que el documento es HTML5 moderno.                    |
| `<html lang="es">` | Contenedor raíz; el atributo `lang="es"` mejora la accesibilidad.       |
| `<head>`   | Contiene metadatos que el navegador necesita pero el usuario no ve directamente.    |
| `<meta charset="UTF-8">` | Permite mostrar tildes y caracteres especiales correctamente.     |
| `<meta name="viewport">` | Hace que la página se vea bien en móviles.                        |
| `<title>`  | Define el texto que aparece en la pestaña del navegador.                            |
| `<link>`   | Conecta el archivo CSS externo a la página.                                         |
| `<style>`  | Contiene estilos CSS directamente en el `<head>` (tipografía base y colores body). |
| `<body>`   | Todo el contenido visible de la página va aquí.                                     |
| `<header>` | Agrupa la foto y el nombre principal. Tiene significado semántico de cabecera.      |
| `<img>`    | Muestra mi foto de perfil generada con iniciales.                                   |
| `<h1>`     | Mi nombre completo. Solo hay uno por página, es el título principal.                |
| `<main>`   | Contiene el contenido principal de la tarjeta, semánticamente correcto.             |
| `<section>` | Divide el contenido en bloques temáticos: "Sobre mí" y "Contacto".               |
| `<h2>`     | Títulos de cada sección dentro de `<main>`.                                         |
| `<p>`      | Párrafos de texto descriptivo y de contacto.                                        |
| `<button>` | Elemento interactivo que dispara las funciones JavaScript al hacer clic.            |
| `<footer>` | Pie de página con derechos reservados y año.                                        |
| `<script>` | Carga el archivo JavaScript al final del `<body>`.                                  |

---

## 5. Los tres tipos de estilos CSS

En este proyecto usé los tres tipos de estilos CSS que existen. Cada uno tiene un propósito distinto.

### A) Estilos inline (atributo `style=""` directamente en el elemento)

Los uso para ajustes puntuales que solo aplican a un elemento específico y que no necesito reutilizar en otro lugar.

```html
<body style="min-height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center;">
```

```html
<img src="..." style="border-radius: 50%; border: 3px solid #2e7d4f; margin-bottom: 12px;">
```

**¿Por qué inline aquí?** Porque son reglas únicas para ese elemento. No tiene sentido crear una clase en el archivo externo para algo que solo se usa una vez en ese lugar específico.

### B) Estilos en el `<head>` (etiqueta `<style>`)

Los uso para definir la tipografía y los colores base de la página, cosas que afectan a toda la página y que quiero que carguen lo antes posible.

```html
<style>
  body {
    font-family: 'Segoe UI', Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f0f7f0;
    color: #1a1a1a;
  }
  h1 {
    font-size: 2.2rem;
    margin: 0 0 6px 0;
  }
  h2 {
    font-size: 1.2rem;
    color: #2e7d4f;
    margin-bottom: 10px;
  }
</style>
```

**¿Por qué en el `<head>`?** Porque son estilos globales que quiero que el navegador conozca antes de renderizar la página, evitando parpadeos de contenido sin estilo.

### C) Archivo CSS externo (`styles.css`)

Aquí va la mayor parte del diseño: las clases reutilizables, los efectos hover, los colores de la tarjeta, los botones. Lo separé porque es mucho código y mezclarlo en el HTML lo haría ilegible.

```css
.tarjeta {
  background-color: #ffffff;
  border: 2px solid #2e7d4f;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(46, 125, 79, 0.15);
  padding: 32px 40px;
  max-width: 440px;
}
```

**¿Por qué externo?** Porque si tuviera varias páginas, podría reutilizar el mismo `styles.css` sin repetir código. Además, el navegador puede guardarlo en caché y cargar más rápido la segunda vez.

---

## 6. Clases CSS utilizadas

### `.tarjeta`
Contenedor principal de la tarjeta. Le da el borde verde, la sombra y el fondo blanco.
```css
.tarjeta {
  background-color: #ffffff;
  border: 2px solid #2e7d4f;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(46, 125, 79, 0.15);
  padding: 32px 40px;
  max-width: 440px;
}
```

### `.boton`
Estilo base de todos los botones: fondo verde claro, borde, padding y transición suave.
```css
.boton {
  background-color: #e8f5e9;
  color: #1b5e20;
  border: 2px solid #2e7d4f;
  padding: 12px 22px;
  border-radius: 8px;
  font-size: 0.95rem;
  cursor: pointer;
  transition: background-color 0.2s, transform 0.1s;
}
```

### `.boton-primario`
Variante del botón con fondo verde oscuro y texto blanco. Se combina con `.boton`.
```css
.boton-primario {
  background-color: #2e7d4f;
  color: #ffffff;
  border-color: #1b5e20;
}
```

### `.info-contacto`
Bloque que muestra las redes sociales con borde izquierdo verde y fondo suave.
```css
.info-contacto {
  margin-top: 16px;
  padding: 16px 20px;
  background-color: #f1f8f3;
  border-left: 4px solid #2e7d4f;
  border-radius: 0 8px 8px 0;
}
```

### `.oculto`
Oculta cualquier elemento al que se le aplique. Es la clase que JavaScript agrega y quita para el efecto de mostrar/ocultar.
```css
.oculto {
  display: none;
}
```

---

## 7. Lógica de JavaScript

### Función 1: `cambiarColorNombre()`

**¿Qué evento la dispara?** El evento `onclick` del primer botón:
```html
<button class="boton boton-primario" onclick="cambiarColorNombre()">
```

**¿Qué hace paso a paso?**

```javascript
const colores = ["#2e7d4f", "#e65100", "#6a1b9a", "#0277bd", "#c62828", "#00838f"];
let indiceColor = 0;

function cambiarColorNombre() {
  indiceColor = (indiceColor + 1) % colores.length;
  document.getElementById("nombre").style.color = colores[indiceColor];
}
```

1. Tengo un arreglo `colores` con 6 colores diferentes.
2. La variable `indiceColor` guarda en qué color estoy actualmente, empieza en 0.
3. Cada vez que hago clic, `indiceColor` avanza en 1. El operador `%` hace que cuando llega al final (color 5), vuelva a empezar desde 0. Esto se llama ciclo.
4. `document.getElementById("nombre")` encuentra el `<h1>` que tiene `id="nombre"`.
5. `.style.color = colores[indiceColor]` cambia el color del texto directamente en el DOM.

### Función 2: `toggleContacto()`

**¿Qué evento la dispara?** El evento `onclick` del segundo botón:
```html
<button class="boton" onclick="toggleContacto()">
```

**¿Qué hace paso a paso?**

```javascript
function toggleContacto() {
  const contacto = document.getElementById("contacto");
  contacto.classList.toggle("oculto");

  const boton = event.target;
  if (contacto.classList.contains("oculto")) {
    boton.textContent = "📱 Ver mis redes sociales";
  } else {
    boton.textContent = "❌ Ocultar redes sociales";
  }
}
```

1. `document.getElementById("contacto")` encuentra el `<p>` con `id="contacto"`.
2. `.classList.toggle("oculto")` es la clave: si el elemento tiene la clase `oculto`, se la quita (y aparece); si no la tiene, se la agrega (y desaparece). Funciona como un interruptor.
3. `event.target` es el botón que fue clickeado.
4. Luego reviso con `.classList.contains("oculto")` si en este momento está oculto o visible, y cambio el texto del botón para que sea descriptivo.

**¿Cómo se conectan el `id` y la función?** El `<p>` tiene `id="contacto"` y la función usa `getElementById("contacto")` — ese string debe coincidir exactamente para que JavaScript encuentre el elemento correcto.

---

## 8. Despliegue

### ¿Qué es Git?
Git es un sistema de control de versiones. Guarda el historial completo de cambios de mi código. `git push` envía mis cambios locales al repositorio remoto en GitHub, para que estén disponibles en la nube.

Los comandos que usé para subir el proyecto:
```bash
git init
git add .
git commit -m "Primer commit: tarjeta de presentación completa"
git branch -M main
git remote add origin https://github.com/mi-usuario/mi-tarjeta-presentacion.git
git push -u origin main
```

### ¿Qué es Vercel y por qué detecta el proyecto automáticamente?
Vercel es una plataforma de despliegue en la nube. Detecta que mi proyecto es un sitio estático porque la raíz del repositorio contiene un archivo `index.html` directamente, sin configuración de servidor ni framework. Para Vercel, eso significa: "sirve este HTML tal como está". Por eso no necesité configurar nada extra.

**URL pública final:** *(completar después del despliegue en Vercel)*

---

## 9. Decisiones de diseño

### ¿Por qué esos colores?
Elegí la paleta verde porque transmite modernidad y frescura. El verde oscuro (`#2e7d4f`) es profesional sin ser aburrido, y el fondo verde muy claro (`#f0f7f0`) da contraste suave para que la tarjeta blanca resalte sin cansar la vista.

### ¿Por qué esa distribución?
Puse la foto y el nombre en el `<header>` centrado, y el contenido en una tarjeta blanca (`<section class="tarjeta">`) para crear jerarquía visual clara: lo primero que ves es quién soy, luego qué hago, luego cómo contactarme. Los botones están agrupados juntos para que sea intuitivo.

### ¿Qué cambiaría si tuviera más tiempo?
- Agregaría una animación de entrada al cargar la página.
- Pondría una foto real en lugar del avatar generado.
- Haría el diseño más personalizado con más redes sociales y sus íconos oficiales.
- Añadiría un modo oscuro con un toggle.