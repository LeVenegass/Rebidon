/*!
* Start Bootstrap - Shop Homepage v5.0.6 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
document.addEventListener('DOMContentLoaded', function () {
    var saludoToast = new bootstrap.Toast(document.getElementById('saludoToast'));
    saludoToast.show();
});

$(document).ready(function(){
    $('#contactForm').validate({
        rules: {
            FormNombre: {
                required: true,
                minlenght: 5
            },
            FormEmail : {
                required: true
            },
            FormNumero: {
                required: true,
                minlenght: 9
            },
            FormMensaje :{
                minlenght: 20
            }
        }

    })
})