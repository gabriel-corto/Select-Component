
const select = document.querySelector(".select")
const selectedValue = document.querySelector("#selected-value")
const optionViewButton  = document.querySelector("#options-view-button")
const inputsOptions = document.querySelectorAll(".option input")

inputsOptions.forEach(input => {
  input.addEventListener("click", event => {
    selectedValue.textContent = input.dataset.label

    const isMouseOrTouch = 
    event.pointerType == "mouse" || event.pointerType == "touch"
    isMouseOrTouch && optionViewButton.click()
  })
})
