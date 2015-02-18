/**
 * Application-wide settings, can be used to hold constants
 * and session information such as the current user's id
 *
 * @module app
 */
define([
], function(

	){

	var app = {

		API: "/rest",
		ddResource: "/directdebits",
		multiEditResource: "/multiedit",
		validateResource: "/validator-service/validate",
		exportResource: "/exportsnew",
		utilResource: "/util",
		creditorInfoResource: "/util/creditorinfo",
		generateIbanResource: "/util/iban",
		bankingPartnersResource: "/util/getpartners"

	};

	return app;

});