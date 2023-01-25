import { factorial } from './factorial.js';
try {
  console.log(factorial(198));
} catch (error) {
  console.log(error.message);
}
