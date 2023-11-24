# Synthesia Editor Challenge

I'll be tackling this challenge in a bottom up approach, making use of storybook I will create an initial set of components for the gallery and the editor using mocked data. I will then compose these into pages and hook them up to use data fetched from **pisum.photos**.

With these type of taks I like to pick new libraries to play with. I usually use **Chakra** for web apps and **NativeBase** for mobile apps, so to expand my horizons and because you metioned you use **materialui**, I will use it for this challenge.

My data/content visualisation has been limited to **react-table** and **highcharts** for the past years, so using **canvas** for this challenge will be very interesting.

## Approach

### Gallery 

As we want to be able to refresh and navigate back and forth in the browser we can use **react-router** and **url params** to preserve state. This has the added benefit of **shareable links**.

For a speedy experience, when we fetch and list our gallery we will ensure to use a small **preview** version of images.

As the `Link` header on the api response only tells us if we have a `next` and `prev`, I opted to just have back and forward navigation items which auto disable when you can't navigate further.

### Editor

For the editor I opted to fetch the selected image info and use a **canvas** to draw its main source image. I then added controls to be able to modify the image via canvas size and filters, perserving the selected changes in the url as **query params** via react-router to allow to easily navigate back and forth between changes, and to be able to a direct link.

The API provides endpoints to fetch images with different dimensions and greyscale and blur, but I thought having to fetch and re-render images would be much slower than the canvas.

To download the modified image I just covert the canvas to a data url and force a download via javascript.

## Structure

For simplicty, I opted to initialise a simple `create-react-app`, and divided the app into the following:

- **api/** contains the fetchers, I opted to do any data mapping within these for ease. These are just basic fetch requests.
- **components/** presentational components (with state and stateless)
- **pages/** main entry components for each route, these are the main containers and fetch any data using `react-query`
- **utils/** any helpers, currently just some canvas imaging functions

Potentially this could have been a yarn workspaces or similar, migration to which would be easy from the above structure, each component, api and util folder would become a versionable package.

## Testing

Code confidence is THE most important thing for releasing software, so it is important to cover your back from all angles! For this challenge we include:

- **unit tests** using jest and react-testing-library, run with `npm run tests`
- **visual regression component tests** using cypress and storybook, run with `npm run cy:storybook` and you can view regression snapshots in `cypress/snapshots/storybook`
- **functional and visual regression page tests** using cypress and mocking the backend of the react app capture full page snapshots and ensure main functionality works via the browser, run with `npm run cy` and you can view snapshots in `cypress/snapshots`

In a production ready setup we would also add **e2e tests** against a deployed instance and pontential some sort of **contract tests** for the api's. 

## Deployed version

Can view the built version @ (https://danielantelo.github.io/synthesia/)[https://danielantelo.github.io/synthesia/]

## What is missing that I would have liked to include

- For a speedier editor experience, the initial image could be a fetched with a width of the browser width to ensure a smaller download or alternatively a prefetch of the full size image for when you select to edit it
- Nice animated transition between gallery pages
- Proper cypress tests, I only added the storybook visual regression and started on the webapp visual/functional
- Github actions to test and deploy the app to gh-pages
