"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4702],{4702:function(e,a,i){i.r(a),a.default={components:{74:function(){function e(a){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(a)}(a=i(6836))&&a.__esModule;var a,t=function(a,i){if(!i&&a&&a.__esModule)return a;if(null===a||"object"!==e(a)&&"function"!==typeof a)return{default:a};var t=n(i);if(t&&t.has(a))return t.get(a);var p={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in a)if("default"!==s&&Object.prototype.hasOwnProperty.call(a,s)){var r=o?Object.getOwnPropertyDescriptor(a,s):null;r&&(r.get||r.set)?Object.defineProperty(p,s,r):p[s]=a[s]}p.default=a,t&&t.set(a,p);return p}(i(8573)),p=i(5775);function n(e){if("function"!==typeof WeakMap)return null;var a=new WeakMap,i=new WeakMap;return(n=function(e){return e?i:a})(e)}var o=function(){return t.default.createElement("div",null,t.default.createElement(p.Map,{style:{height:300}},t.default.createElement(p.ScaleControl,{offset:[16,30],position:"LB"}),t.default.createElement(p.ToolBarControl,{offset:[16,10],position:"RB"}),t.default.createElement(p.ControlBarControl,{offset:[16,180],position:"RB"}),t.default.createElement(p.Geolocation,{maximumAge:1e5,borderRadius:"5px",position:"RB",offset:[16,80],zoomToAccuracy:!0,showCircle:!0})),t.default.createElement(p.Map,{style:{height:300}},(function(e){e.AMap,e.map,e.container})))};return function(){return t.default.createElement(p.APILoader,{version:"2.0.5",akey:"a7a90e05a37d3f6bf76d4a9032fc9129"},t.default.createElement(o,null))}}()},data:{74:{name:74,meta:{},code:'"use strict";\n\nfunction _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }\nvar _reactDom = _interopRequireDefault(require("react-dom"));\nvar _react = _interopRequireWildcard(require("react"));\nvar _reactAmap = require("@uiw/react-amap");\nfunction _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }\nfunction _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\nvar Demo = function Demo() {\n  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_reactAmap.Map, {\n    style: {\n      height: 300\n    }\n  }, /*#__PURE__*/_react["default"].createElement(_reactAmap.ScaleControl, {\n    offset: [16, 30],\n    position: "LB"\n  }), /*#__PURE__*/_react["default"].createElement(_reactAmap.ToolBarControl, {\n    offset: [16, 10],\n    position: "RB"\n  }), /*#__PURE__*/_react["default"].createElement(_reactAmap.ControlBarControl, {\n    offset: [16, 180],\n    position: "RB"\n  }), /*#__PURE__*/_react["default"].createElement(_reactAmap.Geolocation, {\n    maximumAge: 100000,\n    borderRadius: "5px",\n    position: "RB",\n    offset: [16, 80],\n    zoomToAccuracy: true,\n    showCircle: true\n  })), /*#__PURE__*/_react["default"].createElement(_reactAmap.Map, {\n    style: {\n      height: 300\n    }\n  }, function (_ref) {\n    var AMap = _ref.AMap,\n      map = _ref.map,\n      container = _ref.container;\n    return;\n  }));\n};\nvar Mount = function Mount() {\n  return /*#__PURE__*/_react["default"].createElement(_reactAmap.APILoader, {\n    version: "2.0.5",\n    akey: "a7a90e05a37d3f6bf76d4a9032fc9129"\n  }, /*#__PURE__*/_react["default"].createElement(Demo, null));\n};\nreturn Mount;',language:"jsx",value:'import ReactDOM from \'react-dom\';\nimport React, { useEffect, useRef, Fragment } from \'react\';\nimport { Map, APILoader, ScaleControl, ToolBarControl, ControlBarControl, Geolocation } from \'@uiw/react-amap\';\n\nconst Demo = () => (\n  <div>\n    <Map style={{ height: 300 }}>\n      <ScaleControl offset={[16, 30]} position="LB" />\n      <ToolBarControl offset={[16, 10]} position="RB" />\n      <ControlBarControl offset={[16, 180]} position="RB" />\n      <Geolocation\n        maximumAge={100000}\n        borderRadius="5px"\n        position="RB"\n        offset={[16, 80]}\n        zoomToAccuracy={true}\n        showCircle={true}\n      />\n    </Map>\n    <Map style={{ height: 300 }}>\n      {({ AMap, map, container }) => {\n        return;\n      }}\n    </Map>\n  </div>\n);\n\nconst Mount = () => (\n  <APILoader version="2.0.5" akey="a7a90e05a37d3f6bf76d4a9032fc9129">\n    <Demo />\n  </APILoader>\n)\nexport default Mount'}},source:'<br /><br />\n<p align="center">\n  <a href="https://github.com/uiwjs/react-amap">\n    <img src="https://uiwjs.github.io/react-amap/logo.svg" height="80px" alt="\u9ad8\u5fb7\u5730\u56fe React \u7ec4\u4ef6 logo" />\n  </a>\n</p>\n<h3 align="center">\u9ad8\u5fb7\u5730\u56fe React \u7ec4\u4ef6</h3>\n\n<p align="center">\n  <a href="https://github.com/uiwjs/react-amap/actions">\n    <img src="https://github.com/uiwjs/react-amap/workflows/Build%20and%20Deploy/badge.svg" alt="Build & Deploy">\n  </a>\n  <a href="https://www.npmjs.com/package/@uiw/react-amap">\n    <img src="https://img.shields.io/npm/dm/@uiw/react-amap.svg?style=flat" alt="Downloads">\n  </a>\n  <a href="https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-amap/file/README.md">\n    <img src="https://img.shields.io/badge/Open%20in-unpkg-blue" alt="Open in unpkg">\n  </a>\n  <a href="https://www.npmjs.com/package/@uiw/react-amap">\n    <img src="https://img.shields.io/npm/v/@uiw/react-amap.svg" alt="npm version">\n  </a>\n  <a href="https://gitee.com/uiw/react-amap">\n    <img src="https://jaywcjlove.github.io/sb/ico/gitee.svg" alt="Gitee Repo">\n  </a>\n</p>\n\n\u8fd9\u662f\u4e00\u4e2a\u57fa\u4e8e React \u5c01\u88c5\u7684\u9ad8\u5fb7\u5730\u56fe\u7ec4\u4ef6\uff0c\u5e2e\u52a9\u4f60\u8f7b\u677e\u7684\u63a5\u5165\u5730\u56fe\u5230 React \u9879\u76ee\u4e2d\u3002\u9664\u4e86\u5fc5\u987b\u5f15\u7528\u7684 APILoader/Map \u7ec4\u4ef6\u5916\uff0c\u6211\u4eec\u76ee\u524d\u63d0\u4f9b\u4e86\u6700\u5e38\u7528\u7684\u5730\u56fe\u7ec4\u4ef6\uff0c\u80fd\u6ee1\u8db3\u5927\u90e8\u5206\u7b80\u5355\u7684\u4e1a\u52a1\u573a\u666f\uff1b\u5982\u679c\u4f60\u6709\u66f4\u590d\u6742\u7684\u9700\u6c42\uff0c\u6216\u8005\u89c9\u5f97\u9ed8\u8ba4\u63d0\u4f9b\u7684\u7ec4\u4ef6\u529f\u80fd\u4e0d\u591f\uff0c\u53ef\u4ee5\u4f7f\u7528 Map \u7ec4\u4ef6\u8fd4\u56de\u7684\u5730\u56fe\u5b9e\u4f8b\uff0c\u5b8c\u5168\u81ea\u5b9a\u4e49\u4e00\u4e2a\u5730\u56fe\u7ec4\u4ef6\uff0c\u7136\u540e\u6839\u636e\u9ad8\u5fb7\u539f\u751f API \u505a\u9ad8\u5fb7\u5141\u8bb8\u4f60\u505a\u7684\u4e00\u5207\u4e8b\u60c5\u3002\n\n\u6587\u6863\u5b9e\u4f8b\u9884\u89c8: [Github Web](https://uiwjs.github.io/react-amap/) | [Gitee Web](https://uiw.gitee.io/react-amap)\n\n### \u7279\u6027\n\n- \u267b\ufe0f \u81ea\u52a8\u52a0\u8f7d\u9ad8\u5fb7\u5730\u56fe SDK\uff08\u901a\u8fc7\u521b\u5efa Script \u6807\u7b7e\u7684\u5f62\u5f0f\u52a0\u8f7d\uff09\uff0c\u5305\u62ec\u7b2c\u4e09\u65b9 SDK\u3002\n- \ud83d\udcda \u4f7f\u7528 Typescript \u7f16\u5199\uff0c\u96c6\u6210\u9ad8\u5fb7\u5730\u56fe SDK [@type](https://github.com/uiwjs/react-amap/tree/master/packages/types) \u58f0\u660e\u6587\u4ef6\uff08\u5305\u62ec\u4e2d\u6587\u6ce8\u91ca\uff09\u3002\n- \u269b\ufe0f \u652f\u6301 React Hook \u65b0\u589e\u7279\u6027\uff08\u9700\u8981 React 16.8+\uff09\u3002\n- \ud83d\udc9d \u4e0d\u4f9d\u8d56\u4efb\u4f55\u7b2c\u4e09\u65b9\u7ec4\u4ef6\u3002\n- \ud83d\udce6 \u62c6\u5206\u6210\u591a\u4e2a\u5305\uff0c\u6309\u9700\u4f7f\u7528\u5305\u3002\n\n### \u5b89\u88c5\n\n> \u4e0d\u4f9d\u8d56 [`uiw`](https://github.com/uiwjs/uiw) \u7ec4\u4ef6\u5e93\n\n```bash\n# \u96c6\u6210\u4e86\u6240\u6709\u4f9d\u8d56\u5305\nnpm install @uiw/react-amap --save\n\n# \u6216\u8005\u6309\u9700\u5b89\u88c5\u5305\nnpm install @uiw/react-amap-map @uiw/react-amap-api-loader --save\n```\n\n`v4` \u5347\u7ea7\u5230 `v5`\uff0c`APILoader` \u4e3b\u8981\u662f\u5bf9 `APILoader` \u505a\u4e86\u5347\u7ea7\uff0c~~`akay`~~ => `akey`\n\n```diff\n <APILoader\n-  akay\n-  protocol\n-  hostAndPath\n-  callbackName\n-  plugin\n-  disableScripts\n+  akey\n+  plugins\n+  AMapUI\n+  Loca\n>\n  <Map style={{ height: 100 }} />\n </APILoader>\n```\n\n### \u4f7f\u7528\n\n[![Open in CodeSandbox](https://img.shields.io/badge/Open%20in-CodeSandbox-blue?logo=codesandbox)](https://codesandbox.io/embed/react-amap-example-y0n6c-y0n6c?fontsize=14&hidenavigation=1&theme=dark)\n\n```jsx mdx:preview\nimport ReactDOM from \'react-dom\';\nimport React, { useEffect, useRef, Fragment } from \'react\';\nimport { Map, APILoader, ScaleControl, ToolBarControl, ControlBarControl, Geolocation } from \'@uiw/react-amap\';\n\nconst Demo = () => (\n  <div>\n    <Map style={{ height: 300 }}>\n      <ScaleControl offset={[16, 30]} position="LB" />\n      <ToolBarControl offset={[16, 10]} position="RB" />\n      <ControlBarControl offset={[16, 180]} position="RB" />\n      <Geolocation\n        maximumAge={100000}\n        borderRadius="5px"\n        position="RB"\n        offset={[16, 80]}\n        zoomToAccuracy={true}\n        showCircle={true}\n      />\n    </Map>\n    <Map style={{ height: 300 }}>\n      {({ AMap, map, container }) => {\n        return;\n      }}\n    </Map>\n  </div>\n);\n\nconst Mount = () => (\n  <APILoader version="2.0.5" akey="a7a90e05a37d3f6bf76d4a9032fc9129">\n    <Demo />\n  </APILoader>\n)\nexport default Mount\n```\n\n### \u5bb9\u5668\u7ec4\u4ef6\n\nPackage | Bundle size(gzip) | Version/unpkg\n----- | ----- | ----\n[`@uiw/react-amap`](https://uiwjs.github.io/react-amap/) \u96c6\u6210\u6240\u6709\u5305 | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-amap?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-amap) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-amap?color=green&label=)](https://bundlephobia.com/package/@uiw/react-amap) | [![npm version](https://img.shields.io/npm/v/@uiw/react-amap.svg)](https://www.npmjs.com/package/@uiw/react-amap) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-amap/file/README.md)\n[`@uiw/react-amap-api-loader`](https://uiwjs.github.io/react-amap/#/api-loader) \u52a0\u8f7d SDK (\u5fc5\u987b) | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-amap-api-loader?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-amap-api-loader) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-amap-api-loader?color=green&label=)](https://bundlephobia.com/package/@uiw/react-amap-api-loader) | [![npm version](https://img.shields.io/npm/v/@uiw/react-amap-api-loader.svg)](https://www.npmjs.com/package/@uiw/react-amap-api-loader) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-amap-api-loader/file/README.md)\n[`@uiw/react-amap-map`](https://uiwjs.github.io/react-amap/#/map) \u52a0\u8f7d\u5730\u56fe(\u5bb9\u5668) | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-amap-map?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-amap-map) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-amap-map?color=green&label=)](https://bundlephobia.com/package/@uiw/react-amap-map) | [![npm version](https://img.shields.io/npm/v/@uiw/react-amap-map.svg)](https://www.npmjs.com/package/@uiw/react-amap-map) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-amap-map/file/README.md)\n\n### \u63a7\u4ef6\u7ec4\u4ef6\n\nPackage | Bundle size(gzip) | Version/unpkg\n----- | ----- | ----\n[`@uiw/react-amap-scale-control`](https://uiwjs.github.io/react-amap/#/scale-control) | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-amap-scale-control?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-amap-scale-control) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-amap-scale-control?color=green&label=)](https://bundlephobia.com/package/@uiw/react-amap-scale-control) | [![npm version](https://img.shields.io/npm/v/@uiw/react-amap-scale-control.svg)](https://www.npmjs.com/package/@uiw/react-amap-scale-control) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-amap-scale-control/file/README.md)\n[`@uiw/react-amap-control-bar-control`](https://uiwjs.github.io/react-amap/#/control-bar-control) | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-amap-control-bar-control?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-amap-control-bar-control) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-amap-control-bar-control?color=green&label=)](https://bundlephobia.com/package/@uiw/react-amap-control-bar-control) | [![npm version](https://img.shields.io/npm/v/@uiw/react-amap-control-bar-control.svg)](https://www.npmjs.com/package/@uiw/react-amap-control-bar-control) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-amap-control-bar-control/file/README.md)\n[`@uiw/react-amap-hawk-eye-control`](https://uiwjs.github.io/react-amap/#/hawk-eye-control) | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-amap-hawk-eye-control?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-amap-hawk-eye-control) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-amap-hawk-eye-control?color=green&label=)](https://bundlephobia.com/package/@uiw/react-amap-hawk-eye-control) | [![npm version](https://img.shields.io/npm/v/@uiw/react-amap-hawk-eye-control.svg)](https://www.npmjs.com/package/@uiw/react-amap-hawk-eye-control) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-amap-hawk-eye-control/file/README.md)\n[`@uiw/react-amap-map-type-control`](https://uiwjs.github.io/react-amap/#/map-type-control) | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-amap-map-type-control?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-amap-map-type-control) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-amap-map-type-control?color=green&label=)](https://bundlephobia.com/package/@uiw/react-amap-map-type-control) | [![npm version](https://img.shields.io/npm/v/@uiw/react-amap-map-type-control.svg)](https://www.npmjs.com/package/@uiw/react-amap-map-type-control) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-amap-map-type-control/file/README.md)\n[`@uiw/react-amap-tool-bar-control`](https://uiwjs.github.io/react-amap/#/tool-bar-control) | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-amap-tool-bar-control?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-amap-tool-bar-control) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-amap-tool-bar-control?color=green&label=)](https://bundlephobia.com/package/@uiw/react-amap-tool-bar-control) | [![npm version](https://img.shields.io/npm/v/@uiw/react-amap-tool-bar-control.svg)](https://www.npmjs.com/package/@uiw/react-amap-tool-bar-control) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-amap-tool-bar-control/file/README.md)\n\n### \u8986\u76d6\u7269\n\nPackage | Bundle size(gzip) | Version/unpkg\n----- | ----- | ----\n[`@uiw/react-amap-marker`](https://uiwjs.github.io/react-amap/#/marker) \u70b9\u6807\u8bb0 | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-amap-marker?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-amap-marker) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-amap-marker?color=green&label=)](https://bundlephobia.com/package/@uiw/react-amap-marker) | [![npm version](https://img.shields.io/npm/v/@uiw/react-amap-marker.svg)](https://www.npmjs.com/package/@uiw/react-amap-marker) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-amap-marker/file/README.md)\n[`@uiw/react-amap-label-marker`](https://uiwjs.github.io/react-amap/#/label-marker) \u70b9\u6807\u8bb0 | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-amap-label-marker?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-amap-label-marker) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-amap-label-marker?color=green&label=)](https://bundlephobia.com/package/@uiw/react-amap-label-marker) | [![npm version](https://img.shields.io/npm/v/@uiw/react-amap-label-marker.svg)](https://www.npmjs.com/package/@uiw/react-amap-label-marker) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-amap-label-marker/file/README.md)\n[`@uiw/react-amap-text`](https://uiwjs.github.io/react-amap/#/text) \u6587\u672c\u6807\u8bb0 | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-amap-text?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-amap-text) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-amap-text?color=green&label=)](https://bundlephobia.com/package/@uiw/react-amap-text) | [![npm version](https://img.shields.io/npm/v/@uiw/react-amap-text.svg)](https://www.npmjs.com/package/@uiw/react-amap-text) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-amap-text/file/README.md)\n[`@uiw/react-amap-tile-layer`](https://uiwjs.github.io/react-amap/#/tile-layer) \u6587\u672c\u6807\u8bb0 | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-amap-tile-layer?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-amap-tile-layer) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-amap-tile-layer?color=green&label=)](https://bundlephobia.com/package/@uiw/react-amap-tile-layer) | [![npm version](https://img.shields.io/npm/v/@uiw/react-amap-tile-layer.svg)](https://www.npmjs.com/package/@uiw/react-amap-tile-layer) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-amap-tile-layer/file/README.md)\n[`@uiw/react-amap-polyline`](https://uiwjs.github.io/react-amap/#/polyline) \u6298\u7ebf | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-amap-polyline?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-amap-polyline) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-amap-polyline?color=green&label=)](https://bundlephobia.com/package/@uiw/react-amap-polyline) | [![npm version](https://img.shields.io/npm/v/@uiw/react-amap-polyline.svg)](https://www.npmjs.com/package/@uiw/react-amap-polyline) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-amap-polyline/file/README.md)\n[`@uiw/react-amap-polyline-editor`](https://uiwjs.github.io/react-amap/#/polyline-editor) \u6298\u7ebf\u7f16\u8f91\u5668 | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-amap-polyline-editor?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-amap-polyline-editor) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-amap-polyline-editor?color=green&label=)](https://bundlephobia.com/package/@uiw/react-amap-polyline-editor) | [![npm version](https://img.shields.io/npm/v/@uiw/react-amap-polyline-editor.svg)](https://www.npmjs.com/package/@uiw/react-amap-polyline-editor) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-amap-polyline-editor/file/README.md)\n[`@uiw/react-amap-poly-editor`](https://uiwjs.github.io/react-amap/#/poly-editor) \u6298\u7ebf\u7f16\u8f91\u5668 | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-amap-poly-editor?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-amap-poly-editor) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-amap-poly-editor?color=green&label=)](https://bundlephobia.com/package/@uiw/react-amap-poly-editor) | [![npm version](https://img.shields.io/npm/v/@uiw/react-amap-poly-editor.svg)](https://www.npmjs.com/package/@uiw/react-amap-poly-editor) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-amap-poly-editor/file/README.md)\n[`@uiw/react-amap-circle`](https://uiwjs.github.io/react-amap/#/circle) \u5706\u5f62 | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-amap-circle?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-amap-circle) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-amap-circle?color=green&label=)](https://bundlephobia.com/package/@uiw/react-amap-circle) | [![npm version](https://img.shields.io/npm/v/@uiw/react-amap-circle.svg)](https://www.npmjs.com/package/@uiw/react-amap-circle) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-amap-circle/file/README.md)\n[`@uiw/react-amap-circle-marker`](https://uiwjs.github.io/react-amap/#/circle-marker) \u5706\u70b9\u6807\u8bb0 | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-amap-circle-marker?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-amap-circle-marker) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-amap-circle-marker?color=green&label=)](https://bundlephobia.com/package/@uiw/react-amap-circle-marker) | [![npm version](https://img.shields.io/npm/v/@uiw/react-amap-circle-marker.svg)](https://www.npmjs.com/package/@uiw/react-amap-circle-marker) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-amap-circle-marker/file/README.md)\n[`@uiw/react-amap-ellipse`](https://uiwjs.github.io/react-amap/#/ellipse) \u5706\u5f62\u7ec4\u4ef6 | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-amap-ellipse?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-amap-ellipse) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-amap-ellipse?color=green&label=)](https://bundlephobia.com/package/@uiw/react-amap-ellipse) | [![npm version](https://img.shields.io/npm/v/@uiw/react-amap-ellipse.svg)](https://www.npmjs.com/package/@uiw/react-amap-ellipse) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-amap-ellipse/file/README.md)\n[`@uiw/react-amap-rectangle`](https://uiwjs.github.io/react-amap/#/rectangle) \u77e9\u5f62 | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-amap-rectangle?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-amap-rectangle) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-amap-rectangle?color=green&label=)](https://bundlephobia.com/package/@uiw/react-amap-rectangle) | [![npm version](https://img.shields.io/npm/v/@uiw/react-amap-rectangle.svg)](https://www.npmjs.com/package/@uiw/react-amap-rectangle) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-amap-rectangle/file/README.md)\n[`@uiw/react-amap-bezier-curve`](https://uiwjs.github.io/react-amap/#/bezier-curve) \u8d1d\u585e\u5c14\u66f2\u7ebf | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-amap-bezier-curve?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-amap-bezier-curve) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-amap-bezier-curve?color=green&label=)](https://bundlephobia.com/package/@uiw/react-amap-bezier-curve) | [![npm version](https://img.shields.io/npm/v/@uiw/react-amap-bezier-curve.svg)](https://www.npmjs.com/package/@uiw/react-amap-bezier-curve) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-amap-bezier-curve/file/README.md)\n[`@uiw/react-amap-polygon`](https://uiwjs.github.io/react-amap/#/polygon) \u591a\u8fb9\u5f62 | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-amap-polygon?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-amap-polygon) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-amap-polygon?color=green&label=)](https://bundlephobia.com/package/@uiw/react-amap-polygon) | [![npm version](https://img.shields.io/npm/v/@uiw/react-amap-polygon.svg)](https://www.npmjs.com/package/@uiw/react-amap-polygon) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-amap-polygon/file/README.md)\n[`@uiw/react-amap-polygon-editor`](https://uiwjs.github.io/react-amap/#/polygon-editor) \u591a\u8fb9\u5f62 | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-amap-polygon-editor?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-amap-polygon-editor) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-amap-polygon-editor?color=green&label=)](https://bundlephobia.com/package/@uiw/react-amap-polygon-editor) | [![npm version](https://img.shields.io/npm/v/@uiw/react-amap-polygon-editor.svg)](https://www.npmjs.com/package/@uiw/react-amap-polygon-editor) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-amap-polygon-editor/file/README.md)\n[`@uiw/react-amap-mass-marks`](https://uiwjs.github.io/react-amap/#/mass-marks) \u6d77\u91cf\u70b9 | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-amap-mass-marks?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-amap-mass-marks) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-amap-mass-marks?color=green&label=)](https://bundlephobia.com/package/@uiw/react-amap-mass-marks) | [![npm version](https://img.shields.io/npm/v/@uiw/react-amap-mass-marks.svg)](https://www.npmjs.com/package/@uiw/react-amap-mass-marks) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-amap-mass-marks/file/README.md)\n[`@uiw/react-amap-mouse-tool`](https://uiwjs.github.io/react-amap/#/mouse-tool) \u7ed8\u5236\u5de5\u5177 | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-amap-mouse-tool?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-amap-mouse-tool) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-amap-mouse-tool?color=green&label=)](https://bundlephobia.com/package/@uiw/react-amap-mouse-tool) | [![npm version](https://img.shields.io/npm/v/@uiw/react-amap-mouse-tool.svg)](https://www.npmjs.com/package/@uiw/react-amap-mouse-tool) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-amap-mouse-tool/file/README.md)\n\n### \u4fe1\u606f\u7a97\u4f53 & \u53f3\u952e\u83dc\u5355\n\nPackage | Bundle size(gzip) | Version/unpkg\n----- | ----- | ----\n[`@uiw/react-amap-info-window`](https://uiwjs.github.io/react-amap/#/info-window) \u4fe1\u606f\u7a97\u4f53 | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-amap-info-window?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-amap-info-window) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-amap-info-window?color=green&label=)](https://bundlephobia.com/package/@uiw/react-amap-info-window) | [![npm version](https://img.shields.io/npm/v/@uiw/react-amap-info-window.svg)](https://www.npmjs.com/package/@uiw/react-amap-info-window) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-amap-info-window/file/README.md)\n[`@uiw/react-amap-context-menu`](https://uiwjs.github.io/react-amap/#/context-menu) \u53f3\u952e\u83dc\u5355 | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-amap-context-menu?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-amap-context-menu) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-amap-context-menu?color=green&label=)](https://bundlephobia.com/package/@uiw/react-amap-context-menu) | [![npm version](https://img.shields.io/npm/v/@uiw/react-amap-context-menu.svg)](https://www.npmjs.com/package/@uiw/react-amap-context-menu) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-amap-context-menu/file/README.md)\n\n### \u670d\u52a1\n\nPackage | Bundle size(gzip) | Version/unpkg\n----- | ----- | ----\n[`@uiw/react-amap-geolocation`](https://uiwjs.github.io/react-amap/#/geolocation) \u5b9a\u4f4d | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-amap-geolocation?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-amap-geolocation) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-amap-geolocation?color=green&label=)](https://bundlephobia.com/package/@uiw/react-amap-geolocation) | [![npm version](https://img.shields.io/npm/v/@uiw/react-amap-geolocation.svg)](https://www.npmjs.com/package/@uiw/react-amap-geolocation) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-amap-geolocation/file/README.md)\n[`@uiw/react-amap-weather`](https://uiwjs.github.io/react-amap/#/weather) \u5929\u6c14\u67e5\u8be2\u670d\u52a1 | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-amap-weather?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-amap-weather) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-amap-weather?color=green&label=)](https://bundlephobia.com/package/@uiw/react-amap-weather) | [![npm version](https://img.shields.io/npm/v/@uiw/react-amap-weather.svg)](https://www.npmjs.com/package/@uiw/react-amap-weather) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-amap-weather/file/README.md)\n[`@uiw/react-amap-auto-complete`](https://uiwjs.github.io/react-amap/#/auto-complete) \u8f93\u5165\u63d0\u793a | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-amap-auto-complete?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-amap-auto-complete) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-amap-auto-complete?color=green&label=)](https://bundlephobia.com/package/@uiw/react-amap-auto-complete) | [![npm version](https://img.shields.io/npm/v/@uiw/react-amap-auto-complete.svg)](https://www.npmjs.com/package/@uiw/react-amap-auto-complete) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-amap-auto-complete/file/README.md)\n\n### \u5176\u5b83\n\nPackage | Bundle size(gzip) | Version/unpkg\n----- | ----- | ----\n[`@uiw/react-amap-require-script`](https://uiwjs.github.io/react-amap/#/require-script) | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-amap-require-script?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-amap-require-script) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-amap-require-script?color=green&label=)](https://bundlephobia.com/package/@uiw/react-amap-require-script) | [![npm version](https://img.shields.io/npm/v/@uiw/react-amap-require-script.svg)](https://www.npmjs.com/package/@uiw/react-amap-require-script) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-amap-require-script/file/README.md)\n[`@uiw/react-amap-types`](https://uiwjs.github.io/react-amap/#/types) \u7c7b\u578b\u5b9a\u4e49 | [![](https://img.shields.io/npm/types/@uiw/react-amap-types)](https://www.npmjs.com/package/@uiw/react-amap-types) | [![npm version](https://img.shields.io/npm/v/@uiw/react-amap-types.svg)](https://www.npmjs.com/package/@uiw/react-amap-types) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-amap-types/file/README.md)\n[`@uiw/react-amap-utils`](https://uiwjs.github.io/react-amap/#/utils) | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-amap-utils?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-amap-utils) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-amap-utils?color=green&label=)](https://bundlephobia.com/package/@uiw/react-amap-utils) | [![npm version](https://img.shields.io/npm/v/@uiw/react-amap-utils.svg)](https://www.npmjs.com/package/@uiw/react-amap-utils) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-amap-utils/file/README.md)\n\n\n## \u5f00\u53d1\n\n```bash\nnpm install         # Step 1: \u5b89\u88c5\u4f9d\u8d56\nnpm run build       # Step 2: \u7f16\u8bd1\u6240\u6709\u5305\n\nnpm run start       # \u6587\u6863\u7f51\u7ad9\u8fd0\u884c\nnpm run watch:amap  # \u76d1\u542c\u7f16\u8bd1\u8f93\u51fa js \u6587\u4ef6, \u76d1\u542c\u7f16\u8bd1\u8f93\u51fa .d.ts \u7c7b\u578b\u6587\u4ef6\n```\n\n## \u76f8\u5173\u8fde\u63a5\n\n- [@uiw/react-baidu-map](https://github.com/uiwjs/react-baidu-map) \u767e\u5ea6\u5730\u56fe React \u7ec4\u4ef6\n- [\u9ad8\u5fb7\u62fe\u53d6\u5750\u6807\u7cfb\u7edf](https://lbs.amap.com/console/show/picker) \n- [\u5b98\u65b9\u793a\u4f8b\u4e2d\u5fc3](https://lbs.amap.com/demo-center/jsapi-v2) \n- [\u9ad8\u5fb7\u5730\u56fe JSAPI 2.0](https://a.amap.com/jsapi/static/doc/index.html) \n\n## Contributors\n\nAs always, thanks to our amazing contributors!\n\n<a href="https://github.com/uiwjs/react-amap/graphs/contributors">\n  <img src="https://uiwjs.github.io/react-amap/CONTRIBUTORS.svg" />\n</a>\n\nMade with [github-action-contributors](https://github.com/jaywcjlove/github-action-contributors).\n\n## License\n\nLicensed under the MIT License.',headings:[]}}}]);
//# sourceMappingURL=4702.3106727c.chunk.js.map