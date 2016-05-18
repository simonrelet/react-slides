'use strict';

import React, { PropTypes } from 'react';
import Slide from './Slide';

const RIGHT_KEY = 39;
const LEFT_KEY = 37;

export default React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  propTypes: {
    route: PropTypes.object.isRequired
  },

  hasNextSlide() {
    const { slideIndex, slideCount } = this.props.route.config;
    return slideIndex < slideCount - 1;
  },

  hasPrevSlide() {
    const { slideIndex } = this.props.route.config;
    return slideIndex > 0;
  },

  getNextSlideIndex() {
    return this.props.route.config.slideIndex + 1;
  },

  getPrevSlideIndex() {
    return this.props.route.config.slideIndex - 1;
  },

  handleNextSlide(e) {
    if (this.hasNextSlide()) {
      e.preventDefault();
      this.context.router.push({ pathname: `/${this.getNextSlideIndex()}` });
    }
  },

  handlePrevSlide(e) {
    if (this.hasPrevSlide()) {
      e.preventDefault();
      this.context.router.push({ pathname: `/${this.getPrevSlideIndex()}` });
    }
  },

  handleKeyUp(e) {
    if (e.keyCode === RIGHT_KEY) {
      this.handleNextSlide(e);
    } else if(e.keyCode === LEFT_KEY) {
      this.handlePrevSlide(e);
    }
  },

  render() {
    const { route } = this.props;
    const { title, subtitle } = route.config;
    if (document && title) {
      document.title = `${title}${subtitle ? ` - ${subtitle}` : ''}`;
    }

    return (
      <Slide
        slide={ route.slide }
        config={ route.config }
        hasPrev={ this.hasPrevSlide() }
        hasNext={ this.hasNextSlide() }
        onKeyUp={ this.handleKeyUp }
        onPrevSlide={ this.handlePrevSlide }
        onNextSlide={ this.handleNextSlide } />
    );
  }
});
