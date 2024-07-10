a=5;
var a=9;
console.log(a)
let b=20;
console.log(b);
{
    let b=90;
    console.log(b);
    const t=10
}
console.log(typeof(b));
var st='i am a string';
console.log(typeof(st));
var d=true;
var m;
console.log(typeof(m));
var arr1=['orange','apple',10]
console.log(arr1[0])
console.log(arr1.length)
arr1.push('pineapple')
console.log(arr1)
//Javascript Objects
let person={
    name:'miya',
    age:20,
    location:'tvm'
}
console.log(person.age)
let arr2=[{
    name:'maya',
    age:19,
    location:'tvm',

},{
    name:'molly',
    age:20,
    location:'tvm'
}]
console.log(arr2[1].age)
function add(x,y){
    var sum=x+y;
    return sum;
}
var p=add(11,30);
console.log(p);

let q=1
let s=q++
console.log(q)
console.log(s)
var l=10;
var n='10';
if (l>n) {
    console.log('l is greater than n')
    
}
 else if(l==n){
    console.log('l is equal to n')
}

else{
    console.log('l is less than n');
    }
    //looping statements
    var array=[1,2,3,4,5]
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
        
}
 for (const key in person) {
console.log(person[key])
        }
    for (const i of array) {
  console.log(i)      
    }    
    
       
        
    


    



