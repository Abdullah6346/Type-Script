const User = {
  name: "gladdy",
  email: "New@gmail.com",
  isActive: true,
};
// const createuser = ({ name: string, isPaid: boolean }) => {
//   return `Name is ${name} and is paid is ${isPaid}`;
// };

const createuser= ({name,isPaid}:{name:string,isPaid:boolean}) => {
    return `Name is ${name} and is paid is ${isPaid}`;
};
console.log(createuser({ name: "gladdy", isPaid: true }));

export {};
