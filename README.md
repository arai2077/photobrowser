# About app
- Requires [yarn](https://classic.yarnpkg.com/en/docs/cli/install/) or [npm](https://www.npmjs.com/) 
- To install: `yarn` or `npm i`
- To run: `yarn start` or `npm start`
- To run tests: `yarn test` or `npm test`
- To build: `yarn build` or `npm build`

A live demo of the app can be found on [Heroku](https://photobrowser-arai.herokuapp.com/). However, as the app is running Heroku's free dynamo, it will go to sleep after a period of time. Give it a moment, it should wake up soon after.

### About implementation/architecture
I chose to write the app in JavaScript rather than TypeScript. I did consider doing it in TypeScript, but I do not yet have enough experience to do it "right" and fully utilize its features. It's a process, though, and something I'm definitely interested in learning.

The app uses [MobX](https://mobx.js.org/README.html) for state management. The domain store contains an array of JSON objects, a method for fetching data asynchronously, as well as a method for retrieving a single photo based on its ID. No UI stores were used as this application is simple enough without one. Instead, functional components and hooks are utilized.

The component structure is divided into a Gallery component and separate Thumbnail and Photo components as its children. The Gallery component observes the photos in the domain store and lists their thumbnails in the gallery view. The photo details view retrieves the photo's id from url parameters and calls the domain store's `getPhotoByID` method to retrieve the photo's details based on the id.

Basic browser routing is provided by [React Router](https://reactrouter.com/).

CSS-in-JS is written using [Styled Components](https://styled-components.com/).

### About testing
Testing is in its barebones, I agree. The tests that are currently implemented only test for differences in snapshots. Tests have been written with the help of [Jest](https://jestjs.io/) and [Enzyme](https://enzymejs.github.io/enzyme/).

### About commenting and code readability
I generally try to write code that is easily readable without the need for extra commenting. I try to use as clear and descriptive variable and as simple structure as possible. I'd be happy to further explain the code in the tech interview if necessary, should you decide to proceed to the next phase.
