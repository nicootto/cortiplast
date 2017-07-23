// preloader
$(window).load(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets
});

$(function() {
    new WOW().init();
    $('.templatemo-nav').singlePageNav({
    	offset: 70
    });

    /* Hide mobile menu after clicking on a link
    -----------------------------------------------*/
    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });
})

$(function() {
    var img =
        [
            '/images/img1.jpg',
            '/images/img2.jpg',
            '/images/img3.jpg'
        ]
    var current = 0;

    setInterval(switchImg, 5000);

    function switchImg (){
        current = (current + 1) % 3;
        $('#home').css("background-image", 'url(' + img[current] + ')');
    };
});
