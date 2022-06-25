var utils = require('course-utilities')
//./ means to look inside the curernt folder. 
var add = utils.load("./greet.js", "greet")

test ("check if add function works.", ()=> {
    expect(greet(Gio)).toBe("Hello Gio!")
})