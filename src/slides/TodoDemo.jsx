'use strict';

import React from 'react';
import LayoutHSF from 'templates/containers/LayoutHSF';
import LayoutVCM from 'templates/containers/LayoutVCM';
import JSXDisplayer from 'templates/components/JSXDisplayer';
import Todo from './examples/Todo';
import todoCode from '!!raw!./examples/Todo';

export default function Slide() {
  return (
    <LayoutHSF>
      <LayoutVCM>
        <Todo />
      </LayoutVCM>
      <LayoutVCM>
        <JSXDisplayer
            title='Todo.jsx'
            content={ todoCode }
            highlightLines={[ ]} />
      </LayoutVCM>
    </LayoutHSF>
  );
}
