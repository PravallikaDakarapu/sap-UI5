sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("com.dpz_PracticeTask.controller.View2", {
		onPressDelete: function() {
			var table = this.getView().byId("foodItemsTableId");
			var selectedItem = table.getSelctedItem();
			var path = selectedItem.getBindingContext("FoodListModel").getpath().split("/")[1];
			var model = this.getOwnerComponent().getModel("FoodListModel");
			var object = model.getData().FoodItems;
			object.splice(path, 1);
			model.refresh(true);
			table.removeSelections(true);

		}

	});

});