window.addEventListener('scroll', () =>{
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})


const menu = document.querySelector(".navmenu")
const menuBtn = document.querySelector("#openmenu")
const closeBtn = document.querySelector("#closemenu")


menuBtn.addEventListener('click',() =>{
    menu.style.display = "flex"
    menuBtn.style.display = "none"
    closeBtn.style.display = "inline-block"
})

const clsoeNav = () =>{
    menu.style.display = "none"
    menuBtn.style.display = "inline-block"
    closeBtn.style.display = "none"
}

closeBtn.addEventListener('click', clsoeNav)