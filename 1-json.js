const book = {
    title: 'Ego is the enemy',
    book: 'Ryan Holiday'
}

const bookJson = JSON.stringify(book)
// takes in the obj and gives back a string
console.log(bookJson)
console.log(bookJson.title) // undefined

const parsedData = JSON.parse(bookJson)
console.log(parsedData)
console.log(parsedData.title)

const fs = require('fs')
fs.writeFileSync('1-json.json',bookJson)

const dataBuffer = fs.readFileSync('1-json.json')
console.log(dataBuffer) // it will return data in binary format 
const dataJson = dataBuffer.toString()
console.log(dataJson)
console.log(dataJson.title) // undefined as its a string
const data = JSON.parse(dataJson)
console.log(data.title)

// Load and parse the JSON data (2-json.json)
//{
//    "name": "Anirup",
//   "planet": "Earth",
//    "age": 29
//}
// Change the name and age property 
// Stringify the changed object and override the original data
console.log('-----------Lets test this now ---------')
const data2Buffer = fs.readFileSync('2-json.json')
console.log(data2Buffer)
const data2String = data2Buffer.toString()
console.log(data2String)
const data2 = JSON.parse(data2String)
console.log(data2.planet)

data2.name = 'Sharan'
data2.age = '27'
const finalData = JSON.stringify(data2)
fs.writeFileSync('2-json.json', finalData)

