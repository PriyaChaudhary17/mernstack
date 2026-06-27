let [a,b,c]=[10,11,12]
console.log(a)
console.log(b)
console.log(c)//array destructor


//object destructor
//in object order doesnot matter
let {name,weight,isMarried}={name:"Priya",weight:52,isMarried:true}
console.log(name)
console.log(weight)
console.log(isMarried)

//... is spread operator which is also known as wrapper opener
let ar1=[9,10,11,12]
let ar2=[13,14]
let ar3=[8,...ar1,...ar2]
console.log(ar3)

let ar4=[...ar1,...ar2,...ar3]
console.log(ar4)

//for object
let info1={name:"Priya",sem:"sixth",age:22}
let info2={address:"ktm"}
let info={...info1,...info2}
console.log(info)

//duplicate cheez repeat hunna
let inf1={name:"Priya",sem:"sixth"}
let inf2={name:"Preety"}
let inf={...inf1,...inf2}
console.log(inf)


