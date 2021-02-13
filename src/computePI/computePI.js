/**
  * Universidad de La Laguna
	* Escuela Superior de Ingeniería y Tecnología
	* Grado en Ingeniería Informática
	* Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since 27.01.2020
  * @desc Compute PI 
  * Uses prompt and alert for input/output
	*
  * @see {@link * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this#As_a_DOM_event_handler}
*/

"use strict";

let steps = 0;
function calculatePI() {
  let steps  = prompt("Enter number of steps:", "0");
  if (steps > 0) {
    let pi = 0;
    let n = 1;
    for (i = 0; i < steps; i++) {
      pi = pi + (4 / n) - (4 / (n + 2));
      n += 4;
			debugger;
    }
  alert(pi);
  }
  else {
    alert("Canceled or Error in input: Input must be positive.");
		}
}
