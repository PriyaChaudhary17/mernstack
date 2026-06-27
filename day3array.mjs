let info=["priya","karan_johar",50,true,"bhairahawa"]
console.log(info)
console.log(info[1])//displaying withindex

info[0]="preety"
console.log(info)
info.push("priya")
info.push("komal")
console.log(info)
info.pop()
console.log(info)
info.unshift("komall")
console.log(info)
info.shift()
console.log(info)

/* object */
let info1={
    name:"Priya",
    age:50,
    isKaranJohar: false, 
}
console.log(info1)
console.log(info1.name)//access 
//to change
info1.name="preety"
info1.isKaranJohar=true
console.log(info1)
info1.address="bhairahawa"
console.log(info1) 
delete info1.name
console.log(info1)