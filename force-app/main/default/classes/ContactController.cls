public class ContactController {

    //insert new contact
    @AuraEnabled
    public static Id insertcontact(String recordId,String lastName,String Mobile){
       
        Contact con=new Contact();
        con.lastName=lastName;
        con.MobilePhone=Mobile;
        con.AccountId=recordId;


        insert Con;
        return Con.Id;
    }
      @AuraEnabled
      public static string createcontact(String lastName,String firstName,String email,Date birthdate,String department){
        Contact con=new Contact();
        con.lastName=lastName;
        con.firstName=firstName;
        con.Email=email;
        con.BirthDate=birthdate;
        con.Department=department;

        insert con;
        return con.Id;
      }
    //get contactlist

    @AuraEnabled(cacheable=true)
    public static list<Contact> getContactList(){
        return[
            SELECT Id,lastName,MobilePhone from Contact
        ];
    }


    @AuraEnabled(cacheable=true)
    public static list<Contact> getList(String accId){
      return[
        Select Id,LastName,MobilePhone,AccountId
        from Contact where AccountId=:accId
      ];
    }
}
