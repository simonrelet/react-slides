'use strict';

import style from './Main.css';
import React, { PropTypes } from 'react';

export default function Main(props) {
  return (
    <div className= { style.main }>
      { props.children }
    </div>
  );
}

Main.propTypes = {
  children: PropTypes.object.isRequired
};
