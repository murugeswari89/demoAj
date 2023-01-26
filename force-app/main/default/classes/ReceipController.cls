public with sharing class ReceipController {
    @AuraEnabled(cacheable=true)
    public static list<Receipt__c> getList(String recordId){
       return[
        Select Name,Mode_of_Pay__c,Amount_Paid_Date__c,Amount__c
        FROM Receipt__c where Contact__c=:recordId
       ];

    }
@AuraEnabled
    public static String createReceipt(String recordId,date paidDate,String modePay,Decimal amount){
        Receipt__c rec=new Receipt__c();
        rec.Contact__c=recordId;
        rec.Amount__c=amount;
        rec.Amount_Paid_Date__c=paidDate;
        rec.Mode_of_Pay__c=modePay;
    insert rec;
        return rec.Id;
    }
}
