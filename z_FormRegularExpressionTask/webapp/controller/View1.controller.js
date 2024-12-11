sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("com.dpz_FormRegularExpressionTask.controller.View1", {
		onSubmit: function() {
		
			var inputName = this.getView().byId("inputNameFieldId").getValue();
			//	var regexName=new RegExp(inputName,)

			var regexName = inputName.match(/^[a-zA-z]/gm);

			if (regexName != null) {
				this.getView().byId("inputNameFieldId").setValueState("Success");
			} else {
				this.getView().byId("inputNameFieldId").setValueState("Error");
			}

			var inputAge = this.getView().byId("inputAgeFieldId").getValue();
			
			var regexAge = inputAge.match(/^(1[8-9]|[2-9][0-9]|100)$/gm);
			if(regexAge >= 18 && regexAge <= 100){
					this.getView().byId("inputAgeFieldId").setValueState("Success");
			}
			else{
			this.getView().byId("inputAgeFieldId").setValueState("Error");	
			}
				debugger;
			var inputPhNo = this.getView().byId("inputPhNoFieldId").getValue();
			var phoneNumberRegExp=/^[6-9]\d{9}$/gm;
			// var regexPhNo= inputPhNo.match(/^[0-9]{10}$/gm);
			if(inputPhNo.match(phoneNumberRegExp)){
					this.getView().byId("inputPhNoFieldId").setValueState("Success");
			}
			else{
					this.getView().byId("inputPhNoFieldId").setValueState("Error");
			}
		}

	});
});