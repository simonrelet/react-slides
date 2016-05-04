'use strict';

import React, { PropTypes } from 'react';
import style from './TitleSlide.scss';

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
