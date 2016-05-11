'use strict';

import React from 'react';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import Main from './Main';
import SlideContainer from './SlideContainer';
import config from 'slides/config';

function getConfig(index, count) {
  const res = { slideIndex: index, slideCount : count }
  for (let prop in config) {
    if (config.hasOwnProperty(prop) && prop !== 'slides') {
      res[prop] = config[prop]
    }
  }
  return res;
}

const slideCount = config.slides.length;
const slidesRoutes = config.slides.map((slide, index) => (
  <Route
    path={ `${index}` }
    key={ index }
    slide={ slide }
    config= { getConfig(index, slideCount) }
    component={ SlideContainer } />
));

export default (
  <Router history={ hashHistory }>
    <Route path='/' component={ Main }>
      <IndexRedirect to='/0' />
      { slidesRoutes }
    </Route>
  </Router>
);
