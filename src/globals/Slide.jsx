'use strict';

import React, { PropTypes } from 'react';
import style from './Slide.scss';

function ProgressBar(props) {
  return (
    <div className={ style.progressBar } style={{ width: `${props.progress}%` }} />
  );
}

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired
};

export default function Slide(props) {
  return (
    <div
        tabIndex={ 1 }
        autoFocus={ true }
        className={ style.slide }
        onKeyDown={ props.onKeyUp }>
      { props.hasPrev && <div onClick={props.onPrevSlide} className={ style.prevSlide } /> }
      { props.hasNext && <div onClick={props.onNextSlide} className={ style.nextSlide } /> }
      <ProgressBar progress={ 100 * (props.config.slideIndex + 1) / props.config.slideCount } />
      { React.cloneElement(props.slide, { config: props.config }) }
    </div>
  );
}

Slide.propTypes = {
  hasPrev: PropTypes.bool.isRequired,
  hasNext: PropTypes.bool.isRequired,
  onPrevSlide: PropTypes.func.isRequired,
  onNextSlide: PropTypes.func.isRequired,
  onKeyUp: PropTypes.func.isRequired,
  slide: PropTypes.any.isRequired,
  config: PropTypes.object.isRequired
}
