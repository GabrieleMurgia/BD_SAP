sap.ui.define([], function () {
    "use strict";
  
    return {
      formatImpact: function (value) {
        switch (value) {
          case 1: return "Low";
          case 2: return "Medium";
          case 3: return "High";
          default: return value;
        }
      },
  
      formatCriticality: function (value) {
        switch (value) {
          case 1: return "Minor";
          case 2: return "Major";
          case 3: return "Critical";
          default: return value;
        }
      }
    };
  });
  