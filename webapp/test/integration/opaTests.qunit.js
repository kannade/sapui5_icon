/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"nickcodeIcon/nickcode/ru_customIcon/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});