sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"com/dpz_DemoTask3/model/models",
	"sap/ui/model/json/JSONModel"
], function(UIComponent, Device, models,JSONModel) {
	"use strict";

	return UIComponent.extend("com.dpz_DemoTask3.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);
			var Model = new JSONModel("model/empData.json");
			this.setModel(Model,"employModel");
			// set the device model
			this.setModel(models.createDeviceModel(), "device");
		}
	});
});