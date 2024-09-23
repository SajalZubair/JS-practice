let name = "Sajal"
let repoCount = 50

console.log(`hello my name is ${name} and my repo Count is ${repoCount}`)

const gameName = new String ('sajalmughal')

console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(6));
console.log(gameName.substring(0,4));// const newStriing = gameName.substring(0,4)
console.log(gameName.slice(-9,4));

const newString = "   hitesh   "
console.log(newString);
console.log(newString.trim());

const url = "https://sajal.com/sajal%20mughal"
console.log(url.replace('%20' , '-'));

console.log(gameName.split(" "));