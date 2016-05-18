'use strict';

import React, { PropTypes } from 'react';
import lexer from 'jsx-lexer';
import style from './JSXDisplayer.scss';
import classnames from 'classnames';

function JSXLine(props) {
  return (
    <div className={ props.classNames }>
      <code>{ props.code }</code>
      <br />
    </div>
  );
}

JSXLine.propTypes = {
  classNames: PropTypes.string.isRequired,
  code: PropTypes.arrayOf(PropTypes.element).isRequired
};

function JSXToken(props) {
  return (
    <span className={ props.className }>
      { props.value }
    </span>
  );
}

JSXToken.propTypes = {
  className: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

function wrap(key, className, value) {
  return (
    <JSXToken
        key={ key }
        className={ className }
        value={ value } />
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
      case 'comment':
        return wrap(i, style.comment, token.val);
      default:
        return wrap(i, '', token.val);
    }
  });
}

function getLineClassName(line, lines) {
  const highlight = lines.length === 0 || lines.indexOf(line) !== -1;
  return classnames({ [style.highlight]: highlight });
}

function keepLine(keepRange) {
  return line => {
    return !keepRange.length || keepRange.some(range => {
      return line.lineIndex >= range.first && line.lineIndex <= range.last;
    });
  };
}

function last(arr) {
  return arr[arr.length - 1];
}

function regroupRanges(acc, line) {
  const prevLine = acc.length ? last(last(acc)).lineIndex : -2;
  if (prevLine === line.lineIndex - 1) {
    last(acc).push(line);
  } else {
    acc.push([ line ]);
  }
  return acc;
}

function separateRangeGroups(acc, group) {
  if (acc.length) {
    return acc.concat({
      lineIndex: group[0].lineIndex - 1,
      line: '// ...'
    }).concat(group);
  }

  return group;
}

function parse(content, highlightLines = [], keepRange = []) {
  return content.trim().split(/\r?\n/)
    .map((line, i) => ({ lineIndex: i, line: line }))
    .filter(keepLine(keepRange))
    .reduce(regroupRanges, [])
    .reduce(separateRangeGroups, [])
    .map(line => (
      <JSXLine
          key={ line.lineIndex }
          classNames={ getLineClassName(line.lineIndex, highlightLines) }
          code={ parseLine(line.line) } />
    ));
}

export default function JSXDisplayer(props) {
  return (
    <div className={ style.code }>
      { props.title && <p className={ style.title }>{ props.title }</p> }
      { parse(props.content, props.highlightLines, props.keepRange) }
    </div>
  );
}

JSXDisplayer.propTypes = {
  content: PropTypes.string.isRequired,
  title: PropTypes.string,
  highlightLines: PropTypes.arrayOf(PropTypes.number),
  keepRange: PropTypes.arrayOf(PropTypes.object)
};
