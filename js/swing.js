(function( $, wnd ) {

    "use strict";

    var OBJECT_KEY   = 'SwingController',
        DEFAULT_OPTS = {

        };

    var support = {};

    support.propertyPrefix = (function() {

        var vendors = ['webkit','moz','O','ms',''],
            element = document.createElement('div'),
            styles  = element.style;

        for( var v in vendors ) {

            var propName = ( vendors[v] == "" ) ? 'backfaceVisibility' : vendors[v] + 'BackfaceVisibility' ;
            if( element.style[propName] != undefined ) {
                return vendors[v];
            }
        }
        return false;
    })();

    var getVendorProperty = function( property ) {
        if( support.propertyPrefix === false )
            return property.toLowerCase();
        return support.propertyPrefix + property;
    };

    var SwingController = function( element ) {

        var animating = false,
            occupied  = false;

        var _queue = [];

        var _setUp = function(text) {

            var characters = text.split(''),
                html       = "";

            for( var i=0; i<characters.length; i++ ) {
                html += ( characters[i] == " " )
                    ? "&nbsp;"
                    : "<span>" + characters[i] + "</span>" ;
            }

            element.html( html );
        };

        var _animateIn = function() {};

        var _animateOut = function() {};

        var _performRoutine = function( text, options ) {
            _setUp( text );
        };

        this.display = function(text, options) {

            if( animating || occupied ) {

                _queue.push( [text, options] );
                if( !animating ) {
                    // @TODO: push out current text
                }

                return;
            }
            _performRoutine( text, options );
        };

    };

    $.fn.swing = function( text, options ) {
        $(this).each( function() {

            var element    = $(this),
                controller = element.data( OBJECT_KEY );

            if( !controller ) {
                controller = new SwingController( element );
                element.data( OBJECT_KEY, controller );
            }

            controller.display( text, options );

        });
    };

})( jQuery, window );