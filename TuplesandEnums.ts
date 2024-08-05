// const user: (string | number)[] = [1, "ali"];
// tuples we cannot change order use in pi calls
const user: [string, number, boolean] = ["gladdy", 9, true];
let rgb: [number, number, number]; //you can use readonly
rgb = [255, 255, 255];
rgb[0] = 2;
console.log(rgb);
// Bad behaviour
type User = [number, string];
const firstusr: User = [21, "h@fgmail.com"];
firstusr[1] = "ajda";
firstusr.push(1);
console.log(firstusr);

// Why Enums 
// const Asile = 0;
// const middle = 1;
// const window = 2;

// if (seat === Asile) {
    
// }
// It will generate a lot of code 
const enum Getseat{
 Asile="asitle",
 Middle="middle",
 Window="window"
}
const myseat=Getseat.Window
console.log(myseat)

export{}