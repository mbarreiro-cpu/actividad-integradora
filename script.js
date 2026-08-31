"use strict";

/* ==========================================================
   PORTAFOLIO PERSONAL - ACTIVIDAD INTEGRADORA 2
   JavaScript:
   - Eventos
   - Manipulación del DOM
   - Funciones
   - Condicionales
   - Validación de formulario
   - Funcionalidad adicional
   - LocalStorage
   - Contador de visitas
   ========================================================== */


/* ==========================================================
   1. SELECCIÓN DE ELEMENTOS DEL HTML
   ========================================================== */

const body = document.body;

const themeToggle = document.getElementById("themeToggle");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

const profileButton = document.getElementById("profileButton");
const profileMessage = document.getElementById("profileMessage");

const projectCards = document.querySelectorAll(".project-card");
const projectMessage = document.getElementById("projectMessage");

const contactForm = document.getElementById("contactForm");

const nombreInput = document.getElementById("nombre");
const correoInput = document.getElementById("correo");
const mensajeInput = document.getElementById("mensaje");

const nombreError = document.getElementById("nombreError");
const correoError = document.getElementById("correoError");
const mensajeError = document.getElementById("mensajeError");

const formStatus = document.getElementById("formStatus");

const welcomeMessage = document.getElementById("welcomeMessage");

const visitCounter = document.getElementById("visitCounter");

const backToTop = document.getElementById("backToTop");

const currentYear = document.getElementById("currentYear");


/* ==========================================================
   2. CAMBIAR TEMA
   ========================================================== */

function cambiarTema() {

    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {

        themeToggle.textContent = "☀️";

        themeToggle.setAttribute(
            "aria-label",
            "Activar modo claro"
        );

        // Guardar preferencia en LocalStorage
        localStorage.setItem("tema", "oscuro");

    } else {

        themeToggle.textContent = "🌙";

        themeToggle.setAttribute(
            "aria-label",
            "Activar modo oscuro"
        );

        // Guardar preferencia en LocalStorage
        localStorage.setItem("tema", "claro");
    }
}


/* ==========================================================
   3. CARGAR TEMA GUARDADO
   ========================================================== */

function cargarTema() {

    const temaGuardado = localStorage.getItem("tema");

    if (temaGuardado === "oscuro") {

        body.classList.add("dark-mode");

        themeToggle.textContent = "☀️";

        themeToggle.setAttribute(
            "aria-label",
            "Activar modo claro"
        );

    } else {

        body.classList.remove("dark-mode");

        themeToggle.textContent = "🌙";

        themeToggle.setAttribute(
            "aria-label",
            "Activar modo oscuro"
        );
    }
}


/* ==========================================================
   4. MOSTRAR Y OCULTAR PRESENTACIÓN
   ========================================================== */

function mostrarPresentacion() {

    if (profileMessage.hidden) {

        profileMessage.textContent =
            "¡Hola! Soy Meily Milena. Gracias por visitar mi portafolio académico.";

        profileMessage.hidden = false;

        profileButton.textContent =
            "Ocultar presentación";

    } else {

        profileMessage.textContent = "";

        profileMessage.hidden = true;

        profileButton.textContent =
            "Mostrar presentación";
    }
}


/* ==========================================================
   5. ABRIR Y CERRAR MENÚ
   ========================================================== */

function abrirMenu() {

    const menuAbierto =
        navLinks.classList.toggle("open");

    menuToggle.setAttribute(
        "aria-expanded",
        menuAbierto
    );

    if (menuAbierto) {

        menuToggle.textContent = "✕";

    } else {

        menuToggle.textContent = "☰";
    }
}


/* ==========================================================
   6. VALIDAR NOMBRE
   ========================================================== */

