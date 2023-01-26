({
    handleMessage : function(component, message, helper) {
        console.log(message.getParam("lmsData").value)

        //component.set("attribues",value)
        component.set("v.messageReceived",message.getParam("lmsData").value)
  },

  ratingList :function(component,message,helper){
   var action= component.get(c.getAccountList)
   action.setCallback(this, function(response) {
    var state = response.getState();
    if (state === "SUCCESS") {

        component.set('v.AccountList', response.getReturnValue());
        component.find("box3").set("v.value", false);


        console.log(response.getReturnValue)
    }
});

$A.enqueueAction(action);
},
})
