'use strict';

import React from 'react';
import Layout from 'templates/containers/Layout';
import JSXDisplayer from 'templates/components/JSXDisplayer';
import HelloWorld from './examples/HelloWorld';
import helloWorldCode from '!!raw!./examples/HelloWorld';

export default function Slide() {
  return (
    <Layout
        direction='vertical'
        alignment='middle'
        packing='center'>
      <HelloWorld />
      <JSXDisplayer
          title='HelloWorld.jsx'
          content={ helloWorldCode }
          highlightLines={[ 2, 8 ]} />
    </Layout>
  );
}
