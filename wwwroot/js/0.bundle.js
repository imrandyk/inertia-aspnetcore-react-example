(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),l=t(42);function c(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],n=!0,r=!1,l=void 0;try{for(var c,o=e[Symbol.iterator]();!(n=(c=o.next()).done)&&(t.push(c.value),!a||t.length!==a);n=!0);}catch(e){r=!0,l=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw l}}return t}(e,a)||function(e,a){if(!e)return;if("string"==typeof e)return o(e,a);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return o(e,a)}(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,a){(null==a||a>e.length)&&(a=e.length);for(var t=0,n=new Array(a);t<a;t++)n[t]=e[t];return n}a.default=function(e){var a=c(Object(n.useState)(e.controller.initialValue),2),t=a[0],o=a[1];return r.a.createElement(l.a,null,r.a.createElement("h1",null,"Counter"),r.a.createElement("p",null,"This is a simple example of a React component."),r.a.createElement("p",{"aria-live":"polite"},"Current count: ",r.a.createElement("strong",null,t)),r.a.createElement("div",{class:"btn-group",role:"group","aria-label":"Basic example"},r.a.createElement("button",{className:"btn btn-danger",onClick:function(){return o(t-1)}},"Decrement"),r.a.createElement("button",{className:"btn btn-success",onClick:function(){return o(t+1)}},"Increment")))}},42:function(e,a,t){"use strict";var n=t(2),r=t(1),l=t.n(r);a.a=function(e){var a=e.children;return l.a.createElement("main",null,l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},l.a.createElement("a",{className:"navbar-brand",href:"#"},"Navbar"),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup"},l.a.createElement("div",{className:"navbar-nav"},l.a.createElement(n.InertiaLink,{href:"/",className:"nav-item nav-link"},"Home"),l.a.createElement(n.InertiaLink,{href:"/forecast",className:"nav-item nav-link"},"Forecast"),l.a.createElement(n.InertiaLink,{href:"/counter",className:"nav-item nav-link"},"Counter")))),l.a.createElement("article",null,a))}}}]);