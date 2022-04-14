const menu = document.querySelector(".menu_barras")
const nav = document.querySelector(".navbar__container")
const closeBtn = document.querySelector(".close-btn")
const links = document.querySelectorAll(".navbar__container--links")
links.forEach((link)=>{
    link.addEventListener("click",()=>{
        if(nav.classList.contains("show-side-bar")){
            nav.classList.remove("show-side-bar")
            menu.style.transform = "scale(1)"
        }
    })
})
menu.addEventListener("click",()=>{
    nav.classList.toggle("show-side-bar")
    if(nav.classList.contains("show-side-bar")){
        menu.style.transform ="scale(0)"
    }
})

closeBtn.addEventListener("click",()=>{
    nav.classList.remove("show-side-bar")
    menu.style.transform = "scale(1)"
})