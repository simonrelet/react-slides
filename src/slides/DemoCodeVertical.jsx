'use strict';

import React, { PropTypes } from 'react';
import LayoutVCM from 'templates/containers/LayoutVCM';
import JSXDisplayer from 'templates/components/JSXDisplayer';

export default React.createClass({
  getDefaultProps() {
    return {
      highlightLines: [],
      keepRange: []
    };
  },

  propTypes: {
    code: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.array
    ]),
    highlightLines: PropTypes.arrayOf(PropTypes.number),
    keepRange: PropTypes.arrayOf(PropTypes.object)
  },

  render() {
    return (
      <LayoutVCM>
        { this.props.children }
        <JSXDisplayer
            title={ this.props.title }
            content={ this.props.code }
            keepRange={ this.props.keepRange }
            highlightLines={ this.props.highlightLines } />
      </LayoutVCM>
    );
  }
});
