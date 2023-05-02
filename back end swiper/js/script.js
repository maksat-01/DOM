// Promise()

// pending
// resolved - fulfilled
// rejected

// let status_code = 200
// let promise = new Promise((resolve,reject) => {
//     console.log("pending.....")
//     if (status_code >= 200 && status_code < 300) {
//         setTimeout(() => {
//             resolve("success!")
//         },2000)
//     }else {
//         reject(new Error())
//     }
// }).then((data) => console.log(data))
//
// console.log(promise)


// Асихроность
//
// console.log(10)
//
// setTimeout(() => {
//     console.log(20)
// },2000 )

// // web api

// console.log(30)

const container = document.querySelector('.swiper-wrapper')

fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        data.map(el => (
            container.innerHTML += `<div class="swiper-slide col-4  ">
             <div class="border m-4 p-3 bg-danger flex-column d-flex">
              <span>userId: ${el.userId}</span>
              <span>id: ${el.id}</span>
              <span>title: ${el.title}</span>
              <span>body: ${el.body}</span>
             <span>email: ${el.email}</span>
              <span></span>
             <ul></ul> 
             </div>
              </div>`
        ))
    })