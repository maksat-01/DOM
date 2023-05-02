
const burgerMenu = document.querySelector('.burger-menu')
const navMenu = document.querySelector('nav')
const burgerItem = document.querySelector('.burger2')





burgerMenu.addEventListener('click', () => {
    if (!burgerMenu.classList.contains('toggle-menu')) {
        navMenu.style.right = "0"
        burgerItem.style.transform = "translateX(25px)"
        burgerItem.style.opacity = "0"
        burgerItem.previousElementSibling.style.transform = "rotate(45deg) translateY(18px)"
        burgerItem.nextElementSibling.style.transform = "rotate(-45deg) translateY(-18px)"
        burgerMenu.classList.add('toggle-menu')
    } else {
        navMenu.style.right = ""
        burgerItem.style.transform = ""
        burgerItem.style.opacity = ""
        burgerItem.previousElementSibling.style.transform = ""
        burgerItem.nextElementSibling.style.transform = ""
        burgerMenu.classList.remove('toggle-menu')
    }
})







const modal_btn = document.querySelector(".modal-btn")
const modal_window = document.querySelector('#modal')
const close_btn = document.querySelector('.close-btn')
const blur_window = document.querySelector('.blur-window')


let status = false
modal_btn.addEventListener('click', () => {
    status = !status
    // modal_window.classList.toggle('toggle-modal')
    if (status === true) {
        modal_btn.innerHTML = "close modal"
        modal_window.style.transform = "scale(1)"
        blur_window.style.display = 'block'
    } else {
        modal_btn.innerHTML = "open modal"
        modal_window.style.transform = "scale(0)"
        blur_window.style.display = 'none'
    }
    close_btn.addEventListener('click', () => {
        modal_btn.innerHTML = "open modal"
        modal_window.style.transform = "scale(0)"
        blur_window.style.display = 'none'
    })
})

blur_window.addEventListener('click', () => {
    modal_btn.innerHTML = "open modal"
    modal_window.style.transform = "scale(0)"
    blur_window.style.display = 'none'
})

