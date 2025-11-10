sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/comp/valuehelpdialog/ValueHelpDialog",
    "sap/ui/model/Sorter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], function (Controller, ValueHelpDialog, Sorter, Filter, FilterOperator) {
    "use strict";

    return Controller.extend("project1.ext.controller.Project1_ListReportPageController", {

        onInit: function () {
            // Optional: initialization logic
        },

        onTitleValueHelpRequest: function (oEvent) {
            var oInput = oEvent.getSource();
            var oView = this.getView();

            this._oValueHelpDialog = new ValueHelpDialog({
                supportMultiselect: false,
                supportRanges: false,
                key: "ID",
                descriptionKey: "title",
                ok: function (oEvent) {
                    var aTokens = oEvent.getParameter("tokens");
                    if (aTokens.length > 0) {
                        oInput.setValue(aTokens[0].getKey());
                    }
                    oValueHelpDialog.close();
                },
                cancel: function () {
                    oValueHelpDialog.close();
                },
                afterClose: function () {
                    oValueHelpDialog.destroy();
                }
            });

            // Bind to a custom OData entity that returns distinct titles
            var oModel = oView.getModel(); // assuming default model is OData
            oValueHelpDialog.setModel(oModel);

            oValueHelpDialog.bindRows({
                path: "/BookValueHelp", // CDS entity with unique titles
                sorter: new Sorter("title", false),
                parameters: {
                    custom: "true"
                }
            });

            oView.addDependent(this._oValueHelpDialog);
            this._oValueHelpDialog.open();
        }
    });
});