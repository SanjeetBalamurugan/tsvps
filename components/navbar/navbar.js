let openMenuBtn = document.getElementById("open-menu")
let closeMenuBtn = document.getElementById("close-menu")
let navSectionMobile = document.getElementById("nav-section-mobile")

openMenuBtn.addEventListener("click", e => {
  navSectionMobile.dataset.opened = true
  openMenuBtn.style.display = "none"
  closeMenuBtn.style.display = "block"
})

closeMenuBtn.addEventListener("click", e => {
  navSectionMobile.dataset.opened = false
  openMenuBtn.style.display = "block"
  closeMenuBtn.style.display = "none"
})
