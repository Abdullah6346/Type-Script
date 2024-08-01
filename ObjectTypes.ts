const User = {
  name: "gladdy",
  email: "New@gmail.com",
  isActive: true,
};
// const createuser = ({ name: string, isPaid: boolean }) => {
//   return `Name is ${name} and is paid is ${isPaid}`;
// };

const createuser = ({ name, isPaid }: { name: string; isPaid: boolean }) => {
  return `Name is ${name} and is paid is ${isPaid}`;
};
console.log(createuser({ name: "gladdy", isPaid: true }));
function obj({ name, ispaid }: { name: string; ispaid: boolean }) {
  return `Name is ${name} and is paid is ${ispaid}`;
}
let y = obj({ name: "gladdy", ispaid: true });
console.log(y);
// Bad Objects Behaviour
const user = (userdata: { name: string; email: string }) => {
  return `Your user is added`;
};
let newUser = { name: "gladdy", email: "coding" };
user(newUser);
// modern optional property
function modern_obj(obj:{firstname:string,lastname?:string}) {  //? optional
  console.log(obj.lastname?.toUpperCase())
}
modern_obj({firstname:"umar",lastname:"kahalid"})

// Type Aliases

type User = {
  name: string;
  email: string;
  address: string;
  isActive: boolean;
};
type bol=boolean
function Createuser(user:User) {
  console.log(user.name)
}
type point={
  x:number
  y:number
}
function Pointcoordinate(point:point) {
  console.log("The x coorinate is "+point.x)
  console.log("The y coorinate is "+point.y)

}
Pointcoordinate({x:5,y:7})
Createuser({name:"gladdy",email:"err",address:"",isActive:true})
READONLY objections bad behaviour 
type User2 = {
  readonly _id:[number,string];
  name: string;
  address: string;
  isActive: boolean;
  email: string;
};

let newuser: User2 = {
  _id: [5,"gladdy"],
  name: "gladdy",
  address: "Not Available",
  isActive: true,
  email: "g@G.com",
};
newuser._id[0]=7;

console.log(newuser._id[0])
export {};
