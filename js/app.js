function initMap() {
    var uluru = { lat: -25.344, lng: 131.036 };
    var map = new google.maps.Map(
        document.getElementById('map'), { zoom: 4, center: uluru });
    var marker = new google.maps.Marker({ position: uluru, map: map });
};

$(document).ready(function () {

    $('.filtrar').click(function () {
        var inputValue = $('.texto-input').val();

        $("li").each(function () {
            if ($(this).text() !== inputValue) {
                $(this).fadeOut('slow');
            }
        });
    })

    $('.texto-input').on('input', function () {
        if ($(this).val() === "") {
            $("li").each(function () {
                $(this).fadeIn('slow')
            });
        }
    })
});

$.each(restaurantes, function (key, valor) {
    console.table(restaurantes);

    var nomeRestaurante = [];
    nomeRestaurante.push("<li id='" + key + "'>" + valor.name + "</li>");
    $(".restaurantes").append(nomeRestaurante[0]);

    var latitudes = [];
    latitudes.push(valor.latitude);
    $(".teste").append(latitudes[0]);

    var longitudes = [];
    longitudes.push(valor.longitude);
    $(".teste").append(longitudes[0]);

    var tipo = [];
    tipo.push("<p id = '" + key + "'>" + valor.type + "</p>");
    $(".restaurantes").append(tipo[0]);

    var descricao = [];
    descricao.push("<p id = '" + key + "'>" + valor.description + "</p>");
    $(".restaurantes").append(descricao[0]);

    var img = [];
    img.push("<img id='nomesRestaurantes' src ='" + valor.image + "'>");
    $(".restaurantes").append(img[0]);


});

function filktrao(restaurantes, key) {
    return restaurantes.map(function (restaurante) {
        return restaurante[key];
    })
}


