// stack (primitive)  , heap (non primitive)

let myYoutubename= "Sajal developer "
 let anothername= myYoutubename
 anothername = "Amna developer "
 console.log(myYoutubename)
 console.log(anothername)
 // stack mn hamen copy milti hai 

 let useOne= {
    email : "sajjal@gmail.com",
    age : 21

 }
 let userTwo = userOne
 userTwo.email = "Amna@gmail.com"

 console.log(userOne.email)
 console.log(userTwo.email)