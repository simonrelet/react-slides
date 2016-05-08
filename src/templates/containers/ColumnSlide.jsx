'use strict';

import React, { PropTypes } from 'react';
import style from './ColumnSlide.scss';

function ColumnTitle(props) {
  return (
    <h1 className={ style.title }>{ props.title }</h1>
  );
}

ColumnTitle.propTypes = {
  title: PropTypes.string
};

export default function ColumnSlide(props) {
  return (
    <div className={ style.component }>
      { props.title && <ColumnTitle title={ props.title }/> }
      <div className={ style.children }>
        { props.children }
      </div>
    </div>
  );
}

ColumnSlide.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array
  ])
};
