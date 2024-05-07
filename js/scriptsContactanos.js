
$(document).ready(function () {
    // Evitar el envío automático del formulario al presionar "Enter"
    $(document).on("keypress", "form", function (event) { 
        return event.keyCode != 13;
    });

    $('#signupForm').validate({
        rules: {
            fullname: {
                required: true,
                minlength: 5
            },
            comments: {
                required: true
            },
            phone_number: {
                required: true,
                minlength: 10, // Cambiar a la longitud mínima de un número de teléfono
                digits: true // Asegurarse de que solo sean dígitos
            },
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            fullname: {
                required: "Por favor ingresa tu nombre completo",
                minlength: "Tu nombre debe ser de no menos de 5 caracteres"
            },
            comments: "Por favor ingresa un comentario",
            phone_number: {
                required: "Por favor ingresa un número de teléfono",
                minlength: "El número de teléfono debe tener al menos 10 dígitos",
                digits: "Por favor ingresa solo dígitos"
            },
            email: "Por favor ingresa un correo válido"
        },
        errorElement: "em",
        errorPlacement: function (error, element) {
            // Agregar la clase `help-block` al elemento de error y establecer el color rojo
            error.addClass("help-block");
            error.css("color", "red");

            if (element.prop("type") === "checkbox") {
                error.insertAfter(element.parent("label"));
            } else {
                error.insertAfter(element);
            }
        },
        highlight: function (element, errorClass, validClass) {
            $(element).parents(".form-floating").addClass("has-error").removeClass("has-success");
        },
        unhighlight: function (element, errorClass, validClass) {
            $(element).parents(".form-floating").addClass("has-success").removeClass("has-error");
        },
        submitHandler: function () {
            alert("¡Enviado correctamente!");
        }
    });
});