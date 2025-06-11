//EASY
const movie={title:"Magadheera",director:"rajamouli",releaseyear:"2011"}
console.log(movie["title"]);
//output:Magadheera

//MEDIUM
const user={name:"sreeja",email:"sree@gmail.com",age:21}
printUserDetails(user)
function printUserDetails(user){
    const {name,email,age}=user
    console.log(`User's name is ${name}, and they are ${age} years old.`);
}
//printUserDetails(user)

//MEDIUM-2
const users=[{id:1,uname:"sr"},{id:2,uname:"sre"},{id:3,uname:"sree"},{id:4,uname:"sreej"},{id:5,uname:"sreeja"}]
console.log(users.find(u=>u.id===3));
//output:{ id: 3, uname: 'sree' }