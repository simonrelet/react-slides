'use strict';

import Title from './Title';
import Library from './Library';
import LibraryVsFramework from './LibraryVsFramework';
import VirtualDOM from './VirtualDOM';
import RenderingLoop from './RenderingLoop';
import Demo from './Demo';
import DemoForReal from './DemoForReal';
import JSX from './JSX';
import HelloWorldExample from './HelloWorldExample';
import HelloWorldExampleImport from './HelloWorldExampleImport';
import HelloWorldExampleComponent from './HelloWorldExampleComponent';
import HelloWorldExampleRender from './HelloWorldExampleRender';
import HelloWorldExampleJSX from './HelloWorldExampleJSX';
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
    RenderingLoop,
    JSX,
    HelloWorldExample,
    HelloWorldExampleImport,
    HelloWorldExampleComponent,
    HelloWorldExampleRender,
    HelloWorldExampleJSX,
    HelloWorldExampleCompiled,
    Demo,
    DemoForReal
  ]
};
