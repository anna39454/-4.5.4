const obj = {
  feto: "яблоко",
  cantidad: 100
}

function hasOwnProperty(obj, str) {
  return obj.hasOwnProperty(str); 
}
 
console.log(hasOwnProperty(obj, "city"))
console.log(hasOwnProperty(obj, "feto"))