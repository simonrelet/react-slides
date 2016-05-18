'use strict';

import React, { PropTypes } from 'react';
import style from './Slide.scss';

function ProgressBar(props) {
  return (
    <div
        className={ style.progressBar }
        style={{ width: `${props.progress}%` }} />
  );
}

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired
};

function Link(props) {
  const className = props.type === 'next' ? style.prevSlide : style.nextSlide;
  return (
    <div
        onClick={ props.onAction }
        className={ className } />
  );
}

Link.propTypes = {
  onAction: PropTypes.func.isRequired,
  type: PropTypes.oneOf([ 'next', 'prev' ])
};

function createLink(type, handleAction) {
  return <Link onAction={ handleAction } type={ type } />;
}

export default function Slide(props) {
  const {
    config,
    onKeyUp,
    hasPrev,
    onPrevSlide,
    hasNext,
    onNextSlide,
    slide
  } = props;
  const progress = 100 * (config.slideIndex + 1) / config.slideCount;
  return (
    <div
        tabIndex={ 1 }
        autoFocus={ true }
        className={ style.slide }
        onKeyDown={ onKeyUp }>
      { hasPrev && createLink('prev', onPrevSlide) }
      { hasNext && createLink('next', onNextSlide) }
      <ProgressBar progress={ progress } />
      { React.cloneElement(slide, { config: config }) }
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
};
