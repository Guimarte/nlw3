const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl:false
}



let map = L.map('mapid', options).setView([ -23.413 , -46.4445], 15);



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




//Cria e add um marcador
L.marker([-23.413 , -46.4445], {icon}).addTo(map)
    
    

/*Galeria de imagem*/
function selectImage(event){
    const button = event.currentTarget
    
    /*Remover Classe active*/
const buttons = document.querySelectorAll(".images button")
buttons.forEach(removeActiveClass) //para cada botão ele vai fazer essa ação


function removeActiveClass(button){
    button.classList.remove("active")


}


console.log(buttons)

    //selecionar a imagem clicada

    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")


    // atualizar o container de imagem
imageContainer.src = image.src
    // adicionar a classe .active para o botao clicado
     button.classList.add("active")
}