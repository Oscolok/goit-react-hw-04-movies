(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[4],{31:function(t,r,e){"use strict";e.d(r,"a",(function(){return a})),e.d(r,"b",(function(){return c}));var n=e(33),o=e.n(n),a="https://image.tmdb.org/t/p/w200/";o.a.defaults.baseURL="https://api.themoviedb.org/3";var i="api_key=".concat("20cca06d988f593c4c121e904819881c"),c=function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return o.a.get(t+"?"+i+"&query="+r)}},34:function(t,r,e){var n=e(43);t.exports=function(t,r){if(t){if("string"===typeof t)return n(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(e):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?n(t,r):void 0}}},43:function(t,r){t.exports=function(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}},63:function(t,r,e){"use strict";var n=e(64),o=e(68),a=e(69),i=e(73),c=e(74),u=e(75);function s(t){if("string"!==typeof t||1!==t.length)throw new TypeError("arrayFormatSeparator must be single character string")}function f(t,r){return r.encode?r.strict?i(t):encodeURIComponent(t):t}function l(t,r){return r.decode?c(t):t}function p(t){var r=t.indexOf("#");return-1!==r&&(t=t.slice(0,r)),t}function y(t){var r=(t=p(t)).indexOf("?");return-1===r?"":t.slice(r+1)}function m(t,r){return r.parseNumbers&&!Number.isNaN(Number(t))&&"string"===typeof t&&""!==t.trim()?t=Number(t):!r.parseBooleans||null===t||"true"!==t.toLowerCase()&&"false"!==t.toLowerCase()||(t="true"===t.toLowerCase()),t}function d(t,r){s((r=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},r)).arrayFormatSeparator);var e=function(t){var r;switch(t.arrayFormat){case"index":return function(t,e,n){r=/\[(\d*)\]$/.exec(t),t=t.replace(/\[\d*\]$/,""),r?(void 0===n[t]&&(n[t]={}),n[t][r[1]]=e):n[t]=e};case"bracket":return function(t,e,n){r=/(\[\])$/.exec(t),t=t.replace(/\[\]$/,""),r?void 0!==n[t]?n[t]=[].concat(n[t],e):n[t]=[e]:n[t]=e};case"comma":case"separator":return function(r,e,n){var o="string"===typeof e&&e.split("").indexOf(t.arrayFormatSeparator)>-1?e.split(t.arrayFormatSeparator).map((function(r){return l(r,t)})):null===e?e:l(e,t);n[r]=o};default:return function(t,r,e){void 0!==e[t]?e[t]=[].concat(e[t],r):e[t]=r}}}(r),a=Object.create(null);if("string"!==typeof t)return a;if(!(t=t.trim().replace(/^[?#&]/,"")))return a;var i,c=o(t.split("&"));try{for(c.s();!(i=c.n()).done;){var f=i.value,p=u(r.decode?f.replace(/\+/g," "):f,"="),y=n(p,2),d=y[0],v=y[1];v=void 0===v?null:["comma","separator"].includes(r.arrayFormat)?v:l(v,r),e(l(d,r),v,a)}}catch(S){c.e(S)}finally{c.f()}for(var b=0,g=Object.keys(a);b<g.length;b++){var h=g[b],j=a[h];if("object"===typeof j&&null!==j)for(var x=0,O=Object.keys(j);x<O.length;x++){var w=O[x];j[w]=m(j[w],r)}else a[h]=m(j,r)}return!1===r.sort?a:(!0===r.sort?Object.keys(a).sort():Object.keys(a).sort(r.sort)).reduce((function(t,r){var e=a[r];return Boolean(e)&&"object"===typeof e&&!Array.isArray(e)?t[r]=function t(r){return Array.isArray(r)?r.sort():"object"===typeof r?t(Object.keys(r)).sort((function(t,r){return Number(t)-Number(r)})).map((function(t){return r[t]})):r}(e):t[r]=e,t}),Object.create(null))}r.extract=y,r.parse=d,r.stringify=function(t,r){if(!t)return"";s((r=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},r)).arrayFormatSeparator);for(var e=function(e){return r.skipNull&&(null===(n=t[e])||void 0===n)||r.skipEmptyString&&""===t[e];var n},n=function(t){switch(t.arrayFormat){case"index":return function(r){return function(e,n){var o=e.length;return void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?e:[].concat(a(e),null===n?[[f(r,t),"[",o,"]"].join("")]:[[f(r,t),"[",f(o,t),"]=",f(n,t)].join("")])}};case"bracket":return function(r){return function(e,n){return void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?e:[].concat(a(e),null===n?[[f(r,t),"[]"].join("")]:[[f(r,t),"[]=",f(n,t)].join("")])}};case"comma":case"separator":return function(r){return function(e,n){return null===n||void 0===n||0===n.length?e:0===e.length?[[f(r,t),"=",f(n,t)].join("")]:[[e,f(n,t)].join(t.arrayFormatSeparator)]}};default:return function(r){return function(e,n){return void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?e:[].concat(a(e),null===n?[f(r,t)]:[[f(r,t),"=",f(n,t)].join("")])}}}}(r),o={},i=0,c=Object.keys(t);i<c.length;i++){var u=c[i];e(u)||(o[u]=t[u])}var l=Object.keys(o);return!1!==r.sort&&l.sort(r.sort),l.map((function(e){var o=t[e];return void 0===o?"":null===o?f(e,r):Array.isArray(o)?o.reduce(n(e),[]).join("&"):f(e,r)+"="+f(o,r)})).filter((function(t){return t.length>0})).join("&")},r.parseUrl=function(t,r){r=Object.assign({decode:!0},r);var e=u(t,"#"),o=n(e,2),a=o[0],i=o[1];return Object.assign({url:a.split("?")[0]||"",query:d(y(t),r)},r&&r.parseFragmentIdentifier&&i?{fragmentIdentifier:l(i,r)}:{})},r.stringifyUrl=function(t,e){e=Object.assign({encode:!0,strict:!0},e);var n=p(t.url).split("?")[0]||"",o=r.extract(t.url),a=r.parse(o,{sort:!1}),i=Object.assign(a,t.query),c=r.stringify(i,e);c&&(c="?".concat(c));var u=function(t){var r="",e=t.indexOf("#");return-1!==e&&(r=t.slice(e)),r}(t.url);return t.fragmentIdentifier&&(u="#".concat(f(t.fragmentIdentifier,e))),"".concat(n).concat(c).concat(u)}},64:function(t,r,e){var n=e(65),o=e(66),a=e(34),i=e(67);t.exports=function(t,r){return n(t)||o(t,r)||a(t,r)||i()}},65:function(t,r){t.exports=function(t){if(Array.isArray(t))return t}},66:function(t,r){t.exports=function(t,r){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var e=[],n=!0,o=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(n=(i=c.next()).done)&&(e.push(i.value),!r||e.length!==r);n=!0);}catch(u){o=!0,a=u}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return e}}},67:function(t,r){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},68:function(t,r,e){var n=e(34);t.exports=function(t){if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=n(t))){var r=0,e=function(){};return{s:e,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:e}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a,i=!0,c=!1;return{s:function(){o=t[Symbol.iterator]()},n:function(){var t=o.next();return i=t.done,t},e:function(t){c=!0,a=t},f:function(){try{i||null==o.return||o.return()}finally{if(c)throw a}}}}},69:function(t,r,e){var n=e(70),o=e(71),a=e(34),i=e(72);t.exports=function(t){return n(t)||o(t)||a(t)||i()}},70:function(t,r,e){var n=e(43);t.exports=function(t){if(Array.isArray(t))return n(t)}},71:function(t,r){t.exports=function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},72:function(t,r){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},73:function(t,r,e){"use strict";t.exports=function(t){return encodeURIComponent(t).replace(/[!'()*]/g,(function(t){return"%".concat(t.charCodeAt(0).toString(16).toUpperCase())}))}},74:function(t,r,e){"use strict";var n=new RegExp("%[a-f0-9]{2}","gi"),o=new RegExp("(%[a-f0-9]{2})+","gi");function a(t,r){try{return decodeURIComponent(t.join(""))}catch(o){}if(1===t.length)return t;r=r||1;var e=t.slice(0,r),n=t.slice(r);return Array.prototype.concat.call([],a(e),a(n))}function i(t){try{return decodeURIComponent(t)}catch(o){for(var r=t.match(n),e=1;e<r.length;e++)r=(t=a(r,e).join("")).match(n);return t}}t.exports=function(t){if("string"!==typeof t)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof t+"`");try{return t=t.replace(/\+/g," "),decodeURIComponent(t)}catch(r){return function(t){for(var e={"%FE%FF":"\ufffd\ufffd","%FF%FE":"\ufffd\ufffd"},n=o.exec(t);n;){try{e[n[0]]=decodeURIComponent(n[0])}catch(r){var a=i(n[0]);a!==n[0]&&(e[n[0]]=a)}n=o.exec(t)}e["%C2"]="\ufffd";for(var c=Object.keys(e),u=0;u<c.length;u++){var s=c[u];t=t.replace(new RegExp(s,"g"),e[s])}return t}(t)}}},75:function(t,r,e){"use strict";t.exports=function(t,r){if("string"!==typeof t||"string"!==typeof r)throw new TypeError("Expected the arguments to be of type `string`");if(""===r)return[t];var e=t.indexOf(r);return-1===e?[t]:[t.slice(0,e),t.slice(e+r.length)]}},76:function(t,r,e){t.exports={wrapper:"MoviesPage_wrapper__3ROKd",form:"MoviesPage_form__3dJTH"}},84:function(t,r,e){"use strict";e.r(r);var n=e(32),o=e(0),a=e.n(o),i=e(1),c=e(31),u=e(63),s=e.n(u),f=e(76),l=e.n(f),p=Object(o.lazy)((function(){return e.e(9).then(e.bind(null,78))}));r.default=function(t){var r=t.location,e=Object(o.useState)(""),u=Object(n.a)(e,2),f=u[0],y=u[1],m=Object(o.useState)([]),d=Object(n.a)(m,2),v=d[0],b=d[1],g=s.a.parse(r.search),h=Object(i.g)();Object(o.useEffect)((function(){g.query&&j(g.query)}),[g.query]);var j=function(t){Object(c.b)("/search/movie",t).then((function(t){return b(t.data.results)}))};return a.a.createElement("div",{className:l.a.wrapper},a.a.createElement("form",{className:l.a.form,onSubmit:function(t){t.preventDefault(),f&&(j(f),y(""),h.push("/goit-react-hw-04-movies/movies?query=".concat(f)))}},a.a.createElement("input",{type:"input",onChange:function(t){var r=t.target;y(r.value)},value:f}),a.a.createElement("button",{type:"submit"},"Search")),a.a.createElement("ul",null,a.a.createElement(o.Suspense,{fallback:a.a.createElement("p",null,"Loading")},a.a.createElement(i.d,null,a.a.createElement(i.b,{search:"/goit-react-hw-04-movies/movies?query=input",render:function(t){return a.a.createElement(p,Object.assign({},t,{findMovies:v}))}})))))}}}]);
//# sourceMappingURL=4.050eee3b.chunk.js.map