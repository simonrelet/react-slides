'use strict';

import React from 'react';
import LayoutHSF from 'templates/LayoutHSF';
import LayoutVCM from 'templates/LayoutVCM';

export default function Slide() {
  return (
    <LayoutHSF>
      <LayoutVCM>
        <h2><i>Container</i></h2>
        <p>How things <b>works</b>.</p>
        <p><b>No DOM markups</b> (unless wrapping <code>div</code>), <b>no styles</b>.</p>
        <p><b>Provide</b> data and callbacks as <b><code>props</code></b>.</p>
        <p><b>Statefull</b>.</p>
        <p>Can be <b>functional</b>.</p>
      </LayoutVCM>
      <LayoutVCM>
        <h2><i>Presentation</i></h2>
        <p>How things <b>look</b>.</p>
        <p>Contains <b>DOM markups</b>, <b>styles</b>.</p>
        <p>Data and callbacks from <b><code>props</code></b>.</p>
        <p>Only <b>ui <code>states</code></b>.</p>
        <p>Mostly <b>functional</b>.</p>
      </LayoutVCM>
    </LayoutHSF>
  );
}
