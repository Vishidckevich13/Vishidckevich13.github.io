$(function() {
   
    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window);

        checkScroll(scrollOffset);

    /* Выплывающее меню при скролле */

    $(window).on("scroll", function() {


        scrollOffset = $(this).scrollTop();
        if( scrollOffset >= 150 ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    });

    function checkScroll(scrollOffset) {
        scrollOffset = $(this).scrollTop();
        if( scrollOffset >= 100 ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }
    /* Плавный скролл к якорям */

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this)
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top - 100;
        
        $("nav a").removeClass("active");
        $this.addClass("active");


        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);
    });


    /* Meu Av toggle */
    $("#nav_toggle").on ("click", function(event) {
        event.preventDefault();
        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });


    /* Modal */

    const modalCall = $("[data-modal]");
    const modalClose = $("[data-close]");

    modalCall.on("click", function(event) {
        event.preventDefault();

        let $this = $(this);
        let modalId = $this.data('modal');

        $(modalId).addClass('show');
        $("body").addClass('no-scroll');
        $("header").removeClass('fixed');
       
    });

    modalClose.on("click", function(event) {
        event.preventDefault();

        let $this = $(this);
        let modalParent = $this.parents('.modal');

        $(".modal__bg").removeClass('show');
        $("body").removeClass('no-scroll');
        $("header").addClass('fixed');
       
    });

});