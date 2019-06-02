$(document).ready(function () {
    const $location = $('#section-location');
    $('.location-map').hide();
    $('#location-hochiminh').show();

    $('.hochiminh-background').hover(() => {
        $('.location').removeClass('active');
        $('.hochiminh-background').addClass('location active');
        $('.location-map').hide();
        $('#location-hochiminh').show();
    });

    $('.hanoi-background').hover(() => {
        $('.location').removeClass('active');
        $('.hanoi-background').addClass('active');
        $('.location-map').hide();
        $('#location-hanoi').show();
    });

    $('.singapore-background').hover(() => {
        $('.location').removeClass('active');
        $('.singapore-background').addClass('active');
        $('.location-map').hide();
        $('#location-singapore').show();
    });

    $('.hochiminh-background').click(() => {
        $('.location').removeClass('active');
        $('.hochiminh-background').addClass('location active');
        $('.location-map').hide();
        $('#location-hochiminh').show();
    });

    $('.hanoi-background').click(() => {
        $('.location').removeClass('active');
        $('.hanoi-background').addClass('active');
        $('.location-map').hide();
        $('#location-hanoi').show();
    });

    $('.singapore-background').click(() => {
        $('.location').removeClass('active');
        $('.singapore-background').addClass('active');
        $('.location-map').hide();
        $('#location-singapore').show();
    });
});

