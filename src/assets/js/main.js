// owl 

$('.depertment').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

$('.featured').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})

$('.bestSeller').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})
$('.specialProducts').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})
$('.newArrivalProducts').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})
$('.dealDay').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
})
$('.dealDay1').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
$('.dealDay2').owlCarousel({
    loop:true,
    nav:false,
    dots: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
$('.dealDay3').owlCarousel({
    loop:true,
    nav:false,
    dots: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

// scroll

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 75) {
        $(".header").addClass("header-fixed");
        //$(".btn-catagory").removeClass("show");
    } else {
        $(".header").removeClass("header-fixed");
        //$(".btn-catagory").addClass("show");
    }
});

// Slider

$('.carousel').carousel({
    interval: 4000
})

// dropdown 

$(".btn-catagory").click(function(){
  $(".btn-catagory").toggleClass("show");
});

//add to cart

$(".cart-btn").click(function(){
  $(".short-cart").hide();
  $(".details-cart").show();
});

$(".close-cart").click(function(){
  $(".details-cart").hide();
  $(".short-cart").show();
});