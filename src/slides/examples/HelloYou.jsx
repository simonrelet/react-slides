import React, { PropTypes } from 'react';

export default React.createClass({
  propTypes: {
    name: PropTypes.string.isRequired
  },

  render() {
    return (
      <h1>hello { this.props.name }!</h1>
    );
  }
});
