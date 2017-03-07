$(document).ready(function () {
    $('.projects-container a').hover(
        function () {
            $(this).children().next().addClass('describe');
        },
        function () {
            $(this).children().next().removeClass('describe');
        }
    );
    
    
    $('<img src="images/bg1.jpg" alt="" id="bg">').appendTo('.bg-image');

    var $window = $(window),
        $img = $('#bg'),
        $project = $('#project'),
        $about = $('#about');


    $window.scroll(function() {
        if ($window.scrollTop() > $project.offset().top) {
            $img.attr('src','images/bg2.jpg');
            if($window.scrollTop() > $about.offset().top){
                $img.attr('src','images/bg3.jpg');
            }
        }else {
            $img.attr('src','images/bg1.jpg');
        }

    });
});

