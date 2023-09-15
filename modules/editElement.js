
function editElement(element) {
  let input = document.querySelector('input');
  if (input.value) {
    element.textContent = input.value;
  }
}

export { editElement };
