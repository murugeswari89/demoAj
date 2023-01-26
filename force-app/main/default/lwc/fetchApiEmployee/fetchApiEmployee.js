import { LightningElement ,track} from 'lwc';
export default class FetchApiEmployee extends LightningElement {
counter=0;
    employee=[];
@track emplist=[];
refresh=true;
empname;

       async handleclick(event){
           this.emplist=[];
           try{
           let url="https://employee-directory-services.herokuapp.com/employees";
           let response=await fetch(url,{method:"GET"})
           let data=await response.json();
           this.employee=data;
        this.updateEmpData();
        // console.log(this.employee[1]);
        // this.emplist=this.employee.filter(e=>e.firstName.startsWith(this.empname));
         //console.log(JSON.stringify(this.emplist));
       }
    
    catch(e){
        console.log(e);
    }
    this.refresh=true;

}

updateEmpData()
{
    this.data={
        id:this.employee[this.counter].id,
        name:this.employee[this.counter].firstName,
        email:this.employee[this.counter].email,
        picture:this.employee[this.counter].picture

    }
    console.log(this.employee[this.counter]);
}
       
       
    updatefirstname(event){
        this.empname = event.target.value;
        if(event.target.value === null){
            this.refresh=false;
        }
    }

    btnclick(event){
        if(event.target.name==='Previous'){
            if(this.counter!=0){
                this.counter-=1;
                this.updateEmpData();
            } 
        }else if(event.target.name==='Next'){
                if(this.counter < this.employee.length-1){
                    this.counter+=1;
                    this.updateEmpData();
                    console.log('the counter'+this.counter);
                }else{
                    alert('End of the List');
                }
            }
        
    }
}