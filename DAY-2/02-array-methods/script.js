// script.js
const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 1200, inStock: true },
    { id: 2, name: "Headphones", category: "Electronics", price: 150, inStock: false },
    { id: 3, name: "The Great Gatsby", category: "Books", price: 15, inStock: true },
    { id: 4, name: "Coffee Maker", category: "Home Goods", price: 60, inStock: true },
    { id: 5, name: "To Kill a Mockingbird", category: "Books", price: 12, inStock: false },
    { id: 6, name: "Smart Watch", category: "Electronics", price: 250, inStock: true },
];
//EASY-1
const inStockProducts=products.filter((obj)=>obj["inStock"]===true)
console.log(inStockProducts);
//output:
/*
[
  {
    id: 1,
    name: 'Laptop',
    category: 'Electronics',
    price: 1200,
    inStock: true
  },
  {
    id: 3,
    name: 'The Great Gatsby',
    category: 'Books',
    price: 15,
    inStock: true
  },
  {
    id: 4,
    name: 'Coffee Maker',
    category: 'Home Goods',
    price: 60,
    inStock: true
  },
  {
    id: 6,
    name: 'Smart Watch',
    category: 'Electronics',
    price: 250,
    inStock: true
  }
*/

//EASY-2
const bookProducts=products.filter((obj)=>obj["category"]==="Books")
console.log(bookProducts);
//output:
/*
[
  {
    id: 3,
    name: 'The Great Gatsby',
    category: 'Books',
    price: 15,
    inStock: true
  },
  {
    id: 5,
    name: 'To Kill a Mockingbird',
    category: 'Books',
    price: 12,
    inStock: false
  }
]
*/


//MEDIUM-1
const productNames=products.map((obj)=>obj["name"])
console.log(productNames);
//output:
/*
[
  'Laptop',
  'Headphones',
  'The Great Gatsby',
  'Coffee Maker',
  'To Kill a Mockingbird',
  'Smart Watch'
]
*/

//MEDIUM-2
const formattedarray=products.map((obj)=>`${obj["name"]}-$${obj["price"]}`)
console.log(formattedarray);
//output:
/*
  'Laptop-$1200',
  'Headphones-$150',
  'The Great Gatsby-$15',
  'Coffee Maker-$60',
  'To Kill a Mockingbird-$12',
  'Smart Watch-$250'
] 
*/

//HARD-1
const total=products.reduce((acc,obj)=>acc+obj["price"],0)
console.log(total);
//output:1687

//HARD-2
const newArray=products.filter(function(obj){
    return obj["inStock"]===true;
}).map(function(obj){
    return obj["name"]
})
console.log(newArray);
//output:[ 'Laptop', 'The Great Gatsby', 'Coffee Maker', 'Smart Watch' ]