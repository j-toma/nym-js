import * as Constants from './modules/constants.js';
import { doc_view } from './modules/initialSetup.js';
import { createStartingTemplate } from './modules/newDocument.js';
import * as viewChildCounter from './modules/counter.js';

console.log(viewChildCounter.viewChildCounter);
createStartingTemplate(doc_view);
console.log(viewChildCounter.viewChildCounter);