function validarNombre() {

    if (nombreInput.value.trim() === "") {

        nombreInput
            .closest(".form-group")
            .classList.add("invalid");

        nombreError.textContent =
            "El nombre es obligatorio.";

        return false;

    } else {

        nombreInput
            .closest(".form-group")
            .classList.remove("invalid");

        nombreError.textContent = "";

        return true;
    }
}


/* ==========================================================
   7. VALIDAR CORREO
   ========================================================== */

function validarCorreo() {

    const patronCorreo =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (correoInput.value.trim() === "") {

        correoInput
            .closest(".form-group")
            .classList.add("invalid");

        correoError.textContent =
            "El correo electrónico es obligatorio.";

        return false;


    } else if (
        !patronCorreo.test(
            correoInput.value.trim()
        )
    ) {

        correoInput
            .closest(".form-group")
            .classList.add("invalid");

        correoError.textContent =
            "Ingresa un correo electrónico válido.";

        return false;


    } else {

        correoInput
            .closest(".form-group")
            .classList.remove("invalid");

        correoError.textContent = "";

        return true;
    }
}


/* ==========================================================
   8. VALIDAR MENSAJE
   ========================================================== */

function validarMensaje() {

    if (mensajeInput.value.trim() === "") {

        mensajeInput
            .closest(".form-group")
            .classList.add("invalid");

        mensajeError.textContent =
            "El mensaje es obligatorio.";

        return false;

    } else {

        mensajeInput
            .closest(".form-group")
            .classList.remove("invalid");

        mensajeError.textContent = "";

        return true;
    }
}


/* ==========================================================
   9. GUARDAR NOMBRE EN LOCALSTORAGE
   ========================================================== */

function guardarNombre() {

    const nombre =
        nombreInput.value.trim();

    localStorage.setItem(
        "nombreVisitante",
        nombre
    );
}


/* ==========================================================
   10. RECUPERAR NOMBRE GUARDADO
   ========================================================== */

function cargarNombre() {

    const nombreGuardado =
        localStorage.getItem("nombreVisitante");


    if (nombreGuardado) {

        welcomeMessage.textContent =
            `¡Bienvenida/o nuevamente, ${nombreGuardado}! Gracias por visitar mi portafolio.`;
    }
}


/* ==========================================================
   11. CONTADOR DE VISITAS
   ========================================================== */

function contarVisitas() {

    // Obtener visitas almacenadas
    let visitas =
        localStorage.getItem("contadorVisitas");


    // Si no existen visitas, comienza en 1
    if (visitas === null) {

        visitas = 1;

    } else {

        // Convertir el valor a número
        // y aumentar una visita
        visitas = Number(visitas) + 1;
    }


    // Guardar el nuevo número de visitas
    localStorage.setItem(
        "contadorVisitas",
        visitas
    );


    // Mostrar el contador en la página
    if (visitCounter) {

        visitCounter.textContent =
            `👀 Número de visitas a este portafolio: ${visitas}`;
    }
}


/* ==========================================================
   12. ENVIAR Y VALIDAR FORMULARIO
   ========================================================== */

function enviarFormulario(evento) {

    // Evitar que la página se recargue
    evento.preventDefault();


    // Ejecutar las validaciones
    const nombreValido =
        validarNombre();

    const correoValido =
        validarCorreo();

    const mensajeValido =
        validarMensaje();


    /* ------------------------------------------------------
       ESTRUCTURA DE CONTROL IF / ELSE
       ------------------------------------------------------ */

    if (
        nombreValido &&
        correoValido &&
        mensajeValido
    ) {

        // Guardar nombre
        guardarNombre();


        // Mostrar mensaje de éxito
        formStatus.textContent =
            `¡Gracias, ${nombreInput.value.trim()}! Tu mensaje fue validado correctamente.`;

        formStatus.className =
            "form-status success";


        // Actualizar mensaje de bienvenida
        welcomeMessage.textContent =
            `¡Hola, ${nombreInput.value.trim()}! Tu nombre ha sido guardado en LocalStorage.`;


        // Limpiar formulario
        contactForm.reset();


        // Limpiar posibles mensajes de validación
        nombreError.textContent = "";
        correoError.textContent = "";
        mensajeError.textContent = "";


    } else {

        // Mostrar mensaje de error
        formStatus.textContent =
            "Por favor, completa correctamente todos los campos.";

        formStatus.className =
            "form-status error";
    }
}


