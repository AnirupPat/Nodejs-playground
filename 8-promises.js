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