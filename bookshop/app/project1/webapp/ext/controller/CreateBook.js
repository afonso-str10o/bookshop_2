sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/IconPool",
    "sap/m/Dialog",
    "sap/m/Button",
    "sap/m/library",
    "sap/m/List",
    "sap/m/StandardListItem",
    "sap/m/Text",
  ],
  function (
    Controller,
    JSONModel,
    IconPool,
    Dialog,
    Button,
    mobileLibrary,
    List,
    StandardListItem,
    Text
  ) {
    "use strict";

    // shortcut for sap.m.ButtonType
	var ButtonType = mobileLibrary.ButtonType;

	// shortcut for sap.m.DialogType
	var DialogType = mobileLibrary.DialogType;

    return Controller.extend("bookshop.project1.ext.controller.CreateBook.createBookWithDialog",{
      /**
       * Generated event handler.
       * @param {sap.ui.model.Context[]} aSelectedContexts the selected contexts of the table rows
       */

      onInit: function () {
        var oModel = new JSONModel(
          sap.ui.require.toUrl("sap/ui/demo/mock/products.json")
        );
        this.getView().setModel(oModel);
      },

      createBookWithDialog: function (aSelectedContexts) {
        if (!this.oDefaultDialog) {
            this.oDefaultDialog = new Dialog({
                title: "Available Products",
                content: new Text({text: "ok" }),
                beginButton: new Button({
                type: ButtonType.Emphasized,
                text: "OK",
                press: function () {
                    this.oDefaultDialog.close();
                }.bind(this),
                }),
                endButton: new Button({
                text: "Close",
                press: function () {
                    this.oDefaultDialog.close();
                }.bind(this),
                }),
            });

          // to get access to the controller's model
          this.getView().addDependent(this.oDefaultDialog);
        }

        this.oDefaultDialog.open();
      },
    });
  }
);
