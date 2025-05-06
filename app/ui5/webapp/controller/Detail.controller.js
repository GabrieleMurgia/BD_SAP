sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History"
  ], function (Controller, History) {
    "use strict";
  
    return Controller.extend("riskmitigation.ui5.controller.Detail", {
      onInit: function () {
        this.getOwnerComponent().getRouter()
          .getRoute("RouteDetail")
          .attachPatternMatched(this._onObjectMatched, this);
      },

      _onObjectMatched: function (oEvent) {
        const sId = parseInt(oEvent.getParameter("arguments").id, 10); // 2002 → 2002 (Number)
        const oView = this.getView();
      
        // ★ usa SEMPRE il nome della chiave
        oView.bindElement(`/Risks(ID=${sId})`);
      },
  
      onNavBack: function () {
        const oHistory = History.getInstance();
        const sPreviousHash = oHistory.getPreviousHash();
        if (sPreviousHash !== undefined) {
          history.back();
        } else {
          this.getOwnerComponent().getRouter().navTo("Main", {}, true);
        }
      }
    });
  });
  