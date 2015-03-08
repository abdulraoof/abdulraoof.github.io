$( document ).ready(function() {
    $('span#menu').click(function(){
        console.log('clicked');
        $('html,body').animate({
            scrollTop: $('nav').offset().top},
        'slow');
    });
});


