define(["dojo/_base/declare", "dijit/_WidgetBase", "dojo/dom-construct", "dojo/_base/lang", "dojo/_base/window"], function(declare, _WidgetBase, domConstruct, lang, win){
   return declare('app/display/XWrite', [_WidgetBase], {
      
       constructor : function() {
           console.log(this.declaredClass+".constructor");
       }
       
       , _callMe : function() {
          
          return this.declaredClass+"._callMe";
       }
     
   });     
});
