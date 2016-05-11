'use strict';

import React from 'react';
import Layout from 'templates/containers/Layout';

export default function Slide() {
  return (
    <Layout
        direction='vertical'
        alignment='middle'
        packing='center'>
      <h1>Let's React!</h1>
      <h2>Everthing can be a <b>component</b>.</h2>
    </Layout>
  );
}
