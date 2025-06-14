let boxes=document.getElementsByClassName("single")
let currX=0
const patterns=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
Array.from(boxes).forEach(box => {
    box.addEventListener("click",()=>{
        if(currX===0){
            box.innerHTML='<h1 style="textalign=center">X</h1>'
            currX=1
            box.classList.add("disabled-box");

        }else{
            box.innerHTML='<h1 style="textalign=center">O</h1>'
            currX=0
            box.classList.add("disabled-box");

        }
        checkWinner()
    })
});
function checkWinner(){
    patterns.forEach((pattern)=>{
        const a = boxes[pattern[0]].innerText;
        const b = boxes[pattern[1]].innerText;
        const c = boxes[pattern[2]].innerText;
        if(a!=="" && a===b && b===c ){
            let winner=document.createElement("h2")
            winner.innerText="WINNER"
            winner.classList.add("winner")
            let main=document.getElementById("main")
            main.appendChild(winner)
        }
    })
}
function removeWinnerBanner() {
  const existing = document.querySelector("#main .winner");
  if (existing) existing.remove();
}
function startGame() {
  Array.from(boxes).forEach(box => {
    box.innerText = "";              // clear content
    box.style.pointerEvents = "";    // re-enable clicking
    box.classList.remove("disabled-box");
    
  });

  removeWinnerBanner();
  currX.value = 0;
}
let btn=document.getElementById("button")
btn.addEventListener("click",()=>{
   startGame()
})