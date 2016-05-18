'use strict';

import React, { PropTypes } from 'react';
import classnames from 'classnames';
import style from './Layout.scss';

export default React.createClass({
  propTypes: {
    direction: PropTypes.oneOf([ 'horizontal', 'vertical' ]),
    alignment: PropTypes.oneOf([ 'start', 'center', 'end', 'strech' ]),
    packing: PropTypes.oneOf([ 'first', 'middle', 'last', 'spaceAround', 'spaceBetween' ]),
    fillContent: PropTypes.bool,
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.array
    ])
  },

  getDefaultProps() {
    return {
      direction: 'horizontal',
      alignment: 'strech',
      packing: 'first',
      fillContent: false
    };
  },

  render() {
    const classNames = classnames(style.layout,
      style[this.props.direction],
      style[this.props.alignment],
      style[this.props.packing],
      { [style.fillContent]: this.props.fillContent }
    );
    return (
      <div className={ classNames }>
        { this.props.children }
      </div>
    );
  }
})
