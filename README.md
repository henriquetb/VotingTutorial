# VotingTutorial

Code based on the react/redux tutorial from http://teropa.info/blog/2015/09/10/full-stack-redux-tutorial.html

In parallel I'll create a personal step by script to set up the develoment environment from scratch.

----
#### Set up the npm project

This will create the basic ```package.json``` file.
```sh
$ npm init -y
```


Creates the babel entries in ```package.json```.
```sh
npm install --save-dev babel-core babel-cli babel-preset-es2015
```


Creates the ```mocha``` (test framework) and ```chai``` (assertion/expectation library) entries in ```package.json```.
```sh
npm install --save-dev mocha chai
```

Creates the ```imumutable``` entries in ```package.json```.
```sh
npm install --save immutable
npm install --save-dev chai-immutable
```

Add the following into the ```package.json``` file (inside the scripts object obviously).
```json
"scripts": {
  "test": "mocha --compilers js:babel-core/register --require ./test/test_helper.js  --recursive",
  "test:watch": "npm run test -- --watch"
}
```

Create the ```test/test_helper.js``` file referenced in the test script above with the following content. 
```javascript
import chai from 'chai';
import chaiImmutable from 'chai-immutable';

chai.use(chaiImmutable);
```
This will connect ```chai``` with ```immutable``` before any tests are run.

Tests will follow this basic format:
```javascript
import {expect} from 'chai';
import {List} from 'immutable';

describe('Test imumutability of ', () => {

  describe('a tree', () => {
    function addMovie(currentState, movie) {
      return currentState.update('movies', movies => movies.push(movie));
    }
  
    it('is immutable', () => {
      let state = Map({
        movies: List.of('Trainspotting', '28 Days Later')
      });
      let nextState = addMovie(state, 'Sunshine');
  
      expect(nextState).to.equal(Map({
        movies: List.of(
          'Trainspotting',
          '28 Days Later',
          'Sunshine'
        )
      }));
      
      expect(state).to.equal(Map({
        movies: List.of(
          'Trainspotting',
          '28 Days Later'
        )
      }));
    });
  });
  
});
```

