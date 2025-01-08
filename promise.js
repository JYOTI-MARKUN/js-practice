// console.log("1"-1);
// setTimeout(()=>{
//     console.log(10)
// },10);
// console.log(12);
// setTimeout(() => {
//     console.log(14)
// }, 10);
// setTimeout(()=>{
// console.log(16)
// },9)

// promise
// function makeHttpRequest(method,url,callback){
//     const xhr = new XMLHttpRequest()
//     xhr.responseType = "json"
//     console.log("getting data")

//     const promise = new Promise((resolve,reject)=>{
//         xhr.addEventListener("load",()=>{
//             // console.log(xhr.response)
//             resolve(xhr.response)
//         })
//     })

   
//     xhr.open(method,url);
//     xhr.send()

//     return promise
// }

//     makeHttpRequest("GET","https://dummyjson.com/users")
//     .then((usersData)=>{
//         console.log(usersData)
//         return  makeHttpRequest("GET",`https://dummyjson.com/users/${usersData.users[0].id}/posts`)
//     }).then((postData)=>{
//         console.log(postData)
//         return  makeHttpRequest("GET",`https://dummyjson.com/comments/${postData.posts[0].id}`)
//     }).then((commentsData)=>{
//         console.log(commentsData.id)
//         return makeHttpRequest("GET",`https://dummyjson.com/users/${commentsData.id}`)
//     }).then((userData)=>{
//         console.log(userData.firstName)
//     })


    // console.log("1"-1);
// setTimeout(()=>{
//     console.log(10)
// },10);
// console.log(12);
// setTimeout(() => {
//     console.log(14)
// }, 10);
// setTimeout(()=>{
// console.log(16)
// },9)

// promise example
function boilingWater(){
    return new Promise((resolve,reject)=>{
        console.log("Boiling Water........")
        setTimeout(()=>{
        const isBoiled = true;
        if(isBoiled){
            resolve("Water is boiled!")
        }else{
            reject("Failed to boil water")
        }
        },2000)
    })
}

boilingWater().then((message)=>{
console.log(message)
console.log("Making tea.......")
}).catch((error)=>{
console.log(error)
}).finally(()=>{
    console.log("Process Completed....")
})
