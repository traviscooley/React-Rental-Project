$(document).ready(function(){
    var scroll_pos = 0;
    $(document).scroll(function() {
        scroll_pos = $(this).scrollTop();
        if ($('.following-nav-bar').length) {            
            if(scroll_pos > 545) {
                $(".nav-bar").addClass('nav-background');
            } else {
                $(".nav-bar").removeClass('nav-background');
            }
        }
    });
    $('.nav-bar li a').on('click', function(){
        $('.nav-bar').addClass('nav-background');
    });
});