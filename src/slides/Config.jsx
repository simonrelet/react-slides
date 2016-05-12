'use strict';

import React from 'react';
import Title from './Title';
import Library from './Library';
import LibraryVsFramework from './LibraryVsFramework';
import VirtualDOM from './VirtualDOM';
import RenderingLoop from './RenderingLoop';
import Demo from './Demo';
import JSX from './JSX';
import ItsJustJavaScript from './ItsJustJavaScript';
import Ecosystem from './Ecosystem';
import DataFlow from './DataFlow';
import PropsAndState from './PropsAndState';
import PropTypes from './PropTypes';
import DemoCodeVertical from './DemoCodeVertical';
import TodoDemo from './TodoDemo';

import HelloWorld from './examples/HelloWorld';
import HelloSomeone from './examples/HelloSomeone';

import helloWorldCode from '!!raw!./examples/HelloWorld';
import helloWorldCompiledCode from '!!raw!./examples/HelloWorld_compiled';
import helloYouCode from '!!raw!./examples/HelloYou';
import helloSomeoneCode from '!!raw!./examples/HelloSomeone';

export default {
  title: `Let's React`,
  subtitle: `Everything can be a component`,
  date: new Date().toISOString().slice(0, 10),
  slides: [
    <Title />,
    <Library />,
    <LibraryVsFramework />,
    <VirtualDOM />,
    <RenderingLoop />,
    <JSX />,
    <ItsJustJavaScript />,
    <Ecosystem />,
    <DemoCodeVertical
        title='HelloWorld.jsx'
        code={ helloWorldCode }>
      <HelloWorld />
    </DemoCodeVertical>,
    <DemoCodeVertical
        title='HelloWorld.jsx'
        code={ helloWorldCode }
        highlightLines={[ 0 ]}>
      <HelloWorld />
    </DemoCodeVertical>,
    <DemoCodeVertical
        title='HelloWorld.jsx'
        code={ helloWorldCode }
        highlightLines={[ 2, 8 ]}>
      <HelloWorld />
    </DemoCodeVertical>,
    <DemoCodeVertical
        title='HelloWorld.jsx'
        code={ helloWorldCode }
        highlightLines={[ 3, 4, 5, 6, 7 ]}>
      <HelloWorld />
    </DemoCodeVertical>,
    <DemoCodeVertical
        title='HelloWorld.jsx'
        code={ helloWorldCode }
        highlightLines={[ 5 ]}>
      <HelloWorld />
    </DemoCodeVertical>,
    <DemoCodeVertical
        title='HelloWorld.js  (compiled)'
        code={ helloWorldCompiledCode }
        highlightLines={[ 5 ]}>
      <HelloWorld />
    </DemoCodeVertical>,
    <DataFlow />,
    <PropsAndState />,
    <PropTypes />,
    <DemoCodeVertical
        title='HelloYou.jsx'
        code={ helloYouCode }>
      <h1>hello ???</h1>
    </DemoCodeVertical>,
    <DemoCodeVertical
        title='HelloYou.jsx'
        code={ helloYouCode }
        highlightLines={[ 0, 3, 4, 5, 9 ]}>
      <h1>hello ???</h1>
    </DemoCodeVertical>,
    <DemoCodeVertical
        title='HelloElie.jsx'
        code={ helloSomeoneCode }>
      <HelloSomeone />
    </DemoCodeVertical>,
    <DemoCodeVertical
        title='HelloElie.jsx'
        code={ helloSomeoneCode }
        highlightLines={[ 1, 6 ]}>
      <HelloSomeone />
    </DemoCodeVertical>,
    <Demo question={ true } />,
    <Demo question={ false } />,
    <TodoDemo />
  ]
};
