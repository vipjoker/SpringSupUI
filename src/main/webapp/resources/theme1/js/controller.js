/**
 * Created by oleh on 1/15/16.
 */

// define controllers
sap.ui.define(["sap/ui/core/mvc/Controller"],


    function(Controller){"usr strict";

        return Controller.extend("sap.ui.demo.wt.App", {
            onShowHello : function(){
                alert("Button works");
            }

        });
    });

sap.ui.define(["sap/ui/core/mvc/Controller",
               "sap/m/MessageToast",
               "sap/ui/model/json/JSONModel",
               "sap/ui/model/resource/ResourceModel"],
        function(Controller,MessageToast, JSONModel,ResourceModel){
        "usr strict";

        return Controller.extend("new.controller", {


            onSecondButtonClick : function() {
                
            	
            	var oBundle = this.getView().getModel("i18n").getResourceBundle();
            	
            	var sRecipient = this.getView().getModel().getProperty("/recepient/name");
            	var sMsg = oBundle.getText("helloMsg",[sRecipient]);
            	
                MessageToast.show(sMsg);
            }

        });
    });




// attach button to view

sap.ui.getCore().attachInit(function () {
    init();
});



function init(){

    new sap.ui.xmlview({
        viewName: "sapUInamespace.view.App"
    }).placeAt("content");

    new sap.ui.core.ComponentContainer({
        name: "sapUInamespace"
    }).placeAt("edit");


}