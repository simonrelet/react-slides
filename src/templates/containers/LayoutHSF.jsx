'use strict';

import React, { PropTypes } from 'react';
import Layout from 'templates/containers/Layout';

export default function LayoutHSF(props) {
  return (
    <Layout
        direction='horizontal'
        alignment='strech'
        fillContent={ true }>
      { props.children }
    </Layout>
  );
}

LayoutHSF.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array
  ])
};
