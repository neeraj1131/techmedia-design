function defer(method) {
  if (window.jQuery)
    method();
  else
    setTimeout(function() {
      defer(method)
    }, 50);
}
defer(function() {
  (function($) {
    
    function doneResizing() {
      var totalScroll = $('.resource-slider-frame').scrollLeft();
      var itemWidth = $('.resource-slider-item').width();
      var difference = totalScroll % itemWidth;
      if ( difference !== 0 ) {
        $('.resource-slider-frame').animate({
          scrollLeft: '-=' + difference
        }, 500);
      }
    }
    
    $('.arrow').on('click', function() {
      var $this = $(this),
        width = $('.resource-slider-item').width(),
        speed = 500;
      if ($this.hasClass('prev')) {
        $('.resource-slider-frame').animate({
          scrollLeft: '-=' + width
        }, speed);
      } else if ($this.hasClass('next')) {
        $('.resource-slider-frame').animate({
          scrollLeft: '+=' + width
        }, speed);
      }
    }); // end on arrow click
    
    $(window).on("load resize", function() {
      $('#resource-slider .resource-slider-item').each(function(i) {
        var $this = $(this),
          left = $this.width() * i;
        $this.css({
          left: left
        })
      }); // end each
    }); // end window resize/load
    
    var resizeId;
    $(window).resize(function() {
        clearTimeout(resizeId);
        resizeId = setTimeout(doneResizing, 500);
    });
    
  })(jQuery); // end function
});