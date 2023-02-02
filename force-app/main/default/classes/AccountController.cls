public  class AccountController {
    
@AuraEnabled(cacheable=true)
    public static List<Account> getAccountList(){
        return[
            Select Id,Name,Industry,Rating 
            FROM Account
        ];
    }
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountList(String Rating){
        return[
            Select Id,Name,Industry,Rating 
            FROM Account where Rating=:Rating 
        ];
    }

    // Tthis method is denoted to retreive the address of the customersss
    @AuraEnabled(cacheable=true)
    public static Account getAddress(String accId){
        return[
            Select BillingAddress 
            FROM Account where Id=:accId Limit 1
        ];
    }

    @AuraEnabled(cacheable=true)
    public static list<Account> getdetails(String name){
        return[
            Select Id,Name,AccountNumber,BillingAddress
            FROM Account Where Name LIKe:name+'%' 
        ];
    }

    @AuraEnabled(cacheable=true)
    public static void sendEmailToController(String body, String toSend, String subject){
        try{
           // OrgWideEmailAddress[] owea = [select Id from OrgWideEmailAddress where Address = 'doNotReply@asd.com'];
            Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
            // if ( owea.size() > 0 ) {
            //     mail.setOrgWideEmailAddressId(owea.get(0).Id);
            // }
            String[] ccAddresses = new String[] {Label.defaultEmailId};

            String[] toAddresses = new String[] {toSend};
            mail.setToAddresses(toAddresses);
            mail.setCcAddresses(ccAddresses);
            mail.setSubject(subject);
            mail.setHtmlBody(body);
            
            Messaging.sendEmail(new Messaging.SingleEmailMessage[] { mail });
            system.debug(body);
        }catch(Exception ex){
          System.debug(ex);
        }
    }
}
