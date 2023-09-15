import { editElement } from "./editElement.js";
import { cleanUpAfterSubmit } from "./cleanUpAfterSubmit.js";

function addSubmitButton(elementClicked) {
  removeExistingSubmitButton();
  let submitButton = document.createElement("button");
  submitButton.setAttribute("id", "edit-element-submit");
  submitButton.setAttribute("name", "edit-element-submit");
  submitButton.setAttribute("type", "button");
  submitButton.innerText = "Submit";
  submitButton.addEventListener("click", () => {
    // we need to add element to view
    editElement(elementClicked);

    // we need to clean up  
    cleanUpAfterSubmit();
  });
  let el_view = document.querySelector("#element-view");
  let input = document.querySelector("#edit-element-input");
  el_view.insertBefore(submitButton, input.nextSibling);
}

function removeExistingSubmitButton () { 
  const existingSubmitButton = document.querySelector("#edit-element-submit");
  if (existingSubmitButton) {
    existingSubmitButton.remove();
  }
}

export { addSubmitButton, removeExistingSubmitButton };
