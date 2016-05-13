import React, { PropTypes } from 'react';

export default function HelloYou (props) {
  return (
    <h1>hello { props.name }!</h1>
  );
}

HelloYou.propTypes = {
  name: PropTypes.string.isRequired
};
