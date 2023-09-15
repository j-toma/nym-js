import { elementTypes, elementTypes_domTypes, elementsToDisplay } from "./constants.js";

function addDropdown(eventTarget) {
  // remove dropdown 
  removeExistingDropdown();


  const selected = elementTypes_domTypes[eventTarget.nodeName]; 
  let typeDropdown = document.createElement("select");
  typeDropdown.setAttribute("id", "edit-element-dropdown");
  typeDropdown.setAttribute("name", "edit-element-dropdown");
  typeDropdown.setAttribute("size", "1");
  typeDropdown.setAttribute("style", "width: 100px;");

  for (let i = 0; i < elementTypes.length; i++) {
    let option = document.createElement("option");
    option.setAttribute("value", elementTypes[i]);
    option.innerText = elementsToDisplay[elementTypes[i]];
    if (elementTypes[i] === selected) {
      option.setAttribute("selected", "selected");
    }
    typeDropdown.appendChild(option);
  }

  let input = document.querySelector("#edit-element-input");
  let el_edit = document.querySelector("#edit-element");
  if (input) {
    el_edit.insertBefore(typeDropdown, input);
  }
}

function removeExistingDropdown() { 
  const existingDropdown = document.querySelector("#edit-element-dropdown");
  if (existingDropdown) {
    existingDropdown.remove();
  }
}

export { addDropdown, removeExistingDropdown };
