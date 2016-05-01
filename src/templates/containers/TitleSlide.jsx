'use strict';

import style from './TitleSlide.css';
import React, { PropTypes } from 'react';

export default function TitleSlide(props) {
  return (
    <div className={ style.titleSlide }>
      <h1 className={ style.title }>{ props.title }</h1>
      { props.subTitle && <h2 className={ style.subTitle }>{ props.subTitle }</h2> }
    </div>
  );
}

TitleSlide.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string
};
