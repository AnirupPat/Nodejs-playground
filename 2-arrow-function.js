const square = function(x) {
    return x * x
}

console.log(square(3))

// new way to define functon. Arrow function
const square2 = (x) => {
    return x * x
}
console.log(square2(4))

const square3 = (x) => x * x
console.log(square3(5))

const event = {
    name: 'Birthday Party',
    printGuestList: function() {
        console.log('Guest list for ' + this.name)
    }
}
event.printGuestList()

// with arrow function we cant access obj properties with this keyword. 
// so lets have a different approach
const event2 = {
    name: 'Birthday Party',
    guestList: ['Anirup', 'Sharan', 'Sangram'],
    printGuestList() {
        const that = this
        console.log('Guest list for ' + this.name)
        this.guestList.forEach(function(guest) {
            console.log(guest+ ' is attending ' + this.name)
            // this.name in the above console gives undefined.. so lets add that object
            console.log(guest+ ' is attending ' + that.name)
        })
        // but we would use another approach
        console.log('-----New approach------')
        this.guestList.forEach((guest) => {
            console.log(guest+ ' is attending ' + this.name)
        })
    }
}
event2.printGuestList()

// Arrow function dont bind there own this value they acess the this value
// of the context in which they are created.
// this is a very key feature of arrow function.