'use strict';

import React, { PropTypes } from 'react';
import style from './Icon.scss';

export default function Icon(props) {
  const { height, width } = props;
  const inlineStyle = {
    backgroundImage: `url(${props.src})`,
    height: `${height}px`,
    width: `${width}px`
  };
  return (
    <div
        className={ style.icon }
        style={ inlineStyle } />
  );
}

Icon.propTypes = {
  src: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired
};
