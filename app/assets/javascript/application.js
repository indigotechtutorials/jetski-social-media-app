window.addEventListener("load", function() {
  let modalToggleELS = document.querySelectorAll("[data-modal-toggle]")
  modalToggleELS.forEach(modalToggle => {
    modalToggle.addEventListener("click", (e) => {
      e.preventDefault()
      let modalID = modalToggle.getAttribute("data-modal-toggle")
      let modalEL = document.querySelector(`[data-modal='${modalID}']`)
      modalEL.style.display = "flex"
    })
  })
})