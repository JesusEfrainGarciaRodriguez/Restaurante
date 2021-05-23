$(document).ready(function(){

    // Efecto parallax
    $(window).scroll(function(){
        var windowsWidth = $(window).width();
        if(windowsWidth > 800){
            var scroll = $(window).scrollTop();

            $('header .texto').css({
                'transform': 'translate(0px,'+scroll / 1.4 +'%)'
            });

            $('.acerca-de article').css({
                'transform': 'translate(0px,-'+ scroll / 6 +'%)'
            });
        }
    });

    // Restablecimiento al cambiar tamaño de pantalla
    $(window).resize(function(){
        var windowsWidth = $(window).width();
        if(windowsWidth < 800) {
            $('.acerca-de article').css({
                'transform': 'translate(0px, 0px)'
            });
        }
    });
});