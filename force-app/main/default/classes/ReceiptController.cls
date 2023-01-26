public class ContactController {

    @AuraEnabled(cacheable=true)
    public static Receipt getList(){
       return[
        Select Name,Mode_of_Pay__c,Amount_Paid_Date__c,Amount__c
        FROM Receipt
       ]

    }
}