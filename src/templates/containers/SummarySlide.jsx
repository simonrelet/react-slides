'use strict';

import React, { PropTypes } from 'react';
import style from './SummarySlide.css';

export function SummaryItem(props) {
  return (
    <div className={ style.summaryItem }>{ props.value }</div>
  );
}

SummaryItem.propTypes = {
  value: PropTypes.string.isRequired
};

export default function SummarySlide(props) {
  return (
    <div className={ style.summarySlide }>
      { props.children }
    </div>
  );
}

SummarySlide.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array
  ])
}
