import { addInput } from "./addInput.js";
import { addDropdown } from "./addDropdown.js";
import { addSubmitButton } from "./addSubmitButton.js";

function viewElement(event) {
  // add input element with value of the clicked element
  addInput(event.target);

  // add new after element clicked
  // addDropdown will go in here
  // addDropdown(event.target);

  // add submit button
  addSubmitButton(event.target);
}

export { viewElement }
