    // 'this' refers to an object that's set at the creation of a
    // new execution context (function invocation)
    // in the global execution context, it refers to the global object
    // if the function is called as a method of an object, 'this' is bound
    // to the object the method is called on

    const person = {
        name: 'tim',
        greet: function() { console.log('Hi, my name is ' + this.name) }
    }

    person.greet()


    const friend = {
        name: 'andrea'

    }

    friend.greet = person.greet

    friend.greet()

    // Bind, Call, & Apply
    const greet = person.greet.bind({ name: 'this is a bound object' })
    person.greet.call({ name: 'this is a bound object using call' }) // automatically invoked
    person.greet.apply({ name: 'this is a bound object using apply' }) // automatically invoked


    const newPerson = {
        name: 'newPerson',
        greet: () => { console.log('hi, ' + this.name) }
    }

    newPerson.greet()

    greet()
    