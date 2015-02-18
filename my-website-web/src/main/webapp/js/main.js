/**
 * 		VolteneoOne v1.0
 */

/**
 * 		(c) 2014 Volteneo Limited
 * 		http://volteneo.com
 *
 * Entry point for the VolteneoOne application
 * @module
 * @main
 * @requires app, router, SessionModel
 */
require([
	"app",
	"router",
	"model/session/SessionModel"
],
function(app, VolteneoRouter, SessionModel) {

	app.router = new VolteneoRouter();

	app.session = new SessionModel({});

	/**
	 * Sets the active style for the current menu item
	 * when a route is triggered
	 */
	app.router.bind('route', function(route, section) {
		var $el;
		route = route.replace('route:', '');
		$el = $('.menu-' + route);

		if($el.hasClass('active')) {
			return;
		}
		else {
			$('.nav.navbar-nav li').removeClass('active');
			$el.addClass('active');
		}
	});

	/**
	 * Start the application only after checking the
	 * authentication status (is the user logged in)
	 */
	app.session.checkAuth({
		complete: function() {
			Backbone.history.start();
		}
	});

});