'use strict';

import React, { PropTypes } from 'react';
import FooterSlide from 'templates/containers/FooterSlide';
import ColumnSlide from 'templates/containers/ColumnSlide';
import JSXDisplayer from 'templates/components/JSXDisplayer';
import titleCode from '!!raw!./Title.jsx';

export default function Welcome(props) {
  return (
    <FooterSlide config={ props.config }>
      <ColumnSlide title='Hello World'>
        <div>Toto</div>
        <JSXDisplayer title='Title.jsx' content={ titleCode } />
      </ColumnSlide>
    </FooterSlide>
  );
}

Welcome.propTypes = {
  config: PropTypes.object.isRequired
};
