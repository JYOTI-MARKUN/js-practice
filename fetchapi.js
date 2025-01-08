// fetch("https://dummyjson.com/products").then((res)=>{
//     return res.json()
// }).then((data)=>{
// console.log(data)
// })

fetch("https://dummyjson.com/products")
.then((res)=> res.json())  // implesent return (when we want ro write dat in online we do not need to write return keyword and {} curly braces)
.then((data)=>console.log(data.products[0].images))

// to send post request 

fetch("https://dummyjson.com/products/add",{
    method:"POST",
    body:JSON.stringify({
        title:"BMW Pencil"
    })

})
.then((res)=> res.json())  
.then(console.log)


