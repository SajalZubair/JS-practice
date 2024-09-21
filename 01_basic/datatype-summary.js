datatype_summary.js // primitive data types , call by value
//7: string boolean, number, null, undefined ,symbol ,Bigint
const score= 100
const scoreValue=100.3
const isloggedIn = false
const outsidetemp = null
let userEmail= undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

const bigNumber = 1234675546735276n
//non primitive , refernce type , inka typeof object ee ata h
//objects, Array , Function

const heros = ["sajal" , "Amna"]
let myObj = {
  name : "sajal",
  age : 21  
  
}
const myFunction = function(){
    console.log("hello world")
}

//javascript dynamically type h variable declare rty hue type specify ni krni hti