'use strict';

import React from 'react';
import LayoutVCM from 'templates/LayoutVCM';

export default function Slide() {
  return (
    <LayoutVCM>
      <img width='100px' src='https://tleunen.github.io/react-mdl/react.svg' />
      <h1>Let's React!</h1>
      <h3><i>Keep it <b>simple</b>.</i></h3>
      <h3><i>Everthing can be a <b>component</b>.</i></h3>
    </LayoutVCM>
  );
}
