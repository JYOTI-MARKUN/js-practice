// callback function
function mainfunction(name,callback){
    console.log("hello",name)
    callback()
}

function callbackfunction(){
    console.log("GoodBye!!")
}

mainfunction("jyoti",callbackfunction)


// example of callback with asynchronous js

function fetchdata(callback){
    console.log("fetching the data.......")

    setTimeout(()=>{
        const data = "data is fethched..."
            callback(data)
    },2000)

}

function getdata(data){
    console.log(data);
}

fetchdata(getdata);

// an api call with dog api 
let image = document.querySelector(".dog_api")
let btn = document.querySelector(".picchangebtn")
btn.addEventListener("click",()=>{
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((response)=>response.json())
    .then((json)=>{
        console.log("getting image of a dog from dog api")
        console.log(json)
        // console.log(json.message)
        image.src = json.message  
          
    }) 
})


//  before api come into existance in 2015 we use XHR method XHR stands for XML HTTP REQUEST   XHR  is a special type of function that can be called directly if we do so if will through an error so to call XHR function we need to use new keyword along with XMLHttpRequest, before json data use to flow in XML from so by convience we used this 



// btn.addEventListener("click",()=>{
//     let xhr = new XMLHttpRequest
//     console.log(xhr)
//     xhr.responseType = 'json'

//     xhr.addEventListener("load",()=>{
//         console.log(xhr.response)
//         image.src = xhr.response.message

//     })
//     xhr.open("GET","https://dog.ceo/api/breeds/image/random") // send a request
//     xhr.send() // call the function 
//     xhr.response
// })

// block main thread when you use synchronus code
const blockbtn = document.querySelector(".blockMainThread");

blockbtn.addEventListener("click",()=>{
    console.log("Blocking the main thread........");
    const startTime = Date.now()

    while (Date.now()-startTime<5000){
        
    }
    console.log("Main thread Unblocked.");
    
})


// callback hell

console.log("Starting.......");

setTimeout(()=>{
console.log("user Name......");
setTimeout(()=>{
    console.log("User order No....");
    setTimeout(()=>{
        console.log("User order Detail.....");
        setTimeout(() => {
            console.log("User order cofirm....");
            setTimeout(() => {
                
            }, 1000);
        }, 1000);
    },1000)
},1000)
},1000)
