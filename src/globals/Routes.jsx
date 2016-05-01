'use strict';

import React from 'react';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import Main from './Main';
import Slide from './Slide';
import config from '../slides/config';

const slideCount = config.slides.length;
const slidesRoutes = config.slides.map((slide, index) => (
  <Route
    path={ `${index + 1}` }
    key={ index }
    slideIndex={ index }
    slideCount={ slideCount }
    slide={ slide }
    component={ Slide } />
));

export default (
  <Router history={ hashHistory }>
    <Route path='/' component={ Main }>
      <IndexRedirect to='/1' />
      { slidesRoutes }
    </Route>
  </Router>
);
