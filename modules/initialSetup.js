import { acceptableElementsToClick } from './constants.js';

let doc_view = document.createElement("div");
doc_view.setAttribute("id", "document-view");
document.body.append(doc_view);


doc_view.addEventListener("click", function(event) {
  // console.log(event.target.nodeName);
  if (acceptableElementsToClick.includes(event.target.nodeName)) {
    // if event.id === "add-element"
    // we need to check whether the user has selected an element
    // if so, we can allow the user to select span from dropdown on right
    // if not, we need to prevent the user from selecting span from dropdown on right
    // if event.id !== "add-element"
    // we just use the id selected by the user
    showEdit(event);
  } else {
    // console.log("not a valid element type");
  }
});


let el_edit = document.createElement("div");
el.edit.setAttribute("id", "element-edit");
document.body.append(el_edit);


export { doc_view, 
el.edit.setAttribute("id", "element-edit");
document.body.append(el_edit);
}
