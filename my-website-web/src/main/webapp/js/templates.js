/**
 * Module for holding all the templates. Current templating engine
 * is Underscore.js
 *
 * @module VolteneoTemplates
 * @uses Underscore
 * @uses requirejs.text
 */
define([

	'underscore',
	'text!template/menu/MenuTemplate.html',
	'text!template/dashboard/DashboardMainTemplate.html',
	'text!template/dashboard/DashboardSliderTemplate.html',
	'text!template/dashboard/DashboardExportedTemplate.html',
	'text!template/dashboard/DashboardChartsTemplate.html',
	'text!template/dashboard/DashboardGraphsTemplate.html',
	'text!template/dashboard/BasicDashboardMainTemplate.html',
	'text!template/directdebit/DirectDebitsMainTemplate.html',
	'text!template/directdebit/DirectDebitsTableTemplate.html',
	'text!template/directdebit/DirectDebitSummaryTemplate.html',
	'text!template/directdebit/DirectDebitDetailTemplate.html',
	'text!template/directdebit/DirectDebitFormTemplate.html',
	'text!template/filter/FilterControlsTemplate.html',
	'text!template/pagination/PaginationControlsTemplate.html',
	'text!template/export/ExportControlsTemplate.html',
	'text!template/export/BulkEditTemplate.html',
	'text!template/help/HelpMainTemplate.html',
	'text!template/login/LoginTemplate.html'

], function(
	_,
	MenuTemplate,
	DashboardMainTemplate,
	DashboardSliderTemplate,
	DashboardExportedTemplate,
	DashboardChartsTemplate,
	DashboardGraphsTemplate,
	BasicDashboardMainTemplate,
	DirectDebitsMainTemplate,
	DirectDebitsTableTemplate,
	DirectDebitSummaryTemplate,
	DirectDebitDetailTemplate,
	DirectDebitFormTemplate,
	FilterControlsTemplate,
	PaginationControlsTemplate,
	ExportControlsTemplate,
	BulkEditView,
	HelpMainTemplate,
	LoginTemplate

) {

	VolteneoTemplates = {
		"menu-template": _.template(MenuTemplate),
		"dashboard-main-template": _.template(DashboardMainTemplate),
		"dashboard-slider-template": _.template(DashboardSliderTemplate),
		"dashboard-exported-template": _.template(DashboardExportedTemplate),
		"dashboard-charts-template": _.template(DashboardChartsTemplate),
		"dashboard-graphs-template": _.template(DashboardGraphsTemplate),
		"dashboard-basic-template": _.template(BasicDashboardMainTemplate),
		"directdebits-main-template": _.template(DirectDebitsMainTemplate),
		"directdebits-table-template": _.template(DirectDebitsTableTemplate),
		"directdebit-summary-template": _.template(DirectDebitSummaryTemplate),
		"directdebit-detail-template": _.template(DirectDebitDetailTemplate),
		"directdebit-form-template": _.template(DirectDebitFormTemplate),
		"filter-controls-template": _.template(FilterControlsTemplate),
		"pagination-controls-template": _.template(PaginationControlsTemplate),
		"export-controls-template": _.template(ExportControlsTemplate),
		"bulk-edit-template": _.template(BulkEditView),
		"help-template": _.template(HelpMainTemplate),
		"login-template": _.template(LoginTemplate)
	};

	return VolteneoTemplates;

});
