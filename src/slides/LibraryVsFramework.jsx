'use strict';

import React from 'react';
import Layout from 'templates/containers/Layout';

export default function Slide() {
  return (
    <Layout
        direction='horizontal'
        alignment='strech'
        fillContent={ true }>
      <Layout
          direction='vertical'
          alignment='middle'
          packing='center'>
        <h2><i>Library</i></h2>
        <p><b>A tool</b> to resolve just one <b>specific thing.</b></p>
      </Layout>
      <Layout
          direction='vertical'
          alignment='middle'
          packing='center'>
        <h2><i>Framework</i></h2>
        <p>A <b>set of tools</b> to resolve a <b>lot of things.</b></p>
      </Layout>
    </Layout>
  );
}
