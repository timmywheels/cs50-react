function doSomethingAsync(callback) {
    setTimeout(function() { callback(1) }, 1000)
}

doSomethingAsync(console.log)

function doSomething(callback) {
    callback(2)
}

doSomething(console.log)
