'use strict';

import Title from './Title';
import Library from './Library';
import LibraryVsFramework from './LibraryVsFramework';
import VirtualDOM from './VirtualDOM';
import VirtualDOMLoop from './VirtualDOMLoop';
import JSX from './JSX';
import HelloWorldExample from './HelloWorldExample';
import HelloWorldExampleCompiled from './HelloWorldExampleCompiled';

export default {
  title: `Let's React`,
  subtitle: `Everything can be a component`,
  date: new Date().toISOString().slice(0, 10),
  slides: [
    Title,
    Library,
    LibraryVsFramework,
    VirtualDOM,
    VirtualDOMLoop,
    JSX,
    HelloWorldExample,
    HelloWorldExampleCompiled
  ]
};
