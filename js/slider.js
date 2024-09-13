$(document).ready(function() {
    const slickSettings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 10000,
        arrows: false
    };

    $('.slider, .mentors-slider').slick({
        ...slickSettings,
        fade: true
    });

    $('.about-mob').slick({
        ...slickSettings,
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
