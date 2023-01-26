/*
var x= 10
console.log(x);
console.log(y);
var str ='Murugu'
var y =5
console.log('Name='+str)
console.log(`Name=${str} ${y}`)
let z=7
z=4
console.log(z)

function display(){
    console.log('hello')
    return 'hi'
    
}
console.log(display());
function sum(x,y){
    return x-y
}
var i=sum(9,4);
console.log(i)



{
   var g=8
    let p=4
}
console.log(g)
//console.log(p)
let m=[8,0,'hjik',false]
for(let s=0;s<3;s++){
    console.log(m[s])
    console.log(m.length)
}

const arr=['suzuki','ford','toyota']
arr.forEach(car=>console.log(car))

arr.forEach((car,index)=>console.log(`index::${index},value::${car}`))

let a=[20,50,70,60]
let b=[99,...a,78]
b[1]=45
console.log(a)
console.log(b)
console.log(...b)
*/
/*
function compare(x,y){
   result= x>y ? x:y
   console.log(result)
}

function action(a,b){
    //some code 
    console.log(callback(5,3))
}

action(compare)*/
let a=[12,9,15,8,7]
let evennum=a.filter((value)=>{
    return  value %2 === 0
})
console.log(evennum)

let b=[12,9,'hi',8,'hello']
let num=b.filter(
    value=>typeof(value)  === 'number'
)
console.log(num)

/*const equals = (x, y) => JSON.stringify(x) === JSON.stringify(y);

const x = [1, 2, 3];
const y= [1, 2, 3];
console.log(equals)
equals(x, y); */
/*
function num1(x){
  let n= x % 2 === 0
  console.log(n)
  //return `welcome ${x} `
}
 function action(callback){
          
     callback(9)
 }
 action(num1);*/
 
/*
 function welcome(str){
     return new Promise((resolve,reject)=>{
       setTimeout(()=>{
           if(str){
          console.log('hiafter2min')
          resolve ('success')
           }   
           else{
               reject('error')
           }
        },2000)

     })
 }
 welcome()
 .then((result)=>{
     console.log('welcome')
 })
 .catch((error)=>{
       console.log(error)
 })*/

 /*
 let lead=[
     {
         Name:'John',
         City:'NY',
         Leadsource:'Web',
     },
     {
        Name:'Jack',
        City:'TX',
        Leadsource:'Phone',
    },
    {
        Name:'Rose',
        City:'CA',
        Leadsource:'Web',
    },
 ]
 //lead.forEach((p)=>console.log( p.City === 'TX'))
 const index = lead.filter(p => p.City === "NY");
 console.log(index)


 let std=[
    {
        Name:'Student1',
      Total:300,
      Result:'Pass'
     }
    ,
    {Name:'Student2',
    Total:200,
    Result:'Fail'},
    {
        Name:'Student3',
      Total:150,
      Result:'Pass'
     }

 ]
let s=std.filter(p=>p.Result==='Pass')
           let desc=(s.reverse())

         console.log(desc)
 
 class Student{

         Candi=[{
            Name:'Student1',
          Total:450,
          Result:'Pass'
         }
        ,
        {Name:'Student2',
        Total:200,
        Result:'Fail'},
        {
            Name:'Student3',
          Total:170,
          Result:'Pass'
         }
        ]
        
         Display(){
            console.log('Hi')
            let s1=this.Candi.filter(p=>p.Result==='Pass')
           //let desc=(s1.reverse())
          
           console.log(s1.reverse())
           
         }

             }

        
    let obj=new Student()
    obj.Display()
    
    
  */

    let u=[9,5,3,7,2]
   let x=u.filter(value=>value % 2=== 1)
   console.log(`odd num ${x}`);