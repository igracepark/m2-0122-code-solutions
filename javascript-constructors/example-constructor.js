function ExampleConstructor() {

}

console.log('value of ExampleConstructor.prototype:', ExampleConstructor.prototype);
console.log('typeof ExampleConstructor.prototype:', typeof ExampleConstructor.prototype);

var exconstruct = new ExampleConstructor();
var instanceofCheck = exconstruct instanceof ExampleConstructor;
console.log('exconstruct instanceof ExampleConstructor:', instanceofCheck);
