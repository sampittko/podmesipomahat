import React from 'react';

const shadow = () => (
  <filter id="drop-shadow" height="130%">
    <feGaussianBlur in="SourceAlpha" stdDeviation="6" />
    <feOffset dx="2" dy="2" result="offsetblur" />
    <feComponentTransfer>
      <feFuncA type="linear" slope="0.30" />
    </feComponentTransfer>
    <feMerge>
      <feMergeNode />
      <feMergeNode in="SourceGraphic" />
    </feMerge>
  </filter>
);

export default shadow