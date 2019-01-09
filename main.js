$(document).ready(function(){

    //smooth scrolling
    $('.scroll').click(function(e){
        e.preventDefault();
        $('body,html').animate({scrollTop: $(this.hash).offset().top - 100},1000);
    })

    //Active link switching
    $(window).scroll(function(){
        var scrollbarLocation = $(this).scrollTop();

        $('.scroll').each(function() {
            var sectionOffset = $(this.hash).offset().top - 105;

            if(sectionOffset <= scrollbarLocation) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        })
    })

    //scroll on clicking down arrow
    $('.arrow-down').click(function(){
        $('body,html').animate({scrollTop: $('.about-me').offset().top - 100}, 1000);
    })

    //side menu toggle
    $('.side-menu-opener').click(function(){
        $('.navbar .navbar-nav, .side-menu-opener-inner').toggleClass('active');
    })

})