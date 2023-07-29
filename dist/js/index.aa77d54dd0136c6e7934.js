/*! For license information please see index.aa77d54dd0136c6e7934.js.LICENSE.txt */
(()=>{"use strict";var t={162:(t,n,e)=>{e.d(n,{Z:()=>r});const r=function(t,n){var e=document.createElement("div");e.classList.add("bookCard");var r=document.createElement("h2");r.innerHTML="<strong>".concat(t,"</strong>");var o=document.createElement("p");o.textContent="Author: ".concat(n);var i=document.createElement("button");return i.classList.add("read-button"),i.textContent="Read more",e.append(r,o,i),e}},653:(t,n,e)=>{e.d(n,{Z:()=>r});const r=function(t){var n=document.createElement("div");n.classList.add("description");var e=document.createElement("p"),r=document.createElement("div");return r.classList.add("container-description"),void 0===t?(t="description not found",e.innerHTML="".concat(t)):(t=t.value||t,e.innerHTML="".concat(t)),r.append(n,e),r}},830:(t,n,e)=>{e.d(n,{Z:()=>u});var r=e(162),o=e(302);function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function a(){a=function(){return t};var t={},n=Object.prototype,e=n.hasOwnProperty,r=Object.defineProperty||function(t,n,e){t[n]=e.value},o="function"==typeof Symbol?Symbol:{},c=o.iterator||"@@iterator",u=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function l(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{l({},"")}catch(t){l=function(t,n,e){return t[n]=e}}function p(t,n,e,o){var i=n&&n.prototype instanceof h?n:h,a=Object.create(i.prototype),c=new _(o||[]);return r(a,"_invoke",{value:E(t,e,c)}),a}function f(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=p;var d={};function h(){}function v(){}function y(){}var m={};l(m,c,(function(){return this}));var g=Object.getPrototypeOf,b=g&&g(g(O([])));b&&b!==n&&e.call(b,c)&&(m=b);var x=y.prototype=h.prototype=Object.create(m);function w(t){["next","throw","return"].forEach((function(n){l(t,n,(function(t){return this._invoke(n,t)}))}))}function L(t,n){function o(r,a,c,u){var s=f(t[r],t,a);if("throw"!==s.type){var l=s.arg,p=l.value;return p&&"object"==i(p)&&e.call(p,"__await")?n.resolve(p.__await).then((function(t){o("next",t,c,u)}),(function(t){o("throw",t,c,u)})):n.resolve(p).then((function(t){l.value=t,c(l)}),(function(t){return o("throw",t,c,u)}))}u(s.arg)}var a;r(this,"_invoke",{value:function(t,e){function r(){return new n((function(n,r){o(t,e,n,r)}))}return a=a?a.then(r,r):r()}})}function E(t,n,e){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return{value:void 0,done:!0}}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=k(a,e);if(c){if(c===d)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===r)throw r="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r="executing";var u=f(t,n,e);if("normal"===u.type){if(r=e.done?"completed":"suspendedYield",u.arg===d)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(r="completed",e.method="throw",e.arg=u.arg)}}}function k(t,n){var e=n.method,r=t.iterator[e];if(void 0===r)return n.delegate=null,"throw"===e&&t.iterator.return&&(n.method="return",n.arg=void 0,k(t,n),"throw"===n.method)||"return"!==e&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+e+"' method")),d;var o=f(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,d;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,d):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,d)}function j(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function S(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function O(t){if(t){var n=t[c];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function n(){for(;++r<t.length;)if(e.call(t,r))return n.value=t[r],n.done=!1,n;return n.value=void 0,n.done=!0,n};return o.next=o}}return{next:T}}function T(){return{value:void 0,done:!0}}return v.prototype=y,r(x,"constructor",{value:y,configurable:!0}),r(y,"constructor",{value:v,configurable:!0}),v.displayName=l(y,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===v||"GeneratorFunction"===(n.displayName||n.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,l(t,s,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},w(L.prototype),l(L.prototype,u,(function(){return this})),t.AsyncIterator=L,t.async=function(n,e,r,o,i){void 0===i&&(i=Promise);var a=new L(p(n,e,r,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(x),l(x,s,"Generator"),l(x,c,(function(){return this})),l(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var n=Object(t),e=[];for(var r in n)e.push(r);return e.reverse(),function t(){for(;e.length;){var r=e.pop();if(r in n)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=O,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!t)for(var n in this)"t"===n.charAt(0)&&e.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function r(e,r){return a.type="throw",a.arg=t,n.next=e,r&&(n.method="next",n.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=e.call(i,"catchLoc"),u=e.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,n){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=n,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),d},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),S(e),d}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var o=r.arg;S(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,e){return this.delegate={iterator:O(t),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=void 0),d}},t}function c(t,n,e,r,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void e(t)}c.done?n(u):Promise.resolve(u).then(r,o)}const u=function(){var t,n=(t=a().mark((function t(n,e){var i,c,u,s;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://openlibrary.org/subjects/".concat(n,".json"));case 3:return i=t.sent,t.next=6,i.json();case 6:c=t.sent,u=c.works,404!==i.status&&c.works.length>0?(e.innerHTML="",u.forEach((function(t){var n=t.title,i=t.authors[0].name,a=(0,r.Z)(n,i);e.append(a);var c=a.querySelector(".read-button");c.addEventListener("click",(function(){(0,o.Z)(t,a),c.remove()}))}))):(s="No results found for the category: ".concat(n),e.innerHTML="<h2>".concat(s,"</h2>")),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})),function(){var n=this,e=arguments;return new Promise((function(r,o){var i=t.apply(n,e);function a(t){c(i,r,o,a,u,"next",t)}function u(t){c(i,r,o,a,u,"throw",t)}a(void 0)}))});return function(t,e){return n.apply(this,arguments)}}()},302:(t,n,e)=>{e.d(n,{Z:()=>c});var r=e(653);function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function i(){i=function(){return t};var t={},n=Object.prototype,e=n.hasOwnProperty,r=Object.defineProperty||function(t,n,e){t[n]=e.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function l(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{l({},"")}catch(t){l=function(t,n,e){return t[n]=e}}function p(t,n,e,o){var i=n&&n.prototype instanceof h?n:h,a=Object.create(i.prototype),c=new _(o||[]);return r(a,"_invoke",{value:E(t,e,c)}),a}function f(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=p;var d={};function h(){}function v(){}function y(){}var m={};l(m,c,(function(){return this}));var g=Object.getPrototypeOf,b=g&&g(g(O([])));b&&b!==n&&e.call(b,c)&&(m=b);var x=y.prototype=h.prototype=Object.create(m);function w(t){["next","throw","return"].forEach((function(n){l(t,n,(function(t){return this._invoke(n,t)}))}))}function L(t,n){function i(r,a,c,u){var s=f(t[r],t,a);if("throw"!==s.type){var l=s.arg,p=l.value;return p&&"object"==o(p)&&e.call(p,"__await")?n.resolve(p.__await).then((function(t){i("next",t,c,u)}),(function(t){i("throw",t,c,u)})):n.resolve(p).then((function(t){l.value=t,c(l)}),(function(t){return i("throw",t,c,u)}))}u(s.arg)}var a;r(this,"_invoke",{value:function(t,e){function r(){return new n((function(n,r){i(t,e,n,r)}))}return a=a?a.then(r,r):r()}})}function E(t,n,e){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return{value:void 0,done:!0}}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=k(a,e);if(c){if(c===d)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===r)throw r="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r="executing";var u=f(t,n,e);if("normal"===u.type){if(r=e.done?"completed":"suspendedYield",u.arg===d)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(r="completed",e.method="throw",e.arg=u.arg)}}}function k(t,n){var e=n.method,r=t.iterator[e];if(void 0===r)return n.delegate=null,"throw"===e&&t.iterator.return&&(n.method="return",n.arg=void 0,k(t,n),"throw"===n.method)||"return"!==e&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+e+"' method")),d;var o=f(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,d;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,d):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,d)}function j(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function S(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function O(t){if(t){var n=t[c];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function n(){for(;++r<t.length;)if(e.call(t,r))return n.value=t[r],n.done=!1,n;return n.value=void 0,n.done=!0,n};return o.next=o}}return{next:T}}function T(){return{value:void 0,done:!0}}return v.prototype=y,r(x,"constructor",{value:y,configurable:!0}),r(y,"constructor",{value:v,configurable:!0}),v.displayName=l(y,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===v||"GeneratorFunction"===(n.displayName||n.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,l(t,s,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},w(L.prototype),l(L.prototype,u,(function(){return this})),t.AsyncIterator=L,t.async=function(n,e,r,o,i){void 0===i&&(i=Promise);var a=new L(p(n,e,r,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(x),l(x,s,"Generator"),l(x,c,(function(){return this})),l(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var n=Object(t),e=[];for(var r in n)e.push(r);return e.reverse(),function t(){for(;e.length;){var r=e.pop();if(r in n)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=O,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!t)for(var n in this)"t"===n.charAt(0)&&e.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function r(e,r){return a.type="throw",a.arg=t,n.next=e,r&&(n.method="next",n.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=e.call(i,"catchLoc"),u=e.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,n){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=n,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),d},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),S(e),d}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var o=r.arg;S(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,e){return this.delegate={iterator:O(t),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=void 0),d}},t}function a(t,n,e,r,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void e(t)}c.done?n(u):Promise.resolve(u).then(r,o)}const c=function(){var t,n=(t=i().mark((function t(n,e){var o,a,c,u;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://openlibrary.org".concat(n.key,".json"));case 3:return o=t.sent,t.next=6,o.json();case 6:a=t.sent,c=a.description,u=(0,r.Z)(c),e.appendChild(u),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[0,12]])})),function(){var n=this,e=arguments;return new Promise((function(r,o){var i=t.apply(n,e);function c(t){a(i,r,o,c,u,"next",t)}function u(t){a(i,r,o,c,u,"throw",t)}c(void 0)}))});return function(t,e){return n.apply(this,arguments)}}()},609:(t,n,e)=>{e.d(n,{Z:()=>f});var r=e(81),o=e.n(r),i=e(645),a=e.n(i),c=e(667),u=e.n(c),s=new URL(e(685),e.b),l=a()(o());l.push([t.id,"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap);"]);var p=u()(s);l.push([t.id,`*{\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  line-height: 1.6;\n  font-family: 'Poppins', sans-serif;\n}\n\nbody {\n  font-size: 18px;\n  background-color: rgb(253, 252, 244);\n}\n.container {\n  max-width: auto;\n}\nh1 {\n    color: rgb(255, 255, 255);\n    font-size: 6rem;\n    text-align: center;\n    font-weight: bold;\n  }\n\n  #bar {\n    margin: 0 auto;\n    width:575px;\n    border-radius:30px;\n    border:1px solid #dcdcdc;\n    background-color: white;\n    position: absolute;\n    top: 65%;\n    left: 35%;\n  }\n\n  #bar:hover {\n    box-shadow: 1px 1px 8px 1px #dcdcdc;\n  }\n\n  #bar:focus-within {\n    box-shadow: 1px 1px 8px 1px #dcdcdc;\n    outline:none;\n  }\n\n  #search-input {\n  height:45px;\n  border:none;\n  width:500px;\n  font-size:16px;\n  outline: none;\n  background-color: transparent;\n  border-radius:30px;\n  margin-left: 15px;\n  }\n\n  .read-button {\n    background-color: darkblue;\n    color: white;\n    font-size: 14px;\n    border-radius: 5px;\n    border: 1px solid white;\n    padding: 14px 20px;\n    padding-top: 10px;\n  }\n\n  .read-button:hover {\n    background-color: lightskyblue;\n    color: darkblue;\n    cursor: pointer;\n  }\n  header {\n    height:  100vh;\n    width: 100%;\n    background: linear-gradient(rgba(141, 39, 174, 0.3), rgba(141, 39, 174, 0.5)), url(${p}) center/cover no-repeat;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n \n\n  .fa-sharp {\n    font-size: 20px;\n    height:20px;\n    position:relative;\n    top: 5px;\n    left:10px;\n    color: black;\n  }\n\n  #search-button {\n    background-color: transparent;\n    border: none;\n  }\n\n  #search-button:hover {\n    cursor: pointer;\n    color: blueviolet;\n  }\n\n  .structural {\n    position:absolute; \n    left:80px; \n    top: -200%;\n    color: rgb(255, 255, 255);\n    font-size: 2rem;\n    opacity: 0.5;\n  }\n\n\n  #books {\n    padding-top: 100px;\n    padding-bottom: 100px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n\n#book-list h2 {\n  font-size: 2rem;\n}\n#book-list {\n  color: black;\n  opacity: 1;\n  margin-bottom: 50px;\n  max-width: 1200px;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(900px, 1fr));\n  grid-template-rows: auto;\n  grid-gap: 1rem;\n  text-align: center;\n}\n\n.description {\n   text-align: center;\n   line-height: 1.8;\n}\n\n.container-description {\n        max-width: 900px;\n}\n\n.bookCard {\n  text-align: center;\n  padding: 3rem;\n  border: 1px solid black;\n  background-color: rgb(233, 233, 233);\n  border-radius: 5px;\n}\n\n`,""]);const f=l},403:(t,n,e)=>{e.d(n,{Z:()=>c});var r=e(81),o=e.n(r),i=e(645),a=e.n(i)()(o());a.push([t.id,"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap);"]),a.push([t.id," @media only screen and (max-width: 1280px) {\n\n  #bar {\n    left: 30%;\n  }\n}\n \n @media only screen and (max-width: 1024px) {\n\n  #bar {\n    top: 70%;\n    left: 20%;\n  }\n  \n }\n \n @media only screen and (max-width: 912px) {\n\n  body {\n    font-size: 14px;\n    overflow-x: hidden;\n  }\n\n\n  h1 {\n    font-size: 5rem;\n  }\n\n  #bar {\n    max-width: 100%;\n    top: 32%;\n    left: 15%;\n  }\n\n  #search-input {\n    height: 35px;\n    max-width: 100%;\n    font-size: 14px;\n  }\n\n  header {\n    height: 50vh;\n  }\n\n  .structural {\n    position:absolute; \n    left:80px; \n    top: -160%;\n    color: rgb(255, 255, 255);\n    font-size: 2rem;\n    opacity: 0.5;\n  }\n\n #book-list h2 {\n    font-size: 1.5rem;\n  }\n\n\n  #book-list {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n   \n  }\n\n  .bookCard {\n    padding: 2em;\n    max-width: 80%;\n  }\n\n  .container-description {\n    max-width: 100%;\n  }\n\n  .description {\n    text-align: center;\n    line-height: 1.8;\n }\n\n .read-button {\n  background-color: darkblue;\n  color: white;\n  font-size: 14px;\n  border-radius: 5px;\n  border: 1px solid white;\n  padding: 14px 20px;\n  padding-top: 10px;\n}\n\n.read-button:hover {\n  background-color: lightskyblue;\n  color: darkblue;\n  cursor: pointer;\n}\n}\n\n@media only screen and (max-width: 576px) {\n\n  * {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n    line-height: 1.6;\n    font-family: 'Poppins', sans-serif;\n  }\n\n  body {\n    font-size: 8px;\n    overflow-x: hidden;\n  }\n\n\n  h1 {\n    font-size: 2.5rem;\n  }\n\n  #bar {\n    max-width: 80%;\n    top: 35%;\n    left: 10%;\n  }\n\n  #search-input {\n    height: 35px;\n    max-width: 80%;\n    font-size: 14px;\n  }\n\n  header {\n    height: 50vh;\n  }\n\n  #book-list h2 {\n    font-size: 1rem;\n  }\n\n  .structural {\n    position:absolute; \n    left:80px; \n    top: -120%;\n    color: rgb(255, 255, 255);\n    font-size: 1rem;\n    opacity: 0.5;\n  }\n  #book-list {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n   \n  }\n\n  .bookCard {\n    padding: 1em;\n    max-width: 80%;\n  }\n\n  .container-description {\n    max-width: 100%;\n  }\n\n  .description {\n    text-align: center;\n    line-height: 1.8;\n }\n\n \n .fa-sharp {\n  font-size: 15px;\n  height: 15px;\n  position:relative;\n  top: 0;\n  left: 10px;\n  color: black;\n}\n\n.read-button {\n  background-color: darkblue;\n  color: white;\n  font-size: 8px;\n  border-radius: 5px;\n  border: 1px solid white;\n  padding: 5px 10px;\n  padding-top: 5px;\n}\n\n.read-button:hover {\n  background-color: lightskyblue;\n  color: darkblue;\n  cursor: pointer;\n}\n}",""]);const c=a},645:t=>{t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e="",r=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),r&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=t(n),r&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(t,e,r,o,i){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var u=this[c][0];null!=u&&(a[u]=!0)}for(var s=0;s<t.length;s++){var l=[].concat(t[s]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},667:t=>{t.exports=function(t,n){return n||(n={}),t?(t=String(t.__esModule?t.default:t),/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),n.hash&&(t+=n.hash),/["'() \t\n]|(%20)/.test(t)||n.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t):t}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var n=[];function e(t){for(var e=-1,r=0;r<n.length;r++)if(n[r].identifier===t){e=r;break}return e}function r(t,r){for(var i={},a=[],c=0;c<t.length;c++){var u=t[c],s=r.base?u[0]+r.base:u[0],l=i[s]||0,p="".concat(s," ").concat(l);i[s]=l+1;var f=e(p),d={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==f)n[f].references++,n[f].updater(d);else{var h=o(d,r);r.byIndex=c,n.splice(c,0,{identifier:p,updater:h,references:1})}a.push(p)}return a}function o(t,n){var e=n.domAPI(n);return e.update(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap&&n.supports===t.supports&&n.layer===t.layer)return;e.update(t=n)}else e.remove()}}t.exports=function(t,o){var i=r(t=t||[],o=o||{});return function(t){t=t||[];for(var a=0;a<i.length;a++){var c=e(i[a]);n[c].references--}for(var u=r(t,o),s=0;s<i.length;s++){var l=e(i[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}i=u}}},569:t=>{var n={};t.exports=function(t,e){var r=function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}n[t]=e}return n[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},216:t=>{t.exports=function(t){var n=document.createElement("style");return t.setAttributes(n,t.attributes),t.insert(n,t.options),n}},565:(t,n,e)=>{t.exports=function(t){var n=e.nc;n&&t.setAttribute("nonce",n)}},795:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=t.insertStyleElement(t);return{update:function(e){!function(t,n,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,o&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,t,n.options)}(n,t,e)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)}}}},589:t=>{t.exports=function(t,n){if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}},685:(t,n,e)=>{t.exports=e.p+"img/8366d467eb3097fdbd2b.jpg"}},n={};function e(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return t[r](i,i.exports,e),i.exports}e.m=t,e.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},e.d=(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),e.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!t;)t=r[o--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t+"../"})(),e.b=document.baseURI||self.location.href,e.nc=void 0,(()=>{var t=e(379),n=e.n(t),r=e(795),o=e.n(r),i=e(569),a=e.n(i),c=e(565),u=e.n(c),s=e(216),l=e.n(s),p=e(589),f=e.n(p),d=e(609),h={};h.styleTagTransform=f(),h.setAttributes=u(),h.insert=a().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),n()(d.Z,h),d.Z&&d.Z.locals&&d.Z.locals;var v=e(403),y={};y.styleTagTransform=f(),y.setAttributes=u(),y.insert=a().bind(null,"head"),y.domAPI=o(),y.insertStyleElement=l(),n()(v.Z,y),v.Z&&v.Z.locals&&v.Z.locals;var m=e(830),g=document.getElementById("search-input"),b=document.getElementById("book-list");function x(){var t=g.value.trim().toLowerCase().replace(/[\W_]/g,"");b.scrollIntoView({behavior:"smooth"}),""!==t?(b.innerHTML="",(0,m.Z)(t,b)):b.innerHTML="<h2>Please write a category in english</h2>"}document.getElementById("search-button").addEventListener("click",x),g.addEventListener("keyup",(function(t){"Enter"===t.key&&x()}))})()})();