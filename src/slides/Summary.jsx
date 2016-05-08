'use strict';

import React, { PropTypes } from 'react';
import SummarySlide, { SummaryItem } from '../templates/containers/SummarySlide';
import FooterSlide from '../templates/containers/FooterSlide';

export default function Summary(props) {
  return (
    <FooterSlide config={ props.config }>
      <SummarySlide>
        <SummaryItem value={ 'Item 1' } />
        <SummaryItem value={ 'Item 2' } />
        <SummaryItem value={ 'Item 3' } />
      </SummarySlide>
    </FooterSlide>
  );
}

Summary.propTypes = {
  config: PropTypes.object.isRequired
}
