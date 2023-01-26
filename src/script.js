const nav = document.querySelector("nav")
const menu = document.getElementById("menu-button")

menu.addEventListener("click", () => {
  nav.classList.toggle("open")
})