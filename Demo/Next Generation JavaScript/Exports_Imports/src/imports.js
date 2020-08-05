// If we have a default export, we can name our variable whatever we want
// Import a default export
import person from './person.js';
import prs from './person.js';

console.log(person.name);
console.log(person.name);

// Import a single module from file
import { printMessage } from './utility';

printMessage();

// Import a single module from file and rename it
import { date as Date } from './utility';
console.log(Date.today);

// Importing everything from the file - import an entire module
import * as bundled from './utility';

bundled.printMessage();
console.log(bundled.date.today);