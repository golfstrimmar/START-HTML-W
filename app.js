import { random, uniq } from "lodash";
// import axios from "axios";
import { Accord } from "/assets/js/accordeon";
import { Anim } from "/assets/js/animation";
import { Button } from "/assets/js/button";
import { Select } from "/assets/js/custom-select";
// import { MyForms } from "/assets/js/form";
import { MyGalery } from "/assets/js/galery";
import { Headers } from "/assets/js/header";
import { MyRange } from "/assets/js/input-range";
import { Swipers } from "/assets/js/MySwiper";
import { Popups } from "/assets/js/popup";
import { MyTab } from "/assets/js/tabs";
import {
  // forms,
  selects,
  ranges,
  waves,
  All,
  galerys,
  popupsInit,
  tabs,
  header,
} from "/src/constants.js";

Anim();
Swipers();
document.addEventListener("DOMContentLoaded", function () {
  // if (forms) {
  //   MyForms(forms);
  // }
  if (selects.length > 0) {
    selects.forEach((select) => {
      Select(select);
    });
  }

  if (ranges.length > 0) {
    ranges.forEach((item) => {
      MyRange(item);
    });
  }

  if (All.length > 0) {
    document.addEventListener("click", (e) => {
      if (e.target.closest(".accord-js")) {
        if (e.target.matches(".accord-header-item")) {
          const accord = new Accord(e.target);
          !e.target.matches("._is-active") ? accord.start() : accord.stop();
        }
      } else {
        Accord.resetAll();
      }
    });
  }

  if (galerys.length > 0) {
    galerys.forEach((galery) => {
      MyGalery(galery);
    });
  }

  if (popupsInit.length > 0) {
    Popups();
  }

  if (tabs.length > 0) {
    MyTab();
  }

  if (header) {
    Headers();
  }

  waves.forEach((cell) => {
    cell.addEventListener("click", Button);
  });
});

// ===============================================
  Object.defineProperty(HTMLElement.prototype, "addAct", {
    get: function () {
      if (!this.classList.contains("_is-active")) {
        return this.classList.add("_is-active");
      }
    },
  });

  Object.defineProperty(HTMLElement.prototype, "remAct", {
    get: function () {
      if (this.classList.contains("_is-active")) {
        return this.classList.remove("_is-active");
      }
    },
  });

 
function delay(ms) {
  return new Promise((resolve, reject) =>{
    setTimeout(resolve, ms);
  });
}
  

delay(1000).then(
 (resolve) => console.log('resolve')
);


// let = document.querySelector(' ')
// const MyForms = () => {}
// .forEach((cell) => {
//    cell.addEventListener('click', (e) => {});
// });
// .innerHTML =
// .getAttribute('name');
// document.createElement(' ')
// document.addEventListener('DOMContentLoaded', function(){ })
// if(){}else{};
// for (let i = 0; i < inputs.length; ++i) { }
// const activeHEAD = (e) => {}
// .classList.add('_is-active')
// .classList.remove('_is-active')
// .classList.contains('_is-active')
// .matches('._is-active')
// .classList.toggle('_is-active')
// .closest(' ')
// .forEach((cell) => {});
// e.target
// .style.height = ' ';
// let head = accord.querySelector('.accord-header-js');
// let headItems = [...head.children];
// const copy = document.querySelectorAll('.copy');
// let singles = Array.prototype.slice.call(copy);
// .style.height = `${hidden.scrollHeight}px`;








// const el = document.querySelector(".grid-content__col-title");
// console.log(el.closest('.wrapper'));
// el.remAct;

// module.exports = function () {
//   if (!Array.prototype.myMap) {
// Array.prototype.myMap = function (callback) {
//   if (!(this instanceof Array || this instanceof String)) {
//     throw new TypeError("Array.prototype.myMap was called on wrong type");
//   }
//   if (typeof callback != "function") {
//     throw new TypeError("Array.prototype.myMap was called on wrong type");
//   }
//   const result = [];
//   for (let i = 0; i < Array.length; i++) {
//     result.push(callback(this[i], i, this));
//   }
//   return result;
// };
//   }
// };

// Element.prototype.closest = function (css) {
//   var node = this;
//   while (node) {
//     if (node.matches(css)) {
//     } else return node.parentElement;
//   }
//   return null;
// };
