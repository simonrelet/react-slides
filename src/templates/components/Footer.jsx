'use strict';

import React, { PropTypes } from 'react';
import style from './Footer.scss';

export default function Footer(props) {
  return (
    <div className={ style.footer }>
      { props.children }
    </div>
  );
}

Footer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array
  ])
}

export function FooterItem(props) {
  return (
    <div className={ style.footerItem }>{ props.value }</div>
  );
}

FooterItem.propTypes = {
  value: PropTypes.string.isRequired
}
