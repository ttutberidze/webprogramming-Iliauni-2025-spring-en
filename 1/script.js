// const user = {
//     name: "James Bond",
// }
// const newUser = user
// newUser.name = "Agent 007"

// console.log(user.name)


// const num = 40;
// let num2 = num
// num2 = 50
// console.log(num)

// calculateSum1(5, 10) // Correct
// // calculateSum2(5, 10) // Wrong

// function calculateSum1(a, b) {
//     return a + b
// }

// const calculateSum2 = (a, b) => {
//     return a + b
// }

// const calculateSum3 = (a, b) => a + b

// const printFn = user => console.log(user)

// const user = {
//     name: "James Bond",
//     username: "Agent 007",
//     address: {
//         city: 'Tbilisi'
//     },
//     skills: ['JS', 'Python', 'C++']
// }
// const user2 = {
//     // name: user.name,
//     // username: user.username,
//     // address: user.address
//     ...user,
//     address: {
//         ...user.address
//     }
// }
// user2.address.city = "LA"
// console.log(user.address.city)

// const name = user.name
// const username = user.username
// const city = user.address.city

// const {name, username, address: {city}} = user
// console.log(name, username, city)

// const printCity = ({address: {city}, ...restUser}) => {
//     console.log(city, restUser)
// }
// printCity(user)

// const users = ['James', 'Bond', '007']
// const james = users[0]
// const bond = users[1]
// const _007 = users[2]

// const [,, _007] = users
// console.log(_007)

// const {skills: [,python]} = user
// console.log(python)

// for (skill of user.skills) {
//     console.log(skill)
// }

// for (field in user) {
//     console.log(user[field])
// }

const user = {
    name: "James Bond",
    username: "Agent 007",
    address: {
        city: 'Tbilisi'
    },
    skills: ['JS', 'Python', 'C++']
}

const deepClone = (obj) => {
    // return newObj;
    console.log(typeof user.name)
}
console.log(deepClone(user))