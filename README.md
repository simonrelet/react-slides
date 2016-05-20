# react-slides

React application for slides.

## Usage

```
npm run install
npm run start
```

Then open a browser at `localhost:8080`.

Click on the right or left side of the pages to navigate through the slides.

## Your slides

Put your own slides under `src/slides/` and update the `Config.jsx` accordingly.

The exported configuration must be an object with the following properties:
* `title` (`string`): The title of the slide show
* `date` (`string`): The date that should be displayed
* `slides` (`array`): The ordered array of slides

Your slides can use any templates under `src/templates/` or you own ones.

Example:
```jsx
'use strict';

import React from 'react';
import LayoutVCM from 'templates/LayoutVCM';

export default function Title() {
  return (
    <LayoutVCM>
      <h1>Title</h1>
      <h3>Subtitle</h3>
    </LayoutVCM>
  );
}
```
