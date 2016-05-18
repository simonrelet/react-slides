'use strict';

import React from 'react';
import LayoutVCM from 'templates/LayoutVCM';

export default function Slide() {
  return (
    <LayoutVCM>
      <h1><code>{ '{ PropTypes }' }</code></h1>
      <h3>Allow <b>type checking</b> on <code>props</code>.</h3>
      <h3>Throw <b>explicite</b> exceptions.</h3>
      <code>Failed propType: Invalid prop `title` of type `number`</code>
      <code>supplied to `MyComponent`, expected `string`.</code>
      <code>Check the render method of `FaultyComponent`.</code>
      <h3>Can be used as <b>documentation</b>.</h3>
    </LayoutVCM>
  );
}
