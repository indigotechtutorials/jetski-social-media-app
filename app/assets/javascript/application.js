window.addEventListener("load", function() {
  let modalToggleELS = document.querySelectorAll("[data-modal-toggle]")
  modalToggleELS.forEach(modalToggle => {
    modalToggle.addEventListener("click", (e) => {
      e.preventDefault()
      let modalID = modalToggle.getAttribute("data-modal-toggle")
      let modalEL = document.querySelector(`[data-modal='${modalID}']`)
      modalEL.style.display = "flex"
      
      let modalContainer = modalEL.querySelector(".the-modal")
      modalContainer.style.transition = "transform 500ms ease-in-out"
      modalContainer.style.transform = "scale(0.90)"

      setTimeout(() => {
        modalContainer.style.transform = "scale(1.00)"
      }, 100)
    })
  })

  let modalCloseELS = document.querySelectorAll("[data-modal-close]")
  modalCloseELS.forEach(modalClose => {
    modalClose.addEventListener("click", (e) => {
      e.preventDefault()
      let modalID = modalClose.getAttribute("data-modal-close")
      let modalEL = document.querySelector(`[data-modal='${modalID}']`)
      modalEL.style.display = "flex"
      
      let modalContainer = modalEL.querySelector(".the-modal")
      modalContainer.style.transition = "transform 500ms ease-in-out"
      modalContainer.style.transform = "scale(0.90)"

      setTimeout(() => {
        modalContainer.style.transform = "scale(1.00)"
      }, 100)
      this.setTimeout(() => {
        modalEL.style.display = "none"
      }, 150)
    })
  })
})