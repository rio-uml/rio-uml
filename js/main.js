(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });


    // Hero Header carousel
    $(".header-carousel").owlCarousel({
        animateOut: 'slideOutDown',
        items: 1,
        autoplay: true,
        smartSpeed: 1000,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
    });


    // International carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        items: 1,
        smartSpeed: 1500,
        dots: true,
        dotsData: true,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ]
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
    });

    
    
   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    function myMove() {
        let id = null;
        const elem = document.getElementById("animate");   
        let pos = 0;
        clearInterval(id);
        id = setInterval(frame, 5);
        function frame() {
          if (pos == 350) {
            clearInterval(id);
          } else {
            pos++; 
            elem.style.top = pos + "px"; 
            elem.style.left = pos + "px"; 
          }
        }
      }


   

})(jQuery);

// Navbar Scripts
function checkAndChangeNav(){
    if(window.matchMedia("(max-width: 992px)").matches){
        $("#navmenu").removeClass("nav-bg-light").addClass("nav-bg-light");
        $("#project-scope-left").removeClass("order-last").addClass("order-last");
    } else {
        $("#navmenu").removeClass("nav-bg-light");
        $("#project-scope-left").removeClass("order-last");

    }
}

function handleNavonScroll(){
    if(!window.matchMedia("(max-width: 992px)").matches){
        if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
            $("#navmenu").removeClass("nav-bg-light").addClass("nav-bg-light");
        } else {
            $("#navmenu").removeClass("nav-bg-light");
        }
    }
}

$(function() {
    $('#nav-toggle').click(function() {
      if($('#nav-toggle-icon').hasClass("fa-ellipsis-v")){
        $("#nav-toggle-icon").removeClass("fa-ellipsis-v").addClass("fa-times")
      } else {
        $("#nav-toggle-icon").removeClass("fa-times").addClass("fa-ellipsis-v")
      }
    });
});

checkAndChangeNav();
window.onresize = checkAndChangeNav;
window.onscroll = handleNavonScroll;

// Nav Smooth Scroll
// Cache selectors
var topMenu = $("#navmenu-links"),
    topMenuHeight = topMenu.outerHeight()+15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function () {
        var id = $(this).attr("href");
        try {
            var item = $(id);
          if (item.length) {
            return item;
          }
        } catch {}
      });

// Bind to scroll
// $(window).scroll(function(){
//    // Get container scroll position
//    var fromTop = $(this).scrollTop()+topMenuHeight;

//    // Get id of current scroll item
//    var cur = scrollItems.map(function(){
//      if ($(this).offset().top < fromTop)
//        return this;
//    });
//    // Get the id of the current element
//    cur = cur[cur.length-1];
//    var id = cur && cur.length ? cur[0].id : "";
//    // Set/remove active class
//    menuItems
//      .parent().removeClass("active")
//      .end().filter("[href='#"+id+"']").parent().addClass("active");
// });​

$(window).scroll(function(){
    // Get Container Scroll Position
    var fromTop = $(this).scrollTop() + topMenuHeight;

    // Get Id of current scroll item
    var current = scrollItems.map(function(){
        if($(this).offset().top < fromTop){
            return this;
        }
    });
    // Get id of the current element
    current = current[current.length - 1];
    var id = current && current.length ? current[0].id : "";

    // Set or Remove active class
    menuItems.parent().removeClass("active")
    .end().filter("[href='#"+id+"']").parent().addClass("active");

    // If menu has a dropdown, select parent menu
    var currentSetMenu = menuItems.filter("[href='#"+id+"']").parent();
    if(currentSetMenu.hasClass("dropdown-menu")){
        currentSetMenu.parent().addClass("active");
    }
})

// Hero Image Spotlight
$(document).mousemove(function(e){
    var x = e.pageX;
    var y = e.pageY;

    $('.spotlight-image').css('clip-path', 'circle(20% at '+x+'px '+y+'px)');
})

// Home section height
let homeSectionHeight = $('#home').height() - 70;
console.log(homeSectionHeight)
$('#project-scope').css('margin-top', homeSectionHeight + 'px')
// $('#project-scope').css('height', homeSectionHeight + 'px')