/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(74);
	__webpack_require__(84);

	var $ = __webpack_require__(85);
	var artTpl = __webpack_require__(86);
	artTpl.config('escape', false);

	var main = $('#main');
	var globalModal = $('#globalModal');

	var rootPath = '';

	window.app = {
	    works: [{
	        title: 'Smile Merge',
	        description: '',
	        path: rootPath + 'works/smilemerge',
	        background: 'smilemerge.jpg'
	    }, {
	        title: 'Size of dogs',
	        description: '',
	        path: rootPath + 'works/linkedmedia',
	        background: 'linkedmedia.jpg'
	    }, {
	        title: 'Gouache',
	        description: '',
	        path: rootPath + 'works/gouache',
	        background: 'color.jpg'
	    }, {
	        title: 'Sketch',
	        description: '',
	        path: rootPath + 'works/sketch',
	        background: 'sketch.jpg'
	    }, {
	        title: 'Gomoku',
	        description: '',
	        path: rootPath + 'works/gomoku',
	        background: 'gomoku.jpg'
	    }, {
	        title: 'Opengl trial',
	        description: '',
	        path: rootPath + 'works/opengl',
	        background: 'opendroid.jpg'
	    }],
	    init: function init() {
	        var _this = this;

	        main.append(this.renderCategory());
	        $(document).on('click', '.box', function (e) {
	            _this.showDetail();
	        });
	    },
	    renderCategory: function renderCategory() {
	        var markup = __webpack_require__(119),
	            boxes = this.works,
	            render = artTpl.compile(markup);
	        return render({ boxes: boxes });
	    },
	    showDetail: function showDetail(e, index) {
	        e.stopPropagation();
	        var data = this.works[index],
	            markup = __webpack_require__(120)("./" + data.path.split('/').pop() + '.html'),
	            render = artTpl.compile(markup);
	        globalModal.html(render(data));
	        $('#globalModal').modal('show');
	    }
	};

	$(document).ready(function () {
	    app.init();
	});

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var jQuery = __webpack_require__(85);

	/* ========================================================================
	 * Bootstrap: modal.js v3.3.7
	 * http://getbootstrap.com/javascript/#modals
	 * ========================================================================
	 * Copyright 2011-2016 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */


	+function ($) {
	  'use strict';

	  // MODAL CLASS DEFINITION
	  // ======================

	  var Modal = function (element, options) {
	    this.options             = options
	    this.$body               = $(document.body)
	    this.$element            = $(element)
	    this.$dialog             = this.$element.find('.modal-dialog')
	    this.$backdrop           = null
	    this.isShown             = null
	    this.originalBodyPad     = null
	    this.scrollbarWidth      = 0
	    this.ignoreBackdropClick = false

	    if (this.options.remote) {
	      this.$element
	        .find('.modal-content')
	        .load(this.options.remote, $.proxy(function () {
	          this.$element.trigger('loaded.bs.modal')
	        }, this))
	    }
	  }

	  Modal.VERSION  = '3.3.7'

	  Modal.TRANSITION_DURATION = 300
	  Modal.BACKDROP_TRANSITION_DURATION = 150

	  Modal.DEFAULTS = {
	    backdrop: true,
	    keyboard: true,
	    show: true
	  }

	  Modal.prototype.toggle = function (_relatedTarget) {
	    return this.isShown ? this.hide() : this.show(_relatedTarget)
	  }

	  Modal.prototype.show = function (_relatedTarget) {
	    var that = this
	    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

	    this.$element.trigger(e)

	    if (this.isShown || e.isDefaultPrevented()) return

	    this.isShown = true

	    this.checkScrollbar()
	    this.setScrollbar()
	    this.$body.addClass('modal-open')

	    this.escape()
	    this.resize()

	    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

	    this.$dialog.on('mousedown.dismiss.bs.modal', function () {
	      that.$element.one('mouseup.dismiss.bs.modal', function (e) {
	        if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true
	      })
	    })

	    this.backdrop(function () {
	      var transition = $.support.transition && that.$element.hasClass('fade')

	      if (!that.$element.parent().length) {
	        that.$element.appendTo(that.$body) // don't move modals dom position
	      }

	      that.$element
	        .show()
	        .scrollTop(0)

	      that.adjustDialog()

	      if (transition) {
	        that.$element[0].offsetWidth // force reflow
	      }

	      that.$element.addClass('in')

	      that.enforceFocus()

	      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

	      transition ?
	        that.$dialog // wait for modal to slide in
	          .one('bsTransitionEnd', function () {
	            that.$element.trigger('focus').trigger(e)
	          })
	          .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
	        that.$element.trigger('focus').trigger(e)
	    })
	  }

	  Modal.prototype.hide = function (e) {
	    if (e) e.preventDefault()

	    e = $.Event('hide.bs.modal')

	    this.$element.trigger(e)

	    if (!this.isShown || e.isDefaultPrevented()) return

	    this.isShown = false

	    this.escape()
	    this.resize()

	    $(document).off('focusin.bs.modal')

	    this.$element
	      .removeClass('in')
	      .off('click.dismiss.bs.modal')
	      .off('mouseup.dismiss.bs.modal')

	    this.$dialog.off('mousedown.dismiss.bs.modal')

	    $.support.transition && this.$element.hasClass('fade') ?
	      this.$element
	        .one('bsTransitionEnd', $.proxy(this.hideModal, this))
	        .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
	      this.hideModal()
	  }

	  Modal.prototype.enforceFocus = function () {
	    $(document)
	      .off('focusin.bs.modal') // guard against infinite focus loop
	      .on('focusin.bs.modal', $.proxy(function (e) {
	        if (document !== e.target &&
	            this.$element[0] !== e.target &&
	            !this.$element.has(e.target).length) {
	          this.$element.trigger('focus')
	        }
	      }, this))
	  }

	  Modal.prototype.escape = function () {
	    if (this.isShown && this.options.keyboard) {
	      this.$element.on('keydown.dismiss.bs.modal', $.proxy(function (e) {
	        e.which == 27 && this.hide()
	      }, this))
	    } else if (!this.isShown) {
	      this.$element.off('keydown.dismiss.bs.modal')
	    }
	  }

	  Modal.prototype.resize = function () {
	    if (this.isShown) {
	      $(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this))
	    } else {
	      $(window).off('resize.bs.modal')
	    }
	  }

	  Modal.prototype.hideModal = function () {
	    var that = this
	    this.$element.hide()
	    this.backdrop(function () {
	      that.$body.removeClass('modal-open')
	      that.resetAdjustments()
	      that.resetScrollbar()
	      that.$element.trigger('hidden.bs.modal')
	    })
	  }

	  Modal.prototype.removeBackdrop = function () {
	    this.$backdrop && this.$backdrop.remove()
	    this.$backdrop = null
	  }

	  Modal.prototype.backdrop = function (callback) {
	    var that = this
	    var animate = this.$element.hasClass('fade') ? 'fade' : ''

	    if (this.isShown && this.options.backdrop) {
	      var doAnimate = $.support.transition && animate

	      this.$backdrop = $(document.createElement('div'))
	        .addClass('modal-backdrop ' + animate)
	        .appendTo(this.$body)

	      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
	        if (this.ignoreBackdropClick) {
	          this.ignoreBackdropClick = false
	          return
	        }
	        if (e.target !== e.currentTarget) return
	        this.options.backdrop == 'static'
	          ? this.$element[0].focus()
	          : this.hide()
	      }, this))

	      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

	      this.$backdrop.addClass('in')

	      if (!callback) return

	      doAnimate ?
	        this.$backdrop
	          .one('bsTransitionEnd', callback)
	          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
	        callback()

	    } else if (!this.isShown && this.$backdrop) {
	      this.$backdrop.removeClass('in')

	      var callbackRemove = function () {
	        that.removeBackdrop()
	        callback && callback()
	      }
	      $.support.transition && this.$element.hasClass('fade') ?
	        this.$backdrop
	          .one('bsTransitionEnd', callbackRemove)
	          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
	        callbackRemove()

	    } else if (callback) {
	      callback()
	    }
	  }

	  // these following methods are used to handle overflowing modals

	  Modal.prototype.handleUpdate = function () {
	    this.adjustDialog()
	  }

	  Modal.prototype.adjustDialog = function () {
	    var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight

	    this.$element.css({
	      paddingLeft:  !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',
	      paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''
	    })
	  }

	  Modal.prototype.resetAdjustments = function () {
	    this.$element.css({
	      paddingLeft: '',
	      paddingRight: ''
	    })
	  }

	  Modal.prototype.checkScrollbar = function () {
	    var fullWindowWidth = window.innerWidth
	    if (!fullWindowWidth) { // workaround for missing window.innerWidth in IE8
	      var documentElementRect = document.documentElement.getBoundingClientRect()
	      fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left)
	    }
	    this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth
	    this.scrollbarWidth = this.measureScrollbar()
	  }

	  Modal.prototype.setScrollbar = function () {
	    var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)
	    this.originalBodyPad = document.body.style.paddingRight || ''
	    if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)
	  }

	  Modal.prototype.resetScrollbar = function () {
	    this.$body.css('padding-right', this.originalBodyPad)
	  }

	  Modal.prototype.measureScrollbar = function () { // thx walsh
	    var scrollDiv = document.createElement('div')
	    scrollDiv.className = 'modal-scrollbar-measure'
	    this.$body.append(scrollDiv)
	    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
	    this.$body[0].removeChild(scrollDiv)
	    return scrollbarWidth
	  }


	  // MODAL PLUGIN DEFINITION
	  // =======================

	  function Plugin(option, _relatedTarget) {
	    return this.each(function () {
	      var $this   = $(this)
	      var data    = $this.data('bs.modal')
	      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

	      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
	      if (typeof option == 'string') data[option](_relatedTarget)
	      else if (options.show) data.show(_relatedTarget)
	    })
	  }

	  var old = $.fn.modal

	  $.fn.modal             = Plugin
	  $.fn.modal.Constructor = Modal


	  // MODAL NO CONFLICT
	  // =================

	  $.fn.modal.noConflict = function () {
	    $.fn.modal = old
	    return this
	  }


	  // MODAL DATA-API
	  // ==============

	  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
	    var $this   = $(this)
	    var href    = $this.attr('href')
	    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7
	    var option  = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

	    if ($this.is('a')) e.preventDefault()

	    $target.one('show.bs.modal', function (showEvent) {
	      if (showEvent.isDefaultPrevented()) return // only register focus restorer if modal will actually get shown
	      $target.one('hidden.bs.modal', function () {
	        $this.is(':visible') && $this.trigger('focus')
	      })
	    })
	    Plugin.call($target, option, this)
	  })

	}(jQuery);



