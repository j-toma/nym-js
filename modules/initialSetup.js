import { acceptableElementsToClick } from './constants.js';
import { viewElement } from './viewElement.js';

let doc_view = document.createElement("div");
doc_view.setAttribute("id", "document-view");
document.body.append(doc_view);


doc_view.addEventListener("click", function(event) {
  // console.log(event.target.nodeName);
  if (acceptableElementsToClick.includes(event.target.nodeName)) {
    // we just use the id selected by the user
    viewElement(event);
  } else {
    // console.log("not a valid element type");
  }
});


let el_view = document.createElement("div");
el_view.setAttribute("id", "element-view");
document.body.append(el_view);


export { doc_view, el_view };
