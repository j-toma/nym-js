import * as viewChildCounter from './counter.js'

// function createStartingTemplate(view, viewChildCounter) {
function createStartingTemplate(view) {
  let h1 = document.createElement("h1");
  let headingIdString = "h1-" + viewChildCounter.viewChildCounter;
  h1.setAttribute("id", headingIdString);
  h1.innerHTML = "Welcome to the DOM";
  //h1Counter++;
  // viewChildCounter++;
  viewChildCounter.increment();
  view.appendChild(h1);

  let p = document.createElement("p");
  let paragraphIdString = "p-" + viewChildCounter.viewChildCounter;
  p.setAttribute("id", paragraphIdString);
  // viewChildCounter++;
  viewChildCounter.increment();
  view.appendChild(p);

  let span = document.createElement("span");
  span.innerHTML = "Click on an element to edit it. ";
  let spanIdString = "span-" + viewChildCounter.viewChildCounter;
  // spanCounter++;
  span.setAttribute("id", spanIdString);
  // viewChildCounter++;
  viewChildCounter.increment();
  p.appendChild(span);

  // addElementButton();
}

export { createStartingTemplate }
