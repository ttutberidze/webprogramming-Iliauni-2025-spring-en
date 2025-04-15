console.log('1')

const user1 = {
    name: 'James Bond'
}

const user2 = {
    name: '007'
}


const printUser = (user) => {
    return new Promise((resove, reject) => {
        setTimeout(() => {
            try {
                resove(user.name)
            } catch(error) {
                reject(error)
            }
        }, 2000)
    })
}

// printUser(user1)
//     // .then((result) => `${result} ${result}`)
//     .then((result) => {
//         console.log(result)
//         printUser(user2)
//             .then((result) => console.log(result))
//             .catch((error) => console.log(error.message))
//             .finally(() => console.log('Finally'))
//     })
//     .catch((error) => console.log(error.message))
//     .finally(() => console.log('Finally'))

const main = async () => {
    const user1Name = await printUser(user1)
    console.log(user1Name)
    const user2Name = await printUser(user2)
    console.log(user2Name)
    return user1Name
}

main().then((result) => console.log('Resolved', result))

console.log(3)