### Ultimate Credit Card Finder

An extendable credit card search engine.

### To Run

Clone the repo with either:

SSH:

```
git@github.com:philberryman/ultimate-credit-card.git
```

or HTTPS:

```
https://github.com/philberryman/ultimate-credit-card.git
```

Install and run using Yarn

Server

```
yarn install
yarn start
```

Client (in new terminal)

```
cd client
yarn install
yarn start
```

Starting the server also starts a build process to copy files from the client folder to /src. These files are then run through Babel to allow import/export function to be used in Node.js.

This should open a browser window with "Ultimate Cretit Card Finder"

Enter your "Employment Status" and "Annual Income".

This will take you to the cards you qualify for. This check is done client side.

After selecting a card you need to enter your personal details to sign yourself up for the card (no details are stored). Submitting this form runs a check on the server that you qualify for the card you have chosen. Running the qualification on both the client side and server side means the UI can be fast and protection exists to stop users hacking data on the front end to allow themselves to qualify.

### To Test

Run tests from client folder

`yarn test --verbose`

View coverage report
`yarn coverage`

### Warnings In Test

`Warning: An update to App inside a test was not wrapped in act(...).`

This is a known issue being dealt with by both the React team and the maintainers of React Testing Library.

React : https://github.com/facebook/react/issues/14769

React Testing Library : https://github.com/kentcdodds/react-testing-library/issues/281

As the warning does not stop tests from running and passing I've decided to ignore the warning and wait for future updates and hopefully a solution / fix.

### Technologies

- React (16.8.4) -- needed for the slightly unnecessary use of Hooks
- Formik (for forms - handles state, validation, errors)
- Styled Components
- Jest
- React Testing Library
- Pose
- Babel - to allow the qualification logic (in cards.js) to be used by both the React front end and Node.js backend (to allow the use of export / import which node does not support) -- Very interested in how this could have been done better / more easily.

### Future Improvements

- Styling is a long way from perfect.
- Better test coverage. Quite a minimal set of assertions are being made. One of the tests ended up being more e2e as wellso this should be refactored to either be a unit test or named as such as an e2e test.
- The warnings mentioned above when tests are run.It seems like these aren't a real problem and would probably not exist if Hooks weren't being used (although more investigation is probably needed here).
