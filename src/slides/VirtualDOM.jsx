'use strict';

import React from 'react';
import Layout from 'templates/containers/Layout';

export default function Slide() {
  return (
    <Layout
        direction='vertical'
        alignment='middle'
        packing='center'>
      <h1>The DOM is <b>virtual</b></h1>
      <h3>JavaScript is <b>fast</b>, the DOM is <b>slow</b>.</h3>
    </Layout>
  );
}
