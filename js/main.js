$(document).ready(function() {
    $('#menu').click(function(){
        alert('clicked');
        $('html,body').animate({
            scrollTop: $(nav).offset().top},
        'slow');
    });
});


