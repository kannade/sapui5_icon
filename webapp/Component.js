sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"nickcode_ru_customIcon/model/models",
	"sap/ui/core/IconPool"
], function (UIComponent, Device, models, IconPool) {
	"use strict";

	return UIComponent.extend("nickcode_ru_customIcon.Component", {

		metadata: {
			manifest: "json"
		},

		init: function () {
			UIComponent.prototype.init.apply(this, arguments);
			this.getRouter().initialize();
			this.setModel(models.createDeviceModel(), "device");
			
			IconPool.addIcon("smart", "nickicon", {
				fontFamily: "Nickcode",
				content: "f100"
			});
			IconPool.addIcon("photo", "nickicon", {
				fontFamily: "Nickcode",
				content: "f101"
			});
			IconPool.addIcon("smart1", "nickicon", {
				fontFamily: "Nickcode",
				content: "f102"
			});
			IconPool.addIcon("watch", "nickicon", {
				fontFamily: "Nickcode",
				content: "f103"
			});
			
		}
	});
});