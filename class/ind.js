import {user} from './user.js';

const obj = new user("rosh","akjha@.jv");


console.log(obj.getdata())

obj.enroll("reactt")
obj.enroll("angular");

console.log(obj.getList())
const cource = obj.getList()
cource.forEach(element => {
    console.log(element)
});