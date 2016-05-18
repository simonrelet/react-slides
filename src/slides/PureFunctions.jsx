'use strict';

import React from 'react';
import LayoutVCM from 'templates/LayoutVCM';

export default function Slide() {
  return (
    <LayoutVCM>
      <h1>Pure functions</h1>
      <h3><b>Predictability</b> and <b>consistency</b>.</h3>
      <ul>
        <li>Same argument, same result.</li>
        <li>No dependencies on the app state.</li>
        <li>No side effects.</li>
      </ul>
    </LayoutVCM>
  );
}
