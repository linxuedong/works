$(document).ready(function () {
    // alert($('.projects-container a').children().next().text());
    // $('.projects-container a').hover(
    //     function () {
    //         // $(this).next().removeClass('text-hide');
    //         $(this).children().next().addClass('describe');
    //     },
    //     function () {
    //         $(this).children().next().removeClass('describe');
    //         // $(this).next().addClass('text-hide');
    //     }
    // );

    var $window = $(window),
        $img = $('#bg img'),
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

