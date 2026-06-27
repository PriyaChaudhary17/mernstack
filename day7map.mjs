//map loop
let ar1=[10,20,30,40]
let ar=ar1.map((item,i)=>{
    return item*i
    

})
console.log(ar)
//[10,20,30]=>[20,30,40]
let a2=[10,20,30]
let a3=a2.map((item,i)=>{
    return item*2

})
console.log(a3)

//for [20,30,10,5]=>[40,60,0,0]
let a4=[20,30,10,5]
let a5=a4.map((item,i)=>{
    if(item>=18){
        return item*2
    }
    else{
        return item*0
    }

})
console.log(a5)

let users=[

    {name:"Priya",age:22},
    {name:"Preety",age:23},
    {name:"Komal",age:24},
]
let names=users.map((item,i)=>{
    return item.name
    
})
console.log(names)


