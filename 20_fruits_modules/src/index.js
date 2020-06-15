// import React from 'react';

import fruits from './foods';
import { choice, remove} from "./helpers";

let item = choice(fruits);
console.log(`I'd like one ${item}, please`);
console.log(`Here you go: ${item}`);
let remaining = remove(fruits, item);
console.log(`Delicious! May I have another?`);
console.log(`I’m sorry, we’re all out. We have ${remaining.length} other foods left.`);
remove(remaining, item);
