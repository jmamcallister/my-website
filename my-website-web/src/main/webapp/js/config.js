/**
 * Java log4j-style Logging Levels
 *
 * Toggle these values to enable/disable the logging level. Supported
 * levels are `ERROR`, `INFO`, `DEBUG`, and `TRACE`. To add more levels,
 * add another statement. To enable the level, set the value to `true`
 *
 * @example
 * 		if(DEBUG) console.log("DEBUG level logging...");
 */
if (typeof ERROR === 'undefined') ERROR = true;
if (typeof INFO === 'undefined')  INFO  = true;
if (typeof DEBUG === 'undefined') DEBUG = true;
if (typeof TRACE === 'undefined') TRACE = false;

require.config({
	paths: {
		'text': 'lib/text',
		'underscore': 'lib/underscore',
		'backbone': 'lib/backbone',
		'backbone.layoutmanager': 'lib/backbone.layoutmanager',
		'jquery': 'lib/jquery',
		'bootstrap': 'lib/bootstrap',
		'bootstrap-tagsinput': 'lib/bootstrap-tagsinput',
		'bootstrap-slider': 'lib/bootstrap-slider',
		'datepicker': 'lib/bootstrap-datepicker',
		'select2': 'lib/select2',
		'bootbox': 'lib/bootbox',
		'deparam': 'lib/jquery-deparam',
		'jquery.validate': 'lib/jquery.validate',
		'validator': 'lib/jquery.validate.volteneo',
		'volteneo.date': 'lib/volteneo.date',
		'chart': 'lib/Chart',
		'message': 'lib/volteneo-alert-message'
		// 'template': '../template'
	},

	shim: {
		'backbone': {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		},
		'underscore': {
			exports: '_'
		},
		'chart': {
			deps: ['jquery'],
			exports: 'Chart'
		},
		'backbone.layoutmanager': ['backbone'],
		'bootstrap': ['jquery']
		// 'validate': ['jquery', 'validate.defaults']
	}

});

require(['main']);