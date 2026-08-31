🌐 Portafolio Personal - Actividad Integradora 2

👩‍💻 Información del proyecto

Este proyecto corresponde a la Actividad Integradora 2 de la carrera de Ingeniería en Sistemas Inteligentes.

Es un portafolio web personal desarrollado con HTML5, CSS3 y JavaScript, donde se presenta información académica, habilidades, proyectos y una sección de contacto.

En esta segunda etapa se incorporan funcionalidades interactivas mediante JavaScript, manipulación del DOM, eventos, validación de formularios y almacenamiento de información mediante LocalStorage.

👩‍🎓 Autora

Meily Milena Barreiro Gonzalez

Carrera: Ingeniería en Sistemas Inteligentes

🎯 Objetivo

Desarrollar un portafolio web personal e interactivo para presentar información académica y proyectos, aplicando conocimientos de:

HTML5

CSS3

JavaScript

Manipulación del DOM

Eventos

Funciones

Estructuras de control

Validación de formularios

LocalStorage

Diseño responsive

Git y GitHub

✨ Características principales

✅ Diseño moderno y sencillo.

✅ Diseño responsive para computadora, tablet y celular.

✅ HTML semántico.

✅ CSS externo.

✅ JavaScript externo.

✅ Menú de navegación.

✅ Foto de perfil.

✅ Tres proyectos académicos.

✅ Sección de habilidades.

✅ Formulario de contacto.

✅ Validación del formulario.

✅ Modo claro y modo oscuro.

✅ Presentación interactiva.

✅ Efectos al pasar el cursor sobre proyectos.

✅ Botón para volver al inicio.

✅ Contador de visitas.

✅ Uso de LocalStorage.

✅ Guardado del nombre del visitante.

✅ Conservación del tema seleccionado.

📁 Estructura del proyecto

default project/ │ ├── index.html ├── README.md │ ├── css/ │ └── styles.css │ ├── js/ │ └── script.js │ └── imagenes/ ├── foto.png ├── mb.png ├── proyecto1.png ├── proyecto2.png └── proyecto3.png

Archivos principales

index.html Contiene la estructura y el contenido del portafolio.

css/styles.css Contiene colores, tamaños, distribución, efectos hover, modo oscuro y diseño responsive.

js/script.js Contiene eventos, funciones, manipulación del DOM, validación y LocalStorage.

imagenes/ Contiene la foto personal, favicon y las imágenes de los proyectos.

🧩 Tecnologías utilizadas

HTML5

Se utilizan etiquetas semánticas como:

CSS3

Se utiliza para:

Diseño visual.

Colores y tipografías.

Márgenes y paddings.

Botones y tarjetas.

Efectos hover.

Modo oscuro.

Diseño responsive.

Variables CSS.

JavaScript

El archivo principal es:

js/script.js

Se enlaza desde index.html mediante:

⚙️ Funcionalidades de JavaScript

Eventos

El proyecto utiliza:

click

mouseover

mouseout

input

keyup

submit

scroll

Estos eventos permiten interactuar con el menú, tema, proyectos, formulario y botón de inicio.

🖥️ Manipulación del DOM

JavaScript utiliza métodos como:

document.getElementById() document.querySelectorAll() classList.add() classList.remove() classList.toggle() textContent

Se utilizan para:

Cambiar textos.

Mostrar y ocultar elementos.

Cambiar clases.

Activar el modo oscuro.

Mostrar errores.

Resaltar proyectos.

Actualizar el contador de visitas.

Actualizar el año del footer.

🧠 Funciones utilizadas

Entre las funciones principales de script.js se encuentran:

cambiarTema() cargarTema() mostrarPresentacion() abrirMenu() validarNombre() validarCorreo() validarMensaje() guardarNombre() cargarNombre() contarVisitas() enviarFormulario() controlarBotonInicio() volverAlInicio()

🔐 Validación del formulario

El formulario contiene:

Nombre.

Correo electrónico.

Mensaje.

El sistema verifica que los campos no estén vacíos y que el correo tenga un formato válido.

Cuando todos los datos son correctos, se muestra un mensaje de confirmación.

Cuando existe un error, se muestra un mensaje para indicar el campo que debe corregirse.

💾 LocalStorage

El proyecto utiliza LocalStorage para guardar:

tema nombreVisitante contadorVisitas

🌙 Tema

Se guarda la preferencia del usuario:

claro oscuro

👤 Nombre del visitante

El nombre ingresado correctamente en el formulario se guarda para mostrar un mensaje personalizado en futuras visitas.

👀 Contador de visitas

El proyecto registra cuántas veces se ha cargado la página.

Ejemplo:

👀 Número de visitas a este portafolio: 1

Después de recargar:

👀 Número de visitas a este portafolio: 2

El número permanece guardado mientras no se eliminen los datos de almacenamiento del sitio.

🖼️ Proyectos académicos

1.  Portafolio Web

Sitio web personal desarrollado con HTML y CSS para presentar información, habilidades y trabajos académicos.

Tecnologías: HTML, CSS y GitHub.

2.  Proyecto de Programación

Proyecto académico enfocado en lógica de programación, resolución de problemas y estructuras de control.

Conceptos: programación, lógica y algoritmos.

3.  Análisis de Datos

Proyecto orientado al análisis e interpretación de información mediante datos, gráficos y conclusiones.

Conceptos: análisis de datos, gráficos e interpretación de información.

📱 Diseño responsive

El portafolio está preparado para adaptarse a:

Computadoras.

Tablets.

Teléfonos celulares.

Se utilizan media queries para adaptar el contenido a diferentes tamaños de pantalla.

🌓 Modo oscuro

El sitio incluye un botón para cambiar entre:

☀️ Modo claro.

🌙 Modo oscuro.

La preferencia se guarda mediante LocalStorage.

🔝 Botón "Volver al inicio"

Cuando el usuario se desplaza hacia abajo aparece un botón para regresar suavemente al inicio.

🚀 Cómo ejecutar el proyecto

Descargar o clonar el repositorio.

Abrir la carpeta en Visual Studio Code.

Verificar que existan las carpetas css, js e imagenes.

Comprobar que index.html esté en la carpeta principal.

Abrir index.html en el navegador o utilizar Live Server.

🖼️ Imágenes

Las imágenes deben permanecer en:

imagenes/

Los nombres utilizados son:

foto.png mb.png proyecto1.png proyecto2.png proyecto3.png

## Estructura del proyecto

```text
PROGRAMACION WEB/
│
├── index.html
├─css
  estyle.CSS
├── js
   script.js
│
└── img/
    ├── foto.png
    ├── mb.png
    ├── proyecto1.png
    ├── proyecto2.png
    └── proyecto3.png
```