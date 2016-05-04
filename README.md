# react-slides

React application for slides.

## Usage

```
npm install
npm run start
```

Then open a browser at `localhost:8080`.

Click on the right or left side of the pages to navigate through the slides.

## Your slides

Put your own slides under `src/slides/` and update the `config.js` accordingly.

The exported configuration must be an object with the following properties:
* `title` (`string`): The title of the slide show
* `date` (`string`): The date that should be displayed
* `slides` (`array`): The ordered array of slides

Your slides can use any templates under `src/templates/containers/` or you own
ones.

Each slide will be provided with a `config` attribute in it's `props` containing:
* `title` (`string`): The title from `config.js`
* `date` (`string`): The date  from `config.js`
* `slideIndex` (`number`): The current slide index (starting at 0)
* `slideCount` (`number`): The total number of slides

Example:
```jsx
'use strict';

import React, { PropTypes } from 'react';
import TitleSlide from '../templates/containers/TitleSlide';

export default function Title(props) {
  return (
    <TitleSlide
      title={ props.config.title }
      subTitle='This is awesome!' />
  );
}

Title.propTypes = {
  config: PropTypes.object.isRequired
}
```

## TODO

* [ ] Find a way to navigate through the slides with the arrow keys.
* [ ] Uses links in summary to jump directly to the corresponding slide.
* [ ] Create more templates.
