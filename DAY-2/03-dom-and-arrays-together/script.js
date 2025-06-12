
const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 1200, inStock: true },
    { id: 2, name: "Headphones", category: "Electronics", price: 150, inStock: false },
    { id: 3, name: "The Great Gatsby", category: "Books", price: 15, inStock: true },
    { id: 4, name: "Coffee Maker", category: "Home Goods", price: 60, inStock: true },
    { id: 5, name: "To Kill a Mockingbird", category: "Books", price: 12, inStock: false },
    { id: 6, name: "Smart Watch", category: "Electronics", price: 250, inStock: true },
];
//EASY
let id=document.getElementById("product-list")
const arr=products.map((obj)=>`<li>${obj["name"]}</li>`)
id.innerHTML=arr.join("")

//MEDIUM
//This works by commenting out Easy and Medium codes
const filteredarray=products.filter((obj)=>obj["inStock"]===true)
filteredarray.forEach(function(obj){
    const str=`<li class="product-item"><h3>${obj["name"]}</h3><p>$${obj["price"]}</p></li>`
    id.innerHTML+=str
 })

//HARD
//This works by commenting out above Easy and Medium code
products.forEach(function(obj){
    const ele=document.createElement("li")
    const heading=document.createElement("h3")
    heading.innerText=obj["name"]
    const para=document.createElement("p")
    para.innerText=obj["price"]
    ele.appendChild(heading)
    ele.appendChild(para)
    if(obj["inStock"]===false){
        ele.setAttribute("class","out-of-stock")
    }
    else{
        ele.setAttribute("class",`category-${obj["category"]}`)
    }
    id.appendChild(ele)
})

//Bonus
const div=document.createElement("div")
const total=products.filter((obj)=>obj["inStock"]===true).reduce((acc,obj)=>acc+obj["price"],0)
const head=document.createElement("h4")
head.innerText=`Total value of In-Stock Items:${total}`
div.appendChild(head)
document.body.appendChild(div)