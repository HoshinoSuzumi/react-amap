"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2166],{2166:function(e,n,t){t.r(n),n.default={components:{29:function(){function e(n){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(n)}(n=t(6836))&&n.__esModule;var n,o=function(n,t){if(!t&&n&&n.__esModule)return n;if(null===n||"object"!==e(n)&&"function"!==typeof n)return{default:n};var o=a(t);if(o&&o.has(n))return o.get(n);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in n)if("default"!==u&&Object.prototype.hasOwnProperty.call(n,u)){var c=l?Object.getOwnPropertyDescriptor(n,u):null;c&&(c.get||c.set)?Object.defineProperty(r,u,c):r[u]=n[u]}r.default=n,o&&o.set(n,r);return r}(t(8573)),r=t(5775);function a(e){if("function"!==typeof WeakMap)return null;var n=new WeakMap,t=new WeakMap;return(a=function(e){return e?t:n})(e)}function l(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var o,r,a,l,u=[],c=!0,i=!1;try{if(a=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;c=!1}else for(;!(c=(o=a.call(t)).done)&&(u.push(o.value),u.length!==n);c=!0);}catch(p){i=!0,r=p}finally{try{if(!c&&null!=t.return&&(l=t.return(),Object(l)!==l))return}finally{if(i)throw r}}return u}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return u(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return u(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,o=new Array(n);t<n;t++)o[t]=e[t];return o}var c=function(){var e=l((0,o.useState)(!1),2),n=e[0],t=e[1],a=l((0,o.useState)(),2),u=a[0],c=a[1],i=function(e){c(e),t(!0)};return o.default.createElement(o.default.Fragment,null,o.default.createElement("button",{onClick:function(){return i(r.MouseToolDrawType.MARKER)}},"\u7ed8\u5236 Marker"),o.default.createElement("button",{onClick:function(){return i(r.MouseToolDrawType.POLYLINE)}},"\u7ed8\u5236 Polyline"),o.default.createElement("button",{onClick:function(){return i(r.MouseToolDrawType.POLYGON)}},"\u7ed8\u5236 Polygon"),o.default.createElement("button",{onClick:function(){return i(r.MouseToolDrawType.CIRCLE)}},"\u7ed8\u5236\u5706\u5f62 Circle"),o.default.createElement("button",{onClick:function(){return i(r.MouseToolDrawType.RECTANGLE)}},"\u7ed8\u5236\u77e9\u5f62 Rectangle"),o.default.createElement("button",{onClick:function(){return i(r.MouseToolDrawType.MEASUREAREA)}},"\u7ed8\u5236 MeasureArea"),o.default.createElement("button",{onClick:function(){return i(r.MouseToolDrawType.RULE)}},"\u7ed8\u5236 Rule"),o.default.createElement("button",{onClick:function(){return i(r.MouseToolDrawType.RECTZOOMIN)}},"\u7ed8\u5236 RectZoomIn"),o.default.createElement("button",{onClick:function(){return i(r.MouseToolDrawType.RECTZOOMOUT)}},"\u7ed8\u5236 RectZoomOut"),o.default.createElement("div",{style:{width:"100%",height:"500px"}},o.default.createElement(r.Map,{zoom:14,center:[116.400274,39.905812],dragEnable:!1},o.default.createElement(r.MouseTool,{active:n,type:u,onDraw:function(e){t(!1),console.log("onDraw:>>",e)}}))))};return function(){return o.default.createElement(r.APILoader,{akey:"a7a90e05a37d3f6bf76d4a9032fc9129",plugin:"AMap.MouseTool"},o.default.createElement(c,null))}}()},data:{29:{name:29,meta:{},code:'"use strict";\n\nfunction _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }\nvar _reactDom = _interopRequireDefault(require("react-dom"));\nvar _react = _interopRequireWildcard(require("react"));\nvar _reactAmap = require("@uiw/react-amap");\nfunction _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }\nfunction _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\nvar Example = function Example() {\n  var _useState = (0, _react.useState)(false),\n    _useState2 = _slicedToArray(_useState, 2),\n    active = _useState2[0],\n    setActive = _useState2[1];\n  var _useState3 = (0, _react.useState)(),\n    _useState4 = _slicedToArray(_useState3, 2),\n    type = _useState4[0],\n    setType = _useState4[1];\n  var handleDraw = function handleDraw(type) {\n    setType(type);\n    setActive(true);\n  };\n  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("button", {\n    onClick: function onClick() {\n      return handleDraw(_reactAmap.MouseToolDrawType.MARKER);\n    }\n  }, "\\u7ED8\\u5236 Marker"), /*#__PURE__*/_react["default"].createElement("button", {\n    onClick: function onClick() {\n      return handleDraw(_reactAmap.MouseToolDrawType.POLYLINE);\n    }\n  }, "\\u7ED8\\u5236 Polyline"), /*#__PURE__*/_react["default"].createElement("button", {\n    onClick: function onClick() {\n      return handleDraw(_reactAmap.MouseToolDrawType.POLYGON);\n    }\n  }, "\\u7ED8\\u5236 Polygon"), /*#__PURE__*/_react["default"].createElement("button", {\n    onClick: function onClick() {\n      return handleDraw(_reactAmap.MouseToolDrawType.CIRCLE);\n    }\n  }, "\\u7ED8\\u5236\\u5706\\u5F62 Circle"), /*#__PURE__*/_react["default"].createElement("button", {\n    onClick: function onClick() {\n      return handleDraw(_reactAmap.MouseToolDrawType.RECTANGLE);\n    }\n  }, "\\u7ED8\\u5236\\u77E9\\u5F62 Rectangle"), /*#__PURE__*/_react["default"].createElement("button", {\n    onClick: function onClick() {\n      return handleDraw(_reactAmap.MouseToolDrawType.MEASUREAREA);\n    }\n  }, "\\u7ED8\\u5236 MeasureArea"), /*#__PURE__*/_react["default"].createElement("button", {\n    onClick: function onClick() {\n      return handleDraw(_reactAmap.MouseToolDrawType.RULE);\n    }\n  }, "\\u7ED8\\u5236 Rule"), /*#__PURE__*/_react["default"].createElement("button", {\n    onClick: function onClick() {\n      return handleDraw(_reactAmap.MouseToolDrawType.RECTZOOMIN);\n    }\n  }, "\\u7ED8\\u5236 RectZoomIn"), /*#__PURE__*/_react["default"].createElement("button", {\n    onClick: function onClick() {\n      return handleDraw(_reactAmap.MouseToolDrawType.RECTZOOMOUT);\n    }\n  }, "\\u7ED8\\u5236 RectZoomOut"), /*#__PURE__*/_react["default"].createElement("div", {\n    style: {\n      width: \'100%\',\n      height: \'500px\'\n    }\n  }, /*#__PURE__*/_react["default"].createElement(_reactAmap.Map, {\n    zoom: 14,\n    center: [116.400274, 39.905812],\n    dragEnable: false\n  }, /*#__PURE__*/_react["default"].createElement(_reactAmap.MouseTool, {\n    active: active,\n    type: type,\n    onDraw: function onDraw(e) {\n      setActive(false);\n      console.log(\'onDraw:>>\', e);\n    }\n  }))));\n};\nvar Mount = function Mount() {\n  return /*#__PURE__*/_react["default"].createElement(_reactAmap.APILoader, {\n    akey: "a7a90e05a37d3f6bf76d4a9032fc9129",\n    plugin: "AMap.MouseTool"\n  }, /*#__PURE__*/_react["default"].createElement(Example, null));\n};\nreturn Mount;',language:"jsx",value:"import ReactDOM from 'react-dom';\nimport React, { useState, useRef } from 'react';\nimport { Map, APILoader,  MouseTool,MouseToolDrawType } from '@uiw/react-amap';\n\nconst Example = () => {\n  const [active, setActive] = useState(false);\n  const [type,setType]=useState();\n  const handleDraw=(type)=>{\n    setType(type);\n    setActive(true);\n  }\n  return (\n    <>\n      <button onClick={() => handleDraw(MouseToolDrawType.MARKER)}>\n        \u7ed8\u5236 Marker\n      </button>\n      <button onClick={() => handleDraw(MouseToolDrawType.POLYLINE)}>\n        \u7ed8\u5236 Polyline\n      </button>\n      <button onClick={() => handleDraw(MouseToolDrawType.POLYGON)}>\n        \u7ed8\u5236 Polygon\n      </button>\n       <button onClick={() => handleDraw(MouseToolDrawType.CIRCLE)}>\n        \u7ed8\u5236\u5706\u5f62 Circle\n      </button>\n       <button onClick={() => handleDraw(MouseToolDrawType.RECTANGLE)}>\n        \u7ed8\u5236\u77e9\u5f62 Rectangle\n      </button>\n       <button onClick={() => handleDraw(MouseToolDrawType.MEASUREAREA)}>\n        \u7ed8\u5236 MeasureArea\n      </button>\n       <button onClick={() => handleDraw(MouseToolDrawType.RULE)}>\n        \u7ed8\u5236 Rule\n      </button>\n       <button onClick={() => handleDraw(MouseToolDrawType.RECTZOOMIN)}>\n        \u7ed8\u5236 RectZoomIn\n      </button>\n     <button onClick={() => handleDraw(MouseToolDrawType.RECTZOOMOUT)}>\n        \u7ed8\u5236 RectZoomOut\n      </button> \n      <div style={{ width: '100%', height: '500px' }}>\n        <Map zoom={14} center={[116.400274, 39.905812]} dragEnable={false}>\n            <MouseTool\n              active={active}\n              type={type}\n              onDraw={(e) => {\n                setActive(false);\n                console.log('onDraw:>>',e)\n              }}\n            />\n        </Map>\n      </div>\n    </>\n  );\n}\n\nconst Mount = () => (\n  <APILoader akey=\"a7a90e05a37d3f6bf76d4a9032fc9129\" plugin=\"AMap.MouseTool\">\n     <Example />\n  </APILoader>\n);\n\nexport default Mount;"}},source:"MouseTool \u7ed8\u5236\u5de5\u5177\n===\n\nMouseTool \u7ed8\u5236\u5de5\u5177\uff0c\u53ef\u4ee5\u652f\u6301\u7ed8\u5236 Marker\u3001Circle\u3001Rectangle\u3001Polyline\u3001Polygon \u7b49\u3002\u652f\u6301AMap JS API v1.4.xxx \u548c v2.0.xxx\u3002\n\u53c2\u8003 [AMap API](https://a.amap.com/jsapi/static/doc/20220913/index.html?v=2#mousetoolmarker)\u3002\n```jsx\nimport { MouseTool } from '@uiw/react-amap';\n// \u6216\u8005\u5355\u72ec\u5b89\u88c5\u4f7f\u7528\nimport { MouseTool } from '@uiw/react-amap-mouse-tool';\n```\n\n### \u57fa\u672c\u7528\u6cd5\n\n\u6ce8\u610f\uff0c\u9700\u8981\u52a0\u8f7d `<APILoader plugin=\"AMap.MouseTool\">`\uff0c\u9700\u8981\u52a0\u8f7d `AMap.MouseTool`\x3c!--rehype:style=background: #ffe3da;color: #ff5722;--\x3e \u63d2\u4ef6\uff0c\u5982\u679c\u70b9\u51fb\u8fdb\u5165\u5f53\u524d\u9875\u9762\uff0c\u9700\u8981 `\u5237\u65b0`\x3c!--rehype:style=background: #e91e63;color: #fff;--\x3e \u9875\u9762\u3002\n\n```jsx\n<APILoader plugin=\"AMap.MouseTool\">\n```\n\x3c!--rehype:style=background: #fff3b7;--\x3e\n\n\n### \u7ed8\u5236\n\n\u5229\u7528 `AMap.MouseTool` \u7ed8\u5236\u6298\u7ebf\u3001\u5f27\u7ebf\u3001\u591a\u8fb9\u5f62\u3001\u77e9\u5f62\u3001\u5706\u5f62\u7b49 [\u5b98\u65b9\u793a\u4f8b](https://lbs.amap.com/demo/jsapi-v2/example/overlayers/overlay-draw)\n\n> \u26a0\ufe0f \u6ce8\u610f\uff1a\u9700\u8981\u52a0\u8f7d `AMap.MouseTool`\x3c!--rehype:style=background: #ffe3da;color: #ff5722;--\x3e \u63d2\u4ef6\uff0c\u5982\u679c\u70b9\u51fb\u8fdb\u5165\u5f53\u524d\u9875\u9762\uff0c\u9700\u8981 `\u5237\u65b0`\x3c!--rehype:style=background: #e91e63;color: #fff;--\x3e \u9875\u9762\n\n\x3c!--rehype:--\x3e\n```jsx mdx:preview\nimport ReactDOM from 'react-dom';\nimport React, { useState, useRef } from 'react';\nimport { Map, APILoader,  MouseTool,MouseToolDrawType } from '@uiw/react-amap';\n\nconst Example = () => {\n  const [active, setActive] = useState(false);\n  const [type,setType]=useState();\n  const handleDraw=(type)=>{\n    setType(type);\n    setActive(true);\n  }\n  return (\n    <>\n      <button onClick={() => handleDraw(MouseToolDrawType.MARKER)}>\n        \u7ed8\u5236 Marker\n      </button>\n      <button onClick={() => handleDraw(MouseToolDrawType.POLYLINE)}>\n        \u7ed8\u5236 Polyline\n      </button>\n      <button onClick={() => handleDraw(MouseToolDrawType.POLYGON)}>\n        \u7ed8\u5236 Polygon\n      </button>\n       <button onClick={() => handleDraw(MouseToolDrawType.CIRCLE)}>\n        \u7ed8\u5236\u5706\u5f62 Circle\n      </button>\n       <button onClick={() => handleDraw(MouseToolDrawType.RECTANGLE)}>\n        \u7ed8\u5236\u77e9\u5f62 Rectangle\n      </button>\n       <button onClick={() => handleDraw(MouseToolDrawType.MEASUREAREA)}>\n        \u7ed8\u5236 MeasureArea\n      </button>\n       <button onClick={() => handleDraw(MouseToolDrawType.RULE)}>\n        \u7ed8\u5236 Rule\n      </button>\n       <button onClick={() => handleDraw(MouseToolDrawType.RECTZOOMIN)}>\n        \u7ed8\u5236 RectZoomIn\n      </button>\n     <button onClick={() => handleDraw(MouseToolDrawType.RECTZOOMOUT)}>\n        \u7ed8\u5236 RectZoomOut\n      </button> \n      <div style={{ width: '100%', height: '500px' }}>\n        <Map zoom={14} center={[116.400274, 39.905812]} dragEnable={false}>\n            <MouseTool\n              active={active}\n              type={type}\n              onDraw={(e) => {\n                setActive(false);\n                console.log('onDraw:>>',e)\n              }}\n            />\n        </Map>\n      </div>\n    </>\n  );\n}\n\nconst Mount = () => (\n  <APILoader akey=\"a7a90e05a37d3f6bf76d4a9032fc9129\" plugin=\"AMap.MouseTool\">\n     <Example />\n  </APILoader>\n);\n\nexport default Mount;\n```\n\n### Props\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|--------- |-------- |--------- |-------- |\n| active | \u662f\u5426\u5f00\u542f\u7f16\u8f91\u529f\u80fd\u3002 | `boolean` | - |\n| type | \u7ed8\u5236\u7c7b\u578b | `MouseToolDrawType` | - |\n| drawElementOptions | \u7ed8\u5236\u5143\u7d20\u7684\u53c2\u6570 | `AMap.PolygonOptions | AMap.PolylineOptions | AMap.MarkerOptions | AMap.CircleOptions` | {} |\n| onDraw | \u7ed8\u5236\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570 | `(event:  MouseToolDrawedEvent): void;` |\n| ifClear | \u9f20\u6807\u64cd\u4f5c\u5173\u95ed\u7684\u540c\u65f6\u6e05\u9664\u5730\u56fe\u4e0a\u7ed8\u5236\u7684\u6240\u6709\u8986\u76d6\u7269\u5bf9\u8c61 | `false` |\n"}}}]);
//# sourceMappingURL=2166.e1d50af3.chunk.js.map