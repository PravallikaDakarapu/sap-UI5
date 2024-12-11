sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("com.dpz_DemoTask3.controller.View1", {
		onSubmit:function(){
			// debugger;
			var studentId = this.getView().byId("inputFieldId").getValue();
			var studentName = this.getView().byId("inputNameFieldId").getValue();
			// this.getView().byId("studentTableId").setText(studentId);
			// this.getView().byId("studetTableNameId").setText(studentName);
			var obj = {
				"Id" :studentId,
				"Name":studentName
			};
		var newVar =	this.getView().getModel("employModel");	
		newVar.getData().EmployData.push(obj) ;  
		newVar.refresh(true);
		},
		onDelete:function(){
			var form = this.getView().byId("selectTableId");
			var selectedRow = form.getSelectedItem();
			
			
		}

	});
});