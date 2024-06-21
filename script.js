// Parallax effect elements
const hill1 = document.getElementById('hill1');
const hill2 = document.getElementById('hill2');
const hill3 = document.getElementById('hill3');
const hill4 = document.getElementById('hill4');
const hill5 = document.getElementById('hill5');
const tree = document.getElementById('tree');
const leaf = document.getElementById('leaf');
const plant = document.getElementById('plant');

// Parallax effect
window.addEventListener('scroll', () => {
    let value = window.scrollY;

    hill1.style.top = value * 0.5 + 'px';
    hill2.style.left = -value * 0.5 + 'px';
    hill3.style.left = value * 0.5 + 'px';
    hill4.style.left = -value * 0.5 + 'px';
    hill5.style.left = value * 0.5 + 'px';
    tree.style.top = value * 0.15 + 'px';
    leaf.style.left = value * 1.5 + 'px';
    leaf.style.top = value * -1.5 + 'px';
    plant.style.top = value * 0.15 + 'px';
});

$(document).ready(function () {
    $(window).scroll(function () {
      if (this.scrollY > 20) {
        $('.navbar').addClass("sticky");
      } else {
          $('.navbar').removeClass("sticky");
  
      }
      if(this.scrollY > 500)
        {
            $('.scroll-up-btn').addClass("show");

        }
        else{
            $('.scroll-up-btn').removeClass("show");
        }
    });


    //slide up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

    //typing animation
    var typed = new Typed(".typing", {
        strings: ["We Provide","All solutions","Under one","Roof"],
        typeSpeed: 100,
        backSpeed:60,
        loop:true
    });
    var typed = new Typed(".typing-2", {
        strings: ["CCTV", "ASSESS CONTROL SYSTEM", "DATA VOICE", "DATA CENTRE SOLUTIONS", "AUDIO VIDEO CONFERENCING SOLUTIONS"],
        typeSpeed: 100,
        backSpeed:60,
        loop:true
    });




    //toggle menu/navbar script
    $('.menu-btn').click(function()
    {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    //typing animation


    //owl carosuel

    $('.carousel').owlCarousel({
        margin:20,
        loop:true,
        autoplayTimeOut:2000,
        autoplayHoverPause:true,
        responsive: {
            0:{
                items:1,
                nav: false
            },
            600:{
                items:2,
                nav: false
            },
            1000:{
                items:3,
                nav: false
            }
        }
    });
  });
  