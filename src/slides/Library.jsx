'use strict';

import React from 'react';
import Layout from 'templates/containers/Layout';

export default function Slide() {
  return (
    <Layout
        direction='vertical'
        alignment='middle'
        packing='center'>
      <h1>It's a <b>library</b></h1>
      <h3>And <b>not a Framework</b>.</h3>
    </Layout>
  );
}
