(this["webpackJsonp@uiw/react-amap"]=this["webpackJsonp@uiw/react-amap"]||[]).push([[36],{1219:function(n,e,t){"use strict";t.r(e),e.default="Ellipse \u5706\u5f62\u7ec4\u4ef6\n===\n\n\u6784\u9020\u5706\u5f62\u5bf9\u8c61\uff0c\u901a\u8fc7 EllipseOptions \u6307\u5b9a\u591a\u8fb9\u5f62\u6837\u5f0f\n\n```jsx\nimport { Ellipse } from '@uiw/react-amap';\n```\n\n### \u57fa\u672c\u7528\u6cd5\n\n\x3c!--DemoStart,bgWhite,noScroll--\x3e \n```jsx\nimport React, { useState, useRef } from 'react';\nimport { Map, APILoader, Ellipse } from '@uiw/react-amap';\n\nconst Example = () => {\n  const [show, setShow] = useState(true);\n  return (\n    <>\n      <button onClick={() => setShow(!show)}>\n        {show ? '\u9690\u85cf' : '\u663e\u793a'}\n      </button>\n      <div style={{ width: '100%', height: '300px' }}>\n        <Map zoom={4}>\n          <Ellipse\n            visiable={show}\n            radius={[1000000, 200000]}\n            borderWeight={3}\n            strokeColor=\"#FF33FF\"\n            strokeOpacity={1}\n            strokeWeight={6}\n            strokeOpacity={0.2}\n            fillOpacity={0.4}\n            // \u7ebf\u6837\u5f0f\u8fd8\u652f\u6301 'dashed'\n            strokeStyle=\"dashed\"\n            strokeDasharray={[10, 10]}\n            fillColor=\"#1791fc\"\n            zIndex={50}\n            center={new AMap.LngLat(116.433322, 39.900255)}\n          />\n        </Map>\n      </div>\n    </>\n  );\n}\n\nReactDOM.render((\n  <APILoader akay=\"1c44726c39431f704d3e25cd51381e35\">\n    <Example />\n  </APILoader>\n), _mount_);\n```\n\x3c!--End--\x3e\n\n### Props\n\n[\u66f4\u591a\u53c2\u6570\u8bbe\u7f6e](https://github.com/uiwjs/react-amap/blob/24df253/src/types/overlay.d.ts#L425-L475)\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|--------- |-------- |--------- |-------- |\n| center | \t\u692d\u5706\u5706\u5fc3 | `LngLatLike` | - |\n\n### \u4e8b\u4ef6\n\n[\u4e8b\u4ef6\u7c7b\u578b\u6587\u6863](https://github.com/uiwjs/react-amap/blob/24df253/src/types/overlay.d.ts#L399-L423)\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b |\n| ---- | ---- | ---- |\n| onHide | \u9690\u85cf | `(): void;` |\n| onShow | \u663e\u793a | `(): void;` |"}}]);
//# sourceMappingURL=36.99993fb8.chunk.js.map