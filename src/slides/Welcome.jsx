'use strict';

import React, { PropTypes } from 'react';
import FooterSlide from '../templates/containers/FooterSlide';
import ColumnSlide from '../templates/containers/ColumnSlide';

export default function Welcome(props) {
  return (
    <FooterSlide config={ props.config }>
      <ColumnSlide title='Hello World'>
      <div>Toto</div>
      <div>tata</div>
      </ColumnSlide>
    </FooterSlide>
  );
}

Welcome.propTypes = {
  config: PropTypes.object.isRequired
};
