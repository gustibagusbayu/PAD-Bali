$(document).ready(function(){
    // mencari elemen link dengan class scroll dengan event click
    $(".scroll").on('click', function(event) {
        // ambil id tiap link yang diklik
        var href = $(this).attr('href');

        // ambil element yang diklik
        var elementHref = $(href);
        
        // menambahkan animasi scrolling
        $('html, body').animate({
            scrollTop: elementHref.offset().top - 60
        }, 1000, 'swing');

    });
});