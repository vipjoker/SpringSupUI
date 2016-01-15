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
               "sap/ui/model/json/JSONModel"],
        function(Controller,MessageToast, JSONModel){
        "usr strict";

        return Controller.extend("new.controller", {


            onSecondButtonClick : function() {
                alert("Second button works");
            },

            onInit : function(){
                var someObject = {
                    recepient : {
                        name : "my message"
                    }
                };

                var myModel = new JSONModel(someObject);
                this.getView().setModel(myModel)

            }

        });
    });




// attach button to view

sap.ui.getCore().attachInit(function () {
    init();
});



function init(){

    new sap.ui.xmlview({
        viewName: "xmlViews.App"
    }).placeAt("content");

    new sap.ui.xmlview({
        viewName: "xmlViews.Second"
    }).placeAt("edit");


}