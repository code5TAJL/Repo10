function myFunction(myObj, checkProp) {
    // Only change code below this line
    myObj.hasOwnProperty(checkProp) 
        return myObj[checkProp];
    
    return "Not Found";

    // Only change code above this line
}
console.log(myFunction());
module.exports = myFunction;