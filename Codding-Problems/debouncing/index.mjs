import debounce from './controller.mjs';

function callThis() {
  console.log("debounced after 2 secs");
}

// demonstrating debounce.. 
debounce(callThis, 1000);