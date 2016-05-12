'use strict';

import React from 'react';
import Layout from 'templates/containers/Layout';

export default function Slide() {
  return (
    <Layout
        direction='vertical'
        alignment='middle'
        packing='center'>
      <h2><i>Rendering loop</i></h2>
      <p>
        <ol>
          <li>Some data has <b>Changed</b></li>
          <li><b>Build new</b> virtual DOM</li>
          <li><b>Diff</b> new with old</li>
          <li>Compute <b>minimal</b> sets of <b>mutations</b></li>
          <li><b>Execute</b> all updates</li>
        </ol>
      </p>
    </Layout>
  );
}
