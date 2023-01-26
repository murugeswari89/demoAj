({
    
    handleMessage : function(component, message, helper) {
        console.log(message.getParam("lmsData").value)
          let val=[];
          val=JSON.parse(JSON.stringify(message.getParam("lmsData").value))
        //component.set("attribues",value)
        component.set("v.ReceiptList",val);
        let x= component.get("v.ReceiptList");
        console.log(x);
  }
})
