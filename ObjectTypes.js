"use strict";
exports.__esModule = true;
var User = {
    name: "gladdy",
    email: "New@gmail.com",
    isActive: true
};
// const createuser = ({ name: string, isPaid: boolean }) => {
//   return `Name is ${name} and is paid is ${isPaid}`;
// };
var createuser = function (_a) {
    var name = _a.name, isPaid = _a.isPaid;
    return "Name is ".concat(name, " and is paid is ").concat(isPaid);
};
console.log(createuser({ name: "gladdy", isPaid: true }));
function obj(_a) {
    var name = _a.name, ispaid = _a.ispaid;
    return "Name is ".concat(name, " and is paid is ").concat(ispaid);
}
var y = obj({ name: "gladdy", ispaid: true });
console.log(y);
