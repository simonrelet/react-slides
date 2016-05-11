'use strict';

import React from 'react';
import Layout from 'templates/containers/Layout';

export default function Slide() {
  return (
    <Layout
        direction='vertical'
        alignment='middle'
        packing='center'>
      <h1><b>JSX</b></h1>
      <h3>
        A JavaScript <b>XML based</b> extension
        <br />
        that compile <b>just the template</b> part of your code.
      </h3>
    </Layout>
  );
}
