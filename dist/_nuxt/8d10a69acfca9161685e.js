/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{99:function(t,e,n){"use strict";n.r(e);var r=n(73),o=n(74),l=n(65),c=n(67);function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function h(){h=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r=Object.defineProperty||function(t,e,desc){t[e]=desc.value},o="function"==typeof Symbol?Symbol:{},l=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",d=o.toStringTag||"@@toStringTag";function v(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{v({},"")}catch(t){v=function(t,e,n){return t[e]=n}}function m(t,e,n,o){var l=e&&e.prototype instanceof k?e:k,c=Object.create(l.prototype),f=new G(o||[]);return r(c,"_invoke",{value:j(t,n,f)}),c}function y(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=m;var w={};function k(){}function x(){}function _(){}var T={};v(T,l,(function(){return this}));var L=Object.getPrototypeOf,E=L&&L(L(A([])));E&&E!==e&&n.call(E,l)&&(T=E);var O=_.prototype=k.prototype=Object.create(T);function C(t){["next","throw","return"].forEach((function(e){v(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){var o;r(this,"_invoke",{value:function(r,l){function c(){return new e((function(o,c){!function r(o,l,c,h){var d=y(t[o],t,l);if("throw"!==d.type){var v=d.arg,m=v.value;return m&&"object"==f(m)&&n.call(m,"__await")?e.resolve(m.__await).then((function(t){r("next",t,c,h)}),(function(t){r("throw",t,c,h)})):e.resolve(m).then((function(t){v.value=t,c(v)}),(function(t){return r("throw",t,c,h)}))}h(d.arg)}(r,l,o,c)}))}return o=o?o.then(c,c):c()}})}function j(t,e,n){var r="suspendedStart";return function(o,l){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw l;return F()}for(n.method=o,n.arg=l;;){var c=n.delegate;if(c){var f=N(c,n);if(f){if(f===w)continue;return f}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var h=y(t,e,n);if("normal"===h.type){if(r=n.done?"completed":"suspendedYield",h.arg===w)continue;return{value:h.arg,done:n.done}}"throw"===h.type&&(r="completed",n.method="throw",n.arg=h.arg)}}}function N(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,N(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),w;var o=y(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,w;var l=o.arg;return l?l.done?(e[t.resultName]=l.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,w):l:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,w)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function $(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function A(t){if(t){var e=t[l];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,r=function e(){for(;++i<t.length;)if(n.call(t,i))return e.value=t[i],e.done=!1,e;return e.value=void 0,e.done=!0,e};return r.next=r}}return{next:F}}function F(){return{value:void 0,done:!0}}return x.prototype=_,r(O,"constructor",{value:_,configurable:!0}),r(_,"constructor",{value:x,configurable:!0}),x.displayName=v(_,d,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===x||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,_):(t.__proto__=_,v(t,d,"GeneratorFunction")),t.prototype=Object.create(O),t},t.awrap=function(t){return{__await:t}},C(S.prototype),v(S.prototype,c,(function(){return this})),t.AsyncIterator=S,t.async=function(e,n,r,o,l){void 0===l&&(l=Promise);var c=new S(m(e,n,r,o),l);return t.isGeneratorFunction(n)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},C(O),v(O,d,"Generator"),v(O,l,(function(){return this})),v(O,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var object=Object(t),e=[];for(var n in object)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in object)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=A,G.prototype={constructor:G,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach($),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return l.type="throw",l.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],l=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),f=n.call(o,"finallyLoc");if(c&&f){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!f)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var i=this.tryEntries.length-1;i>=0;--i){var r=this.tryEntries[i];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var l=o?o.completion:{};return l.type=t,l.arg=e,o?(this.method="next",this.next=o.finallyLoc,w):this.complete(l)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),w},finish:function(t){for(var i=this.tryEntries.length-1;i>=0;--i){var e=this.tryEntries[i];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),$(e),w}},catch:function(t){for(var i=this.tryEntries.length-1;i>=0;--i){var e=this.tryEntries[i];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var r=n.arg;$(e)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:A(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),w}},t}function d(t,e,n,r,o,l,c){try{var f=t[l](c),h=f.value}catch(t){return void n(t)}f.done?e(h):Promise.resolve(h).then(r,o)}function v(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var l=t.apply(e,n);function c(t){d(l,r,o,c,f,"next",t)}function f(t){d(l,r,o,c,f,"throw",t)}c(void 0)}))}}var m={components:{Task:r.a,NewTask:o.a,LoadingButton:l.a,editTasks:c.a},data:function(){return{isOpen:!1,isLoading:!1,isRemoveLoading:!1,isAnimated:!0,initialTasks:[],fakeTasks:[{id:1,title:"Task 1",is_completed:!1},{id:2,title:"Task 2",is_completed:!0},{id:3,title:"Task 3",is_completed:!1}]}},mounted:function(){var t=this;this.$root.$on("my-event",(function(){t.onToggle()})),this.$eventBus.$on("my-event",(function(){t.onToggle()}))},computed:{isModalVisible:function(){return this.isOpen},allTasks:function(){return this.fakeTasks},activeTasks:function(){return this.fakeTasks.filter((function(t){return!t.is_completed}))},completedTasks:function(){return this.fakeTasks.filter((function(t){return t.is_completed}))},filteredTasks:function(){switch(this.status){case"active":return this.activeTasks;case"completed":return this.completedTasks;default:return this.allTasks}},status:function(){return console.log(this.$route.params.status),this.$route.params.status||"all"},tasks:function(){return this.isAnimated?this.initialTasks:this.filteredTasks},timeToChill:function(){return 0===this.tasks.length},storageTasks:function(){return this.getLocalStorageArray("tasks")}},created:function(){console.log("root: created");this.getLocalStorageArray("tasks");window.addEventListener("storage",this.handleStorageEvent),window.addEventListener("storage",console.log("test 1"))},beforeDestroy:function(){window.removeEventListener("storage",this.handleStorageEvent)},methods:{closeModal:function(t){t.target.classList.contains("absolute")&&this.onToggle()},onToggle:function(){this.isOpen=!this.isOpen},handleStorageEvent:function(t){if(console.log("hi it works!"),"tasks"===t.key){var e=JSON.parse(t.newValue)||[];this.$store.commit("setTasks",e)}},deleteTasks:function(){var t=this;return v(h().mark((function e(){var n;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isRemoveLoading=!0,n=t.completedTasks.map((function(t){return t.id})),e.prev=2,e.next=5,t.$store.dispatch("entities/tasks/remove",n);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),console.log(e.t0);case 10:return e.prev=10,t.isRemoveLoading=!1,e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[2,7,10,13]])})))()},setTasks:function(){var t=this;return v(h().mark((function e(){return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.$store.commit("setTodos",t.storageTasks);case 1:case"end":return e.stop()}}),e)})))()}}},y=n(8),component=Object(y.a)(m,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"flex justify-center shadow"},[e("nuxt-link",{staticClass:"pill-default lg:flex-grow-0 no-underline",class:["completed"===t.status?"pill-active":"pill-inactive"],attrs:{to:{name:"app-status",params:{status:"completed "}},exact:""}},[t._v("Oggi ("+t._s(t.completedTasks.length)+")")]),t._v(" "),e("nuxt-link",{staticClass:"pill-default lg:flex-grow-0 no-underline",class:["completed"===t.status?"pill-active":"pill-inactive"],attrs:{to:{name:"app-status",params:{status:"completed"}},exact:""}},[t._v("Settimana ("+t._s(t.completedTasks.length)+")")]),t._v(" "),e("nuxt-link",{staticClass:"pill-default lg:flex-grow-0 no-underline",class:["active"===t.status?"pill-active":"pill-inactive"],attrs:{to:{name:"app-status",params:{status:"active"}},exact:""}},[t._v("Attivi ("+t._s(t.activeTasks.length)+")")]),t._v(" "),e("nuxt-link",{staticClass:"pill-default lg:flex-grow-0 no-underline",class:["all"===t.status?"pill-active":"pill-inactive"],attrs:{to:{name:"app-status",params:{status:"all"}},exact:""}},[t._v("Completati("+t._s(t.allTasks.length)+")")]),t._v(" "),e("nuxt-link",{staticClass:"pill-default lg:flex-grow-0 no-underline",class:["completed"===t.status?"pill-active":"pill-inactive"],attrs:{to:{name:"app-status",params:{status:"completed"}},exact:""}},[t._v("Tutti ("+t._s(t.completedTasks.length)+")")])],1),t._v(" "),t.isModalVisible?e("div",[e("div",{staticClass:"overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex bg-indigo-100",on:{click:t.closeModal}},[e("div",{staticClass:"relative w-auto my-6 mx-auto max-w-3xl"},[e("editTasks")],1)])]):t._e(),t._v(" "),e("nuxt-link",{staticClass:"pill-default lg:flex-grow-0 no-underline",class:["completed"===t.status?"pill-active":"pill-inactive"],attrs:{to:{name:"app-status",params:{status:"completed"}},exact:""}},[t._v("Tutti ("+t._s(t.completedTasks.length)+")")]),t._v(" "),e("div",{staticClass:"container mx-auto mt-3 px-4"},[t._e(),t._v(" "),e("transition-group",{staticClass:"relative",attrs:{name:"fade-out-left",tag:"ul"}},t._l(t.storageTasks,(function(t){return e("task",{key:t.id,staticClass:"animated task-item",attrs:{task:t}})})),1),t._v(" "),"completed"!=t.status?e("new-task"):e("div",{staticClass:"flex justify-end my-4"},[t.completedTasks.length?e("loading-button",{staticClass:"text-gray-800 text-sm",class:[t.isRemoveLoading?"opacity-50 cursor-not-allowed":"cursor-pointer hover:underline hover:text-red-500"],attrs:{"is-loading":t.isRemoveLoading,type:"button",icon:"trash"},nativeOn:{click:function(e){return t.deleteTasks.apply(null,arguments)}}},[t._v("Delete completed tasks\n      ")]):t._e()],1),t._v(" "),t.timeToChill?e("div",{staticClass:"text-center mb-6"},[e("p",{staticClass:"text-5xl"},[t._v("🍻")]),t._v("Time to chill ! You have no tasks\n    ")]):t._e()],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);