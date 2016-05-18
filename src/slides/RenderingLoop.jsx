'use strict';

import React from 'react';
import LayoutVCM from 'templates/LayoutVCM';

export default function Slide() {
  return (
    <LayoutVCM>
      <h2><i>Rendering loop</i></h2>
      <ol>
        <li>Some data has <b>Changed</b></li>
        <li><b>Build new</b> virtual DOM</li>
        <li><b>Diff</b> new with old</li>
        <li>Compute <b>minimal</b> sets of <b>mutations</b></li>
        <li><b>Execute</b> all updates</li>
      </ol>
    </LayoutVCM>
  );
}
