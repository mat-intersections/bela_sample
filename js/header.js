$(window).scroll(function(){
    if($(document).scrollTop() > 125)
    {
        $('#hero').addClass('shrink');
    } else {
            $('#hero').removeClass('shrink');
    }
});