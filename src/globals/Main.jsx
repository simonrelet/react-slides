'use strict';

import React, { PropTypes } from 'react';
import style from './Main.scss';

export default function Main(props) {
  return (
    <div className= { style.main }>
      { props.children }
    </div>
  );
}

Main.propTypes = {
  children: PropTypes.element.isRequired
};
