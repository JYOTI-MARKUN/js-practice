// https://httpbin.org/delay/4  slow api
// const xhr = new XMLHttpRequest()

// xhr.responseType = "json"
// xhr.addEventListener("load",()=>{
//     console.log(xhr)
// })

// xhr.open("GET",'https://dummyjson.com/users')
// xhr.send()

// i wanna use the same code as above many time so we can make a function so that we do not need to repeat the function again and again

// function makeHttpRequest(){
//     const xhr = new XMLHttpRequest()
//     xhr.responseType = "json"
//     xhr.addEventListener("load",()=>{
//         console.log(xhr.response)
//     })
//     xhr.open("GET",'https://dummyjson.com/users');
//     xhr.send()
// }

// makeHttpRequest()

// when we call the function we get the same data again and again so to make it dynamic we pass parameter to it

function makeHttpRequest(method,url,callback){
    const xhr = new XMLHttpRequest()
    xhr.responseType = "json"
    console.log("getting data")
    xhr.addEventListener("load",()=>{
        // console.log(xhr.response)
        callback(xhr.response)
    })
    xhr.open(method,url);
    xhr.send()
}

makeHttpRequest("GET","https://dummyjson.com/users",(usersData)=>{
    console.log(usersData.users[0].id);
    makeHttpRequest("GET",`https://dummyjson.com/users/${usersData.users[0].id}/posts`,(postData)=>{
        console.log(postData.posts[0].id);
        makeHttpRequest("GET",`https://dummyjson.com/comments/${postData.posts[0].id}`,(commentsData)=>{
            console.log(commentsData.id)
            makeHttpRequest("GET",`https://dummyjson.com/users/${commentsData.id}`,(userData)=>{
                console.log(userData.firstName)
            })
        })
    })    
})