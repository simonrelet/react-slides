'use strict';

import React from 'react';
import LayoutHSF from 'templates/LayoutHSF';
import LayoutVCM from 'templates/LayoutVCM';

export default function Slide() {
  return (
    <LayoutHSF>
      <LayoutVCM>
        <h2><i>Library</i></h2>
        <p><b>A tool</b> to resolve just one <b>specific thing.</b></p>
      </LayoutVCM>
      <LayoutVCM>
        <h2><i>Framework</i></h2>
        <p>A <b>set of tools</b> to resolve a <b>lot of things.</b></p>
      </LayoutVCM>
    </LayoutHSF>
  );
}
