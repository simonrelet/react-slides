'use strict';

import React from 'react';
import LayoutVCM from 'templates/LayoutVCM';
import Icon from 'templates/Icon';

export default function Slide() {
  return (
    <LayoutVCM>
      <Icon
          src='https://tleunen.github.io/react-mdl/react.svg'
          height={ 100 }
          width={ 100 } />
      <h1>Let's React!</h1>
      <h3><i>Keep it <b>simple</b>.</i></h3>
      <h3><i>Everthing can be a <b>component</b>.</i></h3>
    </LayoutVCM>
  );
}