/* ==========================================================
   13. INTERACCIÓN CON LOS PROYECTOS
   ========================================================== */

projectCards.forEach(function (card) {


    /* ------------------------------------------------------
       EVENTO MOUSEOVER
       ------------------------------------------------------ */

    card.addEventListener(
        "mouseover",
        function () {

            card.classList.add("highlighted");


            const proyecto =
                card.getAttribute(
                    "data-project"
                );


            if (projectMessage) {

                projectMessage.textContent =
                    `Estás viendo: ${proyecto}`;
            }
        }
    );


    /* ------------------------------------------------------
       EVENTO MOUSEOUT
       ------------------------------------------------------ */

    card.addEventListener(
        "mouseout",
        function () {

            card.classList.remove(
                "highlighted"
            );


            if (projectMessage) {

                projectMessage.textContent =
                    "Pasa el cursor sobre un proyecto para interactuar.";
            }
        }
    );

});


/* ==========================================================
   14. EVENTO INPUT
   ========================================================== */

// Validar nombre mientras escribe
nombreInput.addEventListener(
    "input",
    function () {

        validarNombre();
    }
);


// Validar correo mientras escribe
correoInput.addEventListener(
    "input",
    function () {

        validarCorreo();
    }
);


// Validar mensaje mientras escribe
mensajeInput.addEventListener(
    "input",
    function () {

        validarMensaje();
    }
);


/* ==========================================================
   15. EVENTO KEYUP
   ========================================================== */

mensajeInput.addEventListener(
    "keyup",
    function () {

        const cantidad =
            mensajeInput.value.length;


        if (cantidad > 0) {

            mensajeError.textContent =
                `${cantidad} caracteres escritos.`;

        } else {

            mensajeError.textContent = "";
        }
    }
);


/* ==========================================================
   16. BOTÓN VOLVER AL INICIO
   ========================================================== */

function controlarBotonInicio() {

    if (window.scrollY > 400) {

        backToTop.classList.add(
            "show"
        );

    } else {

        backToTop.classList.remove(
            "show"
        );
    }
}


function volverAlInicio() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* ==========================================================
   17. EVENTOS CLICK
   ========================================================== */

// Modo oscuro
themeToggle.addEventListener(
    "click",
    cambiarTema
);


// Presentación
profileButton.addEventListener(
    "click",
    mostrarPresentacion
);


// Menú
menuToggle.addEventListener(
    "click",
    abrirMenu
);


// Volver al inicio
backToTop.addEventListener(
    "click",
    volverAlInicio
);


/* ==========================================================
   18. CERRAR MENÚ AL SELECCIONAR UNA OPCIÓN
   ========================================================== */

navLinks.addEventListener(
    "click",
    function (evento) {

        if (
            evento.target.tagName === "A"
        ) {

            navLinks.classList.remove(
                "open"
            );

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.textContent = "☰";
        }
    }
);


/* ==========================================================
   19. EVENTO SUBMIT
   ========================================================== */

contactForm.addEventListener(
    "submit",
    enviarFormulario
);


/* ==========================================================
   20. EVENTO SCROLL
   ========================================================== */

window.addEventListener(
    "scroll",
    controlarBotonInicio
);


/* ==========================================================
   21. MOSTRAR AÑO ACTUAL
   ========================================================== */

currentYear.textContent =
    new Date().getFullYear();


/* ==========================================================
   22. INICIALIZAR TODAS LAS FUNCIONES
   ========================================================== */

cargarTema();

cargarNombre();

contarVisitas();

controlarBotonInicio();