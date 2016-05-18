'use strict';

// This file should be replaced by something better...

export default function lex(line) {
  const chars = line.split('');
  const res = [];
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === ' ') {
      let spaces = '';
      do {
        spaces += ' ';
        i++;
      } while (chars[i] === ' ');
      i--;
      res.push({ name: 'spaces', val: spaces });

    } else if (/\//.test(chars[i]) && i + 1 < chars.length && /\//.test(chars[i + 1])) {
      const val = chars.slice(i).join('');
      i = chars.length - 1;
      res.push({ name: 'comment', val: val });

    } else if (/'/.test(chars[i])) {
      const val = chars.slice(i, chars.indexOf('\'', i + 1) + 1)
        .reduce((acc, current) => `${acc}${current}`, '');
      i += val.length - 1;
      res.push({ name: 'string', val: val });

    } else if (/"/.test(chars[i])) {
      const val = chars.slice(i, chars.indexOf('\"', i + 1) + 1)
        .reduce((acc, current) => `${acc}${current}`, '');
      i += val.length - 1;
      res.push({ name: 'string', val: val });

    } else if (/[a-z]/.test(chars[i])) {
      let val = '';
      do {
        val += chars[i];
        i++;
      } while (i < chars.length && /[a-zA-Z_-]/.test(chars[i]));
      i--;
      if (/import|from|const|export|default|function|return/.test(val)) {
        res.push({ name: 'keyword', val: val });
      } else if (/this/.test(val)) {
        res.push({ name: 'type', val: val });
      } else if (i + 1 < chars.length && /=|:/.test(chars[i + 1])) {
        res.push({ name: 'attribute', val: val });
      } else {
        res.push({ name: 'text', val: val });
      }

    } else if (/[A-Z]/.test(chars[i])) {
      let val = '';
      do {
        val += chars[i];
        i++;
      } while (i < chars.length && /[a-zA-Z_-]/.test(chars[i]));
      i--;
      res.push({ name: 'type', val: val });

    } else {
      let val = '';
      // do {
        val += chars[i];
      //   i++;
      // } while (i < chars.length && /[^ ']/.test(chars[i]));
      // i--;
      res.push({ name: 'text', val: val });
    }
  }
  return res;
}
