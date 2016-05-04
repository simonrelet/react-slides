'use strict';

import React, { PropTypes } from 'react';
import SlideFooter, { SlideFooterItem } from '../components/SlideFooter';
import style from './FooterSlide.scss';

export default function FooterSlide(props) {
  const { title, date, slideIndex, slideCount } = props.config;
  return (
    <div className={ style.slideFooter }>
      { props.children }
      <SlideFooter>
        <SlideFooterItem value={ `${slideIndex} / ${slideCount}` }/>
        <SlideFooterItem value={ title }/>
        <SlideFooterItem value={ date }/>
      </SlideFooter>
    </div>
  );
}

FooterSlide.propTypes = {
  children: PropTypes.element,
  config: PropTypes.object.isRequired
}
