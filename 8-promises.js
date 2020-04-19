const doWorkCallback = new Promise((resolve, reject) => {
    setTimeout(() => {
        // it will take the first call always 
        resolve('Its success !')
        reject('Its an error man !')
    }, 2000)
})

doWorkCallback.then((result) => {
    console.log('Success:', result)
}).catch((error) => {
    console.log('error:', error)
})

// promise -- pending --> then its either fulfilled or rejected

const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 2000)
    })
}

// add(2,3).then((res) => {
//     console.log(res)
//     // Here if we want to perform Promise chanining then
//     // we can do so in this manner but it will become more complex

//     add(5, 5).then((res) => {
//         console.log(res)
//     }).catch((e) => {
//         console.log(e)
//     })
// }).catch((e) => {
//     console.log(e)
// })

// Better and icer way to chain Promise calls

add(2,3).then((res) => {
    console.log(res)
    return add(res, 4)
}).then((finalSum) => {
    console.log(finalSum)
}).catch((e) => {
    console.log(e)
})