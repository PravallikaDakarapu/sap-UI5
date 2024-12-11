sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("cmd.dpz_sampleTasks.controller.View1", {


onSubmit:function()
{
	debugger;
	this.getOwnerComponent().getRouter().navTo("View2");
}



	});
});