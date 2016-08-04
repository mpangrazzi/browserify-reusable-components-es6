
/**
 * Entry point
 */

import Counter from './components/counter'
import template from './template.jade'


document.querySelector('#app').innerHTML = template();

let counter1 = new Counter({
  initialValue: 2,
  ref: '#counter-1'
});

let counter2 = new Counter({
  initialValue: 1,
  ref: '#counter-2'
});

setInterval(function() {
  counter1.add();
}, 1000);

setInterval(function() {
  counter2.add(2);
}, 2000);
