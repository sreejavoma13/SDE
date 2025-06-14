//EASY-1
const favoriteFood="ChickenBiryani"
console.log(favoriteFood); 
//output:ChickenBiryani
console.log("--------------------------------------------------");

//EASY-2
let numA=10
let numB=30
if(numA>numB){
    console.log(`${numA} is larger`);  
}
else if(numB>numA){
    console.log(`${numB} is larger`);  
}
else{
    console.log(`${numA} and ${numB} are Equal`);
}
//output:30 is larger
console.log("--------------------------------------------------");

//MEDIUM
for(let i=1;i<=20;i++){
    if(i%3==0 && i%5==0){
        console.log("FizzBuzz")
    }
    else if(i%5==0){
        console.log("Buzz")
    }
    else if(i%3==0){
        console.log("Fizz");
    }
    else{
        console.log(i);
    }
}
//output
/*1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
16
17
Fizz
19
Buzz */