/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery JavaScript Library v2.2.4
	 * http://jquery.com/
	 *
	 * Includes Sizzle.js
	 * http://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-05-20T17:23Z
	 */

	(function( global, factory ) {

		if ( typeof module === "object" && typeof module.exports === "object" ) {
			// For CommonJS and CommonJS-like environments where a proper `window`
			// is present, execute the factory and get jQuery.
			// For environments that do not have a `window` with a `document`
			// (such as Node.js), expose a factory as module.exports.
			// This accentuates the need for the creation of a real `window`.
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info.
			module.exports = global.document ?
				factory( global, true ) :
				function( w ) {
					if ( !w.document ) {
						throw new Error( "jQuery requires a window with a document" );
					}
					return factory( w );
				};
		} else {
			factory( global );
		}

	// Pass this if window is not defined yet
	}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

	// Support: Firefox 18+
	// Can't be in strict mode, several libs including ASP.NET trace
	// the stack via arguments.caller.callee and Firefox dies if
	// you try to trace through "use strict" call chains. (#13335)
	//"use strict";
	var arr = [];

	var document = window.document;

	var slice = arr.slice;

	var concat = arr.concat;

	var push = arr.push;

	var indexOf = arr.indexOf;

	var class2type = {};

	var toString = class2type.toString;

	var hasOwn = class2type.hasOwnProperty;

	var support = {};



	var
		version = "2.2.4",

		// Define a local copy of jQuery
		jQuery = function( selector, context ) {

			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init( selector, context );
		},

		// Support: Android<4.1
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

		// Matches dashed string for camelizing
		rmsPrefix = /^-ms-/,
		rdashAlpha = /-([\da-z])/gi,

		// Used by jQuery.camelCase as callback to replace()
		fcamelCase = function( all, letter ) {
			return letter.toUpperCase();
		};

	jQuery.fn = jQuery.prototype = {

		// The current version of jQuery being used
		jquery: version,

		constructor: jQuery,

		// Start with an empty selector
		selector: "",

		// The default length of a jQuery object is 0
		length: 0,

		toArray: function() {
			return slice.call( this );
		},

		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function( num ) {
			return num != null ?

				// Return just the one element from the set
				( num < 0 ? this[ num + this.length ] : this[ num ] ) :

				// Return all the elements in a clean array
				slice.call( this );
		},

		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function( elems ) {

			// Build a new jQuery matched element set
			var ret = jQuery.merge( this.constructor(), elems );

			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;
			ret.context = this.context;

			// Return the newly-formed element set
			return ret;
		},

		// Execute a callback for every element in the matched set.
		each: function( callback ) {
			return jQuery.each( this, callback );
		},

		map: function( callback ) {
			return this.pushStack( jQuery.map( this, function( elem, i ) {
				return callback.call( elem, i, elem );
			} ) );
		},

		slice: function() {
			return this.pushStack( slice.apply( this, arguments ) );
		},

		first: function() {
			return this.eq( 0 );
		},

		last: function() {
			return this.eq( -1 );
		},

		eq: function( i ) {
			var len = this.length,
				j = +i + ( i < 0 ? len : 0 );
			return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
		},

		end: function() {
			return this.prevObject || this.constructor();
		},

		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: arr.sort,
		splice: arr.splice
	};

	jQuery.extend = jQuery.fn.extend = function() {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[ 0 ] || {},
			i = 1,
			length = arguments.length,
			deep = false;

		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;

			// Skip the boolean and the target
			target = arguments[ i ] || {};
			i++;
		}

		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
			target = {};
		}

		// Extend jQuery itself if only one argument is passed
		if ( i === length ) {
			target = this;
			i--;
		}

		for ( ; i < length; i++ ) {

			// Only deal with non-null/undefined values
			if ( ( options = arguments[ i ] ) != null ) {

				// Extend the base object
				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];

					// Prevent never-ending loop
					if ( target === copy ) {
						continue;
					}

					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
						( copyIsArray = jQuery.isArray( copy ) ) ) ) {

						if ( copyIsArray ) {
							copyIsArray = false;
							clone = src && jQuery.isArray( src ) ? src : [];

						} else {
							clone = src && jQuery.isPlainObject( src ) ? src : {};
						}

						// Never move original objects, clone them
						target[ name ] = jQuery.extend( deep, clone, copy );

					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}

		// Return the modified object
		return target;
	};

	jQuery.extend( {

		// Unique for each copy of jQuery on the page
		expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

		// Assume jQuery is ready without the ready module
		isReady: true,

		error: function( msg ) {
			throw new Error( msg );
		},

		noop: function() {},

		isFunction: function( obj ) {
			return jQuery.type( obj ) === "function";
		},

		isArray: Array.isArray,

		isWindow: function( obj ) {
			return obj != null && obj === obj.window;
		},

		isNumeric: function( obj ) {

			// parseFloat NaNs numeric-cast false positives (null|true|false|"")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			// adding 1 corrects loss of precision from parseFloat (#15100)
			var realStringObj = obj && obj.toString();
			return !jQuery.isArray( obj ) && ( realStringObj - parseFloat( realStringObj ) + 1 ) >= 0;
		},

		isPlainObject: function( obj ) {
			var key;

			// Not plain objects:
			// - Any object or value whose internal [[Class]] property is not "[object Object]"
			// - DOM nodes
			// - window
			if ( jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
				return false;
			}

			// Not own constructor property must be Object
			if ( obj.constructor &&
					!hasOwn.call( obj, "constructor" ) &&
					!hasOwn.call( obj.constructor.prototype || {}, "isPrototypeOf" ) ) {
				return false;
			}

			// Own properties are enumerated firstly, so to speed up,
			// if last one is own, then all properties are own
			for ( key in obj ) {}

			return key === undefined || hasOwn.call( obj, key );
		},

		isEmptyObject: function( obj ) {
			var name;
			for ( name in obj ) {
				return false;
			}
			return true;
		},

		type: function( obj ) {
			if ( obj == null ) {
				return obj + "";
			}

			// Support: Android<4.0, iOS<6 (functionish RegExp)
			return typeof obj === "object" || typeof obj === "function" ?
				class2type[ toString.call( obj ) ] || "object" :
				typeof obj;
		},

		// Evaluates a script in a global context
		globalEval: function( code ) {
			var script,
				indirect = eval;

			code = jQuery.trim( code );

			if ( code ) {

				// If the code includes a valid, prologue position
				// strict mode pragma, execute code by injecting a
				// script tag into the document.
				if ( code.indexOf( "use strict" ) === 1 ) {
					script = document.createElement( "script" );
					script.text = code;
					document.head.appendChild( script ).parentNode.removeChild( script );
				} else {

					// Otherwise, avoid the DOM node creation, insertion
					// and removal by using an indirect global eval

					indirect( code );
				}
			}
		},

		// Convert dashed to camelCase; used by the css and data modules
		// Support: IE9-11+
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function( string ) {
			return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
		},

		nodeName: function( elem, name ) {
			return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
		},

		each: function( obj, callback ) {
			var length, i = 0;

			if ( isArrayLike( obj ) ) {
				length = obj.length;
				for ( ; i < length; i++ ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			}

			return obj;
		},

		// Support: Android<4.1
		trim: function( text ) {
			return text == null ?
				"" :
				( text + "" ).replace( rtrim, "" );
		},

		// results is for internal usage only
		makeArray: function( arr, results ) {
			var ret = results || [];

			if ( arr != null ) {
				if ( isArrayLike( Object( arr ) ) ) {
					jQuery.merge( ret,
						typeof arr === "string" ?
						[ arr ] : arr
					);
				} else {
					push.call( ret, arr );
				}
			}

			return ret;
		},

		inArray: function( elem, arr, i ) {
			return arr == null ? -1 : indexOf.call( arr, elem, i );
		},

		merge: function( first, second ) {
			var len = +second.length,
				j = 0,
				i = first.length;

			for ( ; j < len; j++ ) {
				first[ i++ ] = second[ j ];
			}

			first.length = i;

			return first;
		},

		grep: function( elems, callback, invert ) {
			var callbackInverse,
				matches = [],
				i = 0,
				length = elems.length,
				callbackExpect = !invert;

			// Go through the array, only saving the items
			// that pass the validator function
			for ( ; i < length; i++ ) {
				callbackInverse = !callback( elems[ i ], i );
				if ( callbackInverse !== callbackExpect ) {
					matches.push( elems[ i ] );
				}
			}

			return matches;
		},

		// arg is for internal usage only
		map: function( elems, callback, arg ) {
			var length, value,
				i = 0,
				ret = [];

			// Go through the array, translating each of the items to their new values
			if ( isArrayLike( elems ) ) {
				length = elems.length;
				for ( ; i < length; i++ ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}

			// Go through every key on the object,
			} else {
				for ( i in elems ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}
			}

			// Flatten any nested arrays
			return concat.apply( [], ret );
		},

		// A global GUID counter for objects
		guid: 1,

		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function( fn, context ) {
			var tmp, args, proxy;

			if ( typeof context === "string" ) {
				tmp = fn[ context ];
				context = fn;
				fn = tmp;
			}

			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if ( !jQuery.isFunction( fn ) ) {
				return undefined;
			}

			// Simulated bind
			args = slice.call( arguments, 2 );
			proxy = function() {
				return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
			};

			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;

			return proxy;
		},

		now: Date.now,

		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	} );

	// JSHint would error on this code due to the Symbol not being defined in ES5.
	// Defining this global in .jshintrc would create a danger of using the global
	// unguarded in another place, it seems safer to just disable JSHint for these
	// three lines.
	/* jshint ignore: start */
	if ( typeof Symbol === "function" ) {
		jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
	}
	/* jshint ignore: end */

	// Populate the class2type map
	jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );

	function isArrayLike( obj ) {

		// Support: iOS 8.2 (not reproducible in simulator)
		// `in` check used to prevent JIT error (gh-2145)
		// hasOwn isn't used here due to false negatives
		// regarding Nodelist length in IE
		var length = !!obj && "length" in obj && obj.length,
			type = jQuery.type( obj );

		if ( type === "function" || jQuery.isWindow( obj ) ) {
			return false;
		}

		return type === "array" || length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	}
	var Sizzle =
	/*!
	 * Sizzle CSS Selector Engine v2.2.1
	 * http://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2015-10-17
	 */
	(function( window ) {

	var i,
		support,
		Expr,
		getText,
		isXML,
		tokenize,
		compile,
		select,
		outermostContext,
		sortInput,
		hasDuplicate,

		// Local document vars
		setDocument,
		document,
		docElem,
		documentIsHTML,
		rbuggyQSA,
		rbuggyMatches,
		matches,
		contains,

		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		preferredDoc = window.document,
		dirruns = 0,
		done = 0,
		classCache = createCache(),
		tokenCache = createCache(),
		compilerCache = createCache(),
		sortOrder = function( a, b ) {
			if ( a === b ) {
				hasDuplicate = true;
			}
			return 0;
		},

		// General-purpose constants
		MAX_NEGATIVE = 1 << 31,

		// Instance methods
		hasOwn = ({}).hasOwnProperty,
		arr = [],
		pop = arr.pop,
		push_native = arr.push,
		push = arr.push,
		slice = arr.slice,
		// Use a stripped-down indexOf as it's faster than native
		// http://jsperf.com/thor-indexof-vs-for/5
		indexOf = function( list, elem ) {
			var i = 0,
				len = list.length;
			for ( ; i < len; i++ ) {
				if ( list[i] === elem ) {
					return i;
				}
			}
			return -1;
		},

		booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

		// Regular expressions

		// http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",

		// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +
			// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
			"*\\]",

		pseudos = ":(" + identifier + ")(?:\\((" +
			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
			// 3. anything else (capture 2)
			".*" +
			")\\)|)",

		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp( whitespace + "+", "g" ),
		rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

		rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
		rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

		rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

		rpseudo = new RegExp( pseudos ),
		ridentifier = new RegExp( "^" + identifier + "$" ),

		matchExpr = {
			"ID": new RegExp( "^#(" + identifier + ")" ),
			"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
			"TAG": new RegExp( "^(" + identifier + "|[*])" ),
			"ATTR": new RegExp( "^" + attributes ),
			"PSEUDO": new RegExp( "^" + pseudos ),
			"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
				"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
				"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
			"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
				whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
		},

		rinputs = /^(?:input|select|textarea|button)$/i,
		rheader = /^h\d$/i,

		rnative = /^[^{]+\{\s*\[native \w/,

		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

		rsibling = /[+~]/,
		rescape = /'|\\/g,

		// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
		funescape = function( _, escaped, escapedWhitespace ) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox<24
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ?
				escaped :
				high < 0 ?
					// BMP codepoint
					String.fromCharCode( high + 0x10000 ) :
					// Supplemental Plane codepoint (surrogate pair)
					String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
		},

		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function() {
			setDocument();
		};

	// Optimize for push.apply( _, NodeList )
	try {
		push.apply(
			(arr = slice.call( preferredDoc.childNodes )),
			preferredDoc.childNodes
		);
		// Support: Android<4.0
		// Detect silently failing push.apply
		arr[ preferredDoc.childNodes.length ].nodeType;
	} catch ( e ) {
		push = { apply: arr.length ?

			// Leverage slice if possible
			function( target, els ) {
				push_native.apply( target, slice.call(els) );
			} :

			// Support: IE<9
			// Otherwise append directly
			function( target, els ) {
				var j = target.length,
					i = 0;
				// Can't trust NodeList.length
				while ( (target[j++] = els[i++]) ) {}
				target.length = j - 1;
			}
		};
	}

	function Sizzle( selector, context, results, seed ) {
		var m, i, elem, nid, nidselect, match, groups, newSelector,
			newContext = context && context.ownerDocument,

			// nodeType defaults to 9, since context defaults to document
			nodeType = context ? context.nodeType : 9;

		results = results || [];

		// Return early from calls with invalid selector or context
		if ( typeof selector !== "string" || !selector ||
			nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

			return results;
		}

		// Try to shortcut find operations (as opposed to filters) in HTML documents
		if ( !seed ) {

			if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
				setDocument( context );
			}
			context = context || document;

			if ( documentIsHTML ) {

				// If the selector is sufficiently simple, try using a "get*By*" DOM method
				// (excepting DocumentFragment context, where the methods don't exist)
				if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

					// ID selector
					if ( (m = match[1]) ) {

						// Document context
						if ( nodeType === 9 ) {
							if ( (elem = context.getElementById( m )) ) {

								// Support: IE, Opera, Webkit
								// TODO: identify versions
								// getElementById can match elements by name instead of ID
								if ( elem.id === m ) {
									results.push( elem );
									return results;
								}
							} else {
								return results;
							}

						// Element context
						} else {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( newContext && (elem = newContext.getElementById( m )) &&
								contains( context, elem ) &&
								elem.id === m ) {

								results.push( elem );
								return results;
							}
						}

					// Type selector
					} else if ( match[2] ) {
						push.apply( results, context.getElementsByTagName( selector ) );
						return results;

					// Class selector
					} else if ( (m = match[3]) && support.getElementsByClassName &&
						context.getElementsByClassName ) {

						push.apply( results, context.getElementsByClassName( m ) );
						return results;
					}
				}

				// Take advantage of querySelectorAll
				if ( support.qsa &&
					!compilerCache[ selector + " " ] &&
					(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

					if ( nodeType !== 1 ) {
						newContext = context;
						newSelector = selector;

					// qSA looks outside Element context, which is not what we want
					// Thanks to Andrew Dupont for this workaround technique
					// Support: IE <=8
					// Exclude object elements
					} else if ( context.nodeName.toLowerCase() !== "object" ) {

						// Capture the context ID, setting it first if necessary
						if ( (nid = context.getAttribute( "id" )) ) {
							nid = nid.replace( rescape, "\\$&" );
						} else {
							context.setAttribute( "id", (nid = expando) );
						}

						// Prefix every selector in the list
						groups = tokenize( selector );
						i = groups.length;
						nidselect = ridentifier.test( nid ) ? "#" + nid : "[id='" + nid + "']";
						while ( i-- ) {
							groups[i] = nidselect + " " + toSelector( groups[i] );
						}
						newSelector = groups.join( "," );

						// Expand context for sibling selectors
						newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
							context;
					}

					if ( newSelector ) {
						try {
							push.apply( results,
								newContext.querySelectorAll( newSelector )
							);
							return results;
						} catch ( qsaError ) {
						} finally {
							if ( nid === expando ) {
								context.removeAttribute( "id" );
							}
						}
					}
				}
			}
		}

		// All others
		return select( selector.replace( rtrim, "$1" ), context, results, seed );
	}

	/**
	 * Create key-value caches of limited size
	 * @returns {function(string, object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */
	function createCache() {
		var keys = [];

		function cache( key, value ) {
			// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
			if ( keys.push( key + " " ) > Expr.cacheLength ) {
				// Only keep the most recent entries
				delete cache[ keys.shift() ];
			}
			return (cache[ key + " " ] = value);
		}
		return cache;
	}

	/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */
	function markFunction( fn ) {
		fn[ expando ] = true;
		return fn;
	}

	/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created div and expects a boolean result
	 */
	function assert( fn ) {
		var div = document.createElement("div");

		try {
			return !!fn( div );
		} catch (e) {
			return false;
		} finally {
			// Remove from its parent by default
			if ( div.parentNode ) {
				div.parentNode.removeChild( div );
			}
			// release memory in IE
			div = null;
		}
	}

	/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */
	function addHandle( attrs, handler ) {
		var arr = attrs.split("|"),
			i = arr.length;

		while ( i-- ) {
			Expr.attrHandle[ arr[i] ] = handler;
		}
	}

	/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */
	function siblingCheck( a, b ) {
		var cur = b && a,
			diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
				( ~b.sourceIndex || MAX_NEGATIVE ) -
				( ~a.sourceIndex || MAX_NEGATIVE );

		// Use IE sourceIndex if available on both nodes
		if ( diff ) {
			return diff;
		}

		// Check if b follows a
		if ( cur ) {
			while ( (cur = cur.nextSibling) ) {
				if ( cur === b ) {
					return -1;
				}
			}
		}

		return a ? 1 : -1;
	}

	/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */
	function createInputPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */
	function createButtonPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */
	function createPositionalPseudo( fn ) {
		return markFunction(function( argument ) {
			argument = +argument;
			return markFunction(function( seed, matches ) {
				var j,
					matchIndexes = fn( [], seed.length, argument ),
					i = matchIndexes.length;

				// Match elements found at the specified indexes
				while ( i-- ) {
					if ( seed[ (j = matchIndexes[i]) ] ) {
						seed[j] = !(matches[j] = seed[j]);
					}
				}
			});
		});
	}

	/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */
	function testContext( context ) {
		return context && typeof context.getElementsByTagName !== "undefined" && context;
	}

	// Expose support vars for convenience
	support = Sizzle.support = {};

	/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */
	isXML = Sizzle.isXML = function( elem ) {
		// documentElement is verified for cases where it doesn't yet exist
		// (such as loading iframes in IE - #4833)
		var documentElement = elem && (elem.ownerDocument || elem).documentElement;
		return documentElement ? documentElement.nodeName !== "HTML" : false;
	};

	/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */
	setDocument = Sizzle.setDocument = function( node ) {
		var hasCompare, parent,
			doc = node ? node.ownerDocument || node : preferredDoc;

		// Return early if doc is invalid or already selected
		if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
			return document;
		}

		// Update global variables
		document = doc;
		docElem = document.documentElement;
		documentIsHTML = !isXML( document );

		// Support: IE 9-11, Edge
		// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
		if ( (parent = document.defaultView) && parent.top !== parent ) {
			// Support: IE 11
			if ( parent.addEventListener ) {
				parent.addEventListener( "unload", unloadHandler, false );

			// Support: IE 9 - 10 only
			} else if ( parent.attachEvent ) {
				parent.attachEvent( "onunload", unloadHandler );
			}
		}

		/* Attributes
		---------------------------------------------------------------------- */

		// Support: IE<8
		// Verify that getAttribute really returns attributes and not properties
		// (excepting IE8 booleans)
		support.attributes = assert(function( div ) {
			div.className = "i";
			return !div.getAttribute("className");
		});

		/* getElement(s)By*
		---------------------------------------------------------------------- */

		// Check if getElementsByTagName("*") returns only elements
		support.getElementsByTagName = assert(function( div ) {
			div.appendChild( document.createComment("") );
			return !div.getElementsByTagName("*").length;
		});

		// Support: IE<9
		support.getElementsByClassName = rnative.test( document.getElementsByClassName );

		// Support: IE<10
		// Check if getElementById returns elements by name
		// The broken getElementById methods don't pick up programatically-set names,
		// so use a roundabout getElementsByName test
		support.getById = assert(function( div ) {
			docElem.appendChild( div ).id = expando;
			return !document.getElementsByName || !document.getElementsByName( expando ).length;
		});

		// ID find and filter
		if ( support.getById ) {
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var m = context.getElementById( id );
					return m ? [ m ] : [];
				}
			};
			Expr.filter["ID"] = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute("id") === attrId;
				};
			};
		} else {
			// Support: IE6/7
			// getElementById is not reliable as a find shortcut
			delete Expr.find["ID"];

			Expr.filter["ID"] =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== "undefined" &&
						elem.getAttributeNode("id");
					return node && node.value === attrId;
				};
			};
		}

		// Tag
		Expr.find["TAG"] = support.getElementsByTagName ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== "undefined" ) {
					return context.getElementsByTagName( tag );

				// DocumentFragment nodes don't have gEBTN
				} else if ( support.qsa ) {
					return context.querySelectorAll( tag );
				}
			} :

			function( tag, context ) {
				var elem,
					tmp = [],
					i = 0,
					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName( tag );

				// Filter out possible comments
				if ( tag === "*" ) {
					while ( (elem = results[i++]) ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}

					return tmp;
				}
				return results;
			};

		// Class
		Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
			if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
				return context.getElementsByClassName( className );
			}
		};

		/* QSA/matchesSelector
		---------------------------------------------------------------------- */

		// QSA and matchesSelector support

		// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
		rbuggyMatches = [];

		// qSa(:focus) reports false when true (Chrome 21)
		// We allow this because of a bug in IE8/9 that throws an error
		// whenever `document.activeElement` is accessed on an iframe
		// So, we allow :focus to pass through QSA all the time to avoid the IE error
		// See http://bugs.jquery.com/ticket/13378
		rbuggyQSA = [];

		if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
			// Build QSA regex
			// Regex strategy adopted from Diego Perini
			assert(function( div ) {
				// Select is set to empty string on purpose
				// This is to test IE's treatment of not explicitly
				// setting a boolean content attribute,
				// since its presence should be enough
				// http://bugs.jquery.com/ticket/12359
				docElem.appendChild( div ).innerHTML = "<a id='" + expando + "'></a>" +
					"<select id='" + expando + "-\r\\' msallowcapture=''>" +
					"<option selected=''></option></select>";

				// Support: IE8, Opera 11-12.16
				// Nothing should be selected when empty strings follow ^= or $= or *=
				// The test attribute must be unknown in Opera but "safe" for WinRT
				// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
				if ( div.querySelectorAll("[msallowcapture^='']").length ) {
					rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
				}

				// Support: IE8
				// Boolean attributes and "value" are not treated correctly
				if ( !div.querySelectorAll("[selected]").length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
				}

				// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
				if ( !div.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
					rbuggyQSA.push("~=");
				}

				// Webkit/Opera - :checked should return selected option elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":checked").length ) {
					rbuggyQSA.push(":checked");
				}

				// Support: Safari 8+, iOS 8+
				// https://bugs.webkit.org/show_bug.cgi?id=136851
				// In-page `selector#id sibing-combinator selector` fails
				if ( !div.querySelectorAll( "a#" + expando + "+*" ).length ) {
					rbuggyQSA.push(".#.+[+~]");
				}
			});

			assert(function( div ) {
				// Support: Windows 8 Native Apps
				// The type and name attributes are restricted during .innerHTML assignment
				var input = document.createElement("input");
				input.setAttribute( "type", "hidden" );
				div.appendChild( input ).setAttribute( "name", "D" );

				// Support: IE8
				// Enforce case-sensitivity of name attribute
				if ( div.querySelectorAll("[name=d]").length ) {
					rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
				}

				// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":enabled").length ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}

				// Opera 10-11 does not throw on post-comma invalid pseudos
				div.querySelectorAll("*,:x");
				rbuggyQSA.push(",.*:");
			});
		}

		if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
			docElem.webkitMatchesSelector ||
			docElem.mozMatchesSelector ||
			docElem.oMatchesSelector ||
			docElem.msMatchesSelector) )) ) {

			assert(function( div ) {
				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				support.disconnectedMatch = matches.call( div, "div" );

				// This should fail with an exception
				// Gecko does not error, returns false instead
				matches.call( div, "[s!='']:x" );
				rbuggyMatches.push( "!=", pseudos );
			});
		}

		rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
		rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

		/* Contains
		---------------------------------------------------------------------- */
		hasCompare = rnative.test( docElem.compareDocumentPosition );

		// Element contains another
		// Purposefully self-exclusive
		// As in, an element does not contain itself
		contains = hasCompare || rnative.test( docElem.contains ) ?
			function( a, b ) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
					bup = b && b.parentNode;
				return a === bup || !!( bup && bup.nodeType === 1 && (
					adown.contains ?
						adown.contains( bup ) :
						a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
				));
			} :
			function( a, b ) {
				if ( b ) {
					while ( (b = b.parentNode) ) {
						if ( b === a ) {
							return true;
						}
					}
				}
				return false;
			};

		/* Sorting
		---------------------------------------------------------------------- */

		// Document order sorting
		sortOrder = hasCompare ?
		function( a, b ) {

			// Flag for duplicate removal
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			// Sort on method existence if only one input has compareDocumentPosition
			var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
			if ( compare ) {
				return compare;
			}

			// Calculate position if both inputs belong to the same document
			compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
				a.compareDocumentPosition( b ) :

				// Otherwise we know they are disconnected
				1;

			// Disconnected nodes
			if ( compare & 1 ||
				(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

				// Choose the first element that is related to our preferred document
				if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
					return -1;
				}
				if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
					return 1;
				}

				// Maintain original order
				return sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
			}

			return compare & 4 ? -1 : 1;
		} :
		function( a, b ) {
			// Exit early if the nodes are identical
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			var cur,
				i = 0,
				aup = a.parentNode,
				bup = b.parentNode,
				ap = [ a ],
				bp = [ b ];

			// Parentless nodes are either documents or disconnected
			if ( !aup || !bup ) {
				return a === document ? -1 :
					b === document ? 1 :
					aup ? -1 :
					bup ? 1 :
					sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;

			// If the nodes are siblings, we can do a quick check
			} else if ( aup === bup ) {
				return siblingCheck( a, b );
			}

			// Otherwise we need full lists of their ancestors for comparison
			cur = a;
			while ( (cur = cur.parentNode) ) {
				ap.unshift( cur );
			}
			cur = b;
			while ( (cur = cur.parentNode) ) {
				bp.unshift( cur );
			}

			// Walk down the tree looking for a discrepancy
			while ( ap[i] === bp[i] ) {
				i++;
			}

			return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck( ap[i], bp[i] ) :

				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 :
				bp[i] === preferredDoc ? 1 :
				0;
		};

		return document;
	};

	Sizzle.matches = function( expr, elements ) {
		return Sizzle( expr, null, null, elements );
	};

	Sizzle.matchesSelector = function( elem, expr ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		// Make sure that attribute selectors are quoted
		expr = expr.replace( rattributeQuotes, "='$1']" );

		if ( support.matchesSelector && documentIsHTML &&
			!compilerCache[ expr + " " ] &&
			( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
			( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

			try {
				var ret = matches.call( elem, expr );

				// IE 9's matchesSelector returns false on disconnected nodes
				if ( ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11 ) {
					return ret;
				}
			} catch (e) {}
		}

		return Sizzle( expr, document, null, [ elem ] ).length > 0;
	};

	Sizzle.contains = function( context, elem ) {
		// Set document vars if needed
		if ( ( context.ownerDocument || context ) !== document ) {
			setDocument( context );
		}
		return contains( context, elem );
	};

	Sizzle.attr = function( elem, name ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		var fn = Expr.attrHandle[ name.toLowerCase() ],
			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
				fn( elem, name, !documentIsHTML ) :
				undefined;

		return val !== undefined ?
			val :
			support.attributes || !documentIsHTML ?
				elem.getAttribute( name ) :
				(val = elem.getAttributeNode(name)) && val.specified ?
					val.value :
					null;
	};

	Sizzle.error = function( msg ) {
		throw new Error( "Syntax error, unrecognized expression: " + msg );
	};

	/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */
	Sizzle.uniqueSort = function( results ) {
		var elem,
			duplicates = [],
			j = 0,
			i = 0;

		// Unless we *know* we can detect duplicates, assume their presence
		hasDuplicate = !support.detectDuplicates;
		sortInput = !support.sortStable && results.slice( 0 );
		results.sort( sortOrder );

		if ( hasDuplicate ) {
			while ( (elem = results[i++]) ) {
				if ( elem === results[ i ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				results.splice( duplicates[ j ], 1 );
			}
		}

		// Clear input after sorting to release objects
		// See https://github.com/jquery/sizzle/pull/225
		sortInput = null;

		return results;
	};

	/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */
	getText = Sizzle.getText = function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;

		if ( !nodeType ) {
			// If no nodeType, this is expected to be an array
			while ( (node = elem[i++]) ) {
				// Do not traverse comment nodes
				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent for elements
			// innerText usage removed for consistency of new lines (jQuery #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {
				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
		// Do not include comment or processing instruction nodes

		return ret;
	};

	Expr = Sizzle.selectors = {

		// Can be adjusted by the user
		cacheLength: 50,

		createPseudo: markFunction,

		match: matchExpr,

		attrHandle: {},

		find: {},

		relative: {
			">": { dir: "parentNode", first: true },
			" ": { dir: "parentNode" },
			"+": { dir: "previousSibling", first: true },
			"~": { dir: "previousSibling" }
		},

		preFilter: {
			"ATTR": function( match ) {
				match[1] = match[1].replace( runescape, funescape );

				// Move the given value to match[3] whether quoted or unquoted
				match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

				if ( match[2] === "~=" ) {
					match[3] = " " + match[3] + " ";
				}

				return match.slice( 0, 4 );
			},

			"CHILD": function( match ) {
				/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/
				match[1] = match[1].toLowerCase();

				if ( match[1].slice( 0, 3 ) === "nth" ) {
					// nth-* requires argument
					if ( !match[3] ) {
						Sizzle.error( match[0] );
					}

					// numeric x and y parameters for Expr.filter.CHILD
					// remember that false/true cast respectively to 0/1
					match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
					match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

				// other types prohibit arguments
				} else if ( match[3] ) {
					Sizzle.error( match[0] );
				}

				return match;
			},

			"PSEUDO": function( match ) {
				var excess,
					unquoted = !match[6] && match[2];

				if ( matchExpr["CHILD"].test( match[0] ) ) {
					return null;
				}

				// Accept quoted arguments as-is
				if ( match[3] ) {
					match[2] = match[4] || match[5] || "";

				// Strip excess characters from unquoted arguments
				} else if ( unquoted && rpseudo.test( unquoted ) &&
					// Get excess from tokenize (recursively)
					(excess = tokenize( unquoted, true )) &&
					// advance to the next closing parenthesis
					(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

					// excess is a negative index
					match[0] = match[0].slice( 0, excess );
					match[2] = unquoted.slice( 0, excess );
				}

				// Return only captures needed by the pseudo filter method (type and argument)
				return match.slice( 0, 3 );
			}
		},

		filter: {

			"TAG": function( nodeNameSelector ) {
				var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
				return nodeNameSelector === "*" ?
					function() { return true; } :
					function( elem ) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
			},

			"CLASS": function( className ) {
				var pattern = classCache[ className + " " ];

				return pattern ||
					(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
					classCache( className, function( elem ) {
						return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
					});
			},

			"ATTR": function( name, operator, check ) {
				return function( elem ) {
					var result = Sizzle.attr( elem, name );

					if ( result == null ) {
						return operator === "!=";
					}
					if ( !operator ) {
						return true;
					}

					result += "";

					return operator === "=" ? result === check :
						operator === "!=" ? result !== check :
						operator === "^=" ? check && result.indexOf( check ) === 0 :
						operator === "*=" ? check && result.indexOf( check ) > -1 :
						operator === "$=" ? check && result.slice( -check.length ) === check :
						operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
						operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
						false;
				};
			},

			"CHILD": function( type, what, argument, first, last ) {
				var simple = type.slice( 0, 3 ) !== "nth",
					forward = type.slice( -4 ) !== "last",
					ofType = what === "of-type";

				return first === 1 && last === 0 ?

					// Shortcut for :nth-*(n)
					function( elem ) {
						return !!elem.parentNode;
					} :

					function( elem, context, xml ) {
						var cache, uniqueCache, outerCache, node, nodeIndex, start,
							dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType,
							diff = false;

						if ( parent ) {

							// :(first|last|only)-(child|of-type)
							if ( simple ) {
								while ( dir ) {
									node = elem;
									while ( (node = node[ dir ]) ) {
										if ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) {

											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}

							start = [ forward ? parent.firstChild : parent.lastChild ];

							// non-xml :nth-child(...) stores cache data on `parent`
							if ( forward && useCache ) {

								// Seek `elem` from a previously-cached index

								// ...in a gzip-friendly way
								node = parent;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex && cache[ 2 ];
								node = nodeIndex && parent.childNodes[ nodeIndex ];

								while ( (node = ++nodeIndex && node && node[ dir ] ||

									// Fallback to seeking `elem` from the start
									(diff = nodeIndex = 0) || start.pop()) ) {

									// When found, cache indexes on `parent` and break
									if ( node.nodeType === 1 && ++diff && node === elem ) {
										uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
										break;
									}
								}

							} else {
								// Use previously-cached element index if available
								if ( useCache ) {
									// ...in a gzip-friendly way
									node = elem;
									outerCache = node[ expando ] || (node[ expando ] = {});

									// Support: IE <9 only
									// Defend against cloned attroperties (jQuery gh-1709)
									uniqueCache = outerCache[ node.uniqueID ] ||
										(outerCache[ node.uniqueID ] = {});

									cache = uniqueCache[ type ] || [];
									nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
									diff = nodeIndex;
								}

								// xml :nth-child(...)
								// or :nth-last-child(...) or :nth(-last)?-of-type(...)
								if ( diff === false ) {
									// Use the same loop as above to seek `elem` from the start
									while ( (node = ++nodeIndex && node && node[ dir ] ||
										(diff = nodeIndex = 0) || start.pop()) ) {

										if ( ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) &&
											++diff ) {

											// Cache the index of each encountered element
											if ( useCache ) {
												outerCache = node[ expando ] || (node[ expando ] = {});

												// Support: IE <9 only
												// Defend against cloned attroperties (jQuery gh-1709)
												uniqueCache = outerCache[ node.uniqueID ] ||
													(outerCache[ node.uniqueID ] = {});

												uniqueCache[ type ] = [ dirruns, diff ];
											}

											if ( node === elem ) {
												break;
											}
										}
									}
								}
							}

							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || ( diff % first === 0 && diff / first >= 0 );
						}
					};
			},

			"PSEUDO": function( pseudo, argument ) {
				// pseudo-class names are case-insensitive
				// http://www.w3.org/TR/selectors/#pseudo-classes
				// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
				// Remember that setFilters inherits from pseudos
				var args,
					fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
						Sizzle.error( "unsupported pseudo: " + pseudo );

				// The user may use createPseudo to indicate that
				// arguments are needed to create the filter function
				// just as Sizzle does
				if ( fn[ expando ] ) {
					return fn( argument );
				}

				// But maintain support for old signatures
				if ( fn.length > 1 ) {
					args = [ pseudo, pseudo, "", argument ];
					return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
						markFunction(function( seed, matches ) {
							var idx,
								matched = fn( seed, argument ),
								i = matched.length;
							while ( i-- ) {
								idx = indexOf( seed, matched[i] );
								seed[ idx ] = !( matches[ idx ] = matched[i] );
							}
						}) :
						function( elem ) {
							return fn( elem, 0, args );
						};
				}

				return fn;
			}
		},

		pseudos: {
			// Potentially complex pseudos
			"not": markFunction(function( selector ) {
				// Trim the selector passed to compile
				// to avoid treating leading and trailing
				// spaces as combinators
				var input = [],
					results = [],
					matcher = compile( selector.replace( rtrim, "$1" ) );

				return matcher[ expando ] ?
					markFunction(function( seed, matches, context, xml ) {
						var elem,
							unmatched = matcher( seed, null, xml, [] ),
							i = seed.length;

						// Match elements unmatched by `matcher`
						while ( i-- ) {
							if ( (elem = unmatched[i]) ) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) :
					function( elem, context, xml ) {
						input[0] = elem;
						matcher( input, null, xml, results );
						// Don't keep the element (issue #299)
						input[0] = null;
						return !results.pop();
					};
			}),

			"has": markFunction(function( selector ) {
				return function( elem ) {
					return Sizzle( selector, elem ).length > 0;
				};
			}),

			"contains": markFunction(function( text ) {
				text = text.replace( runescape, funescape );
				return function( elem ) {
					return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
				};
			}),

			// "Whether an element is represented by a :lang() selector
			// is based solely on the element's language value
			// being equal to the identifier C,
			// or beginning with the identifier C immediately followed by "-".
			// The matching of C against the element's language value is performed case-insensitively.
			// The identifier C does not have to be a valid language name."
			// http://www.w3.org/TR/selectors/#lang-pseudo
			"lang": markFunction( function( lang ) {
				// lang value must be a valid identifier
				if ( !ridentifier.test(lang || "") ) {
					Sizzle.error( "unsupported lang: " + lang );
				}
				lang = lang.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					var elemLang;
					do {
						if ( (elemLang = documentIsHTML ?
							elem.lang :
							elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
						}
					} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
					return false;
				};
			}),

			// Miscellaneous
			"target": function( elem ) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice( 1 ) === elem.id;
			},

			"root": function( elem ) {
				return elem === docElem;
			},

			"focus": function( elem ) {
				return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
			},

			// Boolean properties
			"enabled": function( elem ) {
				return elem.disabled === false;
			},

			"disabled": function( elem ) {
				return elem.disabled === true;
			},

			"checked": function( elem ) {
				// In CSS3, :checked should return both checked and selected elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				var nodeName = elem.nodeName.toLowerCase();
				return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
			},

			"selected": function( elem ) {
				// Accessing this property makes selected-by-default
				// options in Safari work properly
				if ( elem.parentNode ) {
					elem.parentNode.selectedIndex;
				}

				return elem.selected === true;
			},

			// Contents
			"empty": function( elem ) {
				// http://www.w3.org/TR/selectors/#empty-pseudo
				// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
				//   but not by others (comment: 8; processing instruction: 7; etc.)
				// nodeType < 6 works because attributes (2) do not appear as children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					if ( elem.nodeType < 6 ) {
						return false;
					}
				}
				return true;
			},

			"parent": function( elem ) {
				return !Expr.pseudos["empty"]( elem );
			},

			// Element/input types
			"header": function( elem ) {
				return rheader.test( elem.nodeName );
			},

			"input": function( elem ) {
				return rinputs.test( elem.nodeName );
			},

			"button": function( elem ) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === "button" || name === "button";
			},

			"text": function( elem ) {
				var attr;
				return elem.nodeName.toLowerCase() === "input" &&
					elem.type === "text" &&

					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
			},

			// Position-in-collection
			"first": createPositionalPseudo(function() {
				return [ 0 ];
			}),

			"last": createPositionalPseudo(function( matchIndexes, length ) {
				return [ length - 1 ];
			}),

			"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
				return [ argument < 0 ? argument + length : argument ];
			}),

			"even": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 0;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"odd": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 1;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; --i >= 0; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; ++i < length; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			})
		}
	};

	Expr.pseudos["nth"] = Expr.pseudos["eq"];

	// Add button/input type pseudos
	for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
		Expr.pseudos[ i ] = createInputPseudo( i );
	}
	for ( i in { submit: true, reset: true } ) {
		Expr.pseudos[ i ] = createButtonPseudo( i );
	}

	// Easy API for creating new setFilters
	function setFilters() {}
	setFilters.prototype = Expr.filters = Expr.pseudos;
	Expr.setFilters = new setFilters();

	tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
		var matched, match, tokens, type,
			soFar, groups, preFilters,
			cached = tokenCache[ selector + " " ];

		if ( cached ) {
			return parseOnly ? 0 : cached.slice( 0 );
		}

		soFar = selector;
		groups = [];
		preFilters = Expr.preFilter;

		while ( soFar ) {

			// Comma and first run
			if ( !matched || (match = rcomma.exec( soFar )) ) {
				if ( match ) {
					// Don't consume trailing commas as valid
					soFar = soFar.slice( match[0].length ) || soFar;
				}
				groups.push( (tokens = []) );
			}

			matched = false;

			// Combinators
			if ( (match = rcombinators.exec( soFar )) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					// Cast descendant combinators to space
					type: match[0].replace( rtrim, " " )
				});
				soFar = soFar.slice( matched.length );
			}

			// Filters
			for ( type in Expr.filter ) {
				if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
					(match = preFilters[ type ]( match ))) ) {
					matched = match.shift();
					tokens.push({
						value: matched,
						type: type,
						matches: match
					});
					soFar = soFar.slice( matched.length );
				}
			}

			if ( !matched ) {
				break;
			}
		}

		// Return the length of the invalid excess
		// if we're just parsing
		// Otherwise, throw an error or return tokens
		return parseOnly ?
			soFar.length :
			soFar ?
				Sizzle.error( selector ) :
				// Cache the tokens
				tokenCache( selector, groups ).slice( 0 );
	};

	function toSelector( tokens ) {
		var i = 0,
			len = tokens.length,
			selector = "";
		for ( ; i < len; i++ ) {
			selector += tokens[i].value;
		}
		return selector;
	}

	function addCombinator( matcher, combinator, base ) {
		var dir = combinator.dir,
			checkNonElements = base && dir === "parentNode",
			doneName = done++;

		return combinator.first ?
			// Check against closest ancestor/preceding element
			function( elem, context, xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
			} :

			// Check against all ancestor/preceding elements
			function( elem, context, xml ) {
				var oldCache, uniqueCache, outerCache,
					newCache = [ dirruns, doneName ];

				// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
				if ( xml ) {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							if ( matcher( elem, context, xml ) ) {
								return true;
							}
						}
					}
				} else {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							outerCache = elem[ expando ] || (elem[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

							if ( (oldCache = uniqueCache[ dir ]) &&
								oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

								// Assign to newCache so results back-propagate to previous elements
								return (newCache[ 2 ] = oldCache[ 2 ]);
							} else {
								// Reuse newcache so results back-propagate to previous elements
								uniqueCache[ dir ] = newCache;

								// A match means we're done; a fail means we have to keep checking
								if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
									return true;
								}
							}
						}
					}
				}
			};
	}

	function elementMatcher( matchers ) {
		return matchers.length > 1 ?
			function( elem, context, xml ) {
				var i = matchers.length;
				while ( i-- ) {
					if ( !matchers[i]( elem, context, xml ) ) {
						return false;
					}
				}
				return true;
			} :
			matchers[0];
	}

	function multipleContexts( selector, contexts, results ) {
		var i = 0,
			len = contexts.length;
		for ( ; i < len; i++ ) {
			Sizzle( selector, contexts[i], results );
		}
		return results;
	}

	function condense( unmatched, map, filter, context, xml ) {
		var elem,
			newUnmatched = [],
			i = 0,
			len = unmatched.length,
			mapped = map != null;

		for ( ; i < len; i++ ) {
			if ( (elem = unmatched[i]) ) {
				if ( !filter || filter( elem, context, xml ) ) {
					newUnmatched.push( elem );
					if ( mapped ) {
						map.push( i );
					}
				}
			}
		}

		return newUnmatched;
	}

	function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
		if ( postFilter && !postFilter[ expando ] ) {
			postFilter = setMatcher( postFilter );
		}
		if ( postFinder && !postFinder[ expando ] ) {
			postFinder = setMatcher( postFinder, postSelector );
		}
		return markFunction(function( seed, results, context, xml ) {
			var temp, i, elem,
				preMap = [],
				postMap = [],
				preexisting = results.length,

				// Get initial elements from seed or context
				elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && ( seed || !selector ) ?
					condense( elems, preMap, preFilter, context, xml ) :
					elems,

				matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

						// ...intermediate processing is necessary
						[] :

						// ...otherwise use results directly
						results :
					matcherIn;

			// Find primary matches
			if ( matcher ) {
				matcher( matcherIn, matcherOut, context, xml );
			}

			// Apply postFilter
			if ( postFilter ) {
				temp = condense( matcherOut, postMap );
				postFilter( temp, [], context, xml );

				// Un-match failing elements by moving them back to matcherIn
				i = temp.length;
				while ( i-- ) {
					if ( (elem = temp[i]) ) {
						matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
					}
				}
			}

			if ( seed ) {
				if ( postFinder || preFilter ) {
					if ( postFinder ) {
						// Get the final matcherOut by condensing this intermediate into postFinder contexts
						temp = [];
						i = matcherOut.length;
						while ( i-- ) {
							if ( (elem = matcherOut[i]) ) {
								// Restore matcherIn since elem is not yet a final match
								temp.push( (matcherIn[i] = elem) );
							}
						}
						postFinder( null, (matcherOut = []), temp, xml );
					}

					// Move matched elements from seed to results to keep them synchronized
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) &&
							(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

							seed[temp] = !(results[temp] = elem);
						}
					}
				}

			// Add elements to results, through postFinder if defined
			} else {
				matcherOut = condense(
					matcherOut === results ?
						matcherOut.splice( preexisting, matcherOut.length ) :
						matcherOut
				);
				if ( postFinder ) {
					postFinder( null, results, matcherOut, xml );
				} else {
					push.apply( results, matcherOut );
				}
			}
		});
	}

	function matcherFromTokens( tokens ) {
		var checkContext, matcher, j,
			len = tokens.length,
			leadingRelative = Expr.relative[ tokens[0].type ],
			implicitRelative = leadingRelative || Expr.relative[" "],
			i = leadingRelative ? 1 : 0,

			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator( function( elem ) {
				return elem === checkContext;
			}, implicitRelative, true ),
			matchAnyContext = addCombinator( function( elem ) {
				return indexOf( checkContext, elem ) > -1;
			}, implicitRelative, true ),
			matchers = [ function( elem, context, xml ) {
				var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
					(checkContext = context).nodeType ?
						matchContext( elem, context, xml ) :
						matchAnyContext( elem, context, xml ) );
				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			} ];

		for ( ; i < len; i++ ) {
			if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
				matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
			} else {
				matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

				// Return special upon seeing a positional matcher
				if ( matcher[ expando ] ) {
					// Find the next relative operator (if any) for proper handling
					j = ++i;
					for ( ; j < len; j++ ) {
						if ( Expr.relative[ tokens[j].type ] ) {
							break;
						}
					}
					return setMatcher(
						i > 1 && elementMatcher( matchers ),
						i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
						).replace( rtrim, "$1" ),
						matcher,
						i < j && matcherFromTokens( tokens.slice( i, j ) ),
						j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
						j < len && toSelector( tokens )
					);
				}
				matchers.push( matcher );
			}
		}

		return elementMatcher( matchers );
	}

	function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
		var bySet = setMatchers.length > 0,
			byElement = elementMatchers.length > 0,
			superMatcher = function( seed, context, xml, results, outermost ) {
				var elem, j, matcher,
					matchedCount = 0,
					i = "0",
					unmatched = seed && [],
					setMatched = [],
					contextBackup = outermostContext,
					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
					len = elems.length;

				if ( outermost ) {
					outermostContext = context === document || context || outermost;
				}

				// Add elements passing elementMatchers directly to results
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
					if ( byElement && elem ) {
						j = 0;
						if ( !context && elem.ownerDocument !== document ) {
							setDocument( elem );
							xml = !documentIsHTML;
						}
						while ( (matcher = elementMatchers[j++]) ) {
							if ( matcher( elem, context || document, xml) ) {
								results.push( elem );
								break;
							}
						}
						if ( outermost ) {
							dirruns = dirrunsUnique;
						}
					}

					// Track unmatched elements for set filters
					if ( bySet ) {
						// They will have gone through all possible matchers
						if ( (elem = !matcher && elem) ) {
							matchedCount--;
						}

						// Lengthen the array for every element, matched or not
						if ( seed ) {
							unmatched.push( elem );
						}
					}
				}

				// `i` is now the count of elements visited above, and adding it to `matchedCount`
				// makes the latter nonnegative.
				matchedCount += i;

				// Apply set filters to unmatched elements
				// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
				// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
				// no element matchers and no seed.
				// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
				// case, which will result in a "00" `matchedCount` that differs from `i` but is also
				// numerically zero.
				if ( bySet && i !== matchedCount ) {
					j = 0;
					while ( (matcher = setMatchers[j++]) ) {
						matcher( unmatched, setMatched, context, xml );
					}

					if ( seed ) {
						// Reintegrate element matches to eliminate the need for sorting
						if ( matchedCount > 0 ) {
							while ( i-- ) {
								if ( !(unmatched[i] || setMatched[i]) ) {
									setMatched[i] = pop.call( results );
								}
							}
						}

						// Discard index placeholder values to get only actual matches
						setMatched = condense( setMatched );
					}

					// Add matches to results
					push.apply( results, setMatched );

					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if ( outermost && !seed && setMatched.length > 0 &&
						( matchedCount + setMatchers.length ) > 1 ) {

						Sizzle.uniqueSort( results );
					}
				}

				// Override manipulation of globals by nested matchers
				if ( outermost ) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}

				return unmatched;
			};

		return bySet ?
			markFunction( superMatcher ) :
			superMatcher;
	}

	compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
		var i,
			setMatchers = [],
			elementMatchers = [],
			cached = compilerCache[ selector + " " ];

		if ( !cached ) {
			// Generate a function of recursive functions that can be used to check each element
			if ( !match ) {
				match = tokenize( selector );
			}
			i = match.length;
			while ( i-- ) {
				cached = matcherFromTokens( match[i] );
				if ( cached[ expando ] ) {
					setMatchers.push( cached );
				} else {
					elementMatchers.push( cached );
				}
			}

			// Cache the compiled function
			cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

			// Save selector and tokenization
			cached.selector = selector;
		}
		return cached;
	};

	/**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */
	select = Sizzle.select = function( selector, context, results, seed ) {
		var i, tokens, token, type, find,
			compiled = typeof selector === "function" && selector,
			match = !seed && tokenize( (selector = compiled.selector || selector) );

		results = results || [];

		// Try to minimize operations if there is only one selector in the list and no seed
		// (the latter of which guarantees us context)
		if ( match.length === 1 ) {

			// Reduce context if the leading compound selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					support.getById && context.nodeType === 9 && documentIsHTML &&
					Expr.relative[ tokens[1].type ] ) {

				context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
				if ( !context ) {
					return results;

				// Precompiled matchers will still verify ancestry, so step up a level
				} else if ( compiled ) {
					context = context.parentNode;
				}

				selector = selector.slice( tokens.shift().value.length );
			}

			// Fetch a seed set for right-to-left matching
			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];

				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
					)) ) {

						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}

						break;
					}
				}
			}
		}

		// Compile and execute a filtering function if one is not provided
		// Provide `match` to avoid retokenization if we modified the selector above
		( compiled || compile( selector, match ) )(
			seed,
			context,
			!documentIsHTML,
			results,
			!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
		);
		return results;
	};

	// One-time assignments

	// Sort stability
	support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

	// Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates = !!hasDuplicate;

	// Initialize against the default document
	setDocument();

	// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert(function( div1 ) {
		// Should return 1, but returns 4 (following)
		return div1.compareDocumentPosition( document.createElement("div") ) & 1;
	});

	// Support: IE<8
	// Prevent attribute/property "interpolation"
	// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !assert(function( div ) {
		div.innerHTML = "<a href='#'></a>";
		return div.firstChild.getAttribute("href") === "#" ;
	}) ) {
		addHandle( "type|href|height|width", function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
			}
		});
	}

	// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if ( !support.attributes || !assert(function( div ) {
		div.innerHTML = "<input/>";
		div.firstChild.setAttribute( "value", "" );
		return div.firstChild.getAttribute( "value" ) === "";
	}) ) {
		addHandle( "value", function( elem, name, isXML ) {
			if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
				return elem.defaultValue;
			}
		});
	}

	// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if ( !assert(function( div ) {
		return div.getAttribute("disabled") == null;
	}) ) {
		addHandle( booleans, function( elem, name, isXML ) {
			var val;
			if ( !isXML ) {
				return elem[ name ] === true ? name.toLowerCase() :
						(val = elem.getAttributeNode( name )) && val.specified ?
						val.value :
					null;
			}
		});
	}

	return Sizzle;

	})( window );



	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;
	jQuery.expr[ ":" ] = jQuery.expr.pseudos;
	jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;



	var dir = function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;

		while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	};


	var siblings = function( n, elem ) {
		var matched = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}

		return matched;
	};


	var rneedsContext = jQuery.expr.match.needsContext;

	var rsingleTag = ( /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/ );



	var risSimple = /^.[^:#\[\.,]*$/;

	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, not ) {
		if ( jQuery.isFunction( qualifier ) ) {
			return jQuery.grep( elements, function( elem, i ) {
				/* jshint -W018 */
				return !!qualifier.call( elem, i, elem ) !== not;
			} );

		}

		if ( qualifier.nodeType ) {
			return jQuery.grep( elements, function( elem ) {
				return ( elem === qualifier ) !== not;
			} );

		}

		if ( typeof qualifier === "string" ) {
			if ( risSimple.test( qualifier ) ) {
				return jQuery.filter( qualifier, elements, not );
			}

			qualifier = jQuery.filter( qualifier, elements );
		}

		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	jQuery.filter = function( expr, elems, not ) {
		var elem = elems[ 0 ];

		if ( not ) {
			expr = ":not(" + expr + ")";
		}

		return elems.length === 1 && elem.nodeType === 1 ?
			jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
			jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
				return elem.nodeType === 1;
			} ) );
	};

	jQuery.fn.extend( {
		find: function( selector ) {
			var i,
				len = this.length,
				ret = [],
				self = this;

			if ( typeof selector !== "string" ) {
				return this.pushStack( jQuery( selector ).filter( function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				} ) );
			}

			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, self[ i ], ret );
			}

			// Needed because $( selector, context ) becomes $( context ).find( selector )
			ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
			ret.selector = this.selector ? this.selector + " " + selector : selector;
			return ret;
		},
		filter: function( selector ) {
			return this.pushStack( winnow( this, selector || [], false ) );
		},
		not: function( selector ) {
			return this.pushStack( winnow( this, selector || [], true ) );
		},
		is: function( selector ) {
			return !!winnow(
				this,

				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test( selector ) ?
					jQuery( selector ) :
					selector || [],
				false
			).length;
		}
	} );


	// Initialize a jQuery object


	// A central reference to the root jQuery(document)
	var rootjQuery,

		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

		init = jQuery.fn.init = function( selector, context, root ) {
			var match, elem;

			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}

			// Method init() accepts an alternate rootjQuery
			// so migrate can support jQuery.sub (gh-2101)
			root = root || rootjQuery;

			// Handle HTML strings
			if ( typeof selector === "string" ) {
				if ( selector[ 0 ] === "<" &&
					selector[ selector.length - 1 ] === ">" &&
					selector.length >= 3 ) {

					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [ null, selector, null ];

				} else {
					match = rquickExpr.exec( selector );
				}

				// Match html or make sure no context is specified for #id
				if ( match && ( match[ 1 ] || !context ) ) {

					// HANDLE: $(html) -> $(array)
					if ( match[ 1 ] ) {
						context = context instanceof jQuery ? context[ 0 ] : context;

						// Option to run scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge( this, jQuery.parseHTML(
							match[ 1 ],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						) );

						// HANDLE: $(html, props)
						if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
							for ( match in context ) {

								// Properties of context are called as methods if possible
								if ( jQuery.isFunction( this[ match ] ) ) {
									this[ match ]( context[ match ] );

								// ...and otherwise set as attributes
								} else {
									this.attr( match, context[ match ] );
								}
							}
						}

						return this;

					// HANDLE: $(#id)
					} else {
						elem = document.getElementById( match[ 2 ] );

						// Support: Blackberry 4.6
						// gEBID returns nodes no longer in the document (#6963)
						if ( elem && elem.parentNode ) {

							// Inject the element directly into the jQuery object
							this.length = 1;
							this[ 0 ] = elem;
						}

						this.context = document;
						this.selector = selector;
						return this;
					}

				// HANDLE: $(expr, $(...))
				} else if ( !context || context.jquery ) {
					return ( context || root ).find( selector );

				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor( context ).find( selector );
				}

			// HANDLE: $(DOMElement)
			} else if ( selector.nodeType ) {
				this.context = this[ 0 ] = selector;
				this.length = 1;
				return this;

			// HANDLE: $(function)
			// Shortcut for document ready
			} else if ( jQuery.isFunction( selector ) ) {
				return root.ready !== undefined ?
					root.ready( selector ) :

					// Execute immediately if ready is not present
					selector( jQuery );
			}

			if ( selector.selector !== undefined ) {
				this.selector = selector.selector;
				this.context = selector.context;
			}

			return jQuery.makeArray( selector, this );
		};

	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;

	// Initialize central reference
	rootjQuery = jQuery( document );


	var rparentsprev = /^(?:parents|prev(?:Until|All))/,

		// Methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};

	jQuery.fn.extend( {
		has: function( target ) {
			var targets = jQuery( target, this ),
				l = targets.length;

			return this.filter( function() {
				var i = 0;
				for ( ; i < l; i++ ) {
					if ( jQuery.contains( this, targets[ i ] ) ) {
						return true;
					}
				}
			} );
		},

		closest: function( selectors, context ) {
			var cur,
				i = 0,
				l = this.length,
				matched = [],
				pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
					jQuery( selectors, context || this.context ) :
					0;

			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( pos ?
						pos.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}

			return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
		},

		// Determine the position of an element within the set
		index: function( elem ) {

			// No argument, return index in parent
			if ( !elem ) {
				return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
			}

			// Index in selector
			if ( typeof elem === "string" ) {
				return indexOf.call( jQuery( elem ), this[ 0 ] );
			}

			// Locate the position of the desired element
			return indexOf.call( this,

				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[ 0 ] : elem
			);
		},

		add: function( selector, context ) {
			return this.pushStack(
				jQuery.uniqueSort(
					jQuery.merge( this.get(), jQuery( selector, context ) )
				)
			);
		},

		addBack: function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter( selector )
			);
		}
	} );

	function sibling( cur, dir ) {
		while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
		return cur;
	}

	jQuery.each( {
		parent: function( elem ) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function( elem ) {
			return dir( elem, "parentNode" );
		},
		parentsUntil: function( elem, i, until ) {
			return dir( elem, "parentNode", until );
		},
		next: function( elem ) {
			return sibling( elem, "nextSibling" );
		},
		prev: function( elem ) {
			return sibling( elem, "previousSibling" );
		},
		nextAll: function( elem ) {
			return dir( elem, "nextSibling" );
		},
		prevAll: function( elem ) {
			return dir( elem, "previousSibling" );
		},
		nextUntil: function( elem, i, until ) {
			return dir( elem, "nextSibling", until );
		},
		prevUntil: function( elem, i, until ) {
			return dir( elem, "previousSibling", until );
		},
		siblings: function( elem ) {
			return siblings( ( elem.parentNode || {} ).firstChild, elem );
		},
		children: function( elem ) {
			return siblings( elem.firstChild );
		},
		contents: function( elem ) {
			return elem.contentDocument || jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var matched = jQuery.map( this, fn, until );

			if ( name.slice( -5 ) !== "Until" ) {
				selector = until;
			}

			if ( selector && typeof selector === "string" ) {
				matched = jQuery.filter( selector, matched );
			}

			if ( this.length > 1 ) {

				// Remove duplicates
				if ( !guaranteedUnique[ name ] ) {
					jQuery.uniqueSort( matched );
				}

				// Reverse order for parents* and prev-derivatives
				if ( rparentsprev.test( name ) ) {
					matched.reverse();
				}
			}

			return this.pushStack( matched );
		};
	} );
	var rnotwhite = ( /\S+/g );



	// Convert String-formatted options into Object-formatted ones
	function createOptions( options ) {
		var object = {};
		jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
			object[ flag ] = true;
		} );
		return object;
	}

	/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */
	jQuery.Callbacks = function( options ) {

		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			createOptions( options ) :
			jQuery.extend( {}, options );

		var // Flag to know if list is currently firing
			firing,

			// Last fire value for non-forgettable lists
			memory,

			// Flag to know if list was already fired
			fired,

			// Flag to prevent firing
			locked,

			// Actual callback list
			list = [],

			// Queue of execution data for repeatable lists
			queue = [],

			// Index of currently firing callback (modified by add/remove as needed)
			firingIndex = -1,

			// Fire callbacks
			fire = function() {

				// Enforce single-firing
				locked = options.once;

				// Execute callbacks for all pending executions,
				// respecting firingIndex overrides and runtime changes
				fired = firing = true;
				for ( ; queue.length; firingIndex = -1 ) {
					memory = queue.shift();
					while ( ++firingIndex < list.length ) {

						// Run callback and check for early termination
						if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
							options.stopOnFalse ) {

							// Jump to end and forget the data so .add doesn't re-fire
							firingIndex = list.length;
							memory = false;
						}
					}
				}

				// Forget the data if we're done with it
				if ( !options.memory ) {
					memory = false;
				}

				firing = false;

				// Clean up if we're done firing for good
				if ( locked ) {

					// Keep an empty list if we have data for future add calls
					if ( memory ) {
						list = [];

					// Otherwise, this object is spent
					} else {
						list = "";
					}
				}
			},

			// Actual Callbacks object
			self = {

				// Add a callback or a collection of callbacks to the list
				add: function() {
					if ( list ) {

						// If we have memory from a past run, we should fire after adding
						if ( memory && !firing ) {
							firingIndex = list.length - 1;
							queue.push( memory );
						}

						( function add( args ) {
							jQuery.each( args, function( _, arg ) {
								if ( jQuery.isFunction( arg ) ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

									// Inspect recursively
									add( arg );
								}
							} );
						} )( arguments );

						if ( memory && !firing ) {
							fire();
						}
					}
					return this;
				},

				// Remove a callback from the list
				remove: function() {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );

							// Handle firing indexes
							if ( index <= firingIndex ) {
								firingIndex--;
							}
						}
					} );
					return this;
				},

				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function( fn ) {
					return fn ?
						jQuery.inArray( fn, list ) > -1 :
						list.length > 0;
				},

				// Remove all callbacks from the list
				empty: function() {
					if ( list ) {
						list = [];
					}
					return this;
				},

				// Disable .fire and .add
				// Abort any current/pending executions
				// Clear all callbacks and values
				disable: function() {
					locked = queue = [];
					list = memory = "";
					return this;
				},
				disabled: function() {
					return !list;
				},

				// Disable .fire
				// Also disable .add unless we have memory (since it would have no effect)
				// Abort any pending executions
				lock: function() {
					locked = queue = [];
					if ( !memory ) {
						list = memory = "";
					}
					return this;
				},
				locked: function() {
					return !!locked;
				},

				// Call all callbacks with the given context and arguments
				fireWith: function( context, args ) {
					if ( !locked ) {
						args = args || [];
						args = [ context, args.slice ? args.slice() : args ];
						queue.push( args );
						if ( !firing ) {
							fire();
						}
					}
					return this;
				},

				// Call all the callbacks with the given arguments
				fire: function() {
					self.fireWith( this, arguments );
					return this;
				},

				// To know if the callbacks have already been called at least once
				fired: function() {
					return !!fired;
				}
			};

		return self;
	};


	jQuery.extend( {

		Deferred: function( func ) {
			var tuples = [

					// action, add listener, listener list, final state
					[ "resolve", "done", jQuery.Callbacks( "once memory" ), "resolved" ],
					[ "reject", "fail", jQuery.Callbacks( "once memory" ), "rejected" ],
					[ "notify", "progress", jQuery.Callbacks( "memory" ) ]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					always: function() {
						deferred.done( arguments ).fail( arguments );
						return this;
					},
					then: function( /* fnDone, fnFail, fnProgress */ ) {
						var fns = arguments;
						return jQuery.Deferred( function( newDefer ) {
							jQuery.each( tuples, function( i, tuple ) {
								var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];

								// deferred[ done | fail | progress ] for forwarding actions to newDefer
								deferred[ tuple[ 1 ] ]( function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && jQuery.isFunction( returned.promise ) ) {
										returned.promise()
											.progress( newDefer.notify )
											.done( newDefer.resolve )
											.fail( newDefer.reject );
									} else {
										newDefer[ tuple[ 0 ] + "With" ](
											this === promise ? newDefer.promise() : this,
											fn ? [ returned ] : arguments
										);
									}
								} );
							} );
							fns = null;
						} ).promise();
					},

					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};

			// Keep pipe for back-compat
			promise.pipe = promise.then;

			// Add list-specific methods
			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 3 ];

				// promise[ done | fail | progress ] = list.add
				promise[ tuple[ 1 ] ] = list.add;

				// Handle state
				if ( stateString ) {
					list.add( function() {

						// state = [ resolved | rejected ]
						state = stateString;

					// [ reject_list | resolve_list ].disable; progress_list.lock
					}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
				}

				// deferred[ resolve | reject | notify ]
				deferred[ tuple[ 0 ] ] = function() {
					deferred[ tuple[ 0 ] + "With" ]( this === deferred ? promise : this, arguments );
					return this;
				};
				deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
			} );

			// Make the deferred a promise
			promise.promise( deferred );

			// Call given func if any
			if ( func ) {
				func.call( deferred, deferred );
			}

			// All done!
			return deferred;
		},

		// Deferred helper
		when: function( subordinate /* , ..., subordinateN */ ) {
			var i = 0,
				resolveValues = slice.call( arguments ),
				length = resolveValues.length,

				// the count of uncompleted subordinates
				remaining = length !== 1 ||
					( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

				// the master Deferred.
				// If resolveValues consist of only a single Deferred, just use that.
				deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

				// Update function for both resolve and progress values
				updateFunc = function( i, contexts, values ) {
					return function( value ) {
						contexts[ i ] = this;
						values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
						if ( values === progressValues ) {
							deferred.notifyWith( contexts, values );
						} else if ( !( --remaining ) ) {
							deferred.resolveWith( contexts, values );
						}
					};
				},

				progressValues, progressContexts, resolveContexts;

			// Add listeners to Deferred subordinates; treat others as resolved
			if ( length > 1 ) {
				progressValues = new Array( length );
				progressContexts = new Array( length );
				resolveContexts = new Array( length );
				for ( ; i < length; i++ ) {
					if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
						resolveValues[ i ].promise()
							.progress( updateFunc( i, progressContexts, progressValues ) )
							.done( updateFunc( i, resolveContexts, resolveValues ) )
							.fail( deferred.reject );
					} else {
						--remaining;
					}
				}
			}

			// If we're not waiting on anything, resolve the master
			if ( !remaining ) {
				deferred.resolveWith( resolveContexts, resolveValues );
			}

			return deferred.promise();
		}
	} );


	// The deferred used on DOM ready
	var readyList;

	jQuery.fn.ready = function( fn ) {

		// Add the callback
		jQuery.ready.promise().done( fn );

		return this;
	};

	jQuery.extend( {

		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,

		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,

		// Hold (or release) the ready event
		holdReady: function( hold ) {
			if ( hold ) {
				jQuery.readyWait++;
			} else {
				jQuery.ready( true );
			}
		},

		// Handle when the DOM is ready
		ready: function( wait ) {

			// Abort if there are pending holds or we're already ready
			if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
				return;
			}

			// Remember that the DOM is ready
			jQuery.isReady = true;

			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}

			// If there are functions bound, to execute
			readyList.resolveWith( document, [ jQuery ] );

			// Trigger any bound ready events
			if ( jQuery.fn.triggerHandler ) {
				jQuery( document ).triggerHandler( "ready" );
				jQuery( document ).off( "ready" );
			}
		}
	} );

	/**
	 * The ready event handler and self cleanup method
	 */
	function completed() {
		document.removeEventListener( "DOMContentLoaded", completed );
		window.removeEventListener( "load", completed );
		jQuery.ready();
	}

	jQuery.ready.promise = function( obj ) {
		if ( !readyList ) {

			readyList = jQuery.Deferred();

			// Catch cases where $(document).ready() is called
			// after the browser event has already occurred.
			// Support: IE9-10 only
			// Older IE sometimes signals "interactive" too soon
			if ( document.readyState === "complete" ||
				( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

				// Handle it asynchronously to allow scripts the opportunity to delay ready
				window.setTimeout( jQuery.ready );

			} else {

				// Use the handy event callback
				document.addEventListener( "DOMContentLoaded", completed );

				// A fallback to window.onload, that will always work
				window.addEventListener( "load", completed );
			}
		}
		return readyList.promise( obj );
	};

	// Kick off the DOM ready check even if the user does not
	jQuery.ready.promise();




	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			len = elems.length,
			bulk = key == null;

		// Sets many values
		if ( jQuery.type( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				access( elems, fn, i, key[ i ], true, emptyGet, raw );
			}

		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;

			if ( !jQuery.isFunction( value ) ) {
				raw = true;
			}

			if ( bulk ) {

				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;

				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}

			if ( fn ) {
				for ( ; i < len; i++ ) {
					fn(
						elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
					);
				}
			}
		}

		return chainable ?
			elems :

			// Gets
			bulk ?
				fn.call( elems ) :
				len ? fn( elems[ 0 ], key ) : emptyGet;
	};
	var acceptData = function( owner ) {

		// Accepts only:
		//  - Node
		//    - Node.ELEMENT_NODE
		//    - Node.DOCUMENT_NODE
		//  - Object
		//    - Any
		/* jshint -W018 */
		return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
	};




	function Data() {
		this.expando = jQuery.expando + Data.uid++;
	}

	Data.uid = 1;

	Data.prototype = {

		register: function( owner, initial ) {
			var value = initial || {};

			// If it is a node unlikely to be stringify-ed or looped over
			// use plain assignment
			if ( owner.nodeType ) {
				owner[ this.expando ] = value;

			// Otherwise secure it in a non-enumerable, non-writable property
			// configurability must be true to allow the property to be
			// deleted with the delete operator
			} else {
				Object.defineProperty( owner, this.expando, {
					value: value,
					writable: true,
					configurable: true
				} );
			}
			return owner[ this.expando ];
		},
		cache: function( owner ) {

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( !acceptData( owner ) ) {
				return {};
			}

			// Check if the owner object already has a cache
			var value = owner[ this.expando ];

			// If not, create one
			if ( !value ) {
				value = {};

				// We can accept data for non-element nodes in modern browsers,
				// but we should not, see #8335.
				// Always return an empty object.
				if ( acceptData( owner ) ) {

					// If it is a node unlikely to be stringify-ed or looped over
					// use plain assignment
					if ( owner.nodeType ) {
						owner[ this.expando ] = value;

					// Otherwise secure it in a non-enumerable property
					// configurable must be true to allow the property to be
					// deleted when data is removed
					} else {
						Object.defineProperty( owner, this.expando, {
							value: value,
							configurable: true
						} );
					}
				}
			}

			return value;
		},
		set: function( owner, data, value ) {
			var prop,
				cache = this.cache( owner );

			// Handle: [ owner, key, value ] args
			if ( typeof data === "string" ) {
				cache[ data ] = value;

			// Handle: [ owner, { properties } ] args
			} else {

				// Copy the properties one-by-one to the cache object
				for ( prop in data ) {
					cache[ prop ] = data[ prop ];
				}
			}
			return cache;
		},
		get: function( owner, key ) {
			return key === undefined ?
				this.cache( owner ) :
				owner[ this.expando ] && owner[ this.expando ][ key ];
		},
		access: function( owner, key, value ) {
			var stored;

			// In cases where either:
			//
			//   1. No key was specified
			//   2. A string key was specified, but no value provided
			//
			// Take the "read" path and allow the get method to determine
			// which value to return, respectively either:
			//
			//   1. The entire cache object
			//   2. The data stored at the key
			//
			if ( key === undefined ||
					( ( key && typeof key === "string" ) && value === undefined ) ) {

				stored = this.get( owner, key );

				return stored !== undefined ?
					stored : this.get( owner, jQuery.camelCase( key ) );
			}

			// When the key is not a string, or both a key and value
			// are specified, set or extend (existing objects) with either:
			//
			//   1. An object of properties
			//   2. A key and value
			//
			this.set( owner, key, value );

			// Since the "set" path can have two possible entry points
			// return the expected data based on which path was taken[*]
			return value !== undefined ? value : key;
		},
		remove: function( owner, key ) {
			var i, name, camel,
				cache = owner[ this.expando ];

			if ( cache === undefined ) {
				return;
			}

			if ( key === undefined ) {
				this.register( owner );

			} else {

				// Support array or space separated string of keys
				if ( jQuery.isArray( key ) ) {

					// If "name" is an array of keys...
					// When data is initially created, via ("key", "val") signature,
					// keys will be converted to camelCase.
					// Since there is no way to tell _how_ a key was added, remove
					// both plain key and camelCase key. #12786
					// This will only penalize the array argument path.
					name = key.concat( key.map( jQuery.camelCase ) );
				} else {
					camel = jQuery.camelCase( key );

					// Try the string as a key before any manipulation
					if ( key in cache ) {
						name = [ key, camel ];
					} else {

						// If a key with the spaces exists, use it.
						// Otherwise, create an array by matching non-whitespace
						name = camel;
						name = name in cache ?
							[ name ] : ( name.match( rnotwhite ) || [] );
					}
				}

				i = name.length;

				while ( i-- ) {
					delete cache[ name[ i ] ];
				}
			}

			// Remove the expando if there's no more data
			if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

				// Support: Chrome <= 35-45+
				// Webkit & Blink performance suffers when deleting properties
				// from DOM nodes, so set to undefined instead
				// https://code.google.com/p/chromium/issues/detail?id=378607
				if ( owner.nodeType ) {
					owner[ this.expando ] = undefined;
				} else {
					delete owner[ this.expando ];
				}
			}
		},
		hasData: function( owner ) {
			var cache = owner[ this.expando ];
			return cache !== undefined && !jQuery.isEmptyObject( cache );
		}
	};
	var dataPriv = new Data();

	var dataUser = new Data();



	//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		rmultiDash = /[A-Z]/g;

	function dataAttr( elem, key, data ) {
		var name;

		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if ( data === undefined && elem.nodeType === 1 ) {
			name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
			data = elem.getAttribute( name );

			if ( typeof data === "string" ) {
				try {
					data = data === "true" ? true :
						data === "false" ? false :
						data === "null" ? null :

						// Only convert to a number if it doesn't change the string
						+data + "" === data ? +data :
						rbrace.test( data ) ? jQuery.parseJSON( data ) :
						data;
				} catch ( e ) {}

				// Make sure we set the data so it isn't changed later
				dataUser.set( elem, key, data );
			} else {
				data = undefined;
			}
		}
		return data;
	}

	jQuery.extend( {
		hasData: function( elem ) {
			return dataUser.hasData( elem ) || dataPriv.hasData( elem );
		},

		data: function( elem, name, data ) {
			return dataUser.access( elem, name, data );
		},

		removeData: function( elem, name ) {
			dataUser.remove( elem, name );
		},

		// TODO: Now that all calls to _data and _removeData have been replaced
		// with direct calls to dataPriv methods, these can be deprecated.
		_data: function( elem, name, data ) {
			return dataPriv.access( elem, name, data );
		},

		_removeData: function( elem, name ) {
			dataPriv.remove( elem, name );
		}
	} );

	jQuery.fn.extend( {
		data: function( key, value ) {
			var i, name, data,
				elem = this[ 0 ],
				attrs = elem && elem.attributes;

			// Gets all values
			if ( key === undefined ) {
				if ( this.length ) {
					data = dataUser.get( elem );

					if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
						i = attrs.length;
						while ( i-- ) {

							// Support: IE11+
							// The attrs elements can be null (#14894)
							if ( attrs[ i ] ) {
								name = attrs[ i ].name;
								if ( name.indexOf( "data-" ) === 0 ) {
									name = jQuery.camelCase( name.slice( 5 ) );
									dataAttr( elem, name, data[ name ] );
								}
							}
						}
						dataPriv.set( elem, "hasDataAttrs", true );
					}
				}

				return data;
			}

			// Sets multiple values
			if ( typeof key === "object" ) {
				return this.each( function() {
					dataUser.set( this, key );
				} );
			}

			return access( this, function( value ) {
				var data, camelKey;

				// The calling jQuery object (element matches) is not empty
				// (and therefore has an element appears at this[ 0 ]) and the
				// `value` parameter was not undefined. An empty jQuery object
				// will result in `undefined` for elem = this[ 0 ] which will
				// throw an exception if an attempt to read a data cache is made.
				if ( elem && value === undefined ) {

					// Attempt to get data from the cache
					// with the key as-is
					data = dataUser.get( elem, key ) ||

						// Try to find dashed key if it exists (gh-2779)
						// This is for 2.2.x only
						dataUser.get( elem, key.replace( rmultiDash, "-$&" ).toLowerCase() );

					if ( data !== undefined ) {
						return data;
					}

					camelKey = jQuery.camelCase( key );

					// Attempt to get data from the cache
					// with the key camelized
					data = dataUser.get( elem, camelKey );
					if ( data !== undefined ) {
						return data;
					}

					// Attempt to "discover" the data in
					// HTML5 custom data-* attrs
					data = dataAttr( elem, camelKey, undefined );
					if ( data !== undefined ) {
						return data;
					}

					// We tried really hard, but the data doesn't exist.
					return;
				}

				// Set the data...
				camelKey = jQuery.camelCase( key );
				this.each( function() {

					// First, attempt to store a copy or reference of any
					// data that might've been store with a camelCased key.
					var data = dataUser.get( this, camelKey );

					// For HTML5 data-* attribute interop, we have to
					// store property names with dashes in a camelCase form.
					// This might not apply to all properties...*
					dataUser.set( this, camelKey, value );

					// *... In the case of properties that might _actually_
					// have dashes, we need to also store a copy of that
					// unchanged property.
					if ( key.indexOf( "-" ) > -1 && data !== undefined ) {
						dataUser.set( this, key, value );
					}
				} );
			}, null, value, arguments.length > 1, null, true );
		},

		removeData: function( key ) {
			return this.each( function() {
				dataUser.remove( this, key );
			} );
		}
	} );


	jQuery.extend( {
		queue: function( elem, type, data ) {
			var queue;

			if ( elem ) {
				type = ( type || "fx" ) + "queue";
				queue = dataPriv.get( elem, type );

				// Speed up dequeue by getting out quickly if this is just a lookup
				if ( data ) {
					if ( !queue || jQuery.isArray( data ) ) {
						queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
					} else {
						queue.push( data );
					}
				}
				return queue || [];
			}
		},

		dequeue: function( elem, type ) {
			type = type || "fx";

			var queue = jQuery.queue( elem, type ),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks( elem, type ),
				next = function() {
					jQuery.dequeue( elem, type );
				};

			// If the fx queue is dequeued, always remove the progress sentinel
			if ( fn === "inprogress" ) {
				fn = queue.shift();
				startLength--;
			}

			if ( fn ) {

				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if ( type === "fx" ) {
					queue.unshift( "inprogress" );
				}

				// Clear up the last queue stop function
				delete hooks.stop;
				fn.call( elem, next, hooks );
			}

			if ( !startLength && hooks ) {
				hooks.empty.fire();
			}
		},

		// Not public - generate a queueHooks object, or return the current one
		_queueHooks: function( elem, type ) {
			var key = type + "queueHooks";
			return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
				empty: jQuery.Callbacks( "once memory" ).add( function() {
					dataPriv.remove( elem, [ type + "queue", key ] );
				} )
			} );
		}
	} );

	jQuery.fn.extend( {
		queue: function( type, data ) {
			var setter = 2;

			if ( typeof type !== "string" ) {
				data = type;
				type = "fx";
				setter--;
			}

			if ( arguments.length < setter ) {
				return jQuery.queue( this[ 0 ], type );
			}

			return data === undefined ?
				this :
				this.each( function() {
					var queue = jQuery.queue( this, type, data );

					// Ensure a hooks for this queue
					jQuery._queueHooks( this, type );

					if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
						jQuery.dequeue( this, type );
					}
				} );
		},
		dequeue: function( type ) {
			return this.each( function() {
				jQuery.dequeue( this, type );
			} );
		},
		clearQueue: function( type ) {
			return this.queue( type || "fx", [] );
		},

		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function( type, obj ) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function() {
					if ( !( --count ) ) {
						defer.resolveWith( elements, [ elements ] );
					}
				};

			if ( typeof type !== "string" ) {
				obj = type;
				type = undefined;
			}
			type = type || "fx";

			while ( i-- ) {
				tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
				if ( tmp && tmp.empty ) {
					count++;
					tmp.empty.add( resolve );
				}
			}
			resolve();
			return defer.promise( obj );
		}
	} );
	var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

	var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


	var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

	var isHidden = function( elem, el ) {

			// isHidden might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;
			return jQuery.css( elem, "display" ) === "none" ||
				!jQuery.contains( elem.ownerDocument, elem );
		};



	function adjustCSS( elem, prop, valueParts, tween ) {
		var adjusted,
			scale = 1,
			maxIterations = 20,
			currentValue = tween ?
				function() { return tween.cur(); } :
				function() { return jQuery.css( elem, prop, "" ); },
			initial = currentValue(),
			unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

			// Starting value computation is required for potential unit mismatches
			initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
				rcssNum.exec( jQuery.css( elem, prop ) );

		if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

			// Trust units reported by jQuery.css
			unit = unit || initialInUnit[ 3 ];

			// Make sure we update the tween properties later on
			valueParts = valueParts || [];

			// Iteratively approximate from a nonzero starting point
			initialInUnit = +initial || 1;

			do {

				// If previous iteration zeroed out, double until we get *something*.
				// Use string for doubling so we don't accidentally see scale as unchanged below
				scale = scale || ".5";

				// Adjust and apply
				initialInUnit = initialInUnit / scale;
				jQuery.style( elem, prop, initialInUnit + unit );

			// Update scale, tolerating zero or NaN from tween.cur()
			// Break the loop if scale is unchanged or perfect, or if we've just had enough.
			} while (
				scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
			);
		}

		if ( valueParts ) {
			initialInUnit = +initialInUnit || +initial || 0;

			// Apply relative offset (+=/-=) if specified
			adjusted = valueParts[ 1 ] ?
				initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
				+valueParts[ 2 ];
			if ( tween ) {
				tween.unit = unit;
				tween.start = initialInUnit;
				tween.end = adjusted;
			}
		}
		return adjusted;
	}
	var rcheckableType = ( /^(?:checkbox|radio)$/i );

	var rtagName = ( /<([\w:-]+)/ );

	var rscriptType = ( /^$|\/(?:java|ecma)script/i );



	// We have to close these tags to support XHTML (#13200)
	var wrapMap = {

		// Support: IE9
		option: [ 1, "<select multiple='multiple'>", "</select>" ],

		// XHTML parsers do not magically insert elements in the
		// same way that tag soup parsers do. So we cannot shorten
		// this by omitting <tbody> or other required elements.
		thead: [ 1, "<table>", "</table>" ],
		col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

		_default: [ 0, "", "" ]
	};

	// Support: IE9
	wrapMap.optgroup = wrapMap.option;

	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;


	function getAll( context, tag ) {

		// Support: IE9-11+
		// Use typeof to avoid zero-argument method invocation on host objects (#15151)
		var ret = typeof context.getElementsByTagName !== "undefined" ?
				context.getElementsByTagName( tag || "*" ) :
				typeof context.querySelectorAll !== "undefined" ?
					context.querySelectorAll( tag || "*" ) :
				[];

		return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
			jQuery.merge( [ context ], ret ) :
			ret;
	}


	// Mark scripts as having already been evaluated
	function setGlobalEval( elems, refElements ) {
		var i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			dataPriv.set(
				elems[ i ],
				"globalEval",
				!refElements || dataPriv.get( refElements[ i ], "globalEval" )
			);
		}
	}


	var rhtml = /<|&#?\w+;/;

	function buildFragment( elems, context, scripts, selection, ignored ) {
		var elem, tmp, tag, wrap, contains, j,
			fragment = context.createDocumentFragment(),
			nodes = [],
			i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			elem = elems[ i ];

			if ( elem || elem === 0 ) {

				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {

					// Support: Android<4.1, PhantomJS<2
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );

				// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
					tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}

					// Support: Android<4.1, PhantomJS<2
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, tmp.childNodes );

					// Remember the top-level container
					tmp = fragment.firstChild;

					// Ensure the created nodes are orphaned (#12392)
					tmp.textContent = "";
				}
			}
		}

		// Remove wrapper from fragment
		fragment.textContent = "";

		i = 0;
		while ( ( elem = nodes[ i++ ] ) ) {

			// Skip elements already in the context collection (trac-4087)
			if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
				if ( ignored ) {
					ignored.push( elem );
				}
				continue;
			}

			contains = jQuery.contains( elem.ownerDocument, elem );

			// Append to fragment
			tmp = getAll( fragment.appendChild( elem ), "script" );

			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}

			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( ( elem = tmp[ j++ ] ) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}

		return fragment;
	}


	( function() {
		var fragment = document.createDocumentFragment(),
			div = fragment.appendChild( document.createElement( "div" ) ),
			input = document.createElement( "input" );

		// Support: Android 4.0-4.3, Safari<=5.1
		// Check state lost if the name is set (#11217)
		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input.setAttribute( "type", "radio" );
		input.setAttribute( "checked", "checked" );
		input.setAttribute( "name", "t" );

		div.appendChild( input );

		// Support: Safari<=5.1, Android<4.2
		// Older WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

		// Support: IE<=11+
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
	} )();


	var
		rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

	function returnTrue() {
		return true;
	}

	function returnFalse() {
		return false;
	}

	// Support: IE9
	// See #13393 for more info
	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch ( err ) { }
	}

	function on( elem, types, selector, data, fn, one ) {
		var origFn, type;

		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {

			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {

				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				on( elem, type, selector, data, types[ type ], one );
			}
			return elem;
		}

		if ( data == null && fn == null ) {

			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {

				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {

				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return elem;
		}

		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {

				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};

			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return elem.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		} );
	}

	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {

		global: {},

		add: function( elem, types, handler, data, selector ) {

			var handleObjIn, eventHandle, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.get( elem );

			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if ( !elemData ) {
				return;
			}

			// Caller can pass in an object of custom data in lieu of the handler
			if ( handler.handler ) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}

			// Make sure that the handler has a unique ID, used to find/remove it later
			if ( !handler.guid ) {
				handler.guid = jQuery.guid++;
			}

			// Init the element's event structure and main handler, if this is the first
			if ( !( events = elemData.events ) ) {
				events = elemData.events = {};
			}
			if ( !( eventHandle = elemData.handle ) ) {
				eventHandle = elemData.handle = function( e ) {

					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
						jQuery.event.dispatch.apply( elem, arguments ) : undefined;
				};
			}

			// Handle multiple events separated by a space
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// There *must* be a type, no attaching namespace-only handlers
				if ( !type ) {
					continue;
				}

				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[ type ] || {};

				// If selector defined, determine special event api type, otherwise given type
				type = ( selector ? special.delegateType : special.bindType ) || type;

				// Update special based on newly reset type
				special = jQuery.event.special[ type ] || {};

				// handleObj is passed to all event handlers
				handleObj = jQuery.extend( {
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
					namespace: namespaces.join( "." )
				}, handleObjIn );

				// Init the event handler queue if we're the first
				if ( !( handlers = events[ type ] ) ) {
					handlers = events[ type ] = [];
					handlers.delegateCount = 0;

					// Only use addEventListener if the special events handler returns false
					if ( !special.setup ||
						special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle );
						}
					}
				}

				if ( special.add ) {
					special.add.call( elem, handleObj );

					if ( !handleObj.handler.guid ) {
						handleObj.handler.guid = handler.guid;
					}
				}

				// Add to the element's handler list, delegates in front
				if ( selector ) {
					handlers.splice( handlers.delegateCount++, 0, handleObj );
				} else {
					handlers.push( handleObj );
				}

				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[ type ] = true;
			}

		},

		// Detach an event or set of events from an element
		remove: function( elem, types, handler, selector, mappedTypes ) {

			var j, origCount, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

			if ( !elemData || !( events = elemData.events ) ) {
				return;
			}

			// Once for each type.namespace in types; type may be omitted
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// Unbind all events (on this namespace, if provided) for the element
				if ( !type ) {
					for ( type in events ) {
						jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
					}
					continue;
				}

				special = jQuery.event.special[ type ] || {};
				type = ( selector ? special.delegateType : special.bindType ) || type;
				handlers = events[ type ] || [];
				tmp = tmp[ 2 ] &&
					new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

				// Remove matching events
				origCount = j = handlers.length;
				while ( j-- ) {
					handleObj = handlers[ j ];

					if ( ( mappedTypes || origType === handleObj.origType ) &&
						( !handler || handler.guid === handleObj.guid ) &&
						( !tmp || tmp.test( handleObj.namespace ) ) &&
						( !selector || selector === handleObj.selector ||
							selector === "**" && handleObj.selector ) ) {
						handlers.splice( j, 1 );

						if ( handleObj.selector ) {
							handlers.delegateCount--;
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
				}

				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if ( origCount && !handlers.length ) {
					if ( !special.teardown ||
						special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

						jQuery.removeEvent( elem, type, elemData.handle );
					}

					delete events[ type ];
				}
			}

			// Remove data and the expando if it's no longer used
			if ( jQuery.isEmptyObject( events ) ) {
				dataPriv.remove( elem, "handle events" );
			}
		},

		dispatch: function( event ) {

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( event );

			var i, j, ret, matched, handleObj,
				handlerQueue = [],
				args = slice.call( arguments ),
				handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};

			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[ 0 ] = event;
			event.delegateTarget = this;

			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
				return;
			}

			// Determine handlers
			handlerQueue = jQuery.event.handlers.call( this, event, handlers );

			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
				event.currentTarget = matched.elem;

				j = 0;
				while ( ( handleObj = matched.handlers[ j++ ] ) &&
					!event.isImmediatePropagationStopped() ) {

					// Triggered event must either 1) have no namespace, or 2) have namespace(s)
					// a subset or equal to those in the bound event (both can have no namespace).
					if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

						event.handleObj = handleObj;
						event.data = handleObj.data;

						ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
							handleObj.handler ).apply( matched.elem, args );

						if ( ret !== undefined ) {
							if ( ( event.result = ret ) === false ) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}

			// Call the postDispatch hook for the mapped type
			if ( special.postDispatch ) {
				special.postDispatch.call( this, event );
			}

			return event.result;
		},

		handlers: function( event, handlers ) {
			var i, matches, sel, handleObj,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;

			// Support (at least): Chrome, IE9
			// Find delegate handlers
			// Black-hole SVG <use> instance trees (#13180)
			//
			// Support: Firefox<=42+
			// Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
			if ( delegateCount && cur.nodeType &&
				( event.type !== "click" || isNaN( event.button ) || event.button < 1 ) ) {

				for ( ; cur !== this; cur = cur.parentNode || this ) {

					// Don't check non-elements (#13208)
					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if ( cur.nodeType === 1 && ( cur.disabled !== true || event.type !== "click" ) ) {
						matches = [];
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];

							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";

							if ( matches[ sel ] === undefined ) {
								matches[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) > -1 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matches[ sel ] ) {
								matches.push( handleObj );
							}
						}
						if ( matches.length ) {
							handlerQueue.push( { elem: cur, handlers: matches } );
						}
					}
				}
			}

			// Add the remaining (directly-bound) handlers
			if ( delegateCount < handlers.length ) {
				handlerQueue.push( { elem: this, handlers: handlers.slice( delegateCount ) } );
			}

			return handlerQueue;
		},

		// Includes some event props shared by KeyEvent and MouseEvent
		props: ( "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase " +
			"metaKey relatedTarget shiftKey target timeStamp view which" ).split( " " ),

		fixHooks: {},

		keyHooks: {
			props: "char charCode key keyCode".split( " " ),
			filter: function( event, original ) {

				// Add which for key events
				if ( event.which == null ) {
					event.which = original.charCode != null ? original.charCode : original.keyCode;
				}

				return event;
			}
		},

		mouseHooks: {
			props: ( "button buttons clientX clientY offsetX offsetY pageX pageY " +
				"screenX screenY toElement" ).split( " " ),
			filter: function( event, original ) {
				var eventDoc, doc, body,
					button = original.button;

				// Calculate pageX/Y if missing and clientX/Y available
				if ( event.pageX == null && original.clientX != null ) {
					eventDoc = event.target.ownerDocument || document;
					doc = eventDoc.documentElement;
					body = eventDoc.body;

					event.pageX = original.clientX +
						( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) -
						( doc && doc.clientLeft || body && body.clientLeft || 0 );
					event.pageY = original.clientY +
						( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) -
						( doc && doc.clientTop  || body && body.clientTop  || 0 );
				}

				// Add which for click: 1 === left; 2 === middle; 3 === right
				// Note: button is not normalized, so don't use it
				if ( !event.which && button !== undefined ) {
					event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
				}

				return event;
			}
		},

		fix: function( event ) {
			if ( event[ jQuery.expando ] ) {
				return event;
			}

			// Create a writable copy of the event object and normalize some properties
			var i, prop, copy,
				type = event.type,
				originalEvent = event,
				fixHook = this.fixHooks[ type ];

			if ( !fixHook ) {
				this.fixHooks[ type ] = fixHook =
					rmouseEvent.test( type ) ? this.mouseHooks :
					rkeyEvent.test( type ) ? this.keyHooks :
					{};
			}
			copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

			event = new jQuery.Event( originalEvent );

			i = copy.length;
			while ( i-- ) {
				prop = copy[ i ];
				event[ prop ] = originalEvent[ prop ];
			}

			// Support: Cordova 2.5 (WebKit) (#13255)
			// All events should have a target; Cordova deviceready doesn't
			if ( !event.target ) {
				event.target = document;
			}

			// Support: Safari 6.0+, Chrome<28
			// Target should not be a text node (#504, #13143)
			if ( event.target.nodeType === 3 ) {
				event.target = event.target.parentNode;
			}

			return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
		},

		special: {
			load: {

				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {

				// Fire native event if possible so blur/focus sequence is correct
				trigger: function() {
					if ( this !== safeActiveElement() && this.focus ) {
						this.focus();
						return false;
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if ( this === safeActiveElement() && this.blur ) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {

				// For checkbox, fire native event so checked state will be right
				trigger: function() {
					if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
						this.click();
						return false;
					}
				},

				// For cross-browser consistency, don't fire native .click() on links
				_default: function( event ) {
					return jQuery.nodeName( event.target, "a" );
				}
			},

			beforeunload: {
				postDispatch: function( event ) {

					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if ( event.result !== undefined && event.originalEvent ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		}
	};

	jQuery.removeEvent = function( elem, type, handle ) {

		// This "if" is needed for plain objects
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle );
		}
	};

	jQuery.Event = function( src, props ) {

		// Allow instantiation without the 'new' keyword
		if ( !( this instanceof jQuery.Event ) ) {
			return new jQuery.Event( src, props );
		}

		// Event object
		if ( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;

			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented ||
					src.defaultPrevented === undefined &&

					// Support: Android<4.0
					src.returnValue === false ?
				returnTrue :
				returnFalse;

		// Event type
		} else {
			this.type = src;
		}

		// Put explicitly provided properties onto the event object
		if ( props ) {
			jQuery.extend( this, props );
		}

		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();

		// Mark it as fixed
		this[ jQuery.expando ] = true;
	};

	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		constructor: jQuery.Event,
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,
		isSimulated: false,

		preventDefault: function() {
			var e = this.originalEvent;

			this.isDefaultPrevented = returnTrue;

			if ( e && !this.isSimulated ) {
				e.preventDefault();
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;

			this.isPropagationStopped = returnTrue;

			if ( e && !this.isSimulated ) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;

			this.isImmediatePropagationStopped = returnTrue;

			if ( e && !this.isSimulated ) {
				e.stopImmediatePropagation();
			}

			this.stopPropagation();
		}
	};

	// Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://code.google.com/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	jQuery.each( {
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function( orig, fix ) {
		jQuery.event.special[ orig ] = {
			delegateType: fix,
			bindType: fix,

			handle: function( event ) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;

				// For mouseenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply( this, arguments );
					event.type = fix;
				}
				return ret;
			}
		};
	} );

	jQuery.fn.extend( {
		on: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn );
		},
		one: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn, 1 );
		},
		off: function( types, selector, fn ) {
			var handleObj, type;
			if ( types && types.preventDefault && types.handleObj ) {

				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery( types.delegateTarget ).off(
					handleObj.namespace ?
						handleObj.origType + "." + handleObj.namespace :
						handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if ( typeof types === "object" ) {

				// ( types-object [, selector] )
				for ( type in types ) {
					this.off( type, selector, types[ type ] );
				}
				return this;
			}
			if ( selector === false || typeof selector === "function" ) {

				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if ( fn === false ) {
				fn = returnFalse;
			}
			return this.each( function() {
				jQuery.event.remove( this, types, fn, selector );
			} );
		}
	} );


	var
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,

		// Support: IE 10-11, Edge 10240+
		// In IE/Edge using regex groups here causes severe slowdowns.
		// See https://connect.microsoft.com/IE/feedback/details/1736512/
		rnoInnerhtml = /<script|<style|<link/i,

		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rscriptTypeMasked = /^true\/(.*)/,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

	// Manipulating tables requires a tbody
	function manipulationTarget( elem, content ) {
		return jQuery.nodeName( elem, "table" ) &&
			jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?

			elem.getElementsByTagName( "tbody" )[ 0 ] ||
				elem.appendChild( elem.ownerDocument.createElement( "tbody" ) ) :
			elem;
	}

	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		var match = rscriptTypeMasked.exec( elem.type );

		if ( match ) {
			elem.type = match[ 1 ];
		} else {
			elem.removeAttribute( "type" );
		}

		return elem;
	}

	function cloneCopyEvent( src, dest ) {
		var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

		if ( dest.nodeType !== 1 ) {
			return;
		}

		// 1. Copy private data: events, handlers, etc.
		if ( dataPriv.hasData( src ) ) {
			pdataOld = dataPriv.access( src );
			pdataCur = dataPriv.set( dest, pdataOld );
			events = pdataOld.events;

			if ( events ) {
				delete pdataCur.handle;
				pdataCur.events = {};

				for ( type in events ) {
					for ( i = 0, l = events[ type ].length; i < l; i++ ) {
						jQuery.event.add( dest, type, events[ type ][ i ] );
					}
				}
			}
		}

		// 2. Copy user data
		if ( dataUser.hasData( src ) ) {
			udataOld = dataUser.access( src );
			udataCur = jQuery.extend( {}, udataOld );

			dataUser.set( dest, udataCur );
		}
	}

	// Fix IE bugs, see support tests
	function fixInput( src, dest ) {
		var nodeName = dest.nodeName.toLowerCase();

		// Fails to persist the checked state of a cloned checkbox or radio button.
		if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
			dest.checked = src.checked;

		// Fails to return the selected option to the default selected state when cloning options
		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}

	function domManip( collection, args, callback, ignored ) {

		// Flatten any nested arrays
		args = concat.apply( [], args );

		var fragment, first, scripts, hasScripts, node, doc,
			i = 0,
			l = collection.length,
			iNoClone = l - 1,
			value = args[ 0 ],
			isFunction = jQuery.isFunction( value );

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return collection.each( function( index ) {
				var self = collection.eq( index );
				if ( isFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				domManip( self, args, callback, ignored );
			} );
		}

		if ( l ) {
			fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
			first = fragment.firstChild;

			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}

			// Require either new content or an interest in ignored elements to invoke the callback
			if ( first || ignored ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;

				// Use the original fragment for the last item
				// instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;

					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );

						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {

							// Support: Android<4.1, PhantomJS<2
							// push.apply(_, arraylike) throws on ancient WebKit
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}

					callback.call( collection[ i ], node, i );
				}

				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;

					// Reenable scripts
					jQuery.map( scripts, restoreScript );

					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!dataPriv.access( node, "globalEval" ) &&
							jQuery.contains( doc, node ) ) {

							if ( node.src ) {

								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								jQuery.globalEval( node.textContent.replace( rcleanScript, "" ) );
							}
						}
					}
				}
			}
		}

		return collection;
	}

	function remove( elem, selector, keepData ) {
		var node,
			nodes = selector ? jQuery.filter( selector, elem ) : elem,
			i = 0;

		for ( ; ( node = nodes[ i ] ) != null; i++ ) {
			if ( !keepData && node.nodeType === 1 ) {
				jQuery.cleanData( getAll( node ) );
			}

			if ( node.parentNode ) {
				if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
					setGlobalEval( getAll( node, "script" ) );
				}
				node.parentNode.removeChild( node );
			}
		}

		return elem;
	}

	jQuery.extend( {
		htmlPrefilter: function( html ) {
			return html.replace( rxhtmlTag, "<$1></$2>" );
		},

		clone: function( elem, dataAndEvents, deepDataAndEvents ) {
			var i, l, srcElements, destElements,
				clone = elem.cloneNode( true ),
				inPage = jQuery.contains( elem.ownerDocument, elem );

			// Fix IE cloning issues
			if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
					!jQuery.isXMLDoc( elem ) ) {

				// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
				destElements = getAll( clone );
				srcElements = getAll( elem );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					fixInput( srcElements[ i ], destElements[ i ] );
				}
			}

			// Copy the events from the original to the clone
			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );

					for ( i = 0, l = srcElements.length; i < l; i++ ) {
						cloneCopyEvent( srcElements[ i ], destElements[ i ] );
					}
				} else {
					cloneCopyEvent( elem, clone );
				}
			}

			// Preserve script evaluation history
			destElements = getAll( clone, "script" );
			if ( destElements.length > 0 ) {
				setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
			}

			// Return the cloned set
			return clone;
		},

		cleanData: function( elems ) {
			var data, elem, type,
				special = jQuery.event.special,
				i = 0;

			for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
				if ( acceptData( elem ) ) {
					if ( ( data = elem[ dataPriv.expando ] ) ) {
						if ( data.events ) {
							for ( type in data.events ) {
								if ( special[ type ] ) {
									jQuery.event.remove( elem, type );

								// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent( elem, type, data.handle );
								}
							}
						}

						// Support: Chrome <= 35-45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataPriv.expando ] = undefined;
					}
					if ( elem[ dataUser.expando ] ) {

						// Support: Chrome <= 35-45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataUser.expando ] = undefined;
					}
				}
			}
		}
	} );

	jQuery.fn.extend( {

		// Keep domManip exposed until 3.0 (gh-2225)
		domManip: domManip,

		detach: function( selector ) {
			return remove( this, selector, true );
		},

		remove: function( selector ) {
			return remove( this, selector );
		},

		text: function( value ) {
			return access( this, function( value ) {
				return value === undefined ?
					jQuery.text( this ) :
					this.empty().each( function() {
						if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
							this.textContent = value;
						}
					} );
			}, null, value, arguments.length );
		},

		append: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.appendChild( elem );
				}
			} );
		},

		prepend: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.insertBefore( elem, target.firstChild );
				}
			} );
		},

		before: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this );
				}
			} );
		},

		after: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this.nextSibling );
				}
			} );
		},

		empty: function() {
			var elem,
				i = 0;

			for ( ; ( elem = this[ i ] ) != null; i++ ) {
				if ( elem.nodeType === 1 ) {

					// Prevent memory leaks
					jQuery.cleanData( getAll( elem, false ) );

					// Remove any remaining nodes
					elem.textContent = "";
				}
			}

			return this;
		},

		clone: function( dataAndEvents, deepDataAndEvents ) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

			return this.map( function() {
				return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
			} );
		},

		html: function( value ) {
			return access( this, function( value ) {
				var elem = this[ 0 ] || {},
					i = 0,
					l = this.length;

				if ( value === undefined && elem.nodeType === 1 ) {
					return elem.innerHTML;
				}

				// See if we can take a shortcut and just use innerHTML
				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

					value = jQuery.htmlPrefilter( value );

					try {
						for ( ; i < l; i++ ) {
							elem = this[ i ] || {};

							// Remove element nodes and prevent memory leaks
							if ( elem.nodeType === 1 ) {
								jQuery.cleanData( getAll( elem, false ) );
								elem.innerHTML = value;
							}
						}

						elem = 0;

					// If using innerHTML throws an exception, use the fallback method
					} catch ( e ) {}
				}

				if ( elem ) {
					this.empty().append( value );
				}
			}, null, value, arguments.length );
		},

		replaceWith: function() {
			var ignored = [];

			// Make the changes, replacing each non-ignored context element with the new content
			return domManip( this, arguments, function( elem ) {
				var parent = this.parentNode;

				if ( jQuery.inArray( this, ignored ) < 0 ) {
					jQuery.cleanData( getAll( this ) );
					if ( parent ) {
						parent.replaceChild( elem, this );
					}
				}

			// Force callback invocation
			}, ignored );
		}
	} );

	jQuery.each( {
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var elems,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1,
				i = 0;

			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone( true );
				jQuery( insert[ i ] )[ original ]( elems );

				// Support: QtWebKit
				// .get() because push.apply(_, arraylike) throws
				push.apply( ret, elems.get() );
			}

			return this.pushStack( ret );
		};
	} );


	var iframe,
		elemdisplay = {

			// Support: Firefox
			// We have to pre-define these values for FF (#10227)
			HTML: "block",
			BODY: "block"
		};

	/**
	 * Retrieve the actual display of a element
	 * @param {String} name nodeName of the element
	 * @param {Object} doc Document object
	 */

	// Called only from within defaultDisplay
	function actualDisplay( name, doc ) {
		var elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),

			display = jQuery.css( elem[ 0 ], "display" );

		// We don't have any data stored on the element,
		// so use "detach" method as fast way to get rid of the element
		elem.detach();

		return display;
	}

	/**
	 * Try to determine the default display value of an element
	 * @param {String} nodeName
	 */
	function defaultDisplay( nodeName ) {
		var doc = document,
			display = elemdisplay[ nodeName ];

		if ( !display ) {
			display = actualDisplay( nodeName, doc );

			// If the simple way fails, read from inside an iframe
			if ( display === "none" || !display ) {

				// Use the already-created iframe if possible
				iframe = ( iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" ) )
					.appendTo( doc.documentElement );

				// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
				doc = iframe[ 0 ].contentDocument;

				// Support: IE
				doc.write();
				doc.close();

				display = actualDisplay( nodeName, doc );
				iframe.detach();
			}

			// Store the correct default display
			elemdisplay[ nodeName ] = display;
		}

		return display;
	}
	var rmargin = ( /^margin/ );

	var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

	var getStyles = function( elem ) {

			// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
			// IE throws on elements created in popups
			// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
			var view = elem.ownerDocument.defaultView;

			if ( !view || !view.opener ) {
				view = window;
			}

			return view.getComputedStyle( elem );
		};

	var swap = function( elem, options, callback, args ) {
		var ret, name,
			old = {};

		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}

		ret = callback.apply( elem, args || [] );

		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}

		return ret;
	};


	var documentElement = document.documentElement;



	( function() {
		var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
			container = document.createElement( "div" ),
			div = document.createElement( "div" );

		// Finish early in limited (non-browser) environments
		if ( !div.style ) {
			return;
		}

		// Support: IE9-11+
		// Style of cloned element affects source element cloned (#8908)
		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";

		container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
			"padding:0;margin-top:1px;position:absolute";
		container.appendChild( div );

		// Executing both pixelPosition & boxSizingReliable tests require only one layout
		// so they're executed at the same time to save the second computation.
		function computeStyleTests() {
			div.style.cssText =

				// Support: Firefox<29, Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;" +
				"position:relative;display:block;" +
				"margin:auto;border:1px;padding:1px;" +
				"top:1%;width:50%";
			div.innerHTML = "";
			documentElement.appendChild( container );

			var divStyle = window.getComputedStyle( div );
			pixelPositionVal = divStyle.top !== "1%";
			reliableMarginLeftVal = divStyle.marginLeft === "2px";
			boxSizingReliableVal = divStyle.width === "4px";

			// Support: Android 4.0 - 4.3 only
			// Some styles come back with percentage values, even though they shouldn't
			div.style.marginRight = "50%";
			pixelMarginRightVal = divStyle.marginRight === "4px";

			documentElement.removeChild( container );
		}

		jQuery.extend( support, {
			pixelPosition: function() {

				// This test is executed only once but we still do memoizing
				// since we can use the boxSizingReliable pre-computing.
				// No need to check if the test was already performed, though.
				computeStyleTests();
				return pixelPositionVal;
			},
			boxSizingReliable: function() {
				if ( boxSizingReliableVal == null ) {
					computeStyleTests();
				}
				return boxSizingReliableVal;
			},
			pixelMarginRight: function() {

				// Support: Android 4.0-4.3
				// We're checking for boxSizingReliableVal here instead of pixelMarginRightVal
				// since that compresses better and they're computed together anyway.
				if ( boxSizingReliableVal == null ) {
					computeStyleTests();
				}
				return pixelMarginRightVal;
			},
			reliableMarginLeft: function() {

				// Support: IE <=8 only, Android 4.0 - 4.3 only, Firefox <=3 - 37
				if ( boxSizingReliableVal == null ) {
					computeStyleTests();
				}
				return reliableMarginLeftVal;
			},
			reliableMarginRight: function() {

				// Support: Android 2.3
				// Check if div with explicit width and no margin-right incorrectly
				// gets computed margin-right based on width of container. (#3333)
				// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
				// This support function is only executed once so no memoizing is needed.
				var ret,
					marginDiv = div.appendChild( document.createElement( "div" ) );

				// Reset CSS: box-sizing; display; margin; border; padding
				marginDiv.style.cssText = div.style.cssText =

					// Support: Android 2.3
					// Vendor-prefix box-sizing
					"-webkit-box-sizing:content-box;box-sizing:content-box;" +
					"display:block;margin:0;border:0;padding:0";
				marginDiv.style.marginRight = marginDiv.style.width = "0";
				div.style.width = "1px";
				documentElement.appendChild( container );

				ret = !parseFloat( window.getComputedStyle( marginDiv ).marginRight );

				documentElement.removeChild( container );
				div.removeChild( marginDiv );

				return ret;
			}
		} );
	} )();


	function curCSS( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,
			style = elem.style;

		computed = computed || getStyles( elem );
		ret = computed ? computed.getPropertyValue( name ) || computed[ name ] : undefined;

		// Support: Opera 12.1x only
		// Fall back to style even without computed
		// computed is undefined for elems on document fragments
		if ( ( ret === "" || ret === undefined ) && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// Support: IE9
		// getPropertyValue is only needed for .css('filter') (#12537)
		if ( computed ) {

			// A tribute to the "awesome hack by Dean Edwards"
			// Android Browser returns percentage for some values,
			// but width seems to be reliably pixels.
			// This is against the CSSOM draft spec:
			// http://dev.w3.org/csswg/cssom/#resolved-values
			if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		return ret !== undefined ?

			// Support: IE9-11+
			// IE returns zIndex value as an integer.
			ret + "" :
			ret;
	}


	function addGetHookIf( conditionFn, hookFn ) {

		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function() {
				if ( conditionFn() ) {

					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}

				// Hook needed; redefine it so that the support test is not executed again.
				return ( this.get = hookFn ).apply( this, arguments );
			}
		};
	}


	var

		// Swappable if display is none or starts with table
		// except "table", "table-cell", or "table-caption"
		// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,

		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},

		cssPrefixes = [ "Webkit", "O", "Moz", "ms" ],
		emptyStyle = document.createElement( "div" ).style;

	// Return a css property mapped to a potentially vendor prefixed property
	function vendorPropName( name ) {

		// Shortcut for names that are not vendor prefixed
		if ( name in emptyStyle ) {
			return name;
		}

		// Check for vendor prefixed names
		var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
			i = cssPrefixes.length;

		while ( i-- ) {
			name = cssPrefixes[ i ] + capName;
			if ( name in emptyStyle ) {
				return name;
			}
		}
	}

	function setPositiveNumber( elem, value, subtract ) {

		// Any relative (+/-) values have already been
		// normalized at this point
		var matches = rcssNum.exec( value );
		return matches ?

			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
			value;
	}

	function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
		var i = extra === ( isBorderBox ? "border" : "content" ) ?

			// If we already have the right measurement, avoid augmentation
			4 :

			// Otherwise initialize for horizontal or vertical properties
			name === "width" ? 1 : 0,

			val = 0;

		for ( ; i < 4; i += 2 ) {

			// Both box models exclude margin, so add it if we want it
			if ( extra === "margin" ) {
				val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
			}

			if ( isBorderBox ) {

				// border-box includes padding, so remove it if we want content
				if ( extra === "content" ) {
					val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
				}

				// At this point, extra isn't border nor margin, so remove border
				if ( extra !== "margin" ) {
					val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			} else {

				// At this point, extra isn't content, so add padding
				val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

				// At this point, extra isn't content nor padding, so add border
				if ( extra !== "padding" ) {
					val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			}
		}

		return val;
	}

	function getWidthOrHeight( elem, name, extra ) {

		// Start with offset property, which is equivalent to the border-box value
		var valueIsBorderBox = true,
			val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
			styles = getStyles( elem ),
			isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Some non-html elements return undefined for offsetWidth, so check for null/undefined
		// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
		// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
		if ( val <= 0 || val == null ) {

			// Fall back to computed then uncomputed css if necessary
			val = curCSS( elem, name, styles );
			if ( val < 0 || val == null ) {
				val = elem.style[ name ];
			}

			// Computed unit is not pixels. Stop here and return.
			if ( rnumnonpx.test( val ) ) {
				return val;
			}

			// Check for style in case a browser which returns unreliable values
			// for getComputedStyle silently falls back to the reliable elem.style
			valueIsBorderBox = isBorderBox &&
				( support.boxSizingReliable() || val === elem.style[ name ] );

			// Normalize "", auto, and prepare for extra
			val = parseFloat( val ) || 0;
		}

		// Use the active box-sizing model to add/subtract irrelevant styles
		return ( val +
			augmentWidthOrHeight(
				elem,
				name,
				extra || ( isBorderBox ? "border" : "content" ),
				valueIsBorderBox,
				styles
			)
		) + "px";
	}

	function showHide( elements, show ) {
		var display, elem, hidden,
			values = [],
			index = 0,
			length = elements.length;

		for ( ; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}

			values[ index ] = dataPriv.get( elem, "olddisplay" );
			display = elem.style.display;
			if ( show ) {

				// Reset the inline display of this element to learn if it is
				// being hidden by cascaded rules or not
				if ( !values[ index ] && display === "none" ) {
					elem.style.display = "";
				}

				// Set elements which have been overridden with display: none
				// in a stylesheet to whatever the default browser style is
				// for such an element
				if ( elem.style.display === "" && isHidden( elem ) ) {
					values[ index ] = dataPriv.access(
						elem,
						"olddisplay",
						defaultDisplay( elem.nodeName )
					);
				}
			} else {
				hidden = isHidden( elem );

				if ( display !== "none" || !hidden ) {
					dataPriv.set(
						elem,
						"olddisplay",
						hidden ? display : jQuery.css( elem, "display" )
					);
				}
			}
		}

		// Set the display of most of the elements in a second loop
		// to avoid the constant reflow
		for ( index = 0; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}
			if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
				elem.style.display = show ? values[ index ] || "" : "none";
			}
		}

		return elements;
	}

	jQuery.extend( {

		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function( elem, computed ) {
					if ( computed ) {

						// We should always get a number back from opacity
						var ret = curCSS( elem, "opacity" );
						return ret === "" ? "1" : ret;
					}
				}
			}
		},

		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"animationIterationCount": true,
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},

		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {
			"float": "cssFloat"
		},

		// Get and set the style property on a DOM Node
		style: function( elem, name, value, extra ) {

			// Don't set styles on text and comment nodes
			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
				return;
			}

			// Make sure that we're working with the right name
			var ret, type, hooks,
				origName = jQuery.camelCase( name ),
				style = elem.style;

			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

			// Gets hook for the prefixed version, then unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// Check if we're setting a value
			if ( value !== undefined ) {
				type = typeof value;

				// Convert "+=" or "-=" to relative numbers (#7345)
				if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
					value = adjustCSS( elem, name, ret );

					// Fixes bug #9237
					type = "number";
				}

				// Make sure that null and NaN values aren't set (#7116)
				if ( value == null || value !== value ) {
					return;
				}

				// If a number was passed in, add the unit (except for certain CSS properties)
				if ( type === "number" ) {
					value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
				}

				// Support: IE9-11+
				// background-* props affect original clone's values
				if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
					style[ name ] = "inherit";
				}

				// If a hook was provided, use that value, otherwise just set the specified value
				if ( !hooks || !( "set" in hooks ) ||
					( value = hooks.set( elem, value, extra ) ) !== undefined ) {

					style[ name ] = value;
				}

			} else {

				// If a hook was provided get the non-computed value from there
				if ( hooks && "get" in hooks &&
					( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

					return ret;
				}

				// Otherwise just get the value from the style object
				return style[ name ];
			}
		},

		css: function( elem, name, extra, styles ) {
			var val, num, hooks,
				origName = jQuery.camelCase( name );

			// Make sure that we're working with the right name
			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

			// Try prefixed name followed by the unprefixed name
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// If a hook was provided get the computed value from there
			if ( hooks && "get" in hooks ) {
				val = hooks.get( elem, true, extra );
			}

			// Otherwise, if a way to get the computed value exists, use that
			if ( val === undefined ) {
				val = curCSS( elem, name, styles );
			}

			// Convert "normal" to computed value
			if ( val === "normal" && name in cssNormalTransform ) {
				val = cssNormalTransform[ name ];
			}

			// Make numeric if forced or a qualifier was provided and val looks numeric
			if ( extra === "" || extra ) {
				num = parseFloat( val );
				return extra === true || isFinite( num ) ? num || 0 : val;
			}
			return val;
		}
	} );

	jQuery.each( [ "height", "width" ], function( i, name ) {
		jQuery.cssHooks[ name ] = {
			get: function( elem, computed, extra ) {
				if ( computed ) {

					// Certain elements can have dimension info if we invisibly show them
					// but it must have a current display style that would benefit
					return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&
						elem.offsetWidth === 0 ?
							swap( elem, cssShow, function() {
								return getWidthOrHeight( elem, name, extra );
							} ) :
							getWidthOrHeight( elem, name, extra );
				}
			},

			set: function( elem, value, extra ) {
				var matches,
					styles = extra && getStyles( elem ),
					subtract = extra && augmentWidthOrHeight(
						elem,
						name,
						extra,
						jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
						styles
					);

				// Convert to pixels if value adjustment is needed
				if ( subtract && ( matches = rcssNum.exec( value ) ) &&
					( matches[ 3 ] || "px" ) !== "px" ) {

					elem.style[ name ] = value;
					value = jQuery.css( elem, name );
				}

				return setPositiveNumber( elem, value, subtract );
			}
		};
	} );

	jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
		function( elem, computed ) {
			if ( computed ) {
				return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
					elem.getBoundingClientRect().left -
						swap( elem, { marginLeft: 0 }, function() {
							return elem.getBoundingClientRect().left;
						} )
					) + "px";
			}
		}
	);

	// Support: Android 2.3
	jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
		function( elem, computed ) {
			if ( computed ) {
				return swap( elem, { "display": "inline-block" },
					curCSS, [ elem, "marginRight" ] );
			}
		}
	);

	// These hooks are used by animate to expand properties
	jQuery.each( {
		margin: "",
		padding: "",
		border: "Width"
	}, function( prefix, suffix ) {
		jQuery.cssHooks[ prefix + suffix ] = {
			expand: function( value ) {
				var i = 0,
					expanded = {},

					// Assumes a single number if not a string
					parts = typeof value === "string" ? value.split( " " ) : [ value ];

				for ( ; i < 4; i++ ) {
					expanded[ prefix + cssExpand[ i ] + suffix ] =
						parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
				}

				return expanded;
			}
		};

		if ( !rmargin.test( prefix ) ) {
			jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
		}
	} );

	jQuery.fn.extend( {
		css: function( name, value ) {
			return access( this, function( elem, name, value ) {
				var styles, len,
					map = {},
					i = 0;

				if ( jQuery.isArray( name ) ) {
					styles = getStyles( elem );
					len = name.length;

					for ( ; i < len; i++ ) {
						map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
					}

					return map;
				}

				return value !== undefined ?
					jQuery.style( elem, name, value ) :
					jQuery.css( elem, name );
			}, name, value, arguments.length > 1 );
		},
		show: function() {
			return showHide( this, true );
		},
		hide: function() {
			return showHide( this );
		},
		toggle: function( state ) {
			if ( typeof state === "boolean" ) {
				return state ? this.show() : this.hide();
			}

			return this.each( function() {
				if ( isHidden( this ) ) {
					jQuery( this ).show();
				} else {
					jQuery( this ).hide();
				}
			} );
		}
	} );


	function Tween( elem, options, prop, end, easing ) {
		return new Tween.prototype.init( elem, options, prop, end, easing );
	}
	jQuery.Tween = Tween;

	Tween.prototype = {
		constructor: Tween,
		init: function( elem, options, prop, end, easing, unit ) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || jQuery.easing._default;
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
		},
		cur: function() {
			var hooks = Tween.propHooks[ this.prop ];

			return hooks && hooks.get ?
				hooks.get( this ) :
				Tween.propHooks._default.get( this );
		},
		run: function( percent ) {
			var eased,
				hooks = Tween.propHooks[ this.prop ];

			if ( this.options.duration ) {
				this.pos = eased = jQuery.easing[ this.easing ](
					percent, this.options.duration * percent, 0, 1, this.options.duration
				);
			} else {
				this.pos = eased = percent;
			}
			this.now = ( this.end - this.start ) * eased + this.start;

			if ( this.options.step ) {
				this.options.step.call( this.elem, this.now, this );
			}

			if ( hooks && hooks.set ) {
				hooks.set( this );
			} else {
				Tween.propHooks._default.set( this );
			}
			return this;
		}
	};

	Tween.prototype.init.prototype = Tween.prototype;

	Tween.propHooks = {
		_default: {
			get: function( tween ) {
				var result;

				// Use a property on the element directly when it is not a DOM element,
				// or when there is no matching style property that exists.
				if ( tween.elem.nodeType !== 1 ||
					tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
					return tween.elem[ tween.prop ];
				}

				// Passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails.
				// Simple values such as "10px" are parsed to Float;
				// complex values such as "rotate(1rad)" are returned as-is.
				result = jQuery.css( tween.elem, tween.prop, "" );

				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function( tween ) {

				// Use step hook for back compat.
				// Use cssHook if its there.
				// Use .style if available and use plain properties where available.
				if ( jQuery.fx.step[ tween.prop ] ) {
					jQuery.fx.step[ tween.prop ]( tween );
				} else if ( tween.elem.nodeType === 1 &&
					( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
						jQuery.cssHooks[ tween.prop ] ) ) {
					jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
				} else {
					tween.elem[ tween.prop ] = tween.now;
				}
			}
		}
	};

	// Support: IE9
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function( tween ) {
			if ( tween.elem.nodeType && tween.elem.parentNode ) {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	};

	jQuery.easing = {
		linear: function( p ) {
			return p;
		},
		swing: function( p ) {
			return 0.5 - Math.cos( p * Math.PI ) / 2;
		},
		_default: "swing"
	};

	jQuery.fx = Tween.prototype.init;

	// Back Compat <1.8 extension point
	jQuery.fx.step = {};




	var
		fxNow, timerId,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rrun = /queueHooks$/;

	// Animations created synchronously will run synchronously
	function createFxNow() {
		window.setTimeout( function() {
			fxNow = undefined;
		} );
		return ( fxNow = jQuery.now() );
	}

	// Generate parameters to create a standard animation
	function genFx( type, includeWidth ) {
		var which,
			i = 0,
			attrs = { height: type };

		// If we include width, step value is 1 to do all cssExpand values,
		// otherwise step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for ( ; i < 4 ; i += 2 - includeWidth ) {
			which = cssExpand[ i ];
			attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
		}

		if ( includeWidth ) {
			attrs.opacity = attrs.width = type;
		}

		return attrs;
	}

	function createTween( value, prop, animation ) {
		var tween,
			collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

				// We're done with this property
				return tween;
			}
		}
	}

	function defaultPrefilter( elem, props, opts ) {
		/* jshint validthis: true */
		var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
			anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHidden( elem ),
			dataShow = dataPriv.get( elem, "fxshow" );

		// Handle queue: false promises
		if ( !opts.queue ) {
			hooks = jQuery._queueHooks( elem, "fx" );
			if ( hooks.unqueued == null ) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function() {
					if ( !hooks.unqueued ) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;

			anim.always( function() {

				// Ensure the complete handler is called before this completes
				anim.always( function() {
					hooks.unqueued--;
					if ( !jQuery.queue( elem, "fx" ).length ) {
						hooks.empty.fire();
					}
				} );
			} );
		}

		// Height/width overflow pass
		if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {

			// Make sure that nothing sneaks out
			// Record all 3 overflow attributes because IE9-10 do not
			// change the overflow attribute when overflowX and
			// overflowY are set to the same value
			opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

			// Set display property to inline-block for height/width
			// animations on inline elements that are having width/height animated
			display = jQuery.css( elem, "display" );

			// Test default display if display is currently "none"
			checkDisplay = display === "none" ?
				dataPriv.get( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;

			if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {
				style.display = "inline-block";
			}
		}

		if ( opts.overflow ) {
			style.overflow = "hidden";
			anim.always( function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			} );
		}

		// show/hide pass
		for ( prop in props ) {
			value = props[ prop ];
			if ( rfxtypes.exec( value ) ) {
				delete props[ prop ];
				toggle = toggle || value === "toggle";
				if ( value === ( hidden ? "hide" : "show" ) ) {

					// If there is dataShow left over from a stopped hide or show
					// and we are going to proceed with show, we should pretend to be hidden
					if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
						hidden = true;
					} else {
						continue;
					}
				}
				orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );

			// Any non-fx value stops us from restoring the original display value
			} else {
				display = undefined;
			}
		}

		if ( !jQuery.isEmptyObject( orig ) ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", {} );
			}

			// Store state if its toggle - enables .stop().toggle() to "reverse"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}
			if ( hidden ) {
				jQuery( elem ).show();
			} else {
				anim.done( function() {
					jQuery( elem ).hide();
				} );
			}
			anim.done( function() {
				var prop;

				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
			for ( prop in orig ) {
				tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );

				if ( !( prop in dataShow ) ) {
					dataShow[ prop ] = tween.start;
					if ( hidden ) {
						tween.end = tween.start;
						tween.start = prop === "width" || prop === "height" ? 1 : 0;
					}
				}
			}

		// If this is a noop like .hide().hide(), restore an overwritten display value
		} else if ( ( display === "none" ? defaultDisplay( elem.nodeName ) : display ) === "inline" ) {
			style.display = display;
		}
	}

	function propFilter( props, specialEasing ) {
		var index, name, easing, value, hooks;

		// camelCase, specialEasing and expand cssHook pass
		for ( index in props ) {
			name = jQuery.camelCase( index );
			easing = specialEasing[ name ];
			value = props[ index ];
			if ( jQuery.isArray( value ) ) {
				easing = value[ 1 ];
				value = props[ index ] = value[ 0 ];
			}

			if ( index !== name ) {
				props[ name ] = value;
				delete props[ index ];
			}

			hooks = jQuery.cssHooks[ name ];
			if ( hooks && "expand" in hooks ) {
				value = hooks.expand( value );
				delete props[ name ];

				// Not quite $.extend, this won't overwrite existing keys.
				// Reusing 'index' because we have the correct "name"
				for ( index in value ) {
					if ( !( index in props ) ) {
						props[ index ] = value[ index ];
						specialEasing[ index ] = easing;
					}
				}
			} else {
				specialEasing[ name ] = easing;
			}
		}
	}

	function Animation( elem, properties, options ) {
		var result,
			stopped,
			index = 0,
			length = Animation.prefilters.length,
			deferred = jQuery.Deferred().always( function() {

				// Don't match elem in the :animated selector
				delete tick.elem;
			} ),
			tick = function() {
				if ( stopped ) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

					// Support: Android 2.3
					// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;

				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( percent );
				}

				deferred.notifyWith( elem, [ animation, percent, remaining ] );

				if ( percent < 1 && length ) {
					return remaining;
				} else {
					deferred.resolveWith( elem, [ animation ] );
					return false;
				}
			},
			animation = deferred.promise( {
				elem: elem,
				props: jQuery.extend( {}, properties ),
				opts: jQuery.extend( true, {
					specialEasing: {},
					easing: jQuery.easing._default
				}, options ),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function( prop, end ) {
					var tween = jQuery.Tween( elem, animation.opts, prop, end,
							animation.opts.specialEasing[ prop ] || animation.opts.easing );
					animation.tweens.push( tween );
					return tween;
				},
				stop: function( gotoEnd ) {
					var index = 0,

						// If we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
					if ( stopped ) {
						return this;
					}
					stopped = true;
					for ( ; index < length ; index++ ) {
						animation.tweens[ index ].run( 1 );
					}

					// Resolve when we played the last frame; otherwise, reject
					if ( gotoEnd ) {
						deferred.notifyWith( elem, [ animation, 1, 0 ] );
						deferred.resolveWith( elem, [ animation, gotoEnd ] );
					} else {
						deferred.rejectWith( elem, [ animation, gotoEnd ] );
					}
					return this;
				}
			} ),
			props = animation.props;

		propFilter( props, animation.opts.specialEasing );

		for ( ; index < length ; index++ ) {
			result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
			if ( result ) {
				if ( jQuery.isFunction( result.stop ) ) {
					jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
						jQuery.proxy( result.stop, result );
				}
				return result;
			}
		}

		jQuery.map( props, createTween, animation );

		if ( jQuery.isFunction( animation.opts.start ) ) {
			animation.opts.start.call( elem, animation );
		}

		jQuery.fx.timer(
			jQuery.extend( tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			} )
		);

		// attach callbacks from options
		return animation.progress( animation.opts.progress )
			.done( animation.opts.done, animation.opts.complete )
			.fail( animation.opts.fail )
			.always( animation.opts.always );
	}

	jQuery.Animation = jQuery.extend( Animation, {
		tweeners: {
			"*": [ function( prop, value ) {
				var tween = this.createTween( prop, value );
				adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
				return tween;
			} ]
		},

		tweener: function( props, callback ) {
			if ( jQuery.isFunction( props ) ) {
				callback = props;
				props = [ "*" ];
			} else {
				props = props.match( rnotwhite );
			}

			var prop,
				index = 0,
				length = props.length;

			for ( ; index < length ; index++ ) {
				prop = props[ index ];
				Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
				Animation.tweeners[ prop ].unshift( callback );
			}
		},

		prefilters: [ defaultPrefilter ],

		prefilter: function( callback, prepend ) {
			if ( prepend ) {
				Animation.prefilters.unshift( callback );
			} else {
				Animation.prefilters.push( callback );
			}
		}
	} );

	jQuery.speed = function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
		};

		opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ?
			opt.duration : opt.duration in jQuery.fx.speeds ?
				jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

		// Normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}

		// Queueing
		opt.old = opt.complete;

		opt.complete = function() {
			if ( jQuery.isFunction( opt.old ) ) {
				opt.old.call( this );
			}

			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			}
		};

		return opt;
	};

	jQuery.fn.extend( {
		fadeTo: function( speed, to, easing, callback ) {

			// Show any hidden elements after setting opacity to 0
			return this.filter( isHidden ).css( "opacity", 0 ).show()

				// Animate to the value specified
				.end().animate( { opacity: to }, speed, easing, callback );
		},
		animate: function( prop, speed, easing, callback ) {
			var empty = jQuery.isEmptyObject( prop ),
				optall = jQuery.speed( speed, easing, callback ),
				doAnimation = function() {

					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation( this, jQuery.extend( {}, prop ), optall );

					// Empty animations, or finishing resolves immediately
					if ( empty || dataPriv.get( this, "finish" ) ) {
						anim.stop( true );
					}
				};
				doAnimation.finish = doAnimation;

			return empty || optall.queue === false ?
				this.each( doAnimation ) :
				this.queue( optall.queue, doAnimation );
		},
		stop: function( type, clearQueue, gotoEnd ) {
			var stopQueue = function( hooks ) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop( gotoEnd );
			};

			if ( typeof type !== "string" ) {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if ( clearQueue && type !== false ) {
				this.queue( type || "fx", [] );
			}

			return this.each( function() {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = dataPriv.get( this );

				if ( index ) {
					if ( data[ index ] && data[ index ].stop ) {
						stopQueue( data[ index ] );
					}
				} else {
					for ( index in data ) {
						if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
							stopQueue( data[ index ] );
						}
					}
				}

				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this &&
						( type == null || timers[ index ].queue === type ) ) {

						timers[ index ].anim.stop( gotoEnd );
						dequeue = false;
						timers.splice( index, 1 );
					}
				}

				// Start the next in the queue if the last step wasn't forced.
				// Timers currently will call their complete callbacks, which
				// will dequeue but only if they were gotoEnd.
				if ( dequeue || !gotoEnd ) {
					jQuery.dequeue( this, type );
				}
			} );
		},
		finish: function( type ) {
			if ( type !== false ) {
				type = type || "fx";
			}
			return this.each( function() {
				var index,
					data = dataPriv.get( this ),
					queue = data[ type + "queue" ],
					hooks = data[ type + "queueHooks" ],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;

				// Enable finishing flag on private data
				data.finish = true;

				// Empty the queue first
				jQuery.queue( this, type, [] );

				if ( hooks && hooks.stop ) {
					hooks.stop.call( this, true );
				}

				// Look for any active animations, and finish them
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
						timers[ index ].anim.stop( true );
						timers.splice( index, 1 );
					}
				}

				// Look for any animations in the old queue and finish them
				for ( index = 0; index < length; index++ ) {
					if ( queue[ index ] && queue[ index ].finish ) {
						queue[ index ].finish.call( this );
					}
				}

				// Turn off finishing flag
				delete data.finish;
			} );
		}
	} );

	jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
		var cssFn = jQuery.fn[ name ];
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return speed == null || typeof speed === "boolean" ?
				cssFn.apply( this, arguments ) :
				this.animate( genFx( name, true ), speed, easing, callback );
		};
	} );

	// Generate shortcuts for custom animations
	jQuery.each( {
		slideDown: genFx( "show" ),
		slideUp: genFx( "hide" ),
		slideToggle: genFx( "toggle" ),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function( name, props ) {
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return this.animate( props, speed, easing, callback );
		};
	} );

	jQuery.timers = [];
	jQuery.fx.tick = function() {
		var timer,
			i = 0,
			timers = jQuery.timers;

		fxNow = jQuery.now();

		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];

			// Checks the timer has not already been removed
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}

		if ( !timers.length ) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};

	jQuery.fx.timer = function( timer ) {
		jQuery.timers.push( timer );
		if ( timer() ) {
			jQuery.fx.start();
		} else {
			jQuery.timers.pop();
		}
	};

	jQuery.fx.interval = 13;
	jQuery.fx.start = function() {
		if ( !timerId ) {
			timerId = window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
		}
	};

	jQuery.fx.stop = function() {
		window.clearInterval( timerId );

		timerId = null;
	};

	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,

		// Default speed
		_default: 400
	};


	// Based off of the plugin by Clint Helfers, with permission.
	// http://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";

		return this.queue( type, function( next, hooks ) {
			var timeout = window.setTimeout( next, time );
			hooks.stop = function() {
				window.clearTimeout( timeout );
			};
		} );
	};


	( function() {
		var input = document.createElement( "input" ),
			select = document.createElement( "select" ),
			opt = select.appendChild( document.createElement( "option" ) );

		input.type = "checkbox";

		// Support: iOS<=5.1, Android<=4.2+
		// Default value for a checkbox should be "on"
		support.checkOn = input.value !== "";

		// Support: IE<=11+
		// Must access selectedIndex to make default options select
		support.optSelected = opt.selected;

		// Support: Android<=2.3
		// Options inside disabled selects are incorrectly marked as disabled
		select.disabled = true;
		support.optDisabled = !opt.disabled;

		// Support: IE<=11+
		// An input loses its value after becoming a radio
		input = document.createElement( "input" );
		input.value = "t";
		input.type = "radio";
		support.radioValue = input.value === "t";
	} )();


	var boolHook,
		attrHandle = jQuery.expr.attrHandle;

	jQuery.fn.extend( {
		attr: function( name, value ) {
			return access( this, jQuery.attr, name, value, arguments.length > 1 );
		},

		removeAttr: function( name ) {
			return this.each( function() {
				jQuery.removeAttr( this, name );
			} );
		}
	} );

	jQuery.extend( {
		attr: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set attributes on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			// Fallback to prop when attributes are not supported
			if ( typeof elem.getAttribute === "undefined" ) {
				return jQuery.prop( elem, name, value );
			}

			// All attributes are lowercase
			// Grab necessary hook if one is defined
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
				name = name.toLowerCase();
				hooks = jQuery.attrHooks[ name ] ||
					( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
			}

			if ( value !== undefined ) {
				if ( value === null ) {
					jQuery.removeAttr( elem, name );
					return;
				}

				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				elem.setAttribute( name, value + "" );
				return value;
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			ret = jQuery.find.attr( elem, name );

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ? undefined : ret;
		},

		attrHooks: {
			type: {
				set: function( elem, value ) {
					if ( !support.radioValue && value === "radio" &&
						jQuery.nodeName( elem, "input" ) ) {
						var val = elem.value;
						elem.setAttribute( "type", value );
						if ( val ) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		},

		removeAttr: function( elem, value ) {
			var name, propName,
				i = 0,
				attrNames = value && value.match( rnotwhite );

			if ( attrNames && elem.nodeType === 1 ) {
				while ( ( name = attrNames[ i++ ] ) ) {
					propName = jQuery.propFix[ name ] || name;

					// Boolean attributes get special treatment (#10870)
					if ( jQuery.expr.match.bool.test( name ) ) {

						// Set corresponding property to false
						elem[ propName ] = false;
					}

					elem.removeAttribute( name );
				}
			}
		}
	} );

	// Hooks for boolean attributes
	boolHook = {
		set: function( elem, value, name ) {
			if ( value === false ) {

				// Remove boolean attributes when set to false
				jQuery.removeAttr( elem, name );
			} else {
				elem.setAttribute( name, name );
			}
			return name;
		}
	};
	jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
		var getter = attrHandle[ name ] || jQuery.find.attr;

		attrHandle[ name ] = function( elem, name, isXML ) {
			var ret, handle;
			if ( !isXML ) {

				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ name ];
				attrHandle[ name ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					name.toLowerCase() :
					null;
				attrHandle[ name ] = handle;
			}
			return ret;
		};
	} );




	var rfocusable = /^(?:input|select|textarea|button)$/i,
		rclickable = /^(?:a|area)$/i;

	jQuery.fn.extend( {
		prop: function( name, value ) {
			return access( this, jQuery.prop, name, value, arguments.length > 1 );
		},

		removeProp: function( name ) {
			return this.each( function() {
				delete this[ jQuery.propFix[ name ] || name ];
			} );
		}
	} );

	jQuery.extend( {
		prop: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set properties on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

				// Fix name and attach hooks
				name = jQuery.propFix[ name ] || name;
				hooks = jQuery.propHooks[ name ];
			}

			if ( value !== undefined ) {
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				return ( elem[ name ] = value );
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			return elem[ name ];
		},

		propHooks: {
			tabIndex: {
				get: function( elem ) {

					// elem.tabIndex doesn't always return the
					// correct value when it hasn't been explicitly set
					// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
					// Use proper attribute retrieval(#12072)
					var tabindex = jQuery.find.attr( elem, "tabindex" );

					return tabindex ?
						parseInt( tabindex, 10 ) :
						rfocusable.test( elem.nodeName ) ||
							rclickable.test( elem.nodeName ) && elem.href ?
								0 :
								-1;
				}
			}
		},

		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	} );

	// Support: IE <=11 only
	// Accessing the selectedIndex property
	// forces the browser to respect setting selected
	// on the option
	// The getter ensures a default option is selected
	// when in an optgroup
	if ( !support.optSelected ) {
		jQuery.propHooks.selected = {
			get: function( elem ) {
				var parent = elem.parentNode;
				if ( parent && parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
				return null;
			},
			set: function( elem ) {
				var parent = elem.parentNode;
				if ( parent ) {
					parent.selectedIndex;

					if ( parent.parentNode ) {
						parent.parentNode.selectedIndex;
					}
				}
			}
		};
	}

	jQuery.each( [
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function() {
		jQuery.propFix[ this.toLowerCase() ] = this;
	} );




	var rclass = /[\t\r\n\f]/g;

	function getClass( elem ) {
		return elem.getAttribute && elem.getAttribute( "class" ) || "";
	}

	jQuery.fn.extend( {
		addClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];

				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
							if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
								cur += clazz + " ";
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		removeClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( !arguments.length ) {
				return this.attr( "class", "" );
			}

			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];

				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );

					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {

							// Remove *all* instances
							while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
								cur = cur.replace( " " + clazz + " ", " " );
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		toggleClass: function( value, stateVal ) {
			var type = typeof value;

			if ( typeof stateVal === "boolean" && type === "string" ) {
				return stateVal ? this.addClass( value ) : this.removeClass( value );
			}

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( i ) {
					jQuery( this ).toggleClass(
						value.call( this, i, getClass( this ), stateVal ),
						stateVal
					);
				} );
			}

			return this.each( function() {
				var className, i, self, classNames;

				if ( type === "string" ) {

					// Toggle individual class names
					i = 0;
					self = jQuery( this );
					classNames = value.match( rnotwhite ) || [];

					while ( ( className = classNames[ i++ ] ) ) {

						// Check each className given, space separated list
						if ( self.hasClass( className ) ) {
							self.removeClass( className );
						} else {
							self.addClass( className );
						}
					}

				// Toggle whole class name
				} else if ( value === undefined || type === "boolean" ) {
					className = getClass( this );
					if ( className ) {

						// Store className if set
						dataPriv.set( this, "__className__", className );
					}

					// If the element has a class name or if we're passed `false`,
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					if ( this.setAttribute ) {
						this.setAttribute( "class",
							className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
						);
					}
				}
			} );
		},

		hasClass: function( selector ) {
			var className, elem,
				i = 0;

			className = " " + selector + " ";
			while ( ( elem = this[ i++ ] ) ) {
				if ( elem.nodeType === 1 &&
					( " " + getClass( elem ) + " " ).replace( rclass, " " )
						.indexOf( className ) > -1
				) {
					return true;
				}
			}

			return false;
		}
	} );




	var rreturn = /\r/g,
		rspaces = /[\x20\t\r\n\f]+/g;

	jQuery.fn.extend( {
		val: function( value ) {
			var hooks, ret, isFunction,
				elem = this[ 0 ];

			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] ||
						jQuery.valHooks[ elem.nodeName.toLowerCase() ];

					if ( hooks &&
						"get" in hooks &&
						( ret = hooks.get( elem, "value" ) ) !== undefined
					) {
						return ret;
					}

					ret = elem.value;

					return typeof ret === "string" ?

						// Handle most common string cases
						ret.replace( rreturn, "" ) :

						// Handle cases where value is null/undef or number
						ret == null ? "" : ret;
				}

				return;
			}

			isFunction = jQuery.isFunction( value );

			return this.each( function( i ) {
				var val;

				if ( this.nodeType !== 1 ) {
					return;
				}

				if ( isFunction ) {
					val = value.call( this, i, jQuery( this ).val() );
				} else {
					val = value;
				}

				// Treat null/undefined as ""; convert numbers to string
				if ( val == null ) {
					val = "";

				} else if ( typeof val === "number" ) {
					val += "";

				} else if ( jQuery.isArray( val ) ) {
					val = jQuery.map( val, function( value ) {
						return value == null ? "" : value + "";
					} );
				}

				hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

				// If set returns undefined, fall back to normal setting
				if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
					this.value = val;
				}
			} );
		}
	} );

	jQuery.extend( {
		valHooks: {
			option: {
				get: function( elem ) {

					var val = jQuery.find.attr( elem, "value" );
					return val != null ?
						val :

						// Support: IE10-11+
						// option.text throws exceptions (#14686, #14858)
						// Strip and collapse whitespace
						// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
						jQuery.trim( jQuery.text( elem ) ).replace( rspaces, " " );
				}
			},
			select: {
				get: function( elem ) {
					var value, option,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one" || index < 0,
						values = one ? null : [],
						max = one ? index + 1 : options.length,
						i = index < 0 ?
							max :
							one ? index : 0;

					// Loop through all the selected options
					for ( ; i < max; i++ ) {
						option = options[ i ];

						// IE8-9 doesn't update selected after form reset (#2551)
						if ( ( option.selected || i === index ) &&

								// Don't return options that are disabled or in a disabled optgroup
								( support.optDisabled ?
									!option.disabled : option.getAttribute( "disabled" ) === null ) &&
								( !option.parentNode.disabled ||
									!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

							// Get the specific value for the option
							value = jQuery( option ).val();

							// We don't need an array for one selects
							if ( one ) {
								return value;
							}

							// Multi-Selects return an array
							values.push( value );
						}
					}

					return values;
				},

				set: function( elem, value ) {
					var optionSet, option,
						options = elem.options,
						values = jQuery.makeArray( value ),
						i = options.length;

					while ( i-- ) {
						option = options[ i ];
						if ( option.selected =
							jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
						) {
							optionSet = true;
						}
					}

					// Force browsers to behave consistently when non-matching value is set
					if ( !optionSet ) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		}
	} );

	// Radios and checkboxes getter/setter
	jQuery.each( [ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			set: function( elem, value ) {
				if ( jQuery.isArray( value ) ) {
					return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
				}
			}
		};
		if ( !support.checkOn ) {
			jQuery.valHooks[ this ].get = function( elem ) {
				return elem.getAttribute( "value" ) === null ? "on" : elem.value;
			};
		}
	} );




	// Return jQuery for attributes-only inclusion


	var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

	jQuery.extend( jQuery.event, {

		trigger: function( event, data, elem, onlyHandlers ) {

			var i, cur, tmp, bubbleType, ontype, handle, special,
				eventPath = [ elem || document ],
				type = hasOwn.call( event, "type" ) ? event.type : event,
				namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

			cur = tmp = elem = elem || document;

			// Don't do events on text and comment nodes
			if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
				return;
			}

			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
				return;
			}

			if ( type.indexOf( "." ) > -1 ) {

				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split( "." );
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf( ":" ) < 0 && "on" + type;

			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[ jQuery.expando ] ?
				event :
				new jQuery.Event( type, typeof event === "object" && event );

			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join( "." );
			event.rnamespace = event.namespace ?
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
				null;

			// Clean up the event in case it is being reused
			event.result = undefined;
			if ( !event.target ) {
				event.target = elem;
			}

			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ?
				[ event ] :
				jQuery.makeArray( data, [ event ] );

			// Allow special events to draw outside the lines
			special = jQuery.event.special[ type ] || {};
			if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
				return;
			}

			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

				bubbleType = special.delegateType || type;
				if ( !rfocusMorph.test( bubbleType + type ) ) {
					cur = cur.parentNode;
				}
				for ( ; cur; cur = cur.parentNode ) {
					eventPath.push( cur );
					tmp = cur;
				}

				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if ( tmp === ( elem.ownerDocument || document ) ) {
					eventPath.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}

			// Fire handlers on the event path
			i = 0;
			while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;

				// jQuery handler
				handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
					dataPriv.get( cur, "handle" );
				if ( handle ) {
					handle.apply( cur, data );
				}

				// Native handler
				handle = ontype && cur[ ontype ];
				if ( handle && handle.apply && acceptData( cur ) ) {
					event.result = handle.apply( cur, data );
					if ( event.result === false ) {
						event.preventDefault();
					}
				}
			}
			event.type = type;

			// If nobody prevented the default action, do it now
			if ( !onlyHandlers && !event.isDefaultPrevented() ) {

				if ( ( !special._default ||
					special._default.apply( eventPath.pop(), data ) === false ) &&
					acceptData( elem ) ) {

					// Call a native DOM method on the target with the same name name as the event.
					// Don't do default actions on window, that's where global variables be (#6170)
					if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ ontype ];

						if ( tmp ) {
							elem[ ontype ] = null;
						}

						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						elem[ type ]();
						jQuery.event.triggered = undefined;

						if ( tmp ) {
							elem[ ontype ] = tmp;
						}
					}
				}
			}

			return event.result;
		},

		// Piggyback on a donor event to simulate a different one
		// Used only for `focus(in | out)` events
		simulate: function( type, elem, event ) {
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true
				}
			);

			jQuery.event.trigger( e, null, elem );
		}

	} );

	jQuery.fn.extend( {

		trigger: function( type, data ) {
			return this.each( function() {
				jQuery.event.trigger( type, data, this );
			} );
		},
		triggerHandler: function( type, data ) {
			var elem = this[ 0 ];
			if ( elem ) {
				return jQuery.event.trigger( type, data, elem, true );
			}
		}
	} );


	jQuery.each( ( "blur focus focusin focusout load resize scroll unload click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup error contextmenu" ).split( " " ),
		function( i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );

	jQuery.fn.extend( {
		hover: function( fnOver, fnOut ) {
			return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
		}
	} );




	support.focusin = "onfocusin" in window;


	// Support: Firefox
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome, Safari
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://code.google.com/p/chromium/issues/detail?id=449857
	if ( !support.focusin ) {
		jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
			};

			jQuery.event.special[ fix ] = {
				setup: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix );

					if ( !attaches ) {
						doc.addEventListener( orig, handler, true );
					}
					dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
				},
				teardown: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix ) - 1;

					if ( !attaches ) {
						doc.removeEventListener( orig, handler, true );
						dataPriv.remove( doc, fix );

					} else {
						dataPriv.access( doc, fix, attaches );
					}
				}
			};
		} );
	}
	var location = window.location;

	var nonce = jQuery.now();

	var rquery = ( /\?/ );



	// Support: Android 2.3
	// Workaround failure to string-cast null input
	jQuery.parseJSON = function( data ) {
		return JSON.parse( data + "" );
	};


	// Cross-browser xml parsing
	jQuery.parseXML = function( data ) {
		var xml;
		if ( !data || typeof data !== "string" ) {
			return null;
		}

		// Support: IE9
		try {
			xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
		} catch ( e ) {
			xml = undefined;
		}

		if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	};


	var
		rhash = /#.*$/,
		rts = /([?&])_=[^&]*/,
		rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,

		/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */
		prefilters = {},

		/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */
		transports = {},

		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat( "*" ),

		// Anchor tag for parsing the document origin
		originAnchor = document.createElement( "a" );
		originAnchor.href = location.href;

	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports( structure ) {

		// dataTypeExpression is optional and defaults to "*"
		return function( dataTypeExpression, func ) {

			if ( typeof dataTypeExpression !== "string" ) {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}

			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

			if ( jQuery.isFunction( func ) ) {

				// For each dataType in the dataTypeExpression
				while ( ( dataType = dataTypes[ i++ ] ) ) {

					// Prepend if requested
					if ( dataType[ 0 ] === "+" ) {
						dataType = dataType.slice( 1 ) || "*";
						( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

					// Otherwise append
					} else {
						( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
					}
				}
			}
		};
	}

	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

		var inspected = {},
			seekingTransport = ( structure === transports );

		function inspect( dataType ) {
			var selected;
			inspected[ dataType ] = true;
			jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
				var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
				if ( typeof dataTypeOrTransport === "string" &&
					!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

					options.dataTypes.unshift( dataTypeOrTransport );
					inspect( dataTypeOrTransport );
					return false;
				} else if ( seekingTransport ) {
					return !( selected = dataTypeOrTransport );
				}
			} );
			return selected;
		}

		return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
	}

	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend( target, src ) {
		var key, deep,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};

		for ( key in src ) {
			if ( src[ key ] !== undefined ) {
				( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
			}
		}
		if ( deep ) {
			jQuery.extend( true, target, deep );
		}

		return target;
	}

	/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */
	function ajaxHandleResponses( s, jqXHR, responses ) {

		var ct, type, finalDataType, firstDataType,
			contents = s.contents,
			dataTypes = s.dataTypes;

		// Remove auto dataType and get content-type in the process
		while ( dataTypes[ 0 ] === "*" ) {
			dataTypes.shift();
			if ( ct === undefined ) {
				ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
			}
		}

		// Check if we're dealing with a known content-type
		if ( ct ) {
			for ( type in contents ) {
				if ( contents[ type ] && contents[ type ].test( ct ) ) {
					dataTypes.unshift( type );
					break;
				}
			}
		}

		// Check to see if we have a response for the expected dataType
		if ( dataTypes[ 0 ] in responses ) {
			finalDataType = dataTypes[ 0 ];
		} else {

			// Try convertible dataTypes
			for ( type in responses ) {
				if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
					finalDataType = type;
					break;
				}
				if ( !firstDataType ) {
					firstDataType = type;
				}
			}

			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}

		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if ( finalDataType ) {
			if ( finalDataType !== dataTypes[ 0 ] ) {
				dataTypes.unshift( finalDataType );
			}
			return responses[ finalDataType ];
		}
	}

	/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */
	function ajaxConvert( s, response, jqXHR, isSuccess ) {
		var conv2, current, conv, tmp, prev,
			converters = {},

			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();

		// Create converters map with lowercased keys
		if ( dataTypes[ 1 ] ) {
			for ( conv in s.converters ) {
				converters[ conv.toLowerCase() ] = s.converters[ conv ];
			}
		}

		current = dataTypes.shift();

		// Convert to each sequential dataType
		while ( current ) {

			if ( s.responseFields[ current ] ) {
				jqXHR[ s.responseFields[ current ] ] = response;
			}

			// Apply the dataFilter if provided
			if ( !prev && isSuccess && s.dataFilter ) {
				response = s.dataFilter( response, s.dataType );
			}

			prev = current;
			current = dataTypes.shift();

			if ( current ) {

			// There's only work to do if current dataType is non-auto
				if ( current === "*" ) {

					current = prev;

				// Convert response if prev dataType is non-auto and differs from current
				} else if ( prev !== "*" && prev !== current ) {

					// Seek a direct converter
					conv = converters[ prev + " " + current ] || converters[ "* " + current ];

					// If none found, seek a pair
					if ( !conv ) {
						for ( conv2 in converters ) {

							// If conv2 outputs current
							tmp = conv2.split( " " );
							if ( tmp[ 1 ] === current ) {

								// If prev can be converted to accepted input
								conv = converters[ prev + " " + tmp[ 0 ] ] ||
									converters[ "* " + tmp[ 0 ] ];
								if ( conv ) {

									// Condense equivalence converters
									if ( conv === true ) {
										conv = converters[ conv2 ];

									// Otherwise, insert the intermediate dataType
									} else if ( converters[ conv2 ] !== true ) {
										current = tmp[ 0 ];
										dataTypes.unshift( tmp[ 1 ] );
									}
									break;
								}
							}
						}
					}

					// Apply converter (if not an equivalence)
					if ( conv !== true ) {

						// Unless errors are allowed to bubble, catch and return them
						if ( conv && s.throws ) {
							response = conv( response );
						} else {
							try {
								response = conv( response );
							} catch ( e ) {
								return {
									state: "parsererror",
									error: conv ? e : "No conversion from " + prev + " to " + current
								};
							}
						}
					}
				}
			}
		}

		return { state: "success", data: response };
	}

	jQuery.extend( {

		// Counter for holding the number of active queries
		active: 0,

		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},

		ajaxSettings: {
			url: location.href,
			type: "GET",
			isLocal: rlocalProtocol.test( location.protocol ),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/

			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},

			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},

			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},

			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {

				// Convert anything to text
				"* text": String,

				// Text to html (true = no transformation)
				"text html": true,

				// Evaluate text as a json expression
				"text json": jQuery.parseJSON,

				// Parse text as xml
				"text xml": jQuery.parseXML
			},

			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},

		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function( target, settings ) {
			return settings ?

				// Building a settings object
				ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

				// Extending ajaxSettings
				ajaxExtend( jQuery.ajaxSettings, target );
		},

		ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
		ajaxTransport: addToPrefiltersOrTransports( transports ),

		// Main method
		ajax: function( url, options ) {

			// If url is an object, simulate pre-1.5 signature
			if ( typeof url === "object" ) {
				options = url;
				url = undefined;
			}

			// Force options to be an object
			options = options || {};

			var transport,

				// URL without anti-cache param
				cacheURL,

				// Response headers
				responseHeadersString,
				responseHeaders,

				// timeout handle
				timeoutTimer,

				// Url cleanup var
				urlAnchor,

				// To know if global events are to be dispatched
				fireGlobals,

				// Loop variable
				i,

				// Create the final options object
				s = jQuery.ajaxSetup( {}, options ),

				// Callbacks context
				callbackContext = s.context || s,

				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context &&
					( callbackContext.nodeType || callbackContext.jquery ) ?
						jQuery( callbackContext ) :
						jQuery.event,

				// Deferreds
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks( "once memory" ),

				// Status-dependent callbacks
				statusCode = s.statusCode || {},

				// Headers (they are sent all at once)
				requestHeaders = {},
				requestHeadersNames = {},

				// The jqXHR state
				state = 0,

				// Default abort message
				strAbort = "canceled",

				// Fake xhr
				jqXHR = {
					readyState: 0,

					// Builds headers hashtable if needed
					getResponseHeader: function( key ) {
						var match;
						if ( state === 2 ) {
							if ( !responseHeaders ) {
								responseHeaders = {};
								while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
									responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
								}
							}
							match = responseHeaders[ key.toLowerCase() ];
						}
						return match == null ? null : match;
					},

					// Raw string
					getAllResponseHeaders: function() {
						return state === 2 ? responseHeadersString : null;
					},

					// Caches the header
					setRequestHeader: function( name, value ) {
						var lname = name.toLowerCase();
						if ( !state ) {
							name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
							requestHeaders[ name ] = value;
						}
						return this;
					},

					// Overrides response content-type header
					overrideMimeType: function( type ) {
						if ( !state ) {
							s.mimeType = type;
						}
						return this;
					},

					// Status-dependent callbacks
					statusCode: function( map ) {
						var code;
						if ( map ) {
							if ( state < 2 ) {
								for ( code in map ) {

									// Lazy-add the new callback in a way that preserves old ones
									statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
								}
							} else {

								// Execute the appropriate callbacks
								jqXHR.always( map[ jqXHR.status ] );
							}
						}
						return this;
					},

					// Cancel the request
					abort: function( statusText ) {
						var finalText = statusText || strAbort;
						if ( transport ) {
							transport.abort( finalText );
						}
						done( 0, finalText );
						return this;
					}
				};

			// Attach deferreds
			deferred.promise( jqXHR ).complete = completeDeferred.add;
			jqXHR.success = jqXHR.done;
			jqXHR.error = jqXHR.fail;

			// Remove hash character (#7531: and string promotion)
			// Add protocol if not provided (prefilters might expect it)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ( ( url || s.url || location.href ) + "" ).replace( rhash, "" )
				.replace( rprotocol, location.protocol + "//" );

			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;

			// Extract dataTypes list
			s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

			// A cross-domain request is in order when the origin doesn't match the current origin.
			if ( s.crossDomain == null ) {
				urlAnchor = document.createElement( "a" );

				// Support: IE8-11+
				// IE throws exception if url is malformed, e.g. http://example.com:80x/
				try {
					urlAnchor.href = s.url;

					// Support: IE8-11+
					// Anchor's host property isn't correctly set when s.url is relative
					urlAnchor.href = urlAnchor.href;
					s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
						urlAnchor.protocol + "//" + urlAnchor.host;
				} catch ( e ) {

					// If there is an error parsing the URL, assume it is crossDomain,
					// it can be rejected by the transport if it is invalid
					s.crossDomain = true;
				}
			}

			// Convert data if not already a string
			if ( s.data && s.processData && typeof s.data !== "string" ) {
				s.data = jQuery.param( s.data, s.traditional );
			}

			// Apply prefilters
			inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

			// If request was aborted inside a prefilter, stop there
			if ( state === 2 ) {
				return jqXHR;
			}

			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;

			// Watch for a new set of requests
			if ( fireGlobals && jQuery.active++ === 0 ) {
				jQuery.event.trigger( "ajaxStart" );
			}

			// Uppercase the type
			s.type = s.type.toUpperCase();

			// Determine if request has content
			s.hasContent = !rnoContent.test( s.type );

			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			cacheURL = s.url;

			// More options handling for requests with no content
			if ( !s.hasContent ) {

				// If data is available, append data to url
				if ( s.data ) {
					cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );

					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}

				// Add anti-cache in url if needed
				if ( s.cache === false ) {
					s.url = rts.test( cacheURL ) ?

						// If there is already a '_' parameter, set its value
						cacheURL.replace( rts, "$1_=" + nonce++ ) :

						// Otherwise add one to the end
						cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
				}
			}

			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if ( s.ifModified ) {
				if ( jQuery.lastModified[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
				}
				if ( jQuery.etag[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
				}
			}

			// Set the correct header, if data is being sent
			if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
				jqXHR.setRequestHeader( "Content-Type", s.contentType );
			}

			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
					s.accepts[ s.dataTypes[ 0 ] ] +
						( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
					s.accepts[ "*" ]
			);

			// Check for headers option
			for ( i in s.headers ) {
				jqXHR.setRequestHeader( i, s.headers[ i ] );
			}

			// Allow custom headers/mimetypes and early abort
			if ( s.beforeSend &&
				( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {

				// Abort if not done already and return
				return jqXHR.abort();
			}

			// Aborting is no longer a cancellation
			strAbort = "abort";

			// Install callbacks on deferreds
			for ( i in { success: 1, error: 1, complete: 1 } ) {
				jqXHR[ i ]( s[ i ] );
			}

			// Get transport
			transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

			// If no transport, we auto-abort
			if ( !transport ) {
				done( -1, "No Transport" );
			} else {
				jqXHR.readyState = 1;

				// Send global event
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
				}

				// If request was aborted inside ajaxSend, stop there
				if ( state === 2 ) {
					return jqXHR;
				}

				// Timeout
				if ( s.async && s.timeout > 0 ) {
					timeoutTimer = window.setTimeout( function() {
						jqXHR.abort( "timeout" );
					}, s.timeout );
				}

				try {
					state = 1;
					transport.send( requestHeaders, done );
				} catch ( e ) {

					// Propagate exception as error if not done
					if ( state < 2 ) {
						done( -1, e );

					// Simply rethrow otherwise
					} else {
						throw e;
					}
				}
			}

			// Callback for when everything is done
			function done( status, nativeStatusText, responses, headers ) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;

				// Called once
				if ( state === 2 ) {
					return;
				}

				// State is "done" now
				state = 2;

				// Clear timeout if it exists
				if ( timeoutTimer ) {
					window.clearTimeout( timeoutTimer );
				}

				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;

				// Cache response headers
				responseHeadersString = headers || "";

				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;

				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;

				// Get response data
				if ( responses ) {
					response = ajaxHandleResponses( s, jqXHR, responses );
				}

				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert( s, response, jqXHR, isSuccess );

				// If successful, handle type chaining
				if ( isSuccess ) {

					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if ( s.ifModified ) {
						modified = jqXHR.getResponseHeader( "Last-Modified" );
						if ( modified ) {
							jQuery.lastModified[ cacheURL ] = modified;
						}
						modified = jqXHR.getResponseHeader( "etag" );
						if ( modified ) {
							jQuery.etag[ cacheURL ] = modified;
						}
					}

					// if no content
					if ( status === 204 || s.type === "HEAD" ) {
						statusText = "nocontent";

					// if not modified
					} else if ( status === 304 ) {
						statusText = "notmodified";

					// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {

					// Extract error from statusText and normalize for non-aborts
					error = statusText;
					if ( status || !statusText ) {
						statusText = "error";
						if ( status < 0 ) {
							status = 0;
						}
					}
				}

				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = ( nativeStatusText || statusText ) + "";

				// Success/Error
				if ( isSuccess ) {
					deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
				} else {
					deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
				}

				// Status-dependent callbacks
				jqXHR.statusCode( statusCode );
				statusCode = undefined;

				if ( fireGlobals ) {
					globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
						[ jqXHR, s, isSuccess ? success : error ] );
				}

				// Complete
				completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

					// Handle the global AJAX counter
					if ( !( --jQuery.active ) ) {
						jQuery.event.trigger( "ajaxStop" );
					}
				}
			}

			return jqXHR;
		},

		getJSON: function( url, data, callback ) {
			return jQuery.get( url, data, callback, "json" );
		},

		getScript: function( url, callback ) {
			return jQuery.get( url, undefined, callback, "script" );
		}
	} );

	jQuery.each( [ "get", "post" ], function( i, method ) {
		jQuery[ method ] = function( url, data, callback, type ) {

			// Shift arguments if data argument was omitted
			if ( jQuery.isFunction( data ) ) {
				type = type || callback;
				callback = data;
				data = undefined;
			}

			// The url can be an options object (which then must have .url)
			return jQuery.ajax( jQuery.extend( {
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			}, jQuery.isPlainObject( url ) && url ) );
		};
	} );


	jQuery._evalUrl = function( url ) {
		return jQuery.ajax( {
			url: url,

			// Make this explicit, since user can override this through ajaxSetup (#11264)
			type: "GET",
			dataType: "script",
			async: false,
			global: false,
			"throws": true
		} );
	};


	jQuery.fn.extend( {
		wrapAll: function( html ) {
			var wrap;

			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapAll( html.call( this, i ) );
				} );
			}

			if ( this[ 0 ] ) {

				// The elements to wrap the target around
				wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

				if ( this[ 0 ].parentNode ) {
					wrap.insertBefore( this[ 0 ] );
				}

				wrap.map( function() {
					var elem = this;

					while ( elem.firstElementChild ) {
						elem = elem.firstElementChild;
					}

					return elem;
				} ).append( this );
			}

			return this;
		},

		wrapInner: function( html ) {
			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapInner( html.call( this, i ) );
				} );
			}

			return this.each( function() {
				var self = jQuery( this ),
					contents = self.contents();

				if ( contents.length ) {
					contents.wrapAll( html );

				} else {
					self.append( html );
				}
			} );
		},

		wrap: function( html ) {
			var isFunction = jQuery.isFunction( html );

			return this.each( function( i ) {
				jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
			} );
		},

		unwrap: function() {
			return this.parent().each( function() {
				if ( !jQuery.nodeName( this, "body" ) ) {
					jQuery( this ).replaceWith( this.childNodes );
				}
			} ).end();
		}
	} );


	jQuery.expr.filters.hidden = function( elem ) {
		return !jQuery.expr.filters.visible( elem );
	};
	jQuery.expr.filters.visible = function( elem ) {

		// Support: Opera <= 12.12
		// Opera reports offsetWidths and offsetHeights less than zero on some elements
		// Use OR instead of AND as the element is not visible if either is true
		// See tickets #10406 and #13132
		return elem.offsetWidth > 0 || elem.offsetHeight > 0 || elem.getClientRects().length > 0;
	};




	var r20 = /%20/g,
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;

	function buildParams( prefix, obj, traditional, add ) {
		var name;

		if ( jQuery.isArray( obj ) ) {

			// Serialize array item.
			jQuery.each( obj, function( i, v ) {
				if ( traditional || rbracket.test( prefix ) ) {

					// Treat each array item as a scalar.
					add( prefix, v );

				} else {

					// Item is non-scalar (array or object), encode its numeric index.
					buildParams(
						prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
						v,
						traditional,
						add
					);
				}
			} );

		} else if ( !traditional && jQuery.type( obj ) === "object" ) {

			// Serialize object item.
			for ( name in obj ) {
				buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
			}

		} else {

			// Serialize scalar item.
			add( prefix, obj );
		}
	}

	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function( a, traditional ) {
		var prefix,
			s = [],
			add = function( key, value ) {

				// If value is a function, invoke it and return its value
				value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
				s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
			};

		// Set traditional to true for jQuery <= 1.3.2 behavior.
		if ( traditional === undefined ) {
			traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
		}

		// If an array was passed in, assume that it is an array of form elements.
		if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			} );

		} else {

			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}

		// Return the resulting serialization
		return s.join( "&" ).replace( r20, "+" );
	};

	jQuery.fn.extend( {
		serialize: function() {
			return jQuery.param( this.serializeArray() );
		},
		serializeArray: function() {
			return this.map( function() {

				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop( this, "elements" );
				return elements ? jQuery.makeArray( elements ) : this;
			} )
			.filter( function() {
				var type = this.type;

				// Use .is( ":disabled" ) so that fieldset[disabled] works
				return this.name && !jQuery( this ).is( ":disabled" ) &&
					rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
					( this.checked || !rcheckableType.test( type ) );
			} )
			.map( function( i, elem ) {
				var val = jQuery( this ).val();

				return val == null ?
					null :
					jQuery.isArray( val ) ?
						jQuery.map( val, function( val ) {
							return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
						} ) :
						{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
			} ).get();
		}
	} );


	jQuery.ajaxSettings.xhr = function() {
		try {
			return new window.XMLHttpRequest();
		} catch ( e ) {}
	};

	var xhrSuccessStatus = {

			// File protocol always yields status code 0, assume 200
			0: 200,

			// Support: IE9
			// #1450: sometimes IE returns 1223 when it should be 204
			1223: 204
		},
		xhrSupported = jQuery.ajaxSettings.xhr();

	support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	support.ajax = xhrSupported = !!xhrSupported;

	jQuery.ajaxTransport( function( options ) {
		var callback, errorCallback;

		// Cross domain only allowed if supported through XMLHttpRequest
		if ( support.cors || xhrSupported && !options.crossDomain ) {
			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr();

					xhr.open(
						options.type,
						options.url,
						options.async,
						options.username,
						options.password
					);

					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}

					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
						headers[ "X-Requested-With" ] = "XMLHttpRequest";
					}

					// Set headers
					for ( i in headers ) {
						xhr.setRequestHeader( i, headers[ i ] );
					}

					// Callback
					callback = function( type ) {
						return function() {
							if ( callback ) {
								callback = errorCallback = xhr.onload =
									xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

								if ( type === "abort" ) {
									xhr.abort();
								} else if ( type === "error" ) {

									// Support: IE9
									// On a manual native abort, IE9 throws
									// errors on any property access that is not readyState
									if ( typeof xhr.status !== "number" ) {
										complete( 0, "error" );
									} else {
										complete(

											// File: protocol always yields status 0; see #8605, #14207
											xhr.status,
											xhr.statusText
										);
									}
								} else {
									complete(
										xhrSuccessStatus[ xhr.status ] || xhr.status,
										xhr.statusText,

										// Support: IE9 only
										// IE9 has no XHR2 but throws on binary (trac-11426)
										// For XHR2 non-text, let the caller handle it (gh-2498)
										( xhr.responseType || "text" ) !== "text"  ||
										typeof xhr.responseText !== "string" ?
											{ binary: xhr.response } :
											{ text: xhr.responseText },
										xhr.getAllResponseHeaders()
									);
								}
							}
						};
					};

					// Listen to events
					xhr.onload = callback();
					errorCallback = xhr.onerror = callback( "error" );

					// Support: IE9
					// Use onreadystatechange to replace onabort
					// to handle uncaught aborts
					if ( xhr.onabort !== undefined ) {
						xhr.onabort = errorCallback;
					} else {
						xhr.onreadystatechange = function() {

							// Check readyState before timeout as it changes
							if ( xhr.readyState === 4 ) {

								// Allow onerror to be called first,
								// but that will not handle a native abort
								// Also, save errorCallback to a variable
								// as xhr.onerror cannot be accessed
								window.setTimeout( function() {
									if ( callback ) {
										errorCallback();
									}
								} );
							}
						};
					}

					// Create the abort callback
					callback = callback( "abort" );

					try {

						// Do send the request (this may raise an exception)
						xhr.send( options.hasContent && options.data || null );
					} catch ( e ) {

						// #14683: Only rethrow if this hasn't been notified as an error yet
						if ( callback ) {
							throw e;
						}
					}
				},

				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	// Install script dataType
	jQuery.ajaxSetup( {
		accepts: {
			script: "text/javascript, application/javascript, " +
				"application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function( text ) {
				jQuery.globalEval( text );
				return text;
			}
		}
	} );

	// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter( "script", function( s ) {
		if ( s.cache === undefined ) {
			s.cache = false;
		}
		if ( s.crossDomain ) {
			s.type = "GET";
		}
	} );

	// Bind script tag hack transport
	jQuery.ajaxTransport( "script", function( s ) {

		// This transport only deals with cross domain requests
		if ( s.crossDomain ) {
			var script, callback;
			return {
				send: function( _, complete ) {
					script = jQuery( "<script>" ).prop( {
						charset: s.scriptCharset,
						src: s.url
					} ).on(
						"load error",
						callback = function( evt ) {
							script.remove();
							callback = null;
							if ( evt ) {
								complete( evt.type === "error" ? 404 : 200, evt.type );
							}
						}
					);

					// Use native DOM manipulation to avoid our domManip AJAX trickery
					document.head.appendChild( script[ 0 ] );
				},
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;

	// Default jsonp settings
	jQuery.ajaxSetup( {
		jsonp: "callback",
		jsonpCallback: function() {
			var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
			this[ callback ] = true;
			return callback;
		}
	} );

	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
				"url" :
				typeof s.data === "string" &&
					( s.contentType || "" )
						.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
					rjsonp.test( s.data ) && "data"
			);

		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
				s.jsonpCallback() :
				s.jsonpCallback;

			// Insert callback into url or form data
			if ( jsonProp ) {
				s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
			} else if ( s.jsonp !== false ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
			}

			// Use data converter to retrieve json after script execution
			s.converters[ "script json" ] = function() {
				if ( !responseContainer ) {
					jQuery.error( callbackName + " was not called" );
				}
				return responseContainer[ 0 ];
			};

			// Force json dataType
			s.dataTypes[ 0 ] = "json";

			// Install callback
			overwritten = window[ callbackName ];
			window[ callbackName ] = function() {
				responseContainer = arguments;
			};

			// Clean-up function (fires after converters)
			jqXHR.always( function() {

				// If previous value didn't exist - remove it
				if ( overwritten === undefined ) {
					jQuery( window ).removeProp( callbackName );

				// Otherwise restore preexisting value
				} else {
					window[ callbackName ] = overwritten;
				}

				// Save back as free
				if ( s[ callbackName ] ) {

					// Make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;

					// Save the callback name for future use
					oldCallbacks.push( callbackName );
				}

				// Call if it was a function and we have a response
				if ( responseContainer && jQuery.isFunction( overwritten ) ) {
					overwritten( responseContainer[ 0 ] );
				}

				responseContainer = overwritten = undefined;
			} );

			// Delegate to script
			return "script";
		}
	} );




	// Argument "data" should be string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function( data, context, keepScripts ) {
		if ( !data || typeof data !== "string" ) {
			return null;
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}
		context = context || document;

		var parsed = rsingleTag.exec( data ),
			scripts = !keepScripts && [];

		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[ 1 ] ) ];
		}

		parsed = buildFragment( [ data ], context, scripts );

		if ( scripts && scripts.length ) {
			jQuery( scripts ).remove();
		}

		return jQuery.merge( [], parsed.childNodes );
	};


	// Keep a copy of the old load method
	var _load = jQuery.fn.load;

	/**
	 * Load a url into a page
	 */
	jQuery.fn.load = function( url, params, callback ) {
		if ( typeof url !== "string" && _load ) {
			return _load.apply( this, arguments );
		}

		var selector, type, response,
			self = this,
			off = url.indexOf( " " );

		if ( off > -1 ) {
			selector = jQuery.trim( url.slice( off ) );
			url = url.slice( 0, off );
		}

		// If it's a function
		if ( jQuery.isFunction( params ) ) {

			// We assume that it's the callback
			callback = params;
			params = undefined;

		// Otherwise, build a param string
		} else if ( params && typeof params === "object" ) {
			type = "POST";
		}

		// If we have elements to modify, make the request
		if ( self.length > 0 ) {
			jQuery.ajax( {
				url: url,

				// If "type" variable is undefined, then "GET" method will be used.
				// Make value of this field explicit since
				// user can override it through ajaxSetup method
				type: type || "GET",
				dataType: "html",
				data: params
			} ).done( function( responseText ) {

				// Save response for use in complete callback
				response = arguments;

				self.html( selector ?

					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

					// Otherwise use the full result
					responseText );

			// If the request succeeds, this function gets "data", "status", "jqXHR"
			// but they are ignored because response was set above.
			// If it fails, this function gets "jqXHR", "status", "error"
			} ).always( callback && function( jqXHR, status ) {
				self.each( function() {
					callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
				} );
			} );
		}

		return this;
	};




	// Attach a bunch of functions for handling common AJAX events
	jQuery.each( [
		"ajaxStart",
		"ajaxStop",
		"ajaxComplete",
		"ajaxError",
		"ajaxSuccess",
		"ajaxSend"
	], function( i, type ) {
		jQuery.fn[ type ] = function( fn ) {
			return this.on( type, fn );
		};
	} );




	jQuery.expr.filters.animated = function( elem ) {
		return jQuery.grep( jQuery.timers, function( fn ) {
			return elem === fn.elem;
		} ).length;
	};




	/**
	 * Gets a window from an element
	 */
	function getWindow( elem ) {
		return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
	}

	jQuery.offset = {
		setOffset: function( elem, options, i ) {
			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
				position = jQuery.css( elem, "position" ),
				curElem = jQuery( elem ),
				props = {};

			// Set position first, in-case top/left are set even on static elem
			if ( position === "static" ) {
				elem.style.position = "relative";
			}

			curOffset = curElem.offset();
			curCSSTop = jQuery.css( elem, "top" );
			curCSSLeft = jQuery.css( elem, "left" );
			calculatePosition = ( position === "absolute" || position === "fixed" ) &&
				( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

			// Need to be able to calculate position if either
			// top or left is auto and position is either absolute or fixed
			if ( calculatePosition ) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;

			} else {
				curTop = parseFloat( curCSSTop ) || 0;
				curLeft = parseFloat( curCSSLeft ) || 0;
			}

			if ( jQuery.isFunction( options ) ) {

				// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
				options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
			}

			if ( options.top != null ) {
				props.top = ( options.top - curOffset.top ) + curTop;
			}
			if ( options.left != null ) {
				props.left = ( options.left - curOffset.left ) + curLeft;
			}

			if ( "using" in options ) {
				options.using.call( elem, props );

			} else {
				curElem.css( props );
			}
		}
	};

	jQuery.fn.extend( {
		offset: function( options ) {
			if ( arguments.length ) {
				return options === undefined ?
					this :
					this.each( function( i ) {
						jQuery.offset.setOffset( this, options, i );
					} );
			}

			var docElem, win,
				elem = this[ 0 ],
				box = { top: 0, left: 0 },
				doc = elem && elem.ownerDocument;

			if ( !doc ) {
				return;
			}

			docElem = doc.documentElement;

			// Make sure it's not a disconnected DOM node
			if ( !jQuery.contains( docElem, elem ) ) {
				return box;
			}

			box = elem.getBoundingClientRect();
			win = getWindow( doc );
			return {
				top: box.top + win.pageYOffset - docElem.clientTop,
				left: box.left + win.pageXOffset - docElem.clientLeft
			};
		},

		position: function() {
			if ( !this[ 0 ] ) {
				return;
			}

			var offsetParent, offset,
				elem = this[ 0 ],
				parentOffset = { top: 0, left: 0 };

			// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
			// because it is its only offset parent
			if ( jQuery.css( elem, "position" ) === "fixed" ) {

				// Assume getBoundingClientRect is there when computed position is fixed
				offset = elem.getBoundingClientRect();

			} else {

				// Get *real* offsetParent
				offsetParent = this.offsetParent();

				// Get correct offsets
				offset = this.offset();
				if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
					parentOffset = offsetParent.offset();
				}

				// Add offsetParent borders
				parentOffset.top += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
			}

			// Subtract parent offsets and element margins
			return {
				top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
				left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
			};
		},

		// This method will return documentElement in the following cases:
		// 1) For the element inside the iframe without offsetParent, this method will return
		//    documentElement of the parent window
		// 2) For the hidden or detached element
		// 3) For body or html element, i.e. in case of the html node - it will return itself
		//
		// but those exceptions were never presented as a real life use-cases
		// and might be considered as more preferable results.
		//
		// This logic, however, is not guaranteed and can change at any point in the future
		offsetParent: function() {
			return this.map( function() {
				var offsetParent = this.offsetParent;

				while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
					offsetParent = offsetParent.offsetParent;
				}

				return offsetParent || documentElement;
			} );
		}
	} );

	// Create scrollLeft and scrollTop methods
	jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
		var top = "pageYOffset" === prop;

		jQuery.fn[ method ] = function( val ) {
			return access( this, function( elem, method, val ) {
				var win = getWindow( elem );

				if ( val === undefined ) {
					return win ? win[ prop ] : elem[ method ];
				}

				if ( win ) {
					win.scrollTo(
						!top ? val : win.pageXOffset,
						top ? val : win.pageYOffset
					);

				} else {
					elem[ method ] = val;
				}
			}, method, val, arguments.length );
		};
	} );

	// Support: Safari<7-8+, Chrome<37-44+
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://code.google.com/p/chromium/issues/detail?id=229280
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each( [ "top", "left" ], function( i, prop ) {
		jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
			function( elem, computed ) {
				if ( computed ) {
					computed = curCSS( elem, prop );

					// If curCSS returns percentage, fallback to offset
					return rnumnonpx.test( computed ) ?
						jQuery( elem ).position()[ prop ] + "px" :
						computed;
				}
			}
		);
	} );


	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
		jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
			function( defaultExtra, funcName ) {

			// Margin is only for outerHeight, outerWidth
			jQuery.fn[ funcName ] = function( margin, value ) {
				var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
					extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

				return access( this, function( elem, type, value ) {
					var doc;

					if ( jQuery.isWindow( elem ) ) {

						// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
						// isn't a whole lot we can do. See pull request at this URL for discussion:
						// https://github.com/jquery/jquery/pull/764
						return elem.document.documentElement[ "client" + name ];
					}

					// Get document width or height
					if ( elem.nodeType === 9 ) {
						doc = elem.documentElement;

						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						return Math.max(
							elem.body[ "scroll" + name ], doc[ "scroll" + name ],
							elem.body[ "offset" + name ], doc[ "offset" + name ],
							doc[ "client" + name ]
						);
					}

					return value === undefined ?

						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css( elem, type, extra ) :

						// Set width or height on the element
						jQuery.style( elem, type, value, extra );
				}, type, chainable ? margin : undefined, chainable, null );
			};
		} );
	} );


	jQuery.fn.extend( {

		bind: function( types, data, fn ) {
			return this.on( types, null, data, fn );
		},
		unbind: function( types, fn ) {
			return this.off( types, null, fn );
		},

		delegate: function( selector, types, data, fn ) {
			return this.on( types, selector, data, fn );
		},
		undelegate: function( selector, types, fn ) {

			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ?
				this.off( selector, "**" ) :
				this.off( types, selector || "**", fn );
		},
		size: function() {
			return this.length;
		}
	} );

	jQuery.fn.andSelf = jQuery.fn.addBack;




	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.

	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

	if ( true ) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return jQuery;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}



	var

		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,

		// Map over the $ in case of overwrite
		_$ = window.$;

	jQuery.noConflict = function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}

		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	};

	// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if ( !noGlobal ) {
		window.jQuery = window.$ = jQuery;
	}

	return jQuery;
	}));


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;"use strict";

	var _typeof2 = __webpack_require__(87);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*!art-template - Template Engine | http://aui.github.com/artTemplate/*/
	!function () {
	  function a(a) {
	    return a.replace(t, "").replace(u, ",").replace(v, "").replace(w, "").replace(x, "").split(y);
	  }function b(a) {
	    return "'" + a.replace(/('|\\)/g, "\\$1").replace(/\r/g, "\\r").replace(/\n/g, "\\n") + "'";
	  }function c(c, d) {
	    function e(a) {
	      return m += a.split(/\n/).length - 1, k && (a = a.replace(/\s+/g, " ").replace(/<!--[\w\W]*?-->/g, "")), a && (a = s[1] + b(a) + s[2] + "\n"), a;
	    }function f(b) {
	      var c = m;if (j ? b = j(b, d) : g && (b = b.replace(/\n/g, function () {
	        return m++, "$line=" + m + ";";
	      })), 0 === b.indexOf("=")) {
	        var e = l && !/^=[=#]/.test(b);if (b = b.replace(/^=[=#]?|[\s;]*$/g, ""), e) {
	          var f = b.replace(/\s*\([^\)]+\)/, "");n[f] || /^(include|print)$/.test(f) || (b = "$escape(" + b + ")");
	        } else b = "$string(" + b + ")";b = s[1] + b + s[2];
	      }return g && (b = "$line=" + c + ";" + b), r(a(b), function (a) {
	        if (a && !p[a]) {
	          var b;b = "print" === a ? u : "include" === a ? v : n[a] ? "$utils." + a : o[a] ? "$helpers." + a : "$data." + a, w += a + "=" + b + ",", p[a] = !0;
	        }
	      }), b + "\n";
	    }var g = d.debug,
	        h = d.openTag,
	        i = d.closeTag,
	        j = d.parser,
	        k = d.compress,
	        l = d.escape,
	        m = 1,
	        p = { $data: 1, $filename: 1, $utils: 1, $helpers: 1, $out: 1, $line: 1 },
	        q = "".trim,
	        s = q ? ["$out='';", "$out+=", ";", "$out"] : ["$out=[];", "$out.push(", ");", "$out.join('')"],
	        t = q ? "$out+=text;return $out;" : "$out.push(text);",
	        u = "function(){var text=''.concat.apply('',arguments);" + t + "}",
	        v = "function(filename,data){data=data||$data;var text=$utils.$include(filename,data,$filename);" + t + "}",
	        w = "'use strict';var $utils=this,$helpers=$utils.$helpers," + (g ? "$line=0," : ""),
	        x = s[0],
	        y = "return new String(" + s[3] + ");";r(c.split(h), function (a) {
	      a = a.split(i);var b = a[0],
	          c = a[1];1 === a.length ? x += e(b) : (x += f(b), c && (x += e(c)));
	    });var z = w + x + y;g && (z = "try{" + z + "}catch(e){throw {filename:$filename,name:'Render Error',message:e.message,line:$line,source:" + b(c) + ".split(/\\n/)[$line-1].replace(/^\\s+/,'')};}");try {
	      var A = new Function("$data", "$filename", z);return A.prototype = n, A;
	    } catch (B) {
	      throw B.temp = "function anonymous($data,$filename) {" + z + "}", B;
	    }
	  }var d = function d(a, b) {
	    return "string" == typeof b ? q(b, { filename: a }) : g(a, b);
	  };d.version = "3.0.0", d.config = function (a, b) {
	    e[a] = b;
	  };var e = d.defaults = { openTag: "<%", closeTag: "%>", escape: !0, cache: !0, compress: !1, parser: null },
	      f = d.cache = {};d.render = function (a, b) {
	    return q(a, b);
	  };var g = d.renderFile = function (a, b) {
	    var c = d.get(a) || p({ filename: a, name: "Render Error", message: "Template not found" });return b ? c(b) : c;
	  };d.get = function (a) {
	    var b;if (f[a]) b = f[a];else if ("object" == (typeof document === "undefined" ? "undefined" : (0, _typeof3.default)(document))) {
	      var c = document.getElementById(a);if (c) {
	        var d = (c.value || c.innerHTML).replace(/^\s*|\s*$/g, "");b = q(d, { filename: a });
	      }
	    }return b;
	  };var h = function h(a, b) {
	    return "string" != typeof a && (b = typeof a === "undefined" ? "undefined" : (0, _typeof3.default)(a), "number" === b ? a += "" : a = "function" === b ? h(a.call(a)) : ""), a;
	  },
	      i = { "<": "&#60;", ">": "&#62;", '"': "&#34;", "'": "&#39;", "&": "&#38;" },
	      j = function j(a) {
	    return i[a];
	  },
	      k = function k(a) {
	    return h(a).replace(/&(?![\w#]+;)|[<>"']/g, j);
	  },
	      l = Array.isArray || function (a) {
	    return "[object Array]" === {}.toString.call(a);
	  },
	      m = function m(a, b) {
	    var c, d;if (l(a)) for (c = 0, d = a.length; d > c; c++) {
	      b.call(a, a[c], c, a);
	    } else for (c in a) {
	      b.call(a, a[c], c);
	    }
	  },
	      n = d.utils = { $helpers: {}, $include: g, $string: h, $escape: k, $each: m };d.helper = function (a, b) {
	    o[a] = b;
	  };var o = d.helpers = n.$helpers;d.onerror = function (a) {
	    var b = "Template Error\n\n";for (var c in a) {
	      b += "<" + c + ">\n" + a[c] + "\n\n";
	    }"object" == (typeof console === "undefined" ? "undefined" : (0, _typeof3.default)(console)) && console.error(b);
	  };var p = function p(a) {
	    return d.onerror(a), function () {
	      return "{Template Error}";
	    };
	  },
	      q = d.compile = function (a, b) {
	    function d(c) {
	      try {
	        return new i(c, h) + "";
	      } catch (d) {
	        return b.debug ? p(d)() : (b.debug = !0, q(a, b)(c));
	      }
	    }b = b || {};for (var g in e) {
	      void 0 === b[g] && (b[g] = e[g]);
	    }var h = b.filename;try {
	      var i = c(a, b);
	    } catch (j) {
	      return j.filename = h || "anonymous", j.name = "Syntax Error", p(j);
	    }return d.prototype = i.prototype, d.toString = function () {
	      return i.toString();
	    }, h && b.cache && (f[h] = d), d;
	  },
	      r = n.$each,
	      s = "break,case,catch,continue,debugger,default,delete,do,else,false,finally,for,function,if,in,instanceof,new,null,return,switch,this,throw,true,try,typeof,var,void,while,with,abstract,boolean,byte,char,class,const,double,enum,export,extends,final,float,goto,implements,import,int,interface,long,native,package,private,protected,public,short,static,super,synchronized,throws,transient,volatile,arguments,let,yield,undefined",
	      t = /\/\*[\w\W]*?\*\/|\/\/[^\n]*\n|\/\/[^\n]*$|"(?:[^"\\]|\\[\w\W])*"|'(?:[^'\\]|\\[\w\W])*'|\s*\.\s*[$\w\.]+/g,
	      u = /[^\w$]+/g,
	      v = new RegExp(["\\b" + s.replace(/,/g, "\\b|\\b") + "\\b"].join("|"), "g"),
	      w = /^\d[^,]*|,\d[^,]*/g,
	      x = /^,+|,+$/g,
	      y = /^$|,+/;e.openTag = "{{", e.closeTag = "}}";var z = function z(a, b) {
	    var c = b.split(":"),
	        d = c.shift(),
	        e = c.join(":") || "";return e && (e = ", " + e), "$helpers." + d + "(" + a + e + ")";
	  };e.parser = function (a) {
	    a = a.replace(/^\s/, "");var b = a.split(" "),
	        c = b.shift(),
	        e = b.join(" ");switch (c) {case "if":
	        a = "if(" + e + "){";break;case "else":
	        b = "if" === b.shift() ? " if(" + b.join(" ") + ")" : "", a = "}else" + b + "{";break;case "/if":
	        a = "}";break;case "each":
	        var f = b[0] || "$data",
	            g = b[1] || "as",
	            h = b[2] || "$value",
	            i = b[3] || "$index",
	            j = h + "," + i;"as" !== g && (f = "[]"), a = "$each(" + f + ",function(" + j + "){";break;case "/each":
	        a = "});";break;case "echo":
	        a = "print(" + e + ");";break;case "print":case "include":
	        a = c + "(" + b.join(",") + ");";break;default:
	        if (/^\s*\|\s*[\w\$]/.test(e)) {
	          var k = !0;0 === a.indexOf("#") && (a = a.substr(1), k = !1);for (var l = 0, m = a.split("|"), n = m.length, o = m[l++]; n > l; l++) {
	            o = z(o, m[l]);
	          }a = (k ? "=" : "=#") + o;
	        } else a = d.helpers[c] ? "=#" + c + "(" + b.join(",") + ");" : "=" + a;}return a;
	  },  true ? !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	    return d;
	  }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "undefined" != typeof exports ? module.exports = d : this.template = d;
	}();

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var _Symbol = __webpack_require__(88)["default"];

	exports["default"] = function (obj) {
	  return obj && obj.constructor === _Symbol ? "symbol" : typeof obj;
	};

	exports.__esModule = true;

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(89), __esModule: true };

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(90);
	__webpack_require__(118);
	module.exports = __webpack_require__(97).Symbol;

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var $              = __webpack_require__(91)
	  , global         = __webpack_require__(92)
	  , has            = __webpack_require__(93)
	  , DESCRIPTORS    = __webpack_require__(94)
	  , $export        = __webpack_require__(96)
	  , redefine       = __webpack_require__(100)
	  , $fails         = __webpack_require__(95)
	  , shared         = __webpack_require__(103)
	  , setToStringTag = __webpack_require__(104)
	  , uid            = __webpack_require__(106)
	  , wks            = __webpack_require__(105)
	  , keyOf          = __webpack_require__(107)
	  , $names         = __webpack_require__(112)
	  , enumKeys       = __webpack_require__(113)
	  , isArray        = __webpack_require__(114)
	  , anObject       = __webpack_require__(115)
	  , toIObject      = __webpack_require__(108)
	  , createDesc     = __webpack_require__(102)
	  , getDesc        = $.getDesc
	  , setDesc        = $.setDesc
	  , _create        = $.create
	  , getNames       = $names.get
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , setter         = false
	  , HIDDEN         = wks('_hidden')
	  , isEnum         = $.isEnum
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , useNative      = typeof $Symbol == 'function'
	  , ObjectProto    = Object.prototype;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(setDesc({}, 'a', {
	    get: function(){ return setDesc(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = getDesc(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  setDesc(it, key, D);
	  if(protoDesc && it !== ObjectProto)setDesc(ObjectProto, key, protoDesc);
	} : setDesc;

	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol.prototype);
	  sym._k = tag;
	  DESCRIPTORS && setter && setSymbolDesc(ObjectProto, tag, {
	    configurable: true,
	    set: function(value){
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    }
	  });
	  return sym;
	};

	var isSymbol = function(it){
	  return typeof it == 'symbol';
	};

	var $defineProperty = function defineProperty(it, key, D){
	  if(D && has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))setDesc(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return setDesc(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key);
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key]
	    ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  var D = getDesc(it = toIObject(it), key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN)result.push(key);
	  return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
	  return result;
	};
	var $stringify = function stringify(it){
	  if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	  var args = [it]
	    , i    = 1
	    , $$   = arguments
	    , replacer, $replacer;
	  while($$.length > i)args.push($$[i++]);
	  replacer = args[1];
	  if(typeof replacer == 'function')$replacer = replacer;
	  if($replacer || !isArray(replacer))replacer = function(key, value){
	    if($replacer)value = $replacer.call(this, key, value);
	    if(!isSymbol(value))return value;
	  };
	  args[1] = replacer;
	  return _stringify.apply($JSON, args);
	};
	var buggyJSON = $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	});

	// 19.4.1.1 Symbol([description])
	if(!useNative){
	  $Symbol = function Symbol(){
	    if(isSymbol(this))throw TypeError('Symbol is not a constructor');
	    return wrap(uid(arguments.length > 0 ? arguments[0] : undefined));
	  };
	  redefine($Symbol.prototype, 'toString', function toString(){
	    return this._k;
	  });

	  isSymbol = function(it){
	    return it instanceof $Symbol;
	  };

	  $.create     = $create;
	  $.isEnum     = $propertyIsEnumerable;
	  $.getDesc    = $getOwnPropertyDescriptor;
	  $.setDesc    = $defineProperty;
	  $.setDescs   = $defineProperties;
	  $.getNames   = $names.get = $getOwnPropertyNames;
	  $.getSymbols = $getOwnPropertySymbols;

	  if(DESCRIPTORS && !__webpack_require__(117)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	}

	var symbolStatics = {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    return keyOf(SymbolRegistry, key);
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	};
	// 19.4.2.2 Symbol.hasInstance
	// 19.4.2.3 Symbol.isConcatSpreadable
	// 19.4.2.4 Symbol.iterator
	// 19.4.2.6 Symbol.match
	// 19.4.2.8 Symbol.replace
	// 19.4.2.9 Symbol.search
	// 19.4.2.10 Symbol.species
	// 19.4.2.11 Symbol.split
	// 19.4.2.12 Symbol.toPrimitive
	// 19.4.2.13 Symbol.toStringTag
	// 19.4.2.14 Symbol.unscopables
	$.each.call((
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,' +
	  'species,split,toPrimitive,toStringTag,unscopables'
	).split(','), function(it){
	  var sym = wks(it);
	  symbolStatics[it] = useNative ? sym : wrap(sym);
	});

	setter = true;

	$export($export.G + $export.W, {Symbol: $Symbol});

	$export($export.S, 'Symbol', symbolStatics);

	$export($export.S + $export.F * !useNative, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!useNative || buggyJSON), 'JSON', {stringify: $stringify});

	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ }),
