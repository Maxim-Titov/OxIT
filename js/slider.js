$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        infinite: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 10000,
        arrows: false
    });
});

$(document).ready(function(){
    $('.mentors-slider').slick({
        dots: true,
        infinite: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 10000,
        arrows: false
    });
});

$(document).ready(function(){
    $('.about-mob').slick({
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 10000,
        mobileFirst: true,
        slidesToShow: 1,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 601,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });
});