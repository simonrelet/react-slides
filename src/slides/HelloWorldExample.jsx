'use strict';

import React, { PropTypes } from 'react';
import Layout from 'templates/containers/Layout';
import JSXDisplayer from 'templates/components/JSXDisplayer';
import HelloWorld from './examples/HelloWorld';
import helloWorldCode from '!!raw!./examples/HelloWorld';

export default React.createClass({
  getDefaultProps() {
    return { highlightLines: [] };
  },

  propTypes: {
    highlightLines: PropTypes.arrayOf(PropTypes.number)
  },

  render() {
    return (
      <Layout
          direction='vertical'
          alignment='middle'
          packing='center'>
        <HelloWorld />
        <JSXDisplayer
            title='HelloWorld.jsx'
            content={ helloWorldCode }
            highlightLines={ this.props.highlightLines } />
      </Layout>
    );
  }
});
