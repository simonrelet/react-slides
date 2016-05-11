'use strict';

import React, { PropTypes } from 'react';
import Footer, { FooterItem } from 'templates/components/Footer';
import style from './FooterSlide.scss';

export default function FooterSlide(props) {
  const { title, date, slideIndex, slideCount } = props.config;
  return (
    <div className={ style.slideFooter }>
      { props.children }
      <Footer>
        <FooterItem value={ `${slideIndex} / ${slideCount}` }/>
        <FooterItem value={ title }/>
        <FooterItem value={ date }/>
      </Footer>
    </div>
  );
}

FooterSlide.propTypes = {
  children: PropTypes.element,
  config: PropTypes.object.isRequired
}
