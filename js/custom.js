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
    // Only for desktio divices.
    if(document.documentElement.clientWidth > 640) {
        var img =
            [
                'https://github.com/nicootto/cortiplast/blob/master/images/img1.jpg?raw=true',
                'https://github.com/nicootto/cortiplast/blob/master/images/img2.jpg?raw=true',
                'https://github.com/nicootto/cortiplast/blob/master/images/img3.jpg?raw=true'
            ]

        // start preloading
        for(i=0; i<3; i++)
        {
            console.log("cargo");
             (new Image).src = img[i];
        }

        setInterval(switchImg, 5000);

        current = 0;
        function switchImg (){
            current = (current + 1) % 3;
            $('#home').css("background-image", 'url(' + img[current] + ')');
        };
    };
});
