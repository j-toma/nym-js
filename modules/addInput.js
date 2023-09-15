function addInput(eventTarget) {
  removeExistingInput();

  let initialInputValue = eventTarget.innerText;
  let input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("id", "edit-element-input");
  input.value = initialInputValue;

  let el_view = document.querySelector("#element-view");
  el_view.insertBefore(input, el_view.firstChild);

}

function removeExistingInput() {
  const existingInput = document.querySelector("#edit-element-input");  
  if (existingInput) {
    existingInput.remove();
  }
}

export { addInput, removeExistingInput };
