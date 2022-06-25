var utils = require('course-utilities')
//./ means to look inside the curernt folder. 
var add = utils.load("./add.js", "add")

test ("check if add function works.", ()=> {
    expect(add(3,4)).toBe(7)
})
//Test function takes in a string (to describe what the test does.) also takes in a function to see if something worked or not in our code. 