
function initMap() {
    var uluru = { lat: -25.344, lng: 131.036 };
    var map = new google.maps.Map(
        document.getElementById('map'), { zoom: 4, center: uluru });
    var marker = new google.maps.Marker({ position: uluru, map: map });
};

$(document).ready(function () {
    $('.home-page-inicial').fadeOut(4000);

    for (restaurante of restaurantes) {
        var img = $('<img></img>').attr('src', restaurante.image).attr('name', restaurante.name).attr('description', restaurante.description).val(restaurante.type);
        $(".restaurantes").append(img);
    }

    var filtro = $('.button-filtrar').click(function () {
        var inputValue = $('.texto-input').val();

        $("img").each(function () {
            if ($(this).val() !== inputValue) {
                $(this).fadeOut('slow');
            } else {
                $(this).fadeIn('slow');
            }
        });

    })

    $('.texto-input').on('input', function () {
        if ($(this).val() === "") {
            $("img").each(function () {
                $(this).fadeIn('slow');
            });
        }
    })

    $('img').click(function (e) {

        var nomeRestaurante = e.target.getAttribute('name');
        var imagemRestaurante = e.target.getAttribute('src');
        var descricaoRestaurante = e.target.getAttribute('description');

        var img = $('<img></img>').attr('src', imagemRestaurante);
        var nome = $('<p></p>').text(nomeRestaurante);
        var descricao = $('<p></p>').text(descricaoRestaurante);

        $(".modal-title").append(nome);
        $(".modal-title").append(img);
        $(".modal-body").append(descricao);
    });

});



