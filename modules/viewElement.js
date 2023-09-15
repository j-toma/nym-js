import { addInput } from "./addInput.js";
import { addDropdown } from "./addDropdown.js";
import { addSubmitButton } from "./addSubmitButton.js";

function viewElement(event) {
  // add input element with value of the clicked element
  addInput(event.target);

  // add dropdown with html element options
  // listed in constants.js
  // elementTypes, elementsToDisplay
  // addDropdown(event.target);

  // add submit button
  addSubmitButton(event.target);
}

export { viewElement }
