'use strict';

import React, { PropTypes } from 'react';
import Layout from 'templates/containers/Layout';

export default function Slide(props) {
  return (
    <Layout
        direction='vertical'
        alignment='middle'
        packing='center'>
      { props.question ? <h1>Demo</h1> : <h1><i>Demo</i> <b>?</b></h1> }
    </Layout>
  );
}

Slide.propTypes = {
  question: PropTypes.bool.isRequired
};
