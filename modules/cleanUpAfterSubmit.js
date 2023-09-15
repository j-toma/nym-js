import { removeExistingDropdown } from './addDropdown.js';
import { removeExistingInput } from './addInput.js';
import { removeExistingSubmitButton } from './addSubmitButton.js';

function cleanUpAfterSubmit () {
  removeExistingDropdown();
  removeExistingInput();
  removeExistingSubmitButton();
}

export { cleanUpAfterSubmit };
