sap.ui.define(["sap/ui/core/UIComponent",
               "sap/ui/model/json/JSONModel",
               "sap/ui/model/resource/ResourceModel"
],function (UIComponent,JSONModel,ResourceModel){
	"use strict";
	return UIComponent.extend("sapUInamespace.Component",{
		
		
		metadata :{
			manifest: "json"
		},
		
		init : function (){
			UIComponent.prototype.init.apply(this, arguments);
			
                var someObject = {
                    recepient : {
                        name : "my message"
                    }
                };
                
                
                var myModel = new JSONModel(someObject);
                this.getView().setModel(myModel);
                
                
                var i18nModel = new ResourceModel({
                	bundleName: "sapUInamespace.i18n.i18n"
                });
                
                this.getView().setModel(i18nModel,"i18n");
			
		}
	});
});