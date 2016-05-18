'use strict';

import React from 'react';
import LayoutVCM from 'templates/LayoutVCM';

export default function Slide() {
  return (
    <LayoutVCM>
      <h1>Links</h1>
      <h3><a href='https://github.com/enaqx/awesome-react'>
        Awesome React.
      </a></h3>
      <h3><a href='https://speakerdeck.com/pedronauck/reactjs-keep-simple-everything-can-be-a-component'>
        Keep Simple. Everything can be a component!
      </a></h3>
      <h3><a href='http://courses.reactjsprogram.com/courses'>
        React.js Program.
      </a></h3>
      <h3><a href='https://github.com/arkency/reactjs_koans'>
        Practical exercises from square one.
      </a></h3>
    </LayoutVCM>
  );
}
