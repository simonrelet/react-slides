'use strict';

import React from 'react';
import LayoutHSF from 'templates/containers/LayoutHSF';
import LayoutVCM from 'templates/containers/LayoutVCM';

export default function Slide() {
  return (
    <LayoutHSF>
      <LayoutVCM>
        <h2><code>props</code></h2>
        <p><b>Immutable</b>.</p>
        <p><code>props.children</code> contains... Children!</p>
      </LayoutVCM>
      <LayoutVCM>
        <h2><code>state</code></h2>
        <p><b>Mutable</b>.</p>
        <p>Explicite mutation by <code>setState()</code>.</p>
      </LayoutVCM>
    </LayoutHSF>
  );
}
