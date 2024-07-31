var greetings: string = "Hello World";
greetings.toLowerCase();
console.log(greetings);
let userid = 334676;
userid.toFixed();
// userid="hello" this is what called type inference
let isLoggedIn: boolean = false;
console.log(isLoggedIn.valueOf());
// Concept of ANY and NotImplicit Any
var name: string;
let re_name = () => {
  return "gladdy";
};
name = re_name();
console.log(name);
// Functions Types
function add(num: number): number {
  return num + 2;
  //   return "hello"
}
function touppercase(name: string) {
  return name.toUpperCase();
}
const signup = (
  email: string = "hi",
  name: string,
  ispaid: boolean = true
) => {}; //passing a default value
signup("gladdy", "igfa"); //not giving the third aegument
console.log(touppercase("gladdy"));
console.log(add(4));
// More than one type as a function
// function myvalue(myvalue:number) {
//     if (myvalue>5) {
//         return true
//     }
//     return "200 K"
// }
const names:String[] = ["Gladdy", "Umar", "Zain"]
console.log(
  names.map((names):string => {
    return `names are ${names}`;
  })
);

export {};
