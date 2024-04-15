/*!
* Start Bootstrap - Shop Homepage v5.0.6 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
    // Mostrar el Toast al cargar la página
    document.addEventListener('DOMContentLoaded', function () {
        var saludoToast = new bootstrap.Toast(document.getElementById('saludoToast'));
        saludoToast.show();
    });

    /*mapa*/

    var map = L.map('mapa').setView([19.4327, -99.1331],16)

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    L.marker([19.4327, -99.1331]).addTo(map).bindPopup("Zócalo de la Ciudad de México")
    L.marker([19.4349, -99.1313]).addTo(map).bindPopup("Templo Mayor")

    map.on('click', onMapClick)

    function onMapClick(e){
        alert("Posicion: " + e.lating)
    }
    