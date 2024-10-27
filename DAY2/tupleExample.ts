
let person:[string,number,boolean]=["Alka",413,true];

console.log(person[0]);

console.log(person[1]);

console.log(person[2]);

person.forEach((e)=>{
   console.log(e)
})

const arr = person.map((e)=>{
  if(typeof(e)=="number"){
   return  e*e
  }
  return e;
})as [string, number, boolean];

console.log("arr",arr);