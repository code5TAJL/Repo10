// Create lion object here
var lion = {
    name: "Simba",
    legs: 4,
    tails: 1
};
// End of lion object

// Create a function below this line
function myFunction(roar, roarValue) {
    lion[roar] = roarValue;

    return lion;
}

myFunction("roar", "roar-roar");

console.log(myFunction("roar", "roar-roar"));
// End of function
module.exports = myFunction;