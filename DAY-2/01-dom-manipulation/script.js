//EASY-1
let heading=document.querySelector("#main-heading")
//Another way
//let heading=document.getElementByid("main-heading")
heading.innerText="My Awesome Shop"
//EASY-2
let para=document.getElementsByClassName("tagline")
para[0].innerHTML="Find the <strong>best</strong> products here!"
//let para = document.querySelector(".tagline");
//para.innerHTML = "Find the <strong>best</strong> products here!";
//EASY-3
let footer=document.getElementsByTagName("footer")[0]
let p=footer.getElementsByTagName("p")[0]
p.innerText=p.innerText.replace("2023","2025")
p.innerText=p.innerText.replace("Student Name","Sreeja")

//MEDIUM
let id=document.getElementById("app-container")
let ele1=document.createElement("h2")
ele1.innerText="About Us"

let ele2=document.createElement("p")
ele2.innerText="We are a small team passionate about quality products"
id.appendChild(ele1)
id.appendChild(ele2)

//HARD
let div=document.createElement("div")
div.setAttribute("class","contact-info")
let p1=document.createElement("p")
let p2=document.createElement("p")
p1.innerText="Email: contact@awesomeshop.com"
p2.innerText="Phone: 123-456-7890"
div.appendChild(p1)
div.appendChild(p2)


document.body.insertBefore(div,footer)
