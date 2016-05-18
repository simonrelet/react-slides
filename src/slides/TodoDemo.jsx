'use strict';

import React from 'react';
import LayoutVCM from 'templates/LayoutVCM';
import TodoContainer from './examples/TodoContainer';

export default function Slide() {
  return (
    <LayoutVCM>
      <h1>Todo app</h1>
      <TodoContainer />
    </LayoutVCM>
  );
}
