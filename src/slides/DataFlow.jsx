'use strict';

import React from 'react';
import LayoutVCM from 'templates/LayoutVCM';

export default function Slide() {
  return (
    <LayoutVCM>
      <h1>Data flow</h1>
      <h3><b>Unidirectional</b>.</h3>
      <h3>Receive data by <code><b>props</b></code>.</h3>
      <h3>Manage its <code><b>state</b></code>.</h3>
    </LayoutVCM>
  );
}
