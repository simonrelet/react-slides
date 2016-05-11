'use strict';

import React from 'react';
import Layout from 'templates/containers/Layout';
import JSXDisplayer from 'templates/components/JSXDisplayer';
import HelloWorld from './examples/HelloWorld';
import helloWorldCompiledCode from '!!raw!./examples/HelloWorld_compiled';

export default function Slide() {
  return (
    <Layout
        direction='vertical'
        alignment='middle'
        packing='center'>
      <HelloWorld />
      <JSXDisplayer title='HelloWorld.js (compiled)' content={ helloWorldCompiledCode } />
    </Layout>
  );
}
