function initMap() {
    var uluru = { lat: -25.344, lng: 131.036 };
    var map = new google.maps.Map(
        document.getElementById('map'), { zoom: 4, center: uluru });
    var marker = new google.maps.Marker({ position: uluru, map: map });
};



$(document).ready(function () {

    for (restaurante of restaurantes) {
        var img = $('<img></img>').attr('src', restaurante.image).val(restaurante.type);
        $(".restaurantes").append(img);
    }

    // $.each(restaurantes, function (key, valor) {
    //     console.table(restaurantes);

    // var nomeRestaurante = [];
    // nomeRestaurante.push("<li id='" + key + "'>" + valor.name + "</li>");
    // $(".restaurantes").append(nomeRestaurante[0]);

    // var latitudes = [];
    // latitudes.push(valor.latitude);
    // $(".teste").append(latitudes[0]);

    // var longitudes = [];
    // longitudes.push(valor.longitude);
    // $(".teste").append(longitudes[0]);

    // var tipo = [];
    // tipo.push("<li id = '" + key + "'>" + valor.type + "</li>");
    // $(".restaurantes").append(tipo[0]);

    // var descricao = [];
    // descricao.push("<li id = '" + key + "'>" + valor.description + "</li>");
    // $(".restaurantes").append(descricao[0]);

    //     var img = [];
    //     img.push("<img id='nomesRestaurantes' value='" + valor.type + "' src ='" + valor.image + "'>");
    //     $(".restaurantes").append(img);


    // });


    $('.filtrar').click(function () {
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
                $(this).fadeIn('slow')
            });


        }
    })
});
