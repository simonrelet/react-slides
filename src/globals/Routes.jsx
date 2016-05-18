'use strict';

import React from 'react';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import Main from './Main';
import SlideContainer from './SlideContainer';
import Config from 'slides/Config';

function getConfig(index, count) {
  const res = {
    slideIndex: index,
    slideCount : count
  };

  for (let prop in Config) {
    if (Config.hasOwnProperty(prop) && prop !== 'slides') {
      res[prop] = Config[prop]
    }
  }
  return res;
}

const slideCount = Config.slides.length;
const slidesRoutes = Config.slides.map((slide, index) => (
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
