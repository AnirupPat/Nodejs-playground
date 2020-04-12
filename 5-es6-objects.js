// Object property shorthand

const name = 'Anirup'
const userAge = 29

const user = {
    name: name,
    age: userAge,
    location: 'India'
}

console.log(user)

// lets implement the short hand property

const user2 = {
    name,
    age: userAge,
    location: 'India'
}

console.log(user2)

// Object destructuring - is to extract object properties into indivisual properties

const product = {
    label: 'Red Notebook',
    price: 3,
    stock: 200,
    salePrice: undefined
}

const {label, price, stock, rating} = product
console.log(label)
console.log(price)
console.log(stock)
console.log(salesPrice) //- this will throw an errow
console.log(rating) // this will give undefined, as rating is not a property of product

// To rename a property, we will have to do this
console.log('--------After property rename---------')
const {label:productLabel, price2, rating = 5} = product
console.log(productLabel)
//console.log(label) // this will throw an error 
console.log(rating)

// here since rating is not a property of the object so rating will take 5 as a default
// value, otherwise rating will take the value of the property in the object

// destructuring in the function

const transaction = (type, myProduct) => {
    const {label, stock, price } = myProduct
    console.log(label)
    console.log(stock)
}

transaction('orders', product)

// New way to do the same above thing
const transaction = (type, {label='test label', stock=10, price } = {} ) => {
    // destructuing along with default values  - above line
    console.log(label)
    console.log(stock)
}

transaction('orders', product)

// Another scenario
transaction('orders')
