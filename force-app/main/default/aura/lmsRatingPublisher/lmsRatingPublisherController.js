({
    handleChange:function(component,event,helper){
        component.set("v.messageToPublish",component.find("txtMessage").get("v.value"))
    },
    publishMessage: function(component,event,helper){
        let msg=component.get("v.messageToPublish")
        const message={
            lmsData:{value: msg}
        }
        component.find("SimpleChannel").publish(message)
    }
})
