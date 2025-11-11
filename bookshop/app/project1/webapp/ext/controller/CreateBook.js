sap.ui.define(
  [
    "sap/ui/core/Element",
    "sap/ui/core/mvc/Controller",
    "sap/ui/layout/HorizontalLayout",
    "sap/ui/layout/VerticalLayout",
    "sap/m/Dialog",
    "sap/m/Button",
    "sap/m/Label",
    "sap/m/library",
    "sap/m/MessageToast",
    "sap/m/Text",
    "sap/m/TextArea",
  ],
  function (
    Element,
    Controller,
    HorizontalLayout,
    VerticalLayout,
    Dialog,
    Button,
    Label,
    mobileLibrary,
    MessageToast,
    Text,
    TextArea
  ) {
    "use strict";
    // shortcut for sap.m.ButtonType
    let ButtonType = mobileLibrary.ButtonType;

    // shortcut for sap.m.DialogType
    let DialogType = mobileLibrary.DialogType;
    return {
      /**
       * Generated event handler.
       *
       * @param oContext the context of the page on which the event was fired. `undefined` for list report page.
       * @param aSelectedContexts the selected contexts of the table rows.
       */

      createBookWithDialog: function (oContext, aSelectedContexts) {
        MessageToast.show("Custom handler invoked.");
        let oApproveDialog = new Dialog({
          title: "Criar Livro",
          type: DialogType.Message,
          content: [
            new sap.m.FlexBox({
              direction: "Column",
              justifyContent: "Center",
              alignItems: "Start",
              items: [
                new sap.m.Label({ text: "Title", labelFor: "iText" }),
                new sap.m.TextArea("iText", {
                  placeholder: "Enter title of the book",
                }),
                new Label({
                  text: "Do you want to reject this order?",
                  labelFor: "rejectionNote",
                }),
                new TextArea("rejectionNote", {
                  width: "100%",
                  placeholder: "Add note (optional)",
                }),
                // new sap.m.Label({ text: "Email" }),
                // new sap.m.Input({ placeholder: "Enter email" })
              ],
            }),
          ],
          /* content: [
						new Label({
							text: "Do you want to reject this order?",
							labelFor: "rejectionNote"
						}),
						new TextArea("rejectionNote", {
							width: "100%",
							placeholder: "Add note (optional)"
						})
					], */

          beginButton: new Button({
            type: ButtonType.Emphasized,
            text: "OK",
            press: function () {
              oApproveDialog.close();
              oApproveDialog.setBusy(false);
              oApproveDialog.destroyContent();
            },
          }),
          endButton: new Button({
            text: "Close",
            press: function () {
              oApproveDialog.close();
              oApproveDialog.setBusy(false);
              oApproveDialog.destroyContent();
            },
          }),
        });
        oApproveDialog.open();
      },
    };
  }
);
