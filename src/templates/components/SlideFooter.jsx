'use strict';

import React, { PropTypes } from 'react';
import style from './SlideFooter.scss';

export default function SlideFooter(props) {
  return (
    <div className={ style.slideFooter }>
      { props.children }
    </div>
  );
}

SlideFooter.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array
  ])
}

export function SlideFooterItem(props) {
  return (
    <div className={ style.slideFooterItem }>{ props.value }</div>
  );
}

SlideFooterItem.propTypes = {
  value: PropTypes.string.isRequired
}
