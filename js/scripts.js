document.addEventListener("DOMContentLoaded", function () {
    var saludoToast = new bootstrap.Toast(document.getElementById("saludoToast"));
    saludoToast.show();
});
$(document).ready(function () {
    $("#show-password").click(function () {
        if ($(this).is(":checked")) {
            $("#password").attr("type", "text");
        } else {
            $("#password").attr("type", "password");
        }
    });
});
$(document).ready(function () {
    $("#show-password").click(function () {
        if ($(this).is(":checked")) {
            $("#password2").attr("type", "text");
        } else {
            $("#password2").attr("type", "password");
        }
    });
});
$(document).ready(function () {
    $("#contactForm").validate({
        rules: {
            FormNombre: {
                required: true,
                minlenght: 5,
            },
            FormEmail: {
                required: true,
            },
            FormNumero: {
                required: true,
                minlenght: 9,
            },
            FormMensaje: {
                minlenght: 20,
            },
        },
    });
});
//Api de mapa sobre nosotros
let map = L.map("map").setView([-33.49998, -70.61661], 17);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([-33.49998, -70.61661]).addTo(map).bindPopup("Sucursal Matriz");

map.on("click", onMapClick);

function onMapClick(e) {
    alert("Sucursal matriz de rebidon.");
}
//Api de mapa sobre nosotros

//Validacion de correo electronico
function validarInicioSesion() {
    let correo = document.getElementById("inputcorreo1").value;
    let contraseña = document.getElementById("inputPassword").value;

    if (!validarCorreo(correo)) {
        mostrarError(
            "errorCorreo",
            "Por favor ingresa un correo electrónico válido."
        );
        return false;
    } else {
        ocultarError("errorCorreo");
    }

    // Validación de contraseña
    if (!validarContraseña(contraseña)) {
        mostrarError(
            "errorContraseña",
            "La contraseña debe tener al menos 8 caracteres."
        );
        return false;
    } else {
        ocultarError("errorContraseña");
    }

    return true;
}

function validarCorreo(correo) {
    let re = /\S+@\S+\.\S+/;
    return re.test(correo);
}

function validarContraseña(contraseña) {
    return contraseña.length >= 8;
}

function mostrarError(id, mensaje) {
    let elemento = document.getElementById(id);
    elemento.textContent = mensaje;
    elemento.style.display = "block";
}

function ocultarError(id) {
    var elemento = document.getElementById(id);
    elemento.style.display = "none";
}
//Validacion de correo electronico
//Validacion de registro
function validarRegistro() {
    let nombre = document.getElementById("inputnombre").value;
    let correo = document.getElementById("inputcorreo2").value;
    let contraseña = document.getElementById("password").value;
    let contraseñaRepetida = document.getElementById("password2").value;

    if (!validarCorreo(correo)) {
        mostrarError(
            "errorCorreo",
            "Por favor ingresa un correo electrónico válido."
        );
        return false;
    } else {
        ocultarError("errorCorreo");
    }

    if (!validarContraseña(contraseña)) {
        mostrarError(
            "errorContraseñaRegistro",
            "La contraseña debe tener al menos 8 caracteres."
        );
        return false;
    } else {
        ocultarError("errorContraseñaRegistro");
    }

    if (contraseña !== contraseñaRepetida) {
        mostrarError("errorContraseñaRepetida", "Las contraseñas no coinciden.");
        return false;
    } else {
        ocultarError("errorContraseñaRepetida");
    }

    return true;
}

function validarCorreo(correo) {
    let re = /\S+@\S+\.\S+/;
    return re.test(correo);
}

function validarContraseña(contraseña) {
    return contraseña.length >= 8;
}

function mostrarError(id, mensaje) {
    let elemento = document.getElementById(id);
    elemento.textContent = mensaje;
    elemento.style.display = "block";
}

function ocultarError(id) {
    let elemento = document.getElementById(id);
    elemento.style.display = "none";
}
//Validacion de registro
//validacion de recuperacion
function validarRecuperacion() {
    let correo = document.getElementById("inputcorreo3").value;
    let terminos = document.getElementById("flexCheckDefault").checked;

    if (!validarCorreo(correo)) {
        mostrarError(
            "errorCorreoRecuperacion",
            "Por favor ingresa un correo electrónico válido."
        );
        return false;
    } else {
        ocultarError("errorCorreoRecuperacion");
    }
}
