/*!
 * GRIDDER (http://www.oriongunning.com/)
 * Version 1.1
 * This work is licensed under a Creative Commons Attribution 3.0 Unported License. (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
;(function($) {

    $.fn.Gridder = function(options) {

        var mybloc;
        var gridder = $('<div class="gridder-show"></div>');
        var animationSpeed = 600;
		var animationEasing = "linear";
        var visible = false;
        
        return this.each(function() {

            $('.gridder-list').click(function(e) {
                e.preventDefault();

                $('.gridder-show').remove();

                var currentcontent = $(this).find('.gridder-content').html();
                var currentimage = $(this).find('.gridder-thumb').html();
                
                /* Make sure the correct bloc is active */
                if (!$(this).hasClass('imactive')) {
                    $('.imactive').removeClass('imactive');
                    $(this).addClass("imactive");
                }
                
                /* ADD LOADING BLOC */
                var $htmlcontent = $('<li class="gridder-show"></li>');
                mybloc = $htmlcontent.insertAfter(this);
                
                htmlcontent = "<div class=\"padding\">";
                    htmlcontent += "<a class=gridder-close></a>";
                    htmlcontent += "<a class=\"gridder-nav prev\"></a>";
                    htmlcontent += "<a class=\"gridder-nav next\"></a>";
                    htmlcontent += "<div class=image>"+ currentimage+"</div>";
                    htmlcontent += "<div class=content>"+ currentcontent+"</div>";
                htmlcontent += "</div>";
                
                mybloc.html(htmlcontent);

                if (!visible) {
                    mybloc.find('.padding').slideDown(animationSpeed, animationEasing, function() {
                        visible = true;
                    });
                } else {
                    mybloc.find('.padding').fadeIn(animationSpeed, animationEasing, function() {
                        visible = true;
                    });
                }
                
                /* Scrolls to the current row */
                $('html, body').animate({
                    scrollTop: $(this).position().top
                }, 0);
                
            });
            
             /* Next */
            $('.gridder').on('click', '.gridder-nav.next', function() {
                $(this).parents('.gridder-show').next().trigger('click');
            });

            /* Previous */
            $('.gridder').on('click', '.gridder-nav.prev', function() {
                $(this).parents('.gridder-show').prev().prev().trigger('click');
            });
            
            /* Close */
            $('.gridder').on('click', '.gridder-close', function() {
                $('.imactive').removeClass('imactive');
                $('.gridder-show').remove();
            });


        });
    };
})(jQuery);