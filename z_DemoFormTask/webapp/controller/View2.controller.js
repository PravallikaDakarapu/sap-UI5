sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("com.dpz_DemoFormTask.controller.View2", {
		onBack:function(){
		this.getOwnerComponent().getRouter().navTo("View1");
		
		},

onRemoveRow:function(){
	debugger;
	var table = this.getView().byId("studentTableId");
  var selectedData=	table.getSelectedItem();
  var path=selectedData.getBindingContext("studentModel").getPath().split("/")[1];
  var model=this.getOwnerComponent().getModel("studentModel");
  var object=model.getData().FormData;
  object.splice(path,1);
  model.refresh(true);
  table.removeSelections(true);
  
 
}
		// onRemoveRow:function(){
		// 	debugger;
		// 	var table = this.getView().byId("studentTableId");
		// 	var model = this.getOwnerComponent().getModel("studentModel");
		// 	var selectedItems=table.getSelectedItems();
		// 	var aSelectedIds = selectedItems.map(function(oItem) {
  //          return oItem.getBindingContext().getProperty("id");
  //      });
  //      var aProducts = model.getProperty("/FormData");
  //      var aRemainingProducts = aProducts.filter(function(product) {
  //          return !aSelectedIds.includes(product.id);
  //      });
  //      model.setProperty("/FormData", aRemainingProducts);
  //      table.removeSelections(true);
		// }
	});
});