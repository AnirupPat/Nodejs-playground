// const doWork = () => {

// }

// console.log(doWork()) // will return undefined as it doesnt return anything

// const doWork2 = async () => {

// }

// console.log(doWork2()) // Promise { undefined }

// const doWork3 = async () => {
//     return 'Anirup'
// }

// console.log(doWork3()) // Promise { 'Anirup' }

// const doWork4 = async () => {
//     throw new Error('Error !')
//     return 'Anirup'
// }

// doWork4().then((res) => {
//     console.log(res) // Anirup
// }).catch((e) => {
//     console.log(e)
// })

const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if( a < 0 || b < 0) {
                return reject('Only positive numbers please !')
            }
            resolve(a + b)
        }, 2000)
    })
}

const work = async () => {
    const sum = await add(-1, 99)
    const sum2 = await add(sum, 100)
    const sum3 = await add(sum2, 100)
    return sum3
}

work().then((result) => {
    console.log('result:' +result)
}).catch((e) => {
    console.log(e)
})

