'use strict';

import React from 'react';
import LayoutVCM from 'templates/LayoutVCM';

export default function Slide() {
  return (
    <LayoutVCM>
      <h1>The DOM is <b>virtual</b></h1>
      <h3>JavaScript is <b>fast</b>, the DOM is <b>slow</b>.</h3>
    </LayoutVCM>
  );
}
