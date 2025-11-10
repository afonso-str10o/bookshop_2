sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';
var Dialog = sap.m.Dialog;
    return {
        /**
         * Generated event handler.
         *
         * @param oContext the context of the page on which the event was fired. `undefined` for list report page.
         * @param aSelectedContexts the selected contexts of the table rows.
         */
        createBookWithDialog: function(oContext, aSelectedContexts) {
            //MessageToast.show("Custom handler invoked.");
            this.oDefaultDialog = new Dialog({
					title: "Available Products",
					})
            this.oDefaultDialog.open();
        }
    };
});
