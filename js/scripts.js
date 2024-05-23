document.addEventListener('DOMContentLoaded', function () {
    var saludoToast = new bootstrap.Toast(document.getElementById('saludoToast'));
    saludoToast.show();
});
$(document).ready(function() {
    $('#show-password').click(function() {
        if ($(this).is(':checked')) {
            $('#password').attr('type', 'text');
        } else {
            $('#password').attr('type', 'password');
        }
    });
});
$(document).ready(function() {
    $('#show-password').click(function() {
        if ($(this).is(':checked')) {
            $('#password2').attr('type', 'text');
        } else {
            $('#password2').attr('type', 'password');
        }
    });
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
let map = L.map('map').setView([-33.49998,-70.61661], 17)

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([-33.49998,-70.61661]).addTo(map).bindPopup("Sucursal Matriz")

        map.on('click', onMapClick)

        function onMapClick(e) {
            alert("Sucursal matriz de rebidon.")
        }