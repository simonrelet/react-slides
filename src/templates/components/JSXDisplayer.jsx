'use strict';

import React, { PropTypes } from 'react';
import lexer from 'jsx-lexer';
import style from './JSXDisplayer.scss';
import classnames from 'classnames';

function wrap(key, className, value) {
  return (
    <span
        key={ key }
        className={ className }>
      { value }
    </span>
  );
}

function parseLine(line) {
  return lexer(line).map((token, i) => {
    switch (token.name) {
      case 'spaces':
        return wrap(i, style.text, token.val.replace(/ /g, '\u00a0'));
      case 'string':
        return wrap(i, style.string, token.val);
      case 'text':
        return wrap(i, style.text, token.val);
      case 'keyword':
        return wrap(i, style.keyword, token.val);
      case 'type':
        return wrap(i, style.type, token.val);
      case 'attribute':
        return wrap(i, style.attribute, token.val);
      default:
        return wrap(i, '', token.val);
    }
  });
}

function getLineClassName(line, lines) {
  const highlight = lines.length === 0 || lines.indexOf(line) !== -1;
  return classnames({ [style.highlight]: highlight });
}

function parse(content, highlightLines = []) {
  return content.trim().split(/\r?\n/).map((line, i) => (
    <div key={ i } className={ getLineClassName(i, highlightLines) }>
      <code>
        { parseLine(line) }
        <br />
      </code>
    </div>
  ));
}

export default function JSXDisplayer(props) {
  return (
    <div className={ style.code }>
      { props.title && <p className={ style.title }>{ props.title }</p> }
      { parse(props.content, props.highlightLines) }
    </div>
  );
}

JSXDisplayer.propTypes = {
  content: PropTypes.string.isRequired,
  title: PropTypes.string,
  highlightLines: PropTypes.arrayOf(PropTypes.number)
};
