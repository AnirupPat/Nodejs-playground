const http = require('http')

// HTTP is basically a core module of Node. so its limited and bit complicated
// so we go with library like request, axious or others.. 

const url = 'http://api.weatherstack.com/current?access_key=00fb213314d4f0b73ca9a36944be04c8&query=40,-75%C2%B0%20E&units=f'

const request = http.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        // this callback is gonna fire when data comes in
        // this could happen one / multiple times
        console.log(chunk)
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    } )
})

request.on('error', (error) => {
    console.log(error)
})
request.end()