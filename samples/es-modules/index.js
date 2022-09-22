// 1. Multiple exports
import { line, getLine as myLine, getLine} from './modules/module1.js';
// 2. Default export
import LineServiceClass from './modules/module2.js';
// 3. Default export of a singleton
import LineServiceSingleton from './modules/module3.js';

let poem = '';

// Test isolation of this module
if (window.poem === poem) alert ("Oh no we leaked into the global namespace!")

// 1. Multiple exports
poem += line + '<br />';
poem += getLine() + '<br />';

// 2. Default export
const myLineService = new LineServiceClass();
poem += myLineService.getLine() + '<br />';

// 3. Default export of a singleton
poem += LineServiceSingleton.getLine();

document.getElementById('output').innerHTML = poem;
