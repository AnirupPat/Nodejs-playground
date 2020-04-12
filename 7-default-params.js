// const greeter = (name) => {
//     console.log('Hello '+name)
// }

// greeter('Anirup')
// greeter() // O/P : Hello undefined

// To pass a default value to the argument 

const greeter = (name='Anonymous') => {
    console.log('Hello '+name)
}

greeter('Anirup')
greeter() // O/P : Hello Anonymous