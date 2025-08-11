(function($){
  'use strict';
  $(function(){
    var $links = $('.entry-content a[target="_blank"]');
    if (!$links.length) return;

    $links.each(function(){
      var $a = $(this);

      // If explicitly disabled, remove any injected icon and stop (keep SR text for a11y)
      if ($a.hasClass('no-link-icon')) {
        $a.find('.fa-external-link').remove();
        return;
      }

      // Deduplicate icons: keep the first, remove the rest
      var $icons = $a.find('.fa-external-link');
      if ($icons.length > 1) {
        $icons.slice(1).remove();
      }

      // Deduplicate screen reader text: keep the first, remove the rest
      var $sr = $a.find('.screen-reader-text');
      if ($sr.length > 1) {
        $sr.slice(1).remove();
      }
    });
  });

    // Copied from tinyframework/functions.js
    // Remove title attributes when the title attribute is the same as the link text
    $('*').each( function () {
        var self = $(this);
        var theTitle = $.trim( self.attr( 'title' ) );
        var theText = $.trim( self.text() );
        if ( theTitle === theText ) {
            self.removeAttr( 'title' );
        }
    } );
})(jQuery);
