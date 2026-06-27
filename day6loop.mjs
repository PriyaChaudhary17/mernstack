let age =20
if (age>=18){
    console.log("can vote")
}else{
    console.log("cannot vote")

}
/*
male=>He
female=>She 
other =>they
*/
let gender="female"
if(gender==="male"){
    console.log("he")
}else if(gender ==="female"){
    console.log("she")
}
else{
    console.log("they")
}
console.log("hello priya")
/* 
define arrow function
 */

let func1=()=>
    console.log("i am a function ")

/* function call
*/
func1()
console.log("a")
func1 //this is not the right way to call function

let info=(name,surname,ward)=>{
    console.log(name,surname,ward)
}
info("Priya","Chaudhary",1)
info("Preety","Yadav",2)

let info1=(name,surname="Kayastha",weight=52)=>{
    console.log(name,surname,weight)
}
info1("priya")
/* function with return
  */
let info3=()=>{
    console.log("a")
    return "b"
    console.log("c")
}
let i=info3()
console.log(i)

let canVOte=(i1)=>{
    if(i1 >=18){
        return "can vote"
    }
    else{
        return "cannot vote"
    }
}
let _canVote=canVOte(50)
console.log(_canVote)

/*
make a function named prepo it takes one input
if input is female=>return she
else return they 
 */

let gend=(gen)=>{
    if(gen ==="male"){
        return "he"
    }
    else if(gen ==="female")
    {
        return"she"
    }else{
        return "they"
    }
}
let _gender=gend("female")
console.log(_gender)