/* 91 */
/***/ (function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ }),
/* 92 */
/***/ (function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 93 */
/***/ (function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(95)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ }),
/* 95 */
/***/ (function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(92)
	  , core      = __webpack_require__(97)
	  , ctx       = __webpack_require__(98)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ }),
/* 97 */
/***/ (function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(99);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ }),
/* 99 */
/***/ (function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(101);

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(91)
	  , createDesc = __webpack_require__(102);
	module.exports = __webpack_require__(94) ? function(object, key, value){
	  return $.setDesc(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ }),
/* 102 */
/***/ (function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(92)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

	var def = __webpack_require__(91).setDesc
	  , has = __webpack_require__(93)
	  , TAG = __webpack_require__(105)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

	var store  = __webpack_require__(103)('wks')
	  , uid    = __webpack_require__(106)
	  , Symbol = __webpack_require__(92).Symbol;
	module.exports = function(name){
	  return store[name] || (store[name] =
	    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
	};

/***/ }),
/* 106 */
/***/ (function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

	var $         = __webpack_require__(91)
	  , toIObject = __webpack_require__(108);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = $.getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(109)
	  , defined = __webpack_require__(111);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(110);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ }),
/* 110 */
/***/ (function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ }),
/* 111 */
/***/ (function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(108)
	  , getNames  = __webpack_require__(91).getNames
	  , toString  = {}.toString;

	var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function(it){
	  try {
	    return getNames(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};

	module.exports.get = function getOwnPropertyNames(it){
	  if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
	  return getNames(toIObject(it));
	};

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var $ = __webpack_require__(91);
	module.exports = function(it){
	  var keys       = $.getKeys(it)
	    , getSymbols = $.getSymbols;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = $.isEnum
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))keys.push(key);
	  }
	  return keys;
	};

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(110);
	module.exports = Array.isArray || function(arg){
	  return cof(arg) == 'Array';
	};

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(116);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ }),
/* 116 */
/***/ (function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ }),
/* 117 */
/***/ (function(module, exports) {

	module.exports = true;

/***/ }),
/* 118 */
/***/ (function(module, exports) {

	

/***/ }),
/* 119 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"notification\">\r\n  Please visit this webside in a More advance browser, eg. FireFox, Chrome, Safari</div>\r\n<div class=\"container\">\r\n  <ol class=\"box-list\">\r\n    {{each boxes}}\r\n    <li class=\"col-sm-6 col-md-4 col-lg-3\">\r\n      <div class=\"box\" style=\"background-image: url(image/{{$value.background}})\" \r\n       onclick=\"app.showDetail(event, {{$index}})\" >\r\n        <div class=\"mask\">\r\n          <span>{{$value.title}}</span>\r\n        </div>\r\n      </div>\r\n    </li>\r\n    {{/each}}\r\n  </ol>\r\n</div>";

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

	var map = {
		"./gomoku.html": 121,
		"./gouache.html": 123,
		"./linkedmedia.html": 125,
		"./opengl.html": 126,
		"./sketch.html": 128,
		"./smilemerge.html": 130
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 120;


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = "<div class=\"modal-dialog\" style=\"width: 700px\">\r\n\t<div class=\"modal-content\">\r\n\t\t<div class=\"modal-header\">\r\n\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n\t\t\t\t<span aria-hidden=\"true\">&times;</span>\r\n\t\t\t</button>\r\n\t\t\t<h4 class=\"modal-title\" id=\"exampleModalLabel\">{{title}}</h4>\r\n\t\t</div>\r\n\t\t<div class=\"modal-body\">\r\n\t\t\t<img src=\"" + __webpack_require__(122) + "\" width=\"640\">\r\n\t\t\t<div class=\"description\">\r\n\t\t\t\t<span class=\"title\">Description:</span>\r\n\t\t\t\t<span class=\"content\">The classic strategy board game Gumoku, also named as Gobang, or  Five in a Row. It is a two players game, who first get an unbroken row of five stones horizontally, vertically, or diagonally will win. This program was written in C++ language with MFC gui library as a practice of C++ programming and algorithm.</span>\r\n\t\t\t\t<div class=\"tips\">You can <a class=\"download\" href=\"/works/gomoku.zip\">download</a> it and have a try.(Run only on Windows OS)</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>";

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "dc3c581a5b207c3755062a075abd1972.gif";

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = "<div class=\"modal-dialog\"  style=\"width: 700px\">\r\n\t<div class=\"modal-content\">\r\n\t\t<div class=\"modal-header\">\r\n\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n\t\t\t\t<span aria-hidden=\"true\">&times;</span>\r\n\t\t\t</button>\r\n\t\t\t<h4 class=\"modal-title\" id=\"exampleModalLabel\">{{title}}</h4>\r\n\t\t</div>\r\n\t\t<div class=\"modal-body\">\r\n\t\t\t<img src=\"" + __webpack_require__(124) + "\" width=\"640\">\r\n\t\t\t<div class=\"description\">\r\n\t\t\t\t<span class=\"title\">Description:</span>\r\n\t\t\t\t<span class=\"content\">A gouache painting of some food.</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>";

/***/ }),
/* 124 */
/***/ (function(module, exports) {

	module.exports = "data:image/jpeg;base64,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"

/***/ }),
/* 125 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"modal-dialog\" style=\"width: 1080px\">\r\n\t<div class=\"modal-content\">\r\n\t\t<div class=\"modal-header\">\r\n\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n\t\t\t\t<span aria-hidden=\"true\">&times;</span>\r\n\t\t\t</button>\r\n\t\t\t<h4 class=\"modal-title\" id=\"exampleModalLabel\">{{title}}</h4>\r\n\t\t</div>\r\n\t\t<div class=\"modal-body\">\r\n\t\t\t<iframe src=\"{{path}}\" width=\"1000\" height=\"640\" />\r\n\t\t\t<div class=\"description\">\r\n\t\t\t\t<span class=\"title\">Description:</span>\r\n\t\t\t\t<span class=\"content\">A course design of a course call Linked Media, which I attended during my exchange study in Bremen. It about visualize data, and make it more readable. My subject is to visualize some data of different dog breeds. Each circle on the chart representing a breed, and size of the circle represents its average weight, and the Y axis represents the average height, X axis represents the lifespan. The visualization programming is base on a SVG library called D3js.</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>";

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = "<div class=\"modal-dialog\" style=\"width: 700px\">\r\n\t<div class=\"modal-content\">\r\n\t\t<div class=\"modal-header\">\r\n\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n\t\t\t\t<span aria-hidden=\"true\">&times;</span>\r\n\t\t\t</button>\r\n\t\t\t<h4 class=\"modal-title\" id=\"exampleModalLabel\">{{title}}</h4>\r\n\t\t</div>\r\n\t\t<div class=\"modal-body\">\r\n\t\t\t<img src=\"" + __webpack_require__(127) + "\" width=\"640\">\r\n\t\t\t<div class=\"description\">\r\n\t\t\t\t<span class=\"title\">Description:</span>\r\n\t\t\t\t<span class=\"content\">A simple gui program using Opengl and MFC. The small robot on the right side has 6 parts, each part can be selected and rotated with the help of the left control panel. And there is a timeline below the selection panel which can store 8 key frames, so that we can make a simple animation of the motion of the robot.</span>\r\n\t\t\t\t<div class=\"tips\">You can <a class=\"download\" href=\"/works/opendroid.zip\">download</a> it and have a try.(Run only on Windows OS)</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>";

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "b7e40e1c9974e15796e545d5906a32e6.gif";

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = "<div class=\"modal-dialog\" style=\"width: 800px\">\r\n\t<div class=\"modal-content\">\r\n\t\t<div class=\"modal-header\">\r\n\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n\t\t\t\t<span aria-hidden=\"true\">&times;</span>\r\n\t\t\t</button>\r\n\t\t\t<h4 class=\"modal-title\" id=\"exampleModalLabel\">{{title}}</h4>\r\n\t\t</div>\r\n\t\t<div class=\"modal-body\">\r\n\t\t\t<img src=\"" + __webpack_require__(129) + "\" width=\"640\">\r\n\t\t\t<div class=\"description\">\r\n\t\t\t\t<span class=\"title\">Description:</span>\r\n\t\t\t\t<span class=\"content\">A sketch painting of basic geometry plasters.</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>";

/***/ }),
/* 129 */
/***/ (function(module, exports) {

	module.exports = "data:image/jpeg;base64,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d9XT+Zr2JoFTYsRqW+S0wKxETSgD+ep2Heg/1LT71fu1/wBREd/Zfmz3pV07gUdXr9w/zmv8wA8XTsA8XQB6Orr30+5Xvi+DHatWA9P5yv3+HYpqxGlLxYde9fuaujo6PTtT7lHp/MUdP9TDvX+dr98MsiofH+ZGnan3eP3jX7lP5mvfXto6/doO9fuV7V+4B93j9+n3K6M/fp96rq6ur1dHoHX+eq699f56varH36/6hHch1+5X7tPuU/mKH7uv8xTsB3o6jtV69qF0dHT7unbTvp3r20+8Pulk9tT31+7r21+5V1/mT/N07a/zNfvad6uv36uv3dPuSzJhCFiRP8we57Vo6/f4/d496/zFO9fu176Overq6urq+L17APTvp20+8A9O407ebr3PcvX7tO1Q+P3Kuv8AMntX+Z1/nquven8zXuk/fq76pliry/uefc9gdOx4f6nr31+7XtX7lf5iv3+P3Kfzg+9w7Uev3auvej1dXUfePD+er28vua/6gp3H8wUJJ+75/d07afeD1+7X73n3p/PVer1+/r96v8zXvTuPujtT79O1XQ/eq6/6i0+9r/qmrq6/z1fuF6ff8j2P3Kvj31dO2rr/AD+vbV0en3K/zFfu1+4aOv3+P3OLo6On8xr9yjL17afdPfR1/m6/ztf5+n+oj/qCn3adtR/O1eTq6uper1+9XtV1/m69z/qGvanevYdqfeq6s/er2H3NO9ew/m6fc1+7qxX+fLH39O4/maB0/wBTaunYB07V7Vdfu1de1fuV+5x+4S+ntp96n8zR1dXUvj90fdqe5dXX+d0/1HT7g+/X+b4F17+bp2r3076Pyr/qfX7mv8xX+Zo6fcq9fv171+9p/M0+/V1df5vR1/1RT/Vte1O9QPuHtTtT79HT7tPuHt596/zOvapY+/V1dWT3q6/cr93R171de+v3vPvk61/mad6/zFfvaf76T/N17U/mdH5dqfe07U70eP3KdqfzNO1HR0H3NT2q6urP3NPv1dO3HvR0++f5iv3qur17h1df5irLH85Uf6rLrq6utexPYfer9yn+oa969te1HR0dO1PuD79Pu07U+5Xtp3q+P3K/er9zi8Xi6fzdO1HX7tP5ijA/nKfz1PvH/VHHtUOvan3Kfdp3o6PF0HfR1+5TtTuew+7r96jp96her1err96narq6/crVj+ZoXT71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"

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = "<div class=\"modal-dialog\" style=\"width: 800px\">\r\n\t<div class=\"modal-content\">\r\n\t\t<div class=\"modal-header\">\r\n\t\t  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n\t\t    <span aria-hidden=\"true\">&times;</span>\r\n\t\t  </button>\r\n\t\t  <h4 class=\"modal-title\" id=\"exampleModalLabel\">{{title}}</h4>\r\n\t\t</div>\r\n\t\t<div class=\"modal-body smile-merge\">\r\n\t\t\t<div id=\"iphone-bg\"> \r\n\t\t\t  <iframe  id=\"fake_screen\" src=\"{{path}}\" height=\"568\" width=\"320\"/>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"description\">\r\n\t\t\t\t<span class=\"title\">Description:</span>\r\n\t\t\t\t<span class=\"content\">\"Smile Merge\" is a web page puzzle game designed for the mobile web platform. The original idea is from a game called \"Slide the block\" in iOS platform. The innovation is the workshop module which you can create you own levels and post them to the server, also I port this game to web page platform so it is cross platform and without installation.</span><br><br>\r\n\t\t\t\t<span class=\"title\">Rules:</span>\r\n\t\t\t\t<span class=\"content\">Move the blocks by sliding them, clear a path in order to make all the smiling red blocks merge together. Level passed when there is only one red block left.</span><br><br>\r\n\t\t\t\t<span class=\"title\">Tutorials:</span>\r\n\t\t\t\tPress \"Start\" button, you can start to play the 150 designed levels, which are designed by a team called Alegrium. <br>\r\n\t\t\t\tPress \"Workshop\" button, you can see levels created by other players, press them and try to pass them. There is \"+\" button on the top left\r\n\t\t\t\tof the screen, which is to create a new level, the way to create a level is similar to a process of painting, you can choose different blocks below, and put them on the grids by sliding on the panel. Once you finish your level, you can set a name and a move limitation to higher the difficulty</span><br><br>\r\n\t\t\t\t<span class=\"title\">Tips:</span>\r\n\t\t\t\t<span class=\"content\">You can experience it in your mobile phone by scan the qr code below.</span>\r\n\t\t\t\t<img src=\"" + __webpack_require__(131) + "\">\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>";

/***/ }),
/* 131 */
/***/ (function(module, exports) {

	module.exports = "data:image/png;base64,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"

/***/ })
/******/ ]);