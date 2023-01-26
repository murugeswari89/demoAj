import EmployeeNumber from '@salesforce/schema/User.EmployeeNumber';
import { LightningElement,track} from 'lwc';

export default class ChangetoUpperCase extends LightningElement {
    variable='';
    empSalary;
    //isshow=false;
    @track sal=[];
    @track employee=[
        {
            Name:'Rosy',
            Salary:60000,
            Position:'Developer'
        },
        {
            Name:'John',
            Salary:45000,
            Position:'Trainer'
        },
        {
            Name:'Rosa',
            Salary:30000,
            Position:'Manager'
        },
        {
            Name:'Lilly',
            Salary:20000,
            Position:'Lead'
        }
    ]

    
    clickHandler(event){
        //this.empSalary=event.target.value;
       // this.employee.Salary[1] =8000;
       
     this.sal=this.employee.filter(e=>e.Salary>=this.empSalary);
    
    
    console.log(this.sal);
    }

    changeHandler(event){
        //if(event.target.name==='txtName'){
        //this.variable=event.target.value.toUpperCase();}
        if(event.target.name==='txtSalary'){
            this.empSalary=event.target.value;
        }
    }
}