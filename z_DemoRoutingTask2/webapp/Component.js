sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"com/dpz_DemoRoutingTask2/model/models"
], function(UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("com.dpz_DemoRoutingTask2.Component", {

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
             this.getRouter().initialize();
			// sthis et the device model
			this.setModel(models.createDeviceModel(), "device");
		}
	});
});