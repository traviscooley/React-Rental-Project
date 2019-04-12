$(document).ready(function(){
    //  
    var scroll_pos = 0;
    $(document).scroll(function() { 
        scroll_pos = $(this).scrollTop();
        if(scroll_pos > 545) {
            $(".following-nav-bar").addClass('background-1').css('transition', 'all .5s ease-in').css('background', '#C03221');
        } else {
            $(".following-nav-bar").addClass('background-1').css('background', 'linear-gradient(to bottom, black, transparent)');
        }
    });
});