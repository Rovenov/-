const sencor = document.querySelector(".sencor")
const collapse = document.querySelector(".collapse")
const photo = document.querySelector(".photo")

const btns = [sencor, collapse]

btns.forEach((btn) => {
  btn.addEventListener("click", function () {
    btn === sencor ? photo.src = "/img/rail.jpg" : photo.src = "/img/demon.jpg"
  })
})

