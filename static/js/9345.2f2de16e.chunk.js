"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9345],{9345:function(e,t,n){n.r(t),t.default={components:{14:function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}(t=n(6836))&&t.__esModule;var t,r=function(t,n){if(!n&&t&&t.__esModule)return t;if(null===t||"object"!==e(t)&&"function"!==typeof t)return{default:t};var r=a(n);if(r&&r.has(t))return r.get(t);var o={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in t)if("default"!==u&&Object.prototype.hasOwnProperty.call(t,u)){var l=i?Object.getOwnPropertyDescriptor(t,u):null;l&&(l.get||l.set)?Object.defineProperty(o,u,l):o[u]=t[u]}o.default=t,r&&r.set(t,o);return o}(n(8573)),o=n(5775);function a(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(a=function(e){return e?n:t})(e)}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,i,u=[],l=!0,c=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=a.call(n)).done)&&(u.push(r.value),u.length!==t);l=!0);}catch(f){c=!0,o=f}finally{try{if(!l&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(c)throw o}}return u}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var l=function(){var e=i((0,r.useState)(!0),2),t=e[0],n=e[1];return r.default.createElement(r.default.Fragment,null,r.default.createElement("button",{onClick:function(){return n(!t)}},t?"\u9690\u85cf":"\u663e\u793a"),r.default.createElement("div",{style:{width:"100%",height:"300px"}},r.default.createElement(o.Map,null,r.default.createElement(o.MapTypeControl,{visiable:t,offset:[30,10],position:"RT"}),t&&r.default.createElement(o.MapTypeControl,{visiable:t,offset:[10,10],position:"RB"}))))};return function(){return r.default.createElement(o.APILoader,{akey:"a7a90e05a37d3f6bf76d4a9032fc9129"},r.default.createElement(l,null))}}()},data:{14:{name:14,meta:{},code:'"use strict";\n\nfunction _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }\nvar _reactDom = _interopRequireDefault(require("react-dom"));\nvar _react = _interopRequireWildcard(require("react"));\nvar _reactAmap = require("@uiw/react-amap");\nfunction _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }\nfunction _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\nvar Demo = function Demo() {\n  var _useState = (0, _react.useState)(true),\n    _useState2 = _slicedToArray(_useState, 2),\n    show = _useState2[0],\n    setShow = _useState2[1];\n  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("button", {\n    onClick: function onClick() {\n      return setShow(!show);\n    }\n  }, show ? \'\u9690\u85cf\' : \'\u663e\u793a\'), /*#__PURE__*/_react["default"].createElement("div", {\n    style: {\n      width: \'100%\',\n      height: \'300px\'\n    }\n  }, /*#__PURE__*/_react["default"].createElement(_reactAmap.Map, null, /*#__PURE__*/_react["default"].createElement(_reactAmap.MapTypeControl, {\n    visiable: show,\n    offset: [30, 10],\n    position: "RT"\n  }), show && /*#__PURE__*/_react["default"].createElement(_reactAmap.MapTypeControl, {\n    visiable: show,\n    offset: [10, 10],\n    position: "RB"\n  }))));\n};\nvar Mount = function Mount() {\n  return /*#__PURE__*/_react["default"].createElement(_reactAmap.APILoader, {\n    akey: "a7a90e05a37d3f6bf76d4a9032fc9129"\n  }, /*#__PURE__*/_react["default"].createElement(Demo, null));\n};\nreturn Mount;',language:"jsx",value:"import ReactDOM from 'react-dom';\nimport React, { useState, useRef } from 'react';\nimport { Map, APILoader, MapTypeControl } from '@uiw/react-amap';\n\nconst Demo = () => {\n  const [show, setShow] = useState(true);\n  return (\n    <>\n      <button onClick={() => setShow(!show)}>\n        {show ? '\u9690\u85cf' : '\u663e\u793a'}\n      </button>\n      <div style={{ width: '100%', height: '300px' }}>\n        <Map>\n          <MapTypeControl\n            visiable={show}\n            offset={[30, 10]}\n            position=\"RT\"\n          />\n          {show && (\n            <MapTypeControl\n              visiable={show}\n              offset={[10, 10]}\n              position=\"RB\"\n            />\n          )}\n        </Map>\n      </div>\n    </>\n  );\n}\n\nconst Mount = () => (\n  <APILoader akey=\"a7a90e05a37d3f6bf76d4a9032fc9129\">\n    <Demo />\n  </APILoader>\n);\n\nexport default Mount;"}},source:"MapTypeControl \u7c7b\u578b\u5207\u6362\n===\n\n\u5730\u56fe\u7c7b\u578b\u5207\u6362\u63d2\u4ef6\u3002\u7528\u6237\u901a\u8fc7\u8be5\u63d2\u4ef6\u8fdb\u884c\u5730\u56fe\u5207\u6362\u3002\n\n```jsx\nimport { MapTypeControl } from '@uiw/react-amap';\n// \u6216\u8005\u5355\u72ec\u5b89\u88c5\u4f7f\u7528\nimport { MapTypeControl } from '@uiw/react-amap-map-type-control';\n```\n\n### \u57fa\u672c\u7528\u6cd5\n\n```jsx mdx:preview\nimport ReactDOM from 'react-dom';\nimport React, { useState, useRef } from 'react';\nimport { Map, APILoader, MapTypeControl } from '@uiw/react-amap';\n\nconst Demo = () => {\n  const [show, setShow] = useState(true);\n  return (\n    <>\n      <button onClick={() => setShow(!show)}>\n        {show ? '\u9690\u85cf' : '\u663e\u793a'}\n      </button>\n      <div style={{ width: '100%', height: '300px' }}>\n        <Map>\n          <MapTypeControl\n            visiable={show}\n            offset={[30, 10]}\n            position=\"RT\"\n          />\n          {show && (\n            <MapTypeControl\n              visiable={show}\n              offset={[10, 10]}\n              position=\"RB\"\n            />\n          )}\n        </Map>\n      </div>\n    </>\n  );\n}\n\nconst Mount = () => (\n  <APILoader akey=\"a7a90e05a37d3f6bf76d4a9032fc9129\">\n    <Demo />\n  </APILoader>\n);\n\nexport default Mount;\n```\n\n### Props\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n| ----- | ----- | ----- | ----- |\n| visiable | \u8986\u76d6\u7269\u662f\u5426\u53ef\u89c1\u3002 | `boolean` | - |\n| showRoad | \u8986\u76d6\u7269\u662f\u5426\u53ef\u89c1\u3002 | `boolean` | `false` |\n| showTraffic | \u53e0\u52a0\u5b9e\u65f6\u4ea4\u901a\u56fe\u5c42 \u9ed8\u8ba4\u503c\uff1afalse | `boolean` | `false` |\n| defaultType | \u521d\u59cb\u5316\u9ed8\u8ba4\u56fe\u5c42\u7c7b\u578b\u3002 \u53d6\u503c\u4e3a0\uff1a\u9ed8\u8ba4\u5e95\u56fe \u53d6\u503c\u4e3a1\uff1a\u536b\u661f\u56fe \u9ed8\u8ba4\u503c\uff1a0 | `number` | `0` |\n"}}}]);
//# sourceMappingURL=9345.2f2de16e.chunk.js.map