"use strict";
exports.__esModule = true;
var greetings = "Hello World";
greetings.toLowerCase();
console.log(greetings);
var userid = 334676;
userid.toFixed();
// userid="hello" this is what called type inference
var isLoggedIn = false;
console.log(isLoggedIn.valueOf());
// Concept of ANY and NotImplicit Any
var name;
var re_name = function () {
    return "gladdy";
};
name = re_name();
console.log(name);
// Functions Types
function add(num) {
    return num + 2;
    //   return "hello"
}
function touppercase(name) {
    return name.toUpperCase();
}
var signup = function (email, name, ispaid) {
    if (email === void 0) { email = "hi"; }
    if (ispaid === void 0) { ispaid = true; }
}; //passing a default value
signup("gladdy", "igfa"); //not giving the third aegument
console.log(touppercase("gladdy"));
console.log(add(4));
// More than one type as a function
function myvalue(myvalue) {
    if (myvalue > 5) {
        return true;
    }
    return "200 K";
}
