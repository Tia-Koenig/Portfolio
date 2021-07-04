const hamburger_menu = document.querySelector(".hamburger-menu")
const hamburger_menu_close = document.querySelector(".hamburger-menu-close")
const navbar = document.querySelector("#navbar")

function toggle_navbar(){
  navbar.classList.toggle("navbar-open")
  hamburger_menu.classList.toggle("active")
  hamburger_menu_close.classList.toggle("active")
}

hamburger_menu.addEventListener("click", function(){
  toggle_navbar()
})

hamburger_menu_close.addEventListener("click", () => {
  toggle_navbar()
})

