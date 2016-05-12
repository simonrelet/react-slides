'use strict';

import React from 'react';
import Title from './Title';
import Library from './Library';
import LibraryVsFramework from './LibraryVsFramework';
import VirtualDOM from './VirtualDOM';
import RenderingLoop from './RenderingLoop';
import Demo from './Demo';
import JSX from './JSX';
import HelloWorldExample from './HelloWorldExample';
import HelloWorldExampleCompiled from './HelloWorldExampleCompiled';

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
    <HelloWorldExample />,
    <HelloWorldExample highlightLines={[ 0 ]} />,
    <HelloWorldExample highlightLines={[ 2, 8 ]} />,
    <HelloWorldExample highlightLines={[ 3, 4, 5, 6, 7 ]} />,
    <HelloWorldExample highlightLines={[ 5 ]} />,
    <HelloWorldExampleCompiled />,
    <Demo question={ true } />,
    <Demo question={ false } />
  ]
};
