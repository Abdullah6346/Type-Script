let score: string | number = 50;
score = "50";
type User = {
  readonly _userid: string;
  name: string;
  address: string;
  wifipass?: string;
};
type Admin = {
  readonly _adminid: string;
  name: string;
  address: string;
  wifipass?: string;
};
let abdullah: User | Admin = {
  _userid: "ohadgbads",
  name: "gladdy",
  address: "madinah chowk",
};

type Getwage = {
  basicsalary: number;
  overtimerate: number;
  overtimehour: number;
  getwage: () => number;
};

let getwage: Getwage = {
  basicsalary: 3000,
  overtimerate: 20,
  overtimehour: 3,
  getwage: function (): number {
    return this.basicsalary + this.overtimehour * this.overtimerate;
  },
};
// Union types in fuctions
let wage = getwage.getwage();
console.log(wage);
function calid(id: number | string) {
  typeof id === "string" ? id.toUpperCase() : id.valueOf(); //managing union types
  console.log(id);
}
calid("dagad");
// biggest mistake it tells that all can be number and all can be string
// const array: string[] | number[] = [5, "da"];

// correct syntax
const array: (string | number | boolean)[] = [5, "dyagd", true];
const arr: Array<number | string> = [5, "65", 8];
function welcomePeople(x: string[] | string) {
  if (Array.isArray(x)) {
    console.log("Hello, " + x.join(" and "));
  } else {
    console.log("Welcome lone traveler " + x);
  }
}
welcomePeople(["Abdullah", "Gladdy", "Arab"]);
// properties in common
// Return type is inferred as number[] | string
function getFirstThree(x: number[] | string) {
  return x.slice(0, 3);
}
console.log(getFirstThree("Gladdyisback"));
export {};
