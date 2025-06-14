//EASY
const colors=["Blue","Yellow","Orange"]
colors.push("black")
colors.unshift("white")
console.log(colors);
//output:[ 'white', 'Blue', 'Yellow', 'Orange', 'black' ]
console.log("--------------------------------------------------");
//MEDIUM-1
let numbers = [10, 20, 30, 40, 50];
let newnumbers=numbers.map(function(number){
    return number+5;
})
console.log(newnumbers);
//output:[ 15, 25, 35, 45, 55 ]
console.log("--------------------------------------------------");
//MEDIUM-2
 let scores = [25, 80, 45, 95, 60, 75];
 let updatedscores=scores.filter(function(number){
    return number>=70;
 })
 console.log(updatedscores);
//output:[ 80, 95, 75 ]
console.log("--------------------------------------------------");
//HARD
const averagescore=scores.reduce(function(acc,curr){
    return acc+curr;
},0)
console.log(averagescore/scores.length);
//output:63.33333333333333