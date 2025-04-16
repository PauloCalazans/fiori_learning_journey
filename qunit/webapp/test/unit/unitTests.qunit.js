/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"student/com/sap/training/advancedsapui5/qunit/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
