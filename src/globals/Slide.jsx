'use strict';

import React, { PropTypes } from 'react';

export default function Slide(props) {
  return (
    <props.route.slide
        slideIndex={ props.route.slideIndex }
        slideCount={ props.route.slideCount } />
    );
}

Slide.propTypes = {
  route: PropTypes.object.isRequired
};
