//funtion to sroll to bottom navigation when viewed on smartphones
$(document).ready(function() {
    $('#menu').click(function(){
        $('html,body').animate({
            scrollTop: $('nav').offset().top},
        'slow');
    });
});


