$(document).ready(function() {
	var $img = $('.bg-image'),
	$project = $('#project'),
        $about = $('#about');

	if ($window.scrollTop() > $project.offset().top) {
            $img.css('background-image','url(../images/bg2.jpg)');
            if($window.scrollTop() > $about.offset().top){
                $img.css('background-image','url(../images/bg3.jpg)');
            }

        }else {
            $img.css('background-image','url(../images/bg1.jpg)');
        }
});