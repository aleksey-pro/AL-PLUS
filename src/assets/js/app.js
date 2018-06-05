import $ from "jquery";
import whatInput from "what-input";

window.$ = $;

// import Foundation from "foundation-sites";
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
import "./lib/foundation-explicit-pieces";

$(document).foundation();

// Foundation.Abide.defaults.patterns["dashes_only"] = /^[0-9-]*$/;

//--------------Calculator---------------------

/**
 * Функция расчета площади оконного проема
 * @return {Number}
 */
let getSquare = () => {
  let lengthVal = document.cl_form.lengthAmount.value;
  let heightVal = document.cl_form.heightAmount.value;
  if (lengthVal > 0 && heightVal > 0) {
    let res = (lengthVal * heightVal / 1000000).toFixed(2);
    document.getElementById("square").innerHTML = res;
    return res;
  }
};

/**
 * Функция расчета стоимости
 */
let getSumm = () => {
  let stvorkiVal = document.cl_form.stvorAmount.value;
  let netsVal = document.cl_form.netsAmount.value;

  if (stvorkiVal > 0 && netsVal > 0) {
    let summ =
      30000 +
      15000 +
      (2200 + 1500 + 780) * getSquare() +
      11000 * stvorkiVal +
      2500 * netsVal;
    document.getElementById("summ").innerHTML = summ.toFixed(1);
  }
  return false;
};

/**
 * Обработчик для инпутов
 */
let cl_form = document.querySelector("form");
let inputs = cl_form.querySelectorAll("input");
[].forEach.call(inputs, input => {
  input.addEventListener("change", function(e) {
    getSquare();
    getSumm();
  });
});

/**
 * Обработчик для слайдера
 */
let sliders = $(".slider");
sliders.on("moved.zf.slider", function(e) {
  getSquare();
  getSumm();
});
