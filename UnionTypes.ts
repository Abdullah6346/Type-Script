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
let wage = getwage.getwage();
console.log(wage);
export {};
