'use strict';

import React, { PropTypes } from 'react';
import TitleSlide from 'templates/containers/TitleSlide';

export default function Title(props) {
  return (
    <TitleSlide
      title={ props.config.title }
      subTitle='This is awesome!' />
  );
}

Title.propTypes = {
  config: PropTypes.object.isRequired
}
