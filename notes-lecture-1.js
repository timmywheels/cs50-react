const o3 = {
	
	1: 'test',
	firstName: 'Tim',
	lastName: 'Wheeler',
	isTeaching: true,
	greet: function(){
		console.log('hi!')
	},
	address: {
		street: 'oak hill ave',
		number: 22
	}
}


function deepCopy(obj){
	// check if vals are objects
	// if so, copy that object (deep copy)
	// else return the value

	const keys = Object.keys(obj);
	
	const newObject = {};

	for (let i = 0; i < keys.length; i++) {
		const key = keys[i];
		if (typeof obj[keys[i]] === 'object') {
			newObject[key] = deepCopy(obj[key])
		} else {
			newObject[key] = obj[key];
		}
	}

	return newObject;

}


// Prototypes
const x = 42

x.toString()
"42"

x.__proto__
Number {0, constructor: ƒ, toExponential: ƒ, toFixed: ƒ, toPrecision: ƒ, toString: ƒ, …}

x instanceof Number
false

// var: lexical scoping, from when they're declared until when their function ends
// const, let: block scoping, until the next '}' is reached


thisIsHoisted() // this will execute properly

function thisIsHoisted(){
	console.log('hoisted function, yo')
}


// The JavaScript Engine Process
// Phase 1:
// Javascript engine first reads the file, checks for errors
// Function definitions are saved in memory
// Variable initializations are not ran, but lexically-scoped var names will be decalred
// Phase 2: 
// Execution phase where variables and functions get invoked



// Closure:
// Functions that refer to variables declared by a parent function
// Possible because of scoping

function makeFunctionArray() {

	const arr = [];

	for (var i = 0; i < 5; i++) {

		arr.push(function() { console.log(i) } )
	}
	return arr;
}

const arr = makeFunctionArray();

arr[0]();

// expected to return 0
// actually returns 5


// Global Function vs Immediately Invoked Function Expression (IIFE)

// Global function
function makeHelloFunction() {
	var message = 'Hello!';

	function sayHello() {
		console.log(message)
	}

	return sayHello;
}

const sayHello = makeHelloFunction();

sayHello();

// Immediately Invoked Function Expression (IIFE)
const sayHello = (function () {
	var message = 'Hello!';

	function sayHello() {
		console.log(message)
	}

	return sayHello;
})()

sayHello();






