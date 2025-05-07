sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "riskmitigation/ui5/formatter/formatter"
], function (Controller, formatter) {
  "use strict";

  return Controller.extend("riskmitigation.ui5.controller.Main", {
    formatter: formatter,

    onInit: function () {
      // Eventuali logiche iniziali
    },

    onRiskPress: function (oEvent) {
      
      const oItem = oEvent.getSource();
      const oRouter = this.getOwnerComponent().getRouter();
      const oCtx = oItem.getBindingContext();
      const sId = oCtx.getProperty("ID");

      oRouter.navTo("RouteDetail", {
        id: sId
      });
    }
  });
});
