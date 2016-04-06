var elem = new Foundation.Tabs($('#progressTabs'));

$('.scroll-link').on('click', function(e) {
    e.preventDefault();

    var href = $(this).attr('href');
    var pos = $(href).offset().top - 66;
    $('body, html').animate({
        scrollTop: pos,
    },1000);
});

$(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    if(scrollTop >= 100) {
        $('.navbar').addClass('active');
    } else {
        $('.navbar').removeClass('active');
    }

    $('.on-scroll').each(function() {
        var posTop = $(this).offset().top;
        var diff = posTop - scrollTop;
        if(diff <= 600) {
            $(this).addClass('in-view');
            var width = $(this).find('.current-progress').attr('progress');
            $(this).find('.current-progress').css('width', width);
        }
    });
});