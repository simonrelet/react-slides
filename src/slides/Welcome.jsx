'use strict';

import React, { PropTypes } from 'react';

export default function Welcome(props) {
  return (
    <div>
      <h1>Welcome</h1>
      <p>Slide { props.slideIndex }</p>
      <p>Slide count { props.slideCount }</p>
    </div>
  );
}

Welcome.propTypes = {
  slideIndex: PropTypes.number.isRequired,
  slideCount: PropTypes.number.isRequired
};
