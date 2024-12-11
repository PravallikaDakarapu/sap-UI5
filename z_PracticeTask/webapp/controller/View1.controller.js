sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("com.dpz_PracticeTask.controller.View1", {
   onSubmit:function(){
   	// var listOne = this.getView().byId("listitemsId").getValue();                         
   	// var listTwo = this.getView().byId("listitemsNameId").getValue();
   	this.getOwnerComponent().getRouter().navTo("View2") ;                      
   		
		 	var foodItemdId = this.getView().byId("listitemsId").getValue();                    
		 	var foodQuantityId= this.getView().byId("listitemsNameId").getValue();
		 	
		 	var obj ={
		 		"Items":foodItemdId,
		 		"Quantity":foodQuantityId
		 		
		 	};
		 	var newVar = this.getView().getModel("FoodListModel");
		 	newVar.getData().FoodItems.push(obj);
		 	newVar.refresh(true);
		

   }             
   
   
   
   
	});
});