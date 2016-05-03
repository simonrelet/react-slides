'use strict';

import React, { PropTypes } from 'react';

export default function Welcome(props) {
  return (
    <div>
      <h1>Welcome</h1>
      <p>Slide { props.config.slideIndex }</p>
      <p>Slide count { props.config.slideCount }</p>
    </div>
  );
}

Welcome.propTypes = {
  config: PropTypes.object.isRequired
};
