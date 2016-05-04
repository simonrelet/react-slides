# react-slides

React application for slides

## Usage

```
npm install
npm run start
```

Then open a browser at `localhost:8080`.

Click on right or left side of the pages to navigate through the slides.

## Your slides

Put your own slides under `src/slides/` and update the `config.js` accordingly.

The exported configuration must be an object with the following properties:
* `title` (`string`): The title of the slide show
* `date` (`string`): The date that should be displayed
* `slides` (`array`): The ordered array of slides

Your slides can use any templates under `src/templates/containers/` or you own
ones.

Each slide will be given a `config` attribute in it's `props` containing:
* `title` (`string`): The title from `config.js`
* `date` (`string`): The date  from `config.js`
* `slideIndex` (`number`): The current slide index (starting at 0)
* `slideCount` (`number`): The total number of slides

## TODO

* [ ] Find a way to navigate through the slides with the arrow keys.
* [ ] Uses links in summary to jump directly to the corresponding slide.
* [ ] Create more templates.
