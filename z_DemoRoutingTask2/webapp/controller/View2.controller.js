sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("com.dpz_DemoRoutingTask2.controller.View2", {
		onPress:function(){
		this.getOwnerComponent().getRouter().navTo("View3");
		
		}

	});
});