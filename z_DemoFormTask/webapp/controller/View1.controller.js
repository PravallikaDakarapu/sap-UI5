sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("com.dpz_DemoFormTask.controller.View1", {
onSubmit:function(){
	this.getOwnerComponent().getRouter().navTo("View2");
	var studentId = this.getView().byId("inputFieldId").getValue();
	var studentName = this.getView().byId("inputNameFieldId").getValue();
	
	var obj = {
				"Id" :studentId,
				"Name":studentName
			};
		var newVar =	this.getView().getModel("studentModel");	
		newVar.getData().FormData.push(obj) ;  
		newVar.refresh(true);
	
	
	
}

	});
});