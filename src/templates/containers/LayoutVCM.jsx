'use strict';

import React, { PropTypes } from 'react';
import Layout from './Layout';

export default function LayoutVCM(props) {
  return (
    <Layout
        direction='vertical'
        alignment='center'
        packing='middle'>
      { props.children }
    </Layout>
  );
}

LayoutVCM.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array
  ])
};
