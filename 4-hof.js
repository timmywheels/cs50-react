// Higher Order Functions

function map(arr, fn) {
    const newArr = [];

    arr.forEach(function(val) {
        newArr.push(fn(val));
    });

    // NO NEED FOR FOR LOOP, USE FOREACH INSTEAD
    // for (let i = 0; i < arr.length; i++) {
    //     let val = arr[i];
    //     newArr.push(fn(val));
    // }

    return newArr;
}

function addOne(num) { return num + 1 }

const x = [0, 1, 2, 3];

console.log(map(x, addOne));
