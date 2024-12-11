sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("com.dpz_SimpleForm2.controller.SimpleForm2", {
		onToView2:function(){
			this.getOwnerComponet().getRouter().navTo("SimpleForm2View2");
		}
});
});