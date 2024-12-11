sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("com.dpz_SimpleForm2.controller.SimpleForm2", {
		
	
		onToView2:function(){
	
			var studentName = this.getView().byId("studentNameId").getValue();
			var studentIdNum = this.getView().byId("studentId").getValue();
			var studentPhoneNum = this.getView().byId("studentPhoneNumberId").getValue();
			var studentEmail = this.getView().byId("studentEmailId").getValue();
			this.getView().byId("firstSimpleform").setVisible(true);
			this.getView().byId("studentNameId").setEditable(false);
			this.getView().byId("studentId").setEditable(false);
			this.getView().byId("studentPhoneNumberId").setEditable(false);
			this.getView().byId("studentEmailId").setEditable(false);
			this.getView().byId("submit_Btn").setVisible(false);
			this.getView().byId("studentNameFieldId").setText(studentName);
			this.getView().byId("studentIdNumFieldId").setText(studentIdNum);
			this.getView().byId("studentPhoneNumberFieldId").setText(studentPhoneNum);
			this.getView().byId("studentEmailFieldId").setText(studentEmail);

			
			
			
		}
		
		
		
		

	});
});