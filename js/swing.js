(function( $, wnd ) {

    "use strict";

    var OBJECT_KEY   = 'SwingController',
        DEFAULT_OPTS = {

        };

    /**
     *  Resource to allocate client-related information
     *
     *  Keys should be assigned as self-executing functions that return false if unsupported.
     *  Tests are executed pre DOM-ready, so shouldn't rely on elements in the body to complete
     */

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

    var applyVendorPrefixes = function( css ) {
        var prefixed = {};
        for( var prop in css ) {
            // only vendorise rules starting with capitals
            if( /^[A-Z]/.test( prop ) ) 
                prefixed[ getVendorProperty(prop) ] = css[prop];
            else
                prefixed[ prop ] = css[prop];
        } console.log( prefixed );
        return prefixed;
    }

    /**
     *  Swing Controller Constructor
     *
     *
     */

    var SwingController = function( element ) {

        var animating = false,
            occupied  = false;

        var _queue   = [],
            _letters = null;

        var _setUp = function(text) {

            if( support.propertyPrefix === false )
                return element.html( text );

            var characters = text.split(''),
                html       = "";

            for( var i=0; i<characters.length; i++ ) {
                html += ( characters[i] == " " )
                    ? "&nbsp;"
                    : "<span>" + characters[i] + "</span>" ;
            }

            element.html( html );
            _letters = element.find('span');

            var startingCss = {
                display             : 'inline-block',
                Transform           : 'rotateX(-81deg)',
                TransformOrigin     : 'center top',
                TransformStyle      : 'preserve-3d',
                BackfaceVisibility  : 'hidden'
            };

            startingCss = applyVendorPrefixes( startingCss );
            _letters.css( startingCss );
        };

        var _animateOut = function() {};

        var _animateIn = function() {

            if( _letters == null || !_letters.length )
                return;

            _letters.each( function(index) {

                var letter = $(this);

                var cssProps = {
                    Transform : 'rotateX(0deg)'
                };

                cssProps = applyVendorPrefixes( cssProps );

                letter.animate( cssProps, 1000 );

            });
        };

        var _performRoutine = function( text, options ) {
            _setUp( text );
            _animateIn();
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

        var containerCss = {};
        containerCss[ getVendorProperty('BackfaceVisibility') ] = 'hidden';
        containerCss[ getVendorProperty('TransformStyle') ]     = 'preserve-3d';

        element.css( containerCss );

    };

    /**
     *  Factory method, attached to the jQuery function space
     *
     *
     */

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