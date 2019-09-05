## Tic-tac-toe

I decided to run this game in the browser, so it utilizes JavaScript, HTML, and CSS. The project makes use of Webpack and Babel for the build process and transpiling of ES6 syntax. It uses Jest for the testing suite.

It seemed natural to build this project in the browser since it's very user centric.

## Setup

To run the game, you simply need to open the `index.html` file in this repo after cloning it. The game always starts with Player X, and can be restarted at any time by clicking the button.

## Decisions/Trade-offs

I chose not to focus on responsive design. I wanted to build out the underlying classes and tests with the time given, but would choose to make another pass to implement responsive design as a next step.

I chose to leverage CSS for some of the interaction. The CSS is therefore a little complicated in syntax. In any further development, I would move to a SASS system before adding any more complexity.

I chose not to build my own assets. In future development, I would probably create more interesting x's, o's, and game board.