'use strict';

import React, { PropTypes } from 'react';
import Slide from './Slide';

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

  render() {
    return (
      <Slide
        slide={ this.props.route.slide }
        config={ this.props.route.config }
        hasPrev={ this.hasPrevSlide() }
        hasNext={ this.hasNextSlide() }
        onPrevSlide={ this.handlePrevSlide }
        onNextSlide={ this.handleNextSlide } />
    );
  }
});
