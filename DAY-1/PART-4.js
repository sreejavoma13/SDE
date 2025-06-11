//HARD-1
const students=[{id: 1, name: 'Alice', score: 85},{id: 2, name: 'Bob', score: 55},{id: 3, name: 'Eva', score: 67}]
let passingscore=60
function getHighAchievers(students,passingscore){
    const passedstu=students.filter(function(user){
        return user["score"]>=passingscore;
    })
    const highacheivers=passedstu.map(function(user){
        return user["name"].toUpperCase();
    });
    return highacheivers;

}
console.log(getHighAchievers(students,passingscore));
//output:[ 'ALICE', 'EVA' ]

//HARD-2
function createGame(){
    let secretnumber=8
    function guess(number){
        if(number===secretnumber){
            console.log("You guessed it!");
        }
        else if(number<secretnumber){
            console.log("Too low!");
        }
        else{
            console.log("Too high!");
        }
    }
    return guess
}
const user=createGame();
user(8);
//output:You guessed it!