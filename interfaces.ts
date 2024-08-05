interface user{
    db_id:string
    email:string,
     userid:number
    googleis?:string
    startTrial:()=>boolean
    // startTrial():boolean
    getCoupon:(Couponnumber:number,off:string)=>number|string
}
interface user{
    githubtoken:string
}
interface isAdmin extends user{
    role:"admin"| "notadmin"
}


const newuser:isAdmin={db_id:"124sgd12",email:"new@gmail.com",userid:1,startTrial:()=> {
    return true
},getCoupon: (number:number,off:string) => {

    return `YOUR CUPON IS ${number} AND YOUR DISCOUNT IS ${off}` 
},githubtoken:"",role:"notadmin"
}

console.log(newuser.startTrial())
console.log(newuser.getCoupon(123,"60% "))