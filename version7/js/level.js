/*!
 * Level - Recording Studio (link)
 * Design by André Sontag Artigas
 * Code by Kevin Katzer
 */

function initMap() {
    var mapCanvas = document.getElementById('map');
    var mapOptions = {
        center: new google.maps.LatLng(-25.3812294, -49.2216299),
        zoom: 17,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        overviewMapControl: false,
        panControl: false,
        rotateControl: false,
        scaleControl: false,
        zoomControl: false,
        streetViewControl: false,
        mapTypeControl: false,
    }

    var map = new google.maps.Map(mapCanvas, mapOptions);

    var marker = new google.maps.Marker({
        map: map,
        draggable: false,
        position: new google.maps.LatLng(-25.3812376, -49.2216068),
        title: 'Rua Calixto de Jesus, 501 - Curitiba'
    })

    var info = new google.maps.InfoWindow({
        content: 'Rua Calixto de Jesus, 501 - Curitiba'
    })

    info.open(map, marker);
}

function initNav(scroll) {
    if (scroll > 200) {
        if (!($('#navbar').hasClass('in'))) {
            $('#navbar').collapse('show');
        }
    } else {
        if (($('#navbar').hasClass('in')) && !($('#navigation-menu').hasClass('trans'))) {
            $('#navbar').collapse('hide');
        }
    }
}

google.maps.event.addDomListener(window, 'load', initMap);
google.maps.event.addDomListener(window, 'resize', initMap);

$(document).ready(function () {
    $('#navigation').collapse({
        toggle: false
    });
    initNav($(window).scrollTop());
    $(window).scroll(function () {
        initNav($(window).scrollTop())
    });

    $("#view").click(function () {
        $('#navigation-menu').addClass('trans');
        $('#navigation-menu').collapse('hide');
        $('html, body').animate({
            scrollTop: $(".view").offset().top
        }, 2000, function () {
            $('#navigation-menu').removeClass('trans')
        });
    });
    $("#who").click(function () {
        $('#navigation-menu').addClass('trans');
        $('#navigation-menu').collapse('hide');
        $('html, body').animate({
            scrollTop: $(".who").offset().top - 50
        }, 2000, function () {
            $('#navigation-menu').removeClass('trans')
        });
    });
    $("#what").click(function () {
        $('#navigation-menu').addClass('trans');
        $('#navigation-menu').collapse('hide');
        $('html, body').animate({
            scrollTop: $(".what").offset().top - 50
        }, 2000, function () {
            $('#navigation-menu').removeClass('trans')
        });
    });
    $("#with").click(function () {
        $('#navigation-menu').addClass('trans');
        $('#navigation-menu').collapse('hide');
        $('html, body').animate({
            scrollTop: $(".with").offset().top - 50
        }, 2000, function () {
            $('#navigation-menu').removeClass('trans')
        });
    });
    $("#where").click(function () {
        $('#navigation-menu').addClass('trans');
        $('#navigation-menu').collapse('hide');
        $('html, body').animate({
            scrollTop: $(".where").offset().top - 50
        }, 2000, function () {
            $('#navigation-menu').removeClass('trans')
        });
    });
    $("#contact").click(function () {
        $('#navigation-menu').addClass('trans');
        $('#navigation-menu').collapse('hide');
        $('html, body').animate({
            scrollTop: $(".footer").offset().top - 50
        }, 2000, function () {
            $('#navigation-menu').removeClass('trans')
        });
    });
});
