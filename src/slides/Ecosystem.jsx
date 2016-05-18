'use strict';

import React from 'react';
import LayoutVCM from 'templates/LayoutVCM';

export default function Slide() {
  return (
    <LayoutVCM>
      <h1>Ecosystem</h1>
      <h3>Bundle with <b>Webpack</b>.</h3>
      <h3>Transpile with <b>Babel</b>.</h3>
      <h3>Manage styles with <b>Style loader</b>.</h3>
    </LayoutVCM>
  );
}
