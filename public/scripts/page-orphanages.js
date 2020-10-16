let map = L.map('mapid').setView([ -23.413 , -46.4445], 15);


//Cria e add um tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
}).addTo(map);

//criar icone

const icon = L.icon({
    iconUrl : './public/images/map-marker.svg',
    iconSize : [58,68],
    iconAnchor: [29,68],
    popupAnchor:[170,2]

})

//Criar popup overlay

const popup = L.popup({

    closeButton:false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240


}).setContent('Lar das Meninas <a href="orphanage.html?id=1" class="choose-orphanage"> <img src="./public/images/arrow-white.svg" > </a>')


//Cria e add um marcador
L.marker([-23.413 , -46.4445], {icon}).addTo(map)
    .bindPopup(popup)
    