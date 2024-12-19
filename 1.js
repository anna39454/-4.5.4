const obj = {
    feto: "яблоко",
    cantidad: 100
   }
   
  
  function showOwnKeysAndValue (obj) {
    for (const [key, value] of Object.entries(obj)) {
    console.log(`${key} ${value}`);
  }
  }
  
  showOwnKeysAndValue(obj)