setTimeout(() => {
    console.log('2 sec are up !')
}, 2000)

// This anonymous function is the callback function
// Callback function is a function that we provide as an argument to another function
// with the intention of having it called later on
// setTimeout is a callback pattern provided by Node and is asynchronous
// not all callback functions are asynchronous in nature
// feorEach and filter also uses function as an argument but they are synchronous in nature

const names = ['Anirup', 'Sangram', 'Sharan']
const shortNames = names.filter((name) => {
    return name.length <= 4
})

const geocode = (address, callback) => {
    setTimeout(() => {
        const data = {
            latitude: 0,
            longitude: 0
        }
        return data
    }, 2000)
}

const data = geocode('India')
console.log(data)

// the O/P is 
// undefined
// 2 sec are up !
// because of asynchronous nature of setTimeout()

const geoCode = (address, callback) => {
    setTimeout(() => {
        console.log('Another 2 sec are up as well !')
        const data = {
            latitude: 0,
            longitude: 0
        }
        callback(data)
    },2000)
}

geoCode('India', (location) => {
    console.log(location)
})

//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

const add = (num1, num2, callback) => {
    setTimeout(() => {
        callback(num1+num2)
    }, 2000)
}

add(1, 4, (sum) => {
    console.log('Sum of 2 numbers --')
    console.log(sum) // Should print: 5
})
