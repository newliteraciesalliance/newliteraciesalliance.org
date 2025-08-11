/**
 * functions.js
 *
 * Various additional functions.
 * 
 * v.2.0.5
 */

(function( $ ) { 'use strict';

	/* Accessibility enhancements
	 *
	 * Tip25 - Mark the links that will open in a new window with special icon, usually these are the links to external resources.
	 */
	$( '.entry-content a[target="_blank"]' ).each( function() {
		var $a = $( this );
		// Skip if disabled on this link
		if ( $a.hasClass( 'no-link-icon' ) ) {
			return;
		}
		var hasIcon = $a.find( '.fa-external-link' ).length > 0 || $a.hasClass( 'icon-webfont' ) || $a.find( '.icon-webfont' ).length > 0;
		var hasSr   = $a.find( '.screen-reader-text' ).length > 0;
		if ( ! hasIcon ) {
			$a.append( '<span class="icon-webfont fa-external-link" aria-hidden="true"></span>' );
		}
		if ( ! hasSr ) {
			var srText = ( window.tinyframeworkAdditionalScripts && tinyframeworkAdditionalScripts.newWindow ) ? tinyframeworkAdditionalScripts.newWindow : 'Opens in a new window';
			$a.append( '<span class="screen-reader-text">' + srText + '</span>' );
		}
	} );

	// Remove title attributes when the title attribute is the same as the link text
    $('*').each( function () {
        var self = $(this);
        var theTitle = $.trim( self.attr( 'title' ) );
        var theText = $.trim( self.text() );
        if ( theTitle === theText ) {
            self.removeAttr( 'title' );
        }
    } );

} )(jQuery);
