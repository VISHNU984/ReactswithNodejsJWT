// myFunction.js

function myFunction(a, b) {
    return a + b;
  }
  
  
  function AgeAbove18andbelow65(dob) {
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
        age--;
    }
    return age > 17 && age < 65 ? true : false;
  }

  module.exports = { myFunction,AgeAbove18andbelow65 };
  