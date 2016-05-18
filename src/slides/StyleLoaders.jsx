'use strict';

import React from 'react';
import LayoutVCM from 'templates/LayoutVCM';

export default function Slide() {
  return (
    <LayoutVCM>
      <h1>Style loaders</h1>
      <h3><b>Import style file in JavaScript</b>.</h3>
      <h3><b>Hash local</b> class names.</h3>
      <h3><b>Export global</b> class names.</h3>
    </LayoutVCM>
  );
}
