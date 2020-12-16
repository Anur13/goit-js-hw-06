import users from "../users.js"
// task 1

// const getUserNames function(users){
//return users.map(function (user) {
//     return user.name
// }
//
const getUserNames = (users) => users.map((user) => user.name)

console.log(getUserNames(users))
//
