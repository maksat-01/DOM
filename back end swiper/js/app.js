// DOM - document object modal - обьектная модель документа

// document

// const h1 = document.getElementsByName("h1")
// const btn = document.getElementsByClassName("btn")
// const list = document.getElementById("list")


// console.log(h1[0].innerHTML)
// console.log(btn)
// console.log(list)

// querySelector
// querySelectorAll

// const list  = document.querySelectorAll("ul li")
// const btn = document.querySelector(".btn")
//
// list.forEach(el => {
//     el.style.color = "red"
// })
//
// btn.style.width = "100px"
// console.log(btn)
//
// console.log(list)


// events
// mouse events
// click
// mouseover
// mouseleave

// function randomColor() {
//     let result = ""
//     for (let i = 0; i < 6; i++) {
//         let randomNum = Math.floor(Math.random() * 10)
//         result += randomNum
//     }
//     return result
// }

// const names = ["Meerim", "Nurperi", "Aknazar", "Maksat", "Ularbek", "Maks"]


// const boxes = document.querySelectorAll(".box")
// console.log(boxes)

// boxes.forEach((box, idx) => {
//     box.addEventListener("click", () => {
//         let idx = Math.floor(Math.random() * names.length)
//         Clean()
//         // if (idx === boxes.length -1){
//         //     idx = -1
//         // }
//         styleBoxes(box, idx, randomColor())
//     })
//
//     // box.addEventListener("mouseover",() => {
//     //     Clean()
//     //     box.style.backgroundColor = #${randomColor()}
//     // })
//
//     // box.addEventListener("mouseleave",() => {
//     //     box.style.backgroundColor = #${randomColor()}
//     // })
// })

// function Clean() {
//     boxes.forEach(el => {
//         el.style.backgroundColor = ""
//         el.innerHTML = ""
//     })
// }

// function styleBoxes(box, idx, randomColor) {
//     box.innerHTML = names[idx]
//     box.style.backgroundColor = #${randomColor()}
//     box.style.color = "white"
// }

// setAttribute
// getAttribute
// removeAttribute


// boxes.forEach(el => {
//     console.log(el.getAttribute("class"))
//     el.setAttribute("id","gen")
//     el.removeAttribute("id")
//     el.removeAttribute("class")
//     el.remove()
// })


// classList

// window.addEventListener("click", (event) => {
//     console.log(event.target.classList)
//     if (event.target.classList[0] === "box") {
//         let idx = Math.floor((Math.random()) * names.length)
//         Clean()
//         styleBoxes(event.target, idx, randomColor())
//     }
// })



// const parentDiv = document.querySelector(".container")
//
//
// let quantity = 650

// for (let i = 0; i < quantity; i++) {
//     let box = document.createElement("div")
//     parentDiv.append(box)
//     box.setAttribute("class", "squared")
//     box.addEventListener("mouseover", () => {
//         box.style.background = randomColor()
//     })
// }

// function randomColor() {
//     let result = ""
//     for (let i = 0; i < 6; i++) {
//         let randomNum = Math.floor(Math.random() * 10)
//         result += randomNum
//     }
//     return result
// }

// function randomColor() {
//     let result = ""
//     for (let i = 0; i < 6; i++) {
//         let randomNum = Math.floor(Math.random() * 10)
//         result += randomNum
//     }
//     return result
// }


////////////////////////////////////////////////////////////////////

// evens
// mouse events
// click
// mouse leave
// mouseover


// const boxes = document.querySelectorAll(".box")
// console.log(boxes)
//
// boxes.forEach((box, idx) => {
//     box.addEventListener("click", () => {
//         Clean()
//
//         if (idx === boxes.length - 1) {
//             idx = -1
//         }
//
//         boxes[idx + 1].style.backgroundColor = "orange"
//     })
//
//     // box.addEventListener("mouseover", () => {
//     //     Clean()
//     //     box.style.backgroundColor = "red"
//     // })
//     // box.addEventListener("mouseleave", () => {
//     //     box.style.backgroundColor = ""
//     // })
// })


// function Clean() {
//     boxes.forEach(el => {
//         el.style.backgroundColor = ""
//     })
// }


const form = document.querySelector('form')
const btn = document.querySelector(".btn")
const login = document.querySelector(".input-login")
const password = document.querySelector(".input-password")
const text = document.querySelector("h5")
const box = document.querySelector(".box")


let attempts = 3
form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (login.value === "frontend@gmail.com" && password.value === "12345678") {
        text.innerHTML = "Добро пажаловать!!!"
        text.style.color = "green"
        reset()
    } else {
        attempts--
        if (attempts === 2) {
            text.innerHTML = "попробуйте еще раз"
            text.style.color = "red"
            reset()
        }else if  ( attempts === 1) {
            text.innerHTML = `попробуйте снова у вас ${attempts}  попытка`
            text.style.color = "black"
            attempts--
            reset()
        } else {
            reset()
            text.innerHTML = `доступ  закрыт`
            btn.setAttribute("disabled", "true")
            text.style.color = "blue"
        }
    }
})

function reset () {
    login.value = ""
    password.value = ""
}



















































const input = document.querySelector('.text-input')
const btn = document.querySelector('.add-btn')
const ul = document.querySelector('.list')

if (localStorage.getItem('tasksHTML')) {
    ul.innerHTML = localStorage.getItem('tasksHTML')
}

btn.addEventListener('click', () => {
    if (input.value !== ""){
        const newList = `<li class="list-group-item d-flex justify-content-between align-items-center">
<span class="d-flex align-items-center">
<input type="checkbox" class="check-box  mx-2">
${input.value} 
</span>
<button class="del-btn btn btn-danger">delete</button>
</li>`
        ul.innerHTML += newList
    }

    input.value = ""
    saveHTMLtoLS()
})

ul.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e.target.classList)
    if (e.target.classList.contains('del-btn')){
        e.target.parentNode.remove()
    }
    if (e.target.classList.contains('check-box')) {
        // if (!e.target.parentNode.classList.contains('line')) {
        //     e.target.
        //     parentNode.classList.add('line')
        // } else {
        //     e.target.parentNode.classList.remove('line')
        // }

        e.target.parentNode.classList.toggle('line')
    }
    saveHTMLtoLS()
})
//
function saveHTMLtoLS() {
    localStorage.setItem('tasksHTML', ul.innerHTML);
